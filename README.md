# Podman Node
Use REST-API of Podman with Node.js applications

## Generator

This client is built using OpenAPI generator from Podman swagger yaml file.

### Instructions

Install openapi-generator-cli and then generates the content with
```bash
$ openapi-generator-cli generate -g typescript -i https://storage.googleapis.com/libpod-master-releases/swagger-v4.1.yaml --skip-validate-spec --additional-properties=npmName=podman-node,platform=node,fileContentDataType=Buffer,useRxJS=false,supportsES6=true -o podman-node
```

## Building

To build and compile
```
npm install
npm run build
```

Fix linting errors:
```
npm run lint:fix
```

## API

There are MD files for each endpoint exposed by the REST API.

For examples [ImagesAPI.md](ImagesApi.md)


## Usage

```typescript
const socketPath = '/path/topodman-machine-default/podman.sock';
const apiPath = '/v4.1.0';

const serverConfiguration = new ServerConfiguration(`http://unix:${socketPath}:${apiPath}`, {});

const configuration = createConfiguration({
    baseServer: serverConfiguration,
});

const systemAPI = new SystemApi(configuration);
const info = await systemAPI.systemInfoLibpod();
const version = info.version;
console.log('Version is ', version?.version);



const imagesAPI = new ImagesApi(configuration);
const imageLists = await imagesAPI.imageListLibpod();
console.log('List of Images', imageLists);
```