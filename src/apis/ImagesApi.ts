// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import type {Configuration} from '../configuration';
import type {RequestContext, ResponseContext, HttpFile} from '../http/http';
import { HttpMethod} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import type {SecurityAuthentication} from '../auth/auth';


import type { ErrorModel } from '../models/ErrorModel';
import type { HistoryResponse } from '../models/HistoryResponse';
import type { ImageBuildLibpod200Response } from '../models/ImageBuildLibpod200Response';
import type { ImageData } from '../models/ImageData';
import type { ImageImportReport } from '../models/ImageImportReport';
import type { ImageLoadReport } from '../models/ImageLoadReport';
import type { ImageSearch200Response } from '../models/ImageSearch200Response';
import type { ImageTreeReport } from '../models/ImageTreeReport';
import type { LibpodImageSummary } from '../models/LibpodImageSummary';
import type { LibpodImagesPullReport } from '../models/LibpodImagesPullReport';
import type { LibpodImagesRemoveReport } from '../models/LibpodImagesRemoveReport';
import type { PruneReport } from '../models/PruneReport';

/**
 * no description
 */
export class ImagesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Build an image from the given Dockerfile(s)
     * Create image
     * @param dockerfile Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if remote is specified and points to an external &#x60;Dockerfile&#x60;. 
     * @param t A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format.  If you omit the tag the default latest value is assumed. You can provide several t parameters.
     * @param allplatforms Instead of building for a set of platforms specified using the platform option, inspect the build&#39;s base images, and build for all of the platforms that are available.  Stages that use *scratch* as a starting point can not be inspected, so at least one non-*scratch* stage must be present for detection to work usefully. 
     * @param extrahosts TBD Extra hosts to add to /etc/hosts (As of version 1.xx) 
     * @param remote A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called Dockerfile and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path inside the tarball. (As of version 1.xx) 
     * @param q Suppress verbose build output 
     * @param nocache Do not use the cache when building the image (As of version 1.xx) 
     * @param cachefrom JSON array of images used to build cache resolution (As of version 1.xx) 
     * @param pull Attempt to pull the image even if an older image exists locally (As of version 1.xx) 
     * @param rm Remove intermediate containers after a successful build (As of version 1.xx) 
     * @param forcerm Always remove intermediate containers, even upon failure (As of version 1.xx) 
     * @param memory Memory is the upper limit (in bytes) on how much memory running containers can use (As of version 1.xx) 
     * @param memswap MemorySwap limits the amount of memory and swap together (As of version 1.xx) 
     * @param cpushares CPUShares (relative weight (As of version 1.xx) 
     * @param cpusetcpus CPUSetCPUs in which to allow execution (0-3, 0,1) (As of version 1.xx) 
     * @param cpuperiod CPUPeriod limits the CPU CFS (Completely Fair Scheduler) period (As of version 1.xx) 
     * @param cpuquota CPUQuota limits the CPU CFS (Completely Fair Scheduler) quota (As of version 1.xx) 
     * @param buildargs JSON map of string pairs denoting build-time variables. For example, the build argument &#x60;Foo&#x60; with the value of &#x60;bar&#x60; would be encoded in JSON as &#x60;[\&quot;Foo\&quot;:\&quot;bar\&quot;]&#x60;.  For example, buildargs&#x3D;{\&quot;Foo\&quot;:\&quot;bar\&quot;}.  Note(s): * This should not be used to pass secrets. * The value of buildargs should be URI component encoded before being passed to the API.  (As of version 1.xx) 
     * @param shmsize ShmSize is the \&quot;size\&quot; value to use when mounting an shmfs on the container&#39;s /dev/shm directory. Default is 64MB (As of version 1.xx) 
     * @param squash Silently ignored. Squash the resulting images layers into a single layer (As of version 1.xx) 
     * @param labels JSON map of key, value pairs to set as labels on the new image (As of version 1.xx) 
     * @param layers Cache intermediate layers during build. (As of version 1.xx) 
     * @param networkmode Sets the networking mode for the run commands during build. Supported standard values are:   * &#x60;bridge&#x60; limited to containers within a single host, port mapping required for external access   * &#x60;host&#x60; no isolation between host and containers on this network   * &#x60;none&#x60; disable all networking for this container   * container:&lt;nameOrID&gt; share networking with given container   ---All other values are assumed to be a custom network&#39;s name (As of version 1.xx) 
     * @param platform Platform format os[/arch[/variant]] (As of version 1.xx) 
     * @param target Target build stage (As of version 1.xx) 
     * @param outputs output configuration TBD (As of version 1.xx) 
     * @param httpproxy Inject http proxy environment variables into container (As of version 2.0.0) 
     * @param unsetenv Unset environment variables from the final image.
     */
    public async imageBuildLibpod(dockerfile?: string, t?: string, allplatforms?: boolean, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: boolean, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, layers?: boolean, networkmode?: string, platform?: string, target?: string, outputs?: string, httpproxy?: boolean, unsetenv?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;





























        // Path Params
        const localVarPath = '/libpod/build';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (dockerfile !== undefined) {
            requestContext.setQueryParam('dockerfile', ObjectSerializer.serialize(dockerfile, 'string', ''));
        }

        // Query Params
        if (t !== undefined) {
            requestContext.setQueryParam('t', ObjectSerializer.serialize(t, 'string', ''));
        }

        // Query Params
        if (allplatforms !== undefined) {
            requestContext.setQueryParam('allplatforms', ObjectSerializer.serialize(allplatforms, 'boolean', ''));
        }

        // Query Params
        if (extrahosts !== undefined) {
            requestContext.setQueryParam('extrahosts', ObjectSerializer.serialize(extrahosts, 'string', ''));
        }

        // Query Params
        if (remote !== undefined) {
            requestContext.setQueryParam('remote', ObjectSerializer.serialize(remote, 'string', ''));
        }

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam('q', ObjectSerializer.serialize(q, 'boolean', ''));
        }

        // Query Params
        if (nocache !== undefined) {
            requestContext.setQueryParam('nocache', ObjectSerializer.serialize(nocache, 'boolean', ''));
        }

        // Query Params
        if (cachefrom !== undefined) {
            requestContext.setQueryParam('cachefrom', ObjectSerializer.serialize(cachefrom, 'string', ''));
        }

        // Query Params
        if (pull !== undefined) {
            requestContext.setQueryParam('pull', ObjectSerializer.serialize(pull, 'boolean', ''));
        }

        // Query Params
        if (rm !== undefined) {
            requestContext.setQueryParam('rm', ObjectSerializer.serialize(rm, 'boolean', ''));
        }

        // Query Params
        if (forcerm !== undefined) {
            requestContext.setQueryParam('forcerm', ObjectSerializer.serialize(forcerm, 'boolean', ''));
        }

        // Query Params
        if (memory !== undefined) {
            requestContext.setQueryParam('memory', ObjectSerializer.serialize(memory, 'number', ''));
        }

        // Query Params
        if (memswap !== undefined) {
            requestContext.setQueryParam('memswap', ObjectSerializer.serialize(memswap, 'number', ''));
        }

        // Query Params
        if (cpushares !== undefined) {
            requestContext.setQueryParam('cpushares', ObjectSerializer.serialize(cpushares, 'number', ''));
        }

        // Query Params
        if (cpusetcpus !== undefined) {
            requestContext.setQueryParam('cpusetcpus', ObjectSerializer.serialize(cpusetcpus, 'string', ''));
        }

        // Query Params
        if (cpuperiod !== undefined) {
            requestContext.setQueryParam('cpuperiod', ObjectSerializer.serialize(cpuperiod, 'number', ''));
        }

        // Query Params
        if (cpuquota !== undefined) {
            requestContext.setQueryParam('cpuquota', ObjectSerializer.serialize(cpuquota, 'number', ''));
        }

        // Query Params
        if (buildargs !== undefined) {
            requestContext.setQueryParam('buildargs', ObjectSerializer.serialize(buildargs, 'string', ''));
        }

        // Query Params
        if (shmsize !== undefined) {
            requestContext.setQueryParam('shmsize', ObjectSerializer.serialize(shmsize, 'number', ''));
        }

        // Query Params
        if (squash !== undefined) {
            requestContext.setQueryParam('squash', ObjectSerializer.serialize(squash, 'boolean', ''));
        }

        // Query Params
        if (labels !== undefined) {
            requestContext.setQueryParam('labels', ObjectSerializer.serialize(labels, 'string', ''));
        }

        // Query Params
        if (layers !== undefined) {
            requestContext.setQueryParam('layers', ObjectSerializer.serialize(layers, 'boolean', ''));
        }

        // Query Params
        if (networkmode !== undefined) {
            requestContext.setQueryParam('networkmode', ObjectSerializer.serialize(networkmode, 'string', ''));
        }

        // Query Params
        if (platform !== undefined) {
            requestContext.setQueryParam('platform', ObjectSerializer.serialize(platform, 'string', ''));
        }

        // Query Params
        if (target !== undefined) {
            requestContext.setQueryParam('target', ObjectSerializer.serialize(target, 'string', ''));
        }

        // Query Params
        if (outputs !== undefined) {
            requestContext.setQueryParam('outputs', ObjectSerializer.serialize(outputs, 'string', ''));
        }

        // Query Params
        if (httpproxy !== undefined) {
            requestContext.setQueryParam('httpproxy', ObjectSerializer.serialize(httpproxy, 'boolean', ''));
        }

        // Query Params
        if (unsetenv !== undefined) {
            requestContext.setQueryParam('unsetenv', ObjectSerializer.serialize(unsetenv, 'Array<string>', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns which files in a images's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 
     * Report on changes to images's filesystem; adds, deletes or modifications.
     * @param name the name or id of the image
     * @param parent specify a second layer which is used to compare against it instead of the parent layer
     * @param diffType select what you want to match, default is all
     */
    public async imageChangesLibpod(name: string, parent?: string, diffType?: 'all' | 'container' | 'image', _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageChangesLibpod', 'name');
        }




        // Path Params
        const localVarPath = '/libpod/images/{name}/changes'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (parent !== undefined) {
            requestContext.setQueryParam('parent', ObjectSerializer.serialize(parent, 'string', ''));
        }

        // Query Params
        if (diffType !== undefined) {
            requestContext.setQueryParam('diffType', ObjectSerializer.serialize(diffType, '\'all\' | \'container\' | \'image\'', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove one or more images from the storage.
     * Remove one or more images from the storage.
     * @param images Images IDs or names to remove.
     * @param all Remove all images.
     * @param force Force image removal (including containers using the images).
     * @param ignore Ignore if a specified image does not exist and do not throw an error.
     */
    public async imageDeleteAllLibpod(images?: Array<string>, all?: boolean, force?: boolean, ignore?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/libpod/images/remove';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (images !== undefined) {
            requestContext.setQueryParam('images', ObjectSerializer.serialize(images, 'Array<string>', ''));
        }

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam('force', ObjectSerializer.serialize(force, 'boolean', ''));
        }

        // Query Params
        if (ignore !== undefined) {
            requestContext.setQueryParam('ignore', ObjectSerializer.serialize(ignore, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove an image from the local storage.
     * Remove an image from the local storage.
     * @param name name or ID of image to remove
     * @param force remove the image even if used by containers or has other tags
     */
    public async imageDeleteLibpod(name: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageDeleteLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/images/{name}'
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
     * Check if image exists in local store
     * Image exists
     * @param name the name or ID of the container
     */
    public async imageExistsLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageExistsLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/images/{name}/exists'
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
     * Export multiple images into a single object. Only `docker-archive` is currently supported.
     * Export multiple images
     * @param format format for exported image (only docker-archive is supported)
     * @param references references to images to export
     * @param compress use compression on image
     * @param ociAcceptUncompressedLayers accept uncompressed layers when copying OCI images
     */
    public async imageExportLibpod(format?: string, references?: Array<string>, compress?: boolean, ociAcceptUncompressedLayers?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/libpod/images/export';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam('format', ObjectSerializer.serialize(format, 'string', ''));
        }

        // Query Params
        if (references !== undefined) {
            requestContext.setQueryParam('references', ObjectSerializer.serialize(references, 'Array<string>', ''));
        }

        // Query Params
        if (compress !== undefined) {
            requestContext.setQueryParam('compress', ObjectSerializer.serialize(compress, 'boolean', ''));
        }

        // Query Params
        if (ociAcceptUncompressedLayers !== undefined) {
            requestContext.setQueryParam('ociAcceptUncompressedLayers', ObjectSerializer.serialize(ociAcceptUncompressedLayers, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Export an image
     * Export an image
     * @param name the name or ID of the container
     * @param format format for exported image
     * @param compress use compression on image
     */
    public async imageGetLibpod(name: string, format?: string, compress?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageGetLibpod', 'name');
        }




        // Path Params
        const localVarPath = '/libpod/images/{name}/get'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam('format', ObjectSerializer.serialize(format, 'string', ''));
        }

        // Query Params
        if (compress !== undefined) {
            requestContext.setQueryParam('compress', ObjectSerializer.serialize(compress, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Return parent layers of an image.
     * History of an image
     * @param name the name or ID of the container
     */
    public async imageHistoryLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageHistoryLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/images/{name}/history'
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
     * Import a previously exported tarball as an image.
     * Import image
     * @param upload tarball for imported image
     * @param contentType 
     * @param changes Apply the following possible instructions to the created image: CMD | ENTRYPOINT | ENV | EXPOSE | LABEL | STOPSIGNAL | USER | VOLUME | WORKDIR.  JSON encoded string
     * @param message Set commit message for imported image
     * @param reference Optional Name[:TAG] for the image
     * @param url Load image from the specified URL
     */
    public async imageImportLibpod(upload: HttpFile, contentType?: 'application/x-tar', changes?: Array<string>, message?: string, reference?: string, url?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'upload' is not null or undefined
        if (upload === null || upload === undefined) {
            throw new RequiredError('ImagesApi', 'imageImportLibpod', 'upload');
        }







        // Path Params
        const localVarPath = '/libpod/images/import';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (changes !== undefined) {
            requestContext.setQueryParam('changes', ObjectSerializer.serialize(changes, 'Array<string>', ''));
        }

        // Query Params
        if (message !== undefined) {
            requestContext.setQueryParam('message', ObjectSerializer.serialize(message, 'string', ''));
        }

        // Query Params
        if (reference !== undefined) {
            requestContext.setQueryParam('reference', ObjectSerializer.serialize(reference, 'string', ''));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam('url', ObjectSerializer.serialize(url, 'string', ''));
        }

        // Header Params
        requestContext.setHeaderParam('Content-Type', ObjectSerializer.serialize(contentType, '\'application/x-tar\'', ''));


        // Body Params
        const contentTypeBody = ObjectSerializer.getPreferredMediaType([
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentTypeBody);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(upload, 'HttpFile', ''),
            contentTypeBody,
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Obtain low-level information about an image
     * Inspect an image
     * @param name the name or ID of the container
     */
    public async imageInspectLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageInspectLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/images/{name}/json'
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
     * Returns a list of images on the server
     * List Images
     * @param all Show all images. Only images from a final layer (no children) are shown by default.
     * @param filters A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;id&#x60;&#x3D;(&#x60;&lt;image-id&gt;&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) 
     */
    public async imageListLibpod(all?: boolean, filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/libpod/images/json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
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
     * Load an image (oci-archive or docker-archive) stream.
     * Load image
     * @param upload tarball of container image
     */
    public async imageLoadLibpod(upload: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'upload' is not null or undefined
        if (upload === null || upload === undefined) {
            throw new RequiredError('ImagesApi', 'imageLoadLibpod', 'upload');
        }


        // Path Params
        const localVarPath = '/libpod/images/load';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(upload, 'string', ''),
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
     * Remove images that are not being used by a container
     * Prune unused images
     * @param all Remove all images not in use by containers, not just dangling ones 
     * @param external Remove images even when they are used by external containers (e.g, by build containers) 
     * @param filters filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only      unused *and* untagged images. When set to &#x60;false&#x60;      (or &#x60;0&#x60;), all unused images are pruned.   - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public async imagePruneLibpod(all?: boolean, external?: boolean, filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/libpod/images/prune';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }

        // Query Params
        if (external !== undefined) {
            requestContext.setQueryParam('external', ObjectSerializer.serialize(external, 'boolean', ''));
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
     * Pull one or more images from a container registry.
     * Pull images
     * @param reference Mandatory reference to the image (e.g., quay.io/image/name:tag)
     * @param quiet silences extra stream data on pull
     * @param credentials username:password for the registry
     * @param arch Pull image for the specified architecture.
     * @param OS Pull image for the specified operating system.
     * @param variant Pull image for the specified variant.
     * @param policy Pull policy, \&quot;always\&quot; (default), \&quot;missing\&quot;, \&quot;newer\&quot;, \&quot;never\&quot;.
     * @param tlsVerify Require TLS verification.
     * @param allTags Pull all tagged images in the repository.
     * @param xRegistryAuth base-64 encoded auth config. Must include the following four values: username, password, email and server address OR simply just an identity token.
     */
    public async imagePullLibpod(reference?: string, quiet?: boolean, credentials?: string, arch?: string, OS?: string, variant?: string, policy?: string, tlsVerify?: boolean, allTags?: boolean, xRegistryAuth?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/libpod/images/pull';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (reference !== undefined) {
            requestContext.setQueryParam('reference', ObjectSerializer.serialize(reference, 'string', ''));
        }

        // Query Params
        if (quiet !== undefined) {
            requestContext.setQueryParam('quiet', ObjectSerializer.serialize(quiet, 'boolean', ''));
        }

        // Query Params
        if (credentials !== undefined) {
            requestContext.setQueryParam('credentials', ObjectSerializer.serialize(credentials, 'string', ''));
        }

        // Query Params
        if (arch !== undefined) {
            requestContext.setQueryParam('Arch', ObjectSerializer.serialize(arch, 'string', ''));
        }

        // Query Params
        if (OS !== undefined) {
            requestContext.setQueryParam('OS', ObjectSerializer.serialize(OS, 'string', ''));
        }

        // Query Params
        if (variant !== undefined) {
            requestContext.setQueryParam('Variant', ObjectSerializer.serialize(variant, 'string', ''));
        }

        // Query Params
        if (policy !== undefined) {
            requestContext.setQueryParam('policy', ObjectSerializer.serialize(policy, 'string', ''));
        }

        // Query Params
        if (tlsVerify !== undefined) {
            requestContext.setQueryParam('tlsVerify', ObjectSerializer.serialize(tlsVerify, 'boolean', ''));
        }

        // Query Params
        if (allTags !== undefined) {
            requestContext.setQueryParam('allTags', ObjectSerializer.serialize(allTags, 'boolean', ''));
        }

        // Header Params
        requestContext.setHeaderParam('X-Registry-Auth', ObjectSerializer.serialize(xRegistryAuth, 'string', ''));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Push an image to a container registry
     * Push Image
     * @param name Name of image to push.
     * @param destination Allows for pushing the image to a different destination than the image refers to.
     * @param tlsVerify Require TLS verification.
     * @param xRegistryAuth A base64-encoded auth configuration.
     */
    public async imagePushLibpod(name: string, destination?: string, tlsVerify?: boolean, xRegistryAuth?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imagePushLibpod', 'name');
        }





        // Path Params
        const localVarPath = '/libpod/images/{name}/push'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (destination !== undefined) {
            requestContext.setQueryParam('destination', ObjectSerializer.serialize(destination, 'string', ''));
        }

        // Query Params
        if (tlsVerify !== undefined) {
            requestContext.setQueryParam('tlsVerify', ObjectSerializer.serialize(tlsVerify, 'boolean', ''));
        }

        // Header Params
        requestContext.setHeaderParam('X-Registry-Auth', ObjectSerializer.serialize(xRegistryAuth, 'string', ''));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search registries for images
     * Search images
     * @param term term to search
     * @param limit maximum number of results
     * @param filters A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;is-automated&#x3D;(true|false)&#x60; - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least &#39;number&#39; stars. 
     * @param tlsVerify skip TLS verification for registries
     * @param listTags list the available tags in the repository
     */
    public async imageSearchLibpod(term?: string, limit?: number, filters?: string, tlsVerify?: boolean, listTags?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/libpod/images/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (term !== undefined) {
            requestContext.setQueryParam('term', ObjectSerializer.serialize(term, 'string', ''));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam('limit', ObjectSerializer.serialize(limit, 'number', ''));
        }

        // Query Params
        if (filters !== undefined) {
            requestContext.setQueryParam('filters', ObjectSerializer.serialize(filters, 'string', ''));
        }

        // Query Params
        if (tlsVerify !== undefined) {
            requestContext.setQueryParam('tlsVerify', ObjectSerializer.serialize(tlsVerify, 'boolean', ''));
        }

        // Query Params
        if (listTags !== undefined) {
            requestContext.setQueryParam('listTags', ObjectSerializer.serialize(listTags, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param name the name or ID of the container
     * @param repo the repository to tag in
     * @param tag the name of the new tag
     */
    public async imageTagLibpod(name: string, repo?: string, tag?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageTagLibpod', 'name');
        }




        // Path Params
        const localVarPath = '/libpod/images/{name}/tag'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (repo !== undefined) {
            requestContext.setQueryParam('repo', ObjectSerializer.serialize(repo, 'string', ''));
        }

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam('tag', ObjectSerializer.serialize(tag, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve the image tree for the provided image name or ID
     * Image tree
     * @param name the name or ID of the container
     * @param whatrequires show all child images and layers of the specified image
     */
    public async imageTreeLibpod(name: string, whatrequires?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageTreeLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/images/{name}/tree'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (whatrequires !== undefined) {
            requestContext.setQueryParam('whatrequires', ObjectSerializer.serialize(whatrequires, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Untag an image. If not repo and tag are specified, all tags are removed from the image.
     * Untag an image
     * @param name the name or ID of the container
     * @param repo the repository to untag
     * @param tag the name of the tag to untag
     */
    public async imageUntagLibpod(name: string, repo?: string, tag?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesApi', 'imageUntagLibpod', 'name');
        }




        // Path Params
        const localVarPath = '/libpod/images/{name}/untag'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (repo !== undefined) {
            requestContext.setQueryParam('repo', ObjectSerializer.serialize(repo, 'string', ''));
        }

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam('tag', ObjectSerializer.serialize(tag, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ImagesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageBuildLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageBuildLibpod(response: ResponseContext): Promise<ImageBuildLibpod200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageBuildLibpod200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageBuildLibpod200Response', '',
            ) as ImageBuildLibpod200Response;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
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
            const body: ImageBuildLibpod200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageBuildLibpod200Response', '',
            ) as ImageBuildLibpod200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageChangesLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageChangesLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
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
     * @params response Response returned by the server for a request to imageDeleteAllLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageDeleteAllLibpod(response: ResponseContext): Promise<LibpodImagesRemoveReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: LibpodImagesRemoveReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'LibpodImagesRemoveReport', '',
            ) as LibpodImagesRemoveReport;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
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
     * @params response Response returned by the server for a request to imageDeleteLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageDeleteLibpod(response: ResponseContext): Promise<LibpodImagesRemoveReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: LibpodImagesRemoveReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'LibpodImagesRemoveReport', '',
            ) as LibpodImagesRemoveReport;
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
     * @params response Response returned by the server for a request to imageExistsLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageExistsLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to imageExportLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageExportLibpod(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such image', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'HttpFile', 'binary',
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageGetLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageGetLibpod(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such image', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'HttpFile', 'binary',
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageHistoryLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageHistoryLibpod(response: ResponseContext): Promise<HistoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'HistoryResponse', '',
            ) as HistoryResponse;
            return body;
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
            const body: HistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'HistoryResponse', '',
            ) as HistoryResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageImportLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageImportLibpod(response: ResponseContext): Promise<ImageImportReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageImportReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageImportReport', '',
            ) as ImageImportReport;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
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
            const body: ImageImportReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageImportReport', '',
            ) as ImageImportReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageInspectLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageInspectLibpod(response: ResponseContext): Promise<ImageData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageData', '',
            ) as ImageData;
            return body;
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
            const body: ImageData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageData', '',
            ) as ImageData;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageListLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageListLibpod(response: ResponseContext): Promise<Array<LibpodImageSummary> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<LibpodImageSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<LibpodImageSummary>', '',
            ) as Array<LibpodImageSummary>;
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
            const body: Array<LibpodImageSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<LibpodImageSummary>', '',
            ) as Array<LibpodImageSummary>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageLoadLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageLoadLibpod(response: ResponseContext): Promise<ImageLoadReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageLoadReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageLoadReport', '',
            ) as ImageLoadReport;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
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
            const body: ImageLoadReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageLoadReport', '',
            ) as ImageLoadReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imagePruneLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imagePruneLibpod(response: ResponseContext): Promise<Array<PruneReport> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<PruneReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<PruneReport>', '',
            ) as Array<PruneReport>;
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
            const body: Array<PruneReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<PruneReport>', '',
            ) as Array<PruneReport>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imagePullLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imagePullLibpod(response: ResponseContext): Promise<LibpodImagesPullReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: LibpodImagesPullReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'LibpodImagesPullReport', '',
            ) as LibpodImagesPullReport;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
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
            const body: LibpodImagesPullReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'LibpodImagesPullReport', '',
            ) as LibpodImagesPullReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imagePushLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imagePushLibpod(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such image', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'HttpFile', 'binary',
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageSearchLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageSearchLibpod(response: ResponseContext): Promise<ImageSearch200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageSearch200Response', '',
            ) as ImageSearch200Response;
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
            const body: ImageSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageSearch200Response', '',
            ) as ImageSearch200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageTagLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageTagLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('201', response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to imageTreeLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageTreeLibpod(response: ResponseContext): Promise<ImageTreeReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageTreeReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageTreeReport', '',
            ) as ImageTreeReport;
            return body;
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
            const body: ImageTreeReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageTreeReport', '',
            ) as ImageTreeReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageUntagLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageUntagLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('201', response.httpStatusCode)) {
            return;
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'void', '',
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

}
