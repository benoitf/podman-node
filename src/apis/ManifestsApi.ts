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
import type { IdResponse } from '../models/IdResponse';
import type { LibpodImagesRemoveReport } from '../models/LibpodImagesRemoveReport';
import type { ManifestAddOptions } from '../models/ManifestAddOptions';
import type { ManifestModifyOptions } from '../models/ManifestModifyOptions';
import type { ManifestModifyReport } from '../models/ManifestModifyReport';
import type { Schema2List } from '../models/Schema2List';

/**
 * no description
 */
export class ManifestsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add an image to a manifest list  Deprecated: As of 4.0.0 use ManifestModifyLibpod instead 
     * Add image
     * @param name the name or ID of the manifest
     * @param options options for creating a manifest
     */
    public async manifestAddLibpod(name: string, options?: ManifestAddOptions, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestAddLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/manifests/{name}/add'
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
            ObjectSerializer.serialize(options, 'ManifestAddOptions', ''),
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
     * Create a manifest list
     * Create
     * @param name manifest list or index name to create
     * @param images One or more names of an image or a manifest list. Repeat parameter as needed.  Support for multiple images, as of version 4.0.0 Alias of &#x60;image&#x60; is support for compatibility with &lt; 4.0.0 Response status code is 200 with &lt; 4.0.0 for compatibility 
     * @param all add all contents if given list
     * @param options options for new manifest
     */
    public async manifestCreateLibpod(name: string, images: string, all?: boolean, options?: ManifestModifyOptions, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestCreateLibpod', 'name');
        }


        // verify required parameter 'images' is not null or undefined
        if (images === null || images === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestCreateLibpod', 'images');
        }




        // Path Params
        const localVarPath = '/libpod/manifests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam('name', ObjectSerializer.serialize(name, 'string', ''));
        }

        // Query Params
        if (images !== undefined) {
            requestContext.setQueryParam('images', ObjectSerializer.serialize(images, 'string', ''));
        }

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'application/json',
        
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(options, 'ManifestModifyOptions', ''),
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
     * Delete named manifest list  As of v4.0.0 
     * Delete manifest list
     * @param name The name or ID of the  list to be deleted
     */
    public async manifestDeleteLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestDeleteLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/manifests/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Check if manifest list exists  Note: There is no contract that the manifest list will exist for a follow-on operation 
     * Exists
     * @param name the name or ID of the manifest list
     */
    public async manifestExistsLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestExistsLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/manifests/{name}/exists'
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
     * Display attributes of given manifest list
     * Inspect
     * @param name the name or ID of the manifest list
     */
    public async manifestInspectLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestInspectLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/manifests/{name}/json'
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
     * Add/Remove an image(s) to a manifest list  Note: operations are not atomic when multiple Images are provided.  As of v4.0.0 
     * Modify manifest list
     * @param name the name or ID of the manifest
     * @param options options for mutating a manifest
     * @param tlsVerify skip TLS verification for registries
     */
    public async manifestModifyLibpod(name: string, options: ManifestModifyOptions, tlsVerify?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestModifyLibpod', 'name');
        }


        // verify required parameter 'options' is not null or undefined
        if (options === null || options === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestModifyLibpod', 'options');
        }



        // Path Params
        const localVarPath = '/libpod/manifests/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (tlsVerify !== undefined) {
            requestContext.setQueryParam('tlsVerify', ObjectSerializer.serialize(tlsVerify, 'boolean', ''));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'application/json',
        
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(options, 'ManifestModifyOptions', ''),
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
     * Push a manifest list or image index to the named registry  As of v4.0.0 
     * Push manifest list to registry
     * @param name the name or ID of the manifest list
     * @param destination the registry for the manifest list
     * @param all push all images
     * @param tlsVerify skip TLS verification for registries
     */
    public async manifestPushLibpod(name: string, destination: string, all?: boolean, tlsVerify?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestPushLibpod', 'name');
        }


        // verify required parameter 'destination' is not null or undefined
        if (destination === null || destination === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestPushLibpod', 'destination');
        }




        // Path Params
        const localVarPath = '/libpod/manifests/{name}/registry/{destination}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'destination' + '}', encodeURIComponent(String(destination)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }

        // Query Params
        if (tlsVerify !== undefined) {
            requestContext.setQueryParam('tlsVerify', ObjectSerializer.serialize(tlsVerify, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Push a manifest list or image index to a registry  Deprecated: As of 4.0.0 use ManifestPushLibpod instead 
     * Push manifest to registry
     * @param name the name or ID of the manifest
     * @param destination the destination for the manifest
     * @param all push all images
     */
    public async manifestPushV3Libpod(name: string, destination: string, all?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestPushV3Libpod', 'name');
        }


        // verify required parameter 'destination' is not null or undefined
        if (destination === null || destination === undefined) {
            throw new RequiredError('ManifestsApi', 'manifestPushV3Libpod', 'destination');
        }



        // Path Params
        const localVarPath = '/libpod/manifests/{name}/push'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (destination !== undefined) {
            requestContext.setQueryParam('destination', ObjectSerializer.serialize(destination, 'string', ''));
        }

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ManifestsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manifestAddLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manifestAddLibpod(response: ResponseContext): Promise<IdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: IdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'IdResponse', '',
            ) as IdResponse;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such manifest', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(409, 'Bad parameter in request', body, response.headers);
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
            const body: IdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'IdResponse', '',
            ) as IdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manifestCreateLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manifestCreateLibpod(response: ResponseContext): Promise<IdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('201', response.httpStatusCode)) {
            const body: IdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'IdResponse', '',
            ) as IdResponse;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such image', body, response.headers);
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
            const body: IdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'IdResponse', '',
            ) as IdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manifestDeleteLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manifestDeleteLibpod(response: ResponseContext): Promise<LibpodImagesRemoveReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: LibpodImagesRemoveReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'LibpodImagesRemoveReport', '',
            ) as LibpodImagesRemoveReport;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such manifest', body, response.headers);
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
            const body: LibpodImagesRemoveReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'LibpodImagesRemoveReport', '',
            ) as LibpodImagesRemoveReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manifestExistsLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manifestExistsLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such manifest', body, response.headers);
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
     * @params response Response returned by the server for a request to manifestInspectLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manifestInspectLibpod(response: ResponseContext): Promise<Schema2List > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Schema2List = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Schema2List', '',
            ) as Schema2List;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such manifest', body, response.headers);
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
            const body: Schema2List = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Schema2List', '',
            ) as Schema2List;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manifestModifyLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manifestModifyLibpod(response: ResponseContext): Promise<ManifestModifyReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ManifestModifyReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ManifestModifyReport', '',
            ) as ManifestModifyReport;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such manifest', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: ManifestModifyReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ManifestModifyReport', '',
            ) as ManifestModifyReport;
            throw new ApiException<ManifestModifyReport>(409, 'Operation had partial success, both Images and Errors may have members', body, response.headers);
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
            const body: ManifestModifyReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ManifestModifyReport', '',
            ) as ManifestModifyReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manifestPushLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manifestPushLibpod(response: ResponseContext): Promise<IdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: IdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'IdResponse', '',
            ) as IdResponse;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such manifest', body, response.headers);
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
            const body: IdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'IdResponse', '',
            ) as IdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manifestPushV3Libpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manifestPushV3Libpod(response: ResponseContext): Promise<IdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: IdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'IdResponse', '',
            ) as IdResponse;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such manifest', body, response.headers);
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
            const body: IdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'IdResponse', '',
            ) as IdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

}
