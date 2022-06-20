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
import type { ImageBuild200Response } from '../models/ImageBuild200Response';
import type { ImageDelete200ResponseInner } from '../models/ImageDelete200ResponseInner';
import type { ImageInspect } from '../models/ImageInspect';
import type { ImageSearch200Response } from '../models/ImageSearch200Response';
import type { ImageSummary } from '../models/ImageSummary';

/**
 * no description
 */
export class ImagesCompatApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Build an image from the given Dockerfile(s)
     * Create image
     * @param contentType 
     * @param xRegistryConfig 
     * @param dockerfile Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if remote is specified and points to an external &#x60;Dockerfile&#x60;. 
     * @param t A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format. If you omit the tag the default latest value is assumed. You can provide several t parameters.
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
     * @param networkmode Sets the networking mode for the run commands during build. Supported standard values are:   * &#x60;bridge&#x60; limited to containers within a single host, port mapping required for external access   * &#x60;host&#x60; no isolation between host and containers on this network   * &#x60;none&#x60; disable all networking for this container   * container:&lt;nameOrID&gt; share networking with given container   ---All other values are assumed to be a custom network&#39;s name (As of version 1.xx) 
     * @param platform Platform format os[/arch[/variant]] (As of version 1.xx) 
     * @param target Target build stage (As of version 1.xx) 
     * @param outputs output configuration TBD (As of version 1.xx) 
     * @param inputStream A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz. 
     */
    public async imageBuild(contentType?: 'application/x-tar', xRegistryConfig?: string, dockerfile?: string, t?: string, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: boolean, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, networkmode?: string, platform?: string, target?: string, outputs?: string, inputStream?: HttpFile, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;




























        // Path Params
        const localVarPath = '/build';

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

        // Header Params
        requestContext.setHeaderParam('Content-Type', ObjectSerializer.serialize(contentType, '\'application/x-tar\'', ''));

        // Header Params
        requestContext.setHeaderParam('X-Registry-Config', ObjectSerializer.serialize(xRegistryConfig, 'string', ''));


        // Body Params
        const contentTypeBody = ObjectSerializer.getPreferredMediaType([
            'application/json',
        
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentTypeBody);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inputStream, 'HttpFile', ''),
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
     * Create an image by either pulling it from a registry or importing it.
     * Create an image
     * @param xRegistryAuth A base64-encoded auth configuration.
     * @param fromImage Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
     * @param fromSrc Source to import. The value may be a URL from which the image can be retrieved or - to read the image from the request body. This parameter may only be used when importing an image
     * @param repo Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
     * @param tag Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     * @param message Set commit message for imported image.
     * @param platform Platform in the format os[/arch[/variant]]
     * @param inputImage Image content if fromSrc parameter was used
     */
    public async imageCreate(xRegistryAuth?: string, fromImage?: string, fromSrc?: string, repo?: string, tag?: string, message?: string, platform?: string, inputImage?: HttpFile, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/images/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (fromImage !== undefined) {
            requestContext.setQueryParam('fromImage', ObjectSerializer.serialize(fromImage, 'string', ''));
        }

        // Query Params
        if (fromSrc !== undefined) {
            requestContext.setQueryParam('fromSrc', ObjectSerializer.serialize(fromSrc, 'string', ''));
        }

        // Query Params
        if (repo !== undefined) {
            requestContext.setQueryParam('repo', ObjectSerializer.serialize(repo, 'string', ''));
        }

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam('tag', ObjectSerializer.serialize(tag, 'string', ''));
        }

        // Query Params
        if (message !== undefined) {
            requestContext.setQueryParam('message', ObjectSerializer.serialize(message, 'string', ''));
        }

        // Query Params
        if (platform !== undefined) {
            requestContext.setQueryParam('platform', ObjectSerializer.serialize(platform, 'string', ''));
        }

        // Header Params
        requestContext.setHeaderParam('X-Registry-Auth', ObjectSerializer.serialize(xRegistryAuth, 'string', ''));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'text/plain',
        
            'application/octet-stream',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inputImage, 'HttpFile', ''),
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
     * Delete an image from local storage
     * Remove Image
     * @param name name or ID of image to delete
     * @param force remove the image even if used by containers or has other tags
     * @param noprune not supported. will be logged as an invalid parameter if enabled
     */
    public async imageDelete(name: string, force?: boolean, noprune?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesCompatApi', 'imageDelete', 'name');
        }




        // Path Params
        const localVarPath = '/images/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam('force', ObjectSerializer.serialize(force, 'boolean', ''));
        }

        // Query Params
        if (noprune !== undefined) {
            requestContext.setQueryParam('noprune', ObjectSerializer.serialize(noprune, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Export an image in tarball format
     * Export an image
     * @param name the name or ID of the container
     */
    public async imageGet(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesCompatApi', 'imageGet', 'name');
        }


        // Path Params
        const localVarPath = '/images/{name}/get'
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
     * Get a tarball containing all images and metadata for several image repositories
     * Export several images
     * @param names one or more image names or IDs comma separated
     */
    public async imageGetAll(names: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'names' is not null or undefined
        if (names === null || names === undefined) {
            throw new RequiredError('ImagesCompatApi', 'imageGetAll', 'names');
        }


        // Path Params
        const localVarPath = '/images/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (names !== undefined) {
            requestContext.setQueryParam('names', ObjectSerializer.serialize(names, 'string', ''));
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
    public async imageHistory(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesCompatApi', 'imageHistory', 'name');
        }


        // Path Params
        const localVarPath = '/images/{name}/history'
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
     * Return low-level information about an image.
     * Inspect an image
     * @param name the name or ID of the container
     */
    public async imageInspect(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesCompatApi', 'imageInspect', 'name');
        }


        // Path Params
        const localVarPath = '/images/{name}/json'
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
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * List Images
     * @param all Show all images. Only images from a final layer (no children) are shown by default.
     * @param filters A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) 
     * @param digests Not supported
     */
    public async imageList(all?: boolean, filters?: string, digests?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/images/json';

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

        // Query Params
        if (digests !== undefined) {
            requestContext.setQueryParam('digests', ObjectSerializer.serialize(digests, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Load a set of images and tags into a repository.
     * Import image
     * @param quiet not supported
     * @param request tarball of container image
     */
    public async imageLoad(quiet?: boolean, request?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/images/load';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (quiet !== undefined) {
            requestContext.setQueryParam('quiet', ObjectSerializer.serialize(quiet, 'boolean', ''));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'application/json',
        
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, 'string', ''),
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
     * Remove images from local storage that are not being used by a container
     * Prune unused images
     * @param filters filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only      unused *and* untagged images. When set to &#x60;false&#x60;      (or &#x60;0&#x60;), all unused images are pruned.   - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public async imagePrune(filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/images/prune';

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

    /**
     * Push an image to a container registry
     * Push Image
     * @param name Name of image to push.
     * @param tag The tag to associate with the image on the registry.
     * @param all All indicates whether to push all images related to the image list
     * @param compress use compression on image
     * @param destination destination name for the image being pushed
     * @param xRegistryAuth A base64-encoded auth configuration.
     */
    public async imagePush(name: string, tag?: string, all?: boolean, compress?: boolean, destination?: string, xRegistryAuth?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesCompatApi', 'imagePush', 'name');
        }







        // Path Params
        const localVarPath = '/images/{name}/push'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam('tag', ObjectSerializer.serialize(tag, 'string', ''));
        }

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }

        // Query Params
        if (compress !== undefined) {
            requestContext.setQueryParam('compress', ObjectSerializer.serialize(compress, 'boolean', ''));
        }

        // Query Params
        if (destination !== undefined) {
            requestContext.setQueryParam('destination', ObjectSerializer.serialize(destination, 'string', ''));
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
     * Search registries for an image
     * Search images
     * @param term term to search
     * @param limit maximum number of results
     * @param filters A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;is-automated&#x3D;(true|false)&#x60; - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least &#39;number&#39; stars. 
     * @param tlsVerify skip TLS verification for registries
     * @param listTags list the available tags in the repository
     */
    public async imageSearch(term?: string, limit?: number, filters?: string, tlsVerify?: boolean, listTags?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/images/search';

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
    public async imageTag(name: string, repo?: string, tag?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ImagesCompatApi', 'imageTag', 'name');
        }




        // Path Params
        const localVarPath = '/images/{name}/tag'
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

export class ImagesCompatApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageBuild
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageBuild(response: ResponseContext): Promise<ImageBuild200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageBuild200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageBuild200Response', '',
            ) as ImageBuild200Response;
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
            const body: ImageBuild200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageBuild200Response', '',
            ) as ImageBuild200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageCreate(response: ResponseContext): Promise<HttpFile > {
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
     * @params response Response returned by the server for a request to imageDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageDelete(response: ResponseContext): Promise<Array<ImageDelete200ResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<ImageDelete200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ImageDelete200ResponseInner>', '',
            ) as Array<ImageDelete200ResponseInner>;
            return body;
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
            const body: Array<ImageDelete200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ImageDelete200ResponseInner>', '',
            ) as Array<ImageDelete200ResponseInner>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageGet(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
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
     * @params response Response returned by the server for a request to imageGetAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageGetAll(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
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
     * @params response Response returned by the server for a request to imageHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageHistory(response: ResponseContext): Promise<HistoryResponse > {
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
     * @params response Response returned by the server for a request to imageInspect
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageInspect(response: ResponseContext): Promise<ImageInspect > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageInspect = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageInspect', '',
            ) as ImageInspect;
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
            const body: ImageInspect = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageInspect', '',
            ) as ImageInspect;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageList(response: ResponseContext): Promise<Array<ImageSummary> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<ImageSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ImageSummary>', '',
            ) as Array<ImageSummary>;
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
            const body: Array<ImageSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ImageSummary>', '',
            ) as Array<ImageSummary>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageLoad
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageLoad(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to imagePrune
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imagePrune(response: ResponseContext): Promise<Array<ImageDelete200ResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<ImageDelete200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ImageDelete200ResponseInner>', '',
            ) as Array<ImageDelete200ResponseInner>;
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
            const body: Array<ImageDelete200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ImageDelete200ResponseInner>', '',
            ) as Array<ImageDelete200ResponseInner>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imagePush
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imagePush(response: ResponseContext): Promise<HttpFile > {
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
     * @params response Response returned by the server for a request to imageSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageSearch(response: ResponseContext): Promise<ImageSearch200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ImageSearch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ImageSearch200Response', '',
            ) as ImageSearch200Response;
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
     * @params response Response returned by the server for a request to imageTag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageTag(response: ResponseContext): Promise<void > {
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
