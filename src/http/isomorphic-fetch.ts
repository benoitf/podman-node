import type {HttpLibrary,  RequestContext} from './http';
import { ResponseContext} from './http';
import type { Observable } from '../rxjsStub';
import { from } from '../rxjsStub';

import * as http from 'node:http';

const httpRequest = (method: string, o: any, body: any) => new Promise<{ statusCode: number, headers: { [name: string]: string }, body: any }>((resolve, reject) => {

  const response: { statusCode: number, headers: { [name: string]: string }, body: any } = {
    headers: {},
    statusCode: 500,
    body: {},
  };

  const requestOptions = {method, ...o};


  if (method === 'POST') {
    requestOptions.headers = {
      'Content-Type': 'application/json',
    };
  }


  let data = '';
  const req = http.request(requestOptions, res=> {
    res.on('data', (chunk) => {
      try {
        JSON.parse(chunk.toString());
        // replace if valid JSON
        data = chunk.toString();
      } catch (error) {
        // else needs to concatenate
        data += chunk.toString();
      }
    });


    res.on('end', () => {
      if (res.statusCode) {
        response.statusCode = res.statusCode;
      }
      response.headers = Object.fromEntries(Object.keys(res.headers).map(key => ([key.toLowerCase(), res.headers[key] as string ])));
  
      if (method === 'POST') {
        response.headers['content-type'] = 'application/json';
      }
 
      response.body = data;
      resolve(response);
    });
    
  });
  if (body) {
    req.write(body);
  }
  

  req.end();

req.once('error', (err) => {
  reject(err);
});


});


export class IsomorphicFetchHttpLibrary implements HttpLibrary {

    public send(request: RequestContext): Observable<ResponseContext> {
        const method = request.getHttpMethod().toString();
        const body = request.getBody();

      // extract the socketPath and url path from the unix URL

      // socketPath is the first part of the url after unix: path
      // example from 'http://unix:/Users/benoitf/.local/share/containers/podman/machine/podman-machine-default/podman.sock:/v4.1.0'
      // needs to return /Users/benoitf/.local/share/containers/podman/machine/podman-machine-default/podman.sock
      const dataUrl = request.getUrl().substring('http://unix:'.length - 1).split(':');
      const socketPath = dataUrl[0];
      const path =dataUrl[1];
      const url = {
        path,
        socketPath,
      };

        const resultPromise = httpRequest(method, url, body).then(resp => {
          const headers: { [name: string]: string } = resp.headers;

          const body = {
            text: () => resp.body as Promise<string>,
            binary: () => resp.body as Promise<Buffer>,
          };
          return new ResponseContext(resp.statusCode, headers, body);
        });
        return from<Promise<ResponseContext>>(resultPromise);
    }
}
