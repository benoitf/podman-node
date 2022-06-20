// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import type {Configuration} from '../configuration';
import type {RequestContext, ResponseContext} from '../http/http';
import { HttpMethod} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import type {SecurityAuthentication} from '../auth/auth';


import type { ErrorModel } from '../models/ErrorModel';
import type { Network } from '../models/Network';
import type { NetworkConnectOptions } from '../models/NetworkConnectOptions';
import type { NetworkCreateLibpod } from '../models/NetworkCreateLibpod';
import type { NetworkDisconnect } from '../models/NetworkDisconnect';
import type { NetworkPruneReport } from '../models/NetworkPruneReport';
import type { NetworkRmReport } from '../models/NetworkRmReport';

/**
 * no description
 */
export class NetworksApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Connect a container to a network.
     * Connect container to network
     * @param name the name of the network
     * @param create attributes for connecting a container to a network
     */
    public async networkConnectLibpod(name: string, create?: NetworkConnectOptions, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('NetworksApi', 'networkConnectLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/networks/{name}/connect'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'application/json',
        
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(create, 'NetworkConnectOptions', ''),
            contentType,
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new network configuration
     * Create network
     * @param create attributes for creating a network
     */
    public async networkCreateLibpod(create?: NetworkCreateLibpod, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/libpod/networks/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'application/json',
        
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(create, 'NetworkCreateLibpod', ''),
            contentType,
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove a CNI configured network
     * Remove a network
     * @param name the name of the network
     * @param force remove containers associated with network
     */
    public async networkDeleteLibpod(name: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('NetworksApi', 'networkDeleteLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/networks/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam('force', ObjectSerializer.serialize(force, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Disconnect a container from a network.
     * Disconnect container from network
     * @param name the name of the network
     * @param create attributes for disconnecting a container from a network
     */
    public async networkDisconnectLibpod(name: string, create?: NetworkDisconnect, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('NetworksApi', 'networkDisconnectLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/networks/{name}/disconnect'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'application/json',
        
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(create, 'NetworkDisconnect', ''),
            contentType,
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Check if network exists
     * Network exists
     * @param name the name or ID of the network
     */
    public async networkExistsLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('NetworksApi', 'networkExistsLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/networks/{name}/exists'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Display low level configuration for a CNI network.   - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string. 
     * Inspect a network
     * @param name the name of the network
     */
    public async networkInspectLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('NetworksApi', 'networkInspectLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/networks/{name}/json'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Display summary of network configurations.   - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string. 
     * List networks
     * @param filters JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the network list. Available filters:   - &#x60;name&#x3D;[name]&#x60; Matches network name (accepts regex).   - &#x60;id&#x3D;[id]&#x60; Matches for full or partial ID.   - &#x60;driver&#x3D;[driver]&#x60; Only bridge is supported.   - &#x60;label&#x3D;[key]&#x60; or &#x60;label&#x3D;[key&#x3D;value]&#x60; Matches networks based on the presence of a label alone or a label and a value.   - &#x60;until&#x3D;[timestamp]&#x60; Matches all networks that were create before the given timestamp. 
     */
    public async networkListLibpod(filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/libpod/networks/json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (filters !== undefined) {
            requestContext.setQueryParam('filters', ObjectSerializer.serialize(filters, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove CNI networks that do not have containers
     * Delete unused networks
     * @param filters Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public async networkPruneLibpod(filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/libpod/networks/prune';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (filters !== undefined) {
            requestContext.setQueryParam('filters', ObjectSerializer.serialize(filters, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class NetworksApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to networkConnectLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async networkConnectLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such network', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'void', '',
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to networkCreateLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async networkCreateLibpod(response: ResponseContext): Promise<Network > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Network = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Network', '',
            ) as Network;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(409, 'Conflict error in operation', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Network = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Network', '',
            ) as Network;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to networkDeleteLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async networkDeleteLibpod(response: ResponseContext): Promise<Array<NetworkRmReport> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<NetworkRmReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<NetworkRmReport>', '',
            ) as Array<NetworkRmReport>;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such network', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<NetworkRmReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<NetworkRmReport>', '',
            ) as Array<NetworkRmReport>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to networkDisconnectLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async networkDisconnectLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such network', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'void', '',
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to networkExistsLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async networkExistsLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such network', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'void', '',
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to networkInspectLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async networkInspectLibpod(response: ResponseContext): Promise<Network > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Network = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Network', '',
            ) as Network;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such network', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Network = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Network', '',
            ) as Network;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to networkListLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async networkListLibpod(response: ResponseContext): Promise<Array<Network> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<Network> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<Network>', '',
            ) as Array<Network>;
            return body;
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Network> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<Network>', '',
            ) as Array<Network>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to networkPruneLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async networkPruneLibpod(response: ResponseContext): Promise<Array<NetworkPruneReport> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<NetworkPruneReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<NetworkPruneReport>', '',
            ) as Array<NetworkPruneReport>;
            return body;
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<NetworkPruneReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<NetworkPruneReport>', '',
            ) as Array<NetworkPruneReport>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

}
