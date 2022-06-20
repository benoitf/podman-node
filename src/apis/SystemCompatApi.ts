// TODO: better import syntax?
import {BaseAPIRequestFactory} from './baseapi';
import type {Configuration} from '../configuration';
import type {RequestContext, ResponseContext} from '../http/http';
import { HttpMethod} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import type {SecurityAuthentication} from '../auth/auth';


import type { AuthConfig } from '../models/AuthConfig';
import type { AuthReport } from '../models/AuthReport';
import type { ComponentVersion } from '../models/ComponentVersion';
import type { ErrorModel } from '../models/ErrorModel';
import type { SystemDfReport } from '../models/SystemDfReport';

/**
 * no description
 */
export class SystemCompatApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Check auth configuration
     * @param authConfig Authentication to check
     */
    public async systemAuth(authConfig?: AuthConfig, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/auth';

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
            ObjectSerializer.serialize(authConfig, 'AuthConfig', ''),
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
     * Return information about disk usage for containers, images, and volumes
     * Show disk usage
     */
    public async systemDataUsage(_options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/system/df';

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
     * Returns events filtered on query parameters
     * Get events
     * @param since start streaming events from this time
     * @param until stop streaming events later than this
     * @param filters JSON encoded map[string][]string of constraints
     */
    public async systemEvents(since?: string, until?: string, filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam('since', ObjectSerializer.serialize(since, 'string', ''));
        }

        // Query Params
        if (until !== undefined) {
            requestContext.setQueryParam('until', ObjectSerializer.serialize(until, 'string', ''));
        }

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
     * Returns information on the system and libpod configuration
     * Get info
     */
    public async systemInfo(_options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/info';

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
     * Return protocol information in response headers. `HEAD /libpod/_ping` is also supported. `/_ping` is available for compatibility with other engines. The '_ping' endpoints are not versioned. 
     * Ping service
     */
    public async systemPing(_options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/libpod/_ping';

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
     * Component Version information
     */
    public async systemVersion(_options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/version';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SystemCompatApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to systemAuth
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async systemAuth(response: ResponseContext): Promise<AuthReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: AuthReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'AuthReport', '',
            ) as AuthReport;
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
            const body: AuthReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'AuthReport', '',
            ) as AuthReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to systemDataUsage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async systemDataUsage(response: ResponseContext): Promise<SystemDfReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: SystemDfReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'SystemDfReport', '',
            ) as SystemDfReport;
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
            const body: SystemDfReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'SystemDfReport', '',
            ) as SystemDfReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to systemEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async systemEvents(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to systemInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async systemInfo(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to systemPing
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async systemPing(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'string', '',
            ) as string;
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
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'string', '',
            ) as string;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to systemVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async systemVersion(response: ResponseContext): Promise<ComponentVersion > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ComponentVersion = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ComponentVersion', '',
            ) as ComponentVersion;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ComponentVersion = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ComponentVersion', '',
            ) as ComponentVersion;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

}
