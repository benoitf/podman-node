// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import type {Configuration} from '../configuration';
import type {RequestContext, ResponseContext, HttpFile} from '../http/http';
import { HttpMethod} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import type {SecurityAuthentication} from '../auth/auth';


import type { Container } from '../models/Container';
import type { ContainerCreateResponse } from '../models/ContainerCreateResponse';
import type { ContainerJSON } from '../models/ContainerJSON';
import type { ContainerTopOKBody } from '../models/ContainerTopOKBody';
import type { ContainerWait200Response } from '../models/ContainerWait200Response';
import type { ContainersPruneReport } from '../models/ContainersPruneReport';
import type { CreateContainerConfig } from '../models/CreateContainerConfig';
import type { ErrorModel } from '../models/ErrorModel';

/**
 * no description
 */
export class ContainersCompatApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a tar archive of files from a container
     * Get files from a container
     * @param name container name or id
     * @param path Path to a directory in the container to extract
     */
    public async containerArchive(name: string, path: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerArchive', 'name');
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerArchive', 'path');
        }


        // Path Params
        const localVarPath = '/containers/{name}/archive'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (path !== undefined) {
            requestContext.setQueryParam('path', ObjectSerializer.serialize(path, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Copy a tar archive of files from a container
     * Copy files from a container
     * @param name container name or id
     * @param path Path to a directory in the container to extract
     * @param rename JSON encoded map[string]string to translate paths
     */
    public async containerArchiveLibpod(name: string, path: string, rename?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerArchiveLibpod', 'name');
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerArchiveLibpod', 'path');
        }



        // Path Params
        const localVarPath = '/libpod/containers/{name}/archive'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (path !== undefined) {
            requestContext.setQueryParam('path', ObjectSerializer.serialize(path, 'string', ''));
        }

        // Query Params
        if (rename !== undefined) {
            requestContext.setQueryParam('rename', ObjectSerializer.serialize(rename, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Hijacks the connection to forward the container's standard streams to the client.
     * Attach to a container
     * @param name the name or ID of the container
     * @param detachKeys keys to use for detaching from the container
     * @param logs Stream all logs from the container across the connection. Happens before streaming attach (if requested). At least one of logs or stream must be set
     * @param stream Attach to the container. If unset, and logs is set, only the container&#39;s logs will be sent. At least one of stream or logs must be set
     * @param stdout Attach to container STDOUT
     * @param stderr Attach to container STDERR
     * @param stdin Attach to container STDIN
     */
    public async containerAttach(name: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdout?: boolean, stderr?: boolean, stdin?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerAttach', 'name');
        }








        // Path Params
        const localVarPath = '/containers/{name}/attach'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (detachKeys !== undefined) {
            requestContext.setQueryParam('detachKeys', ObjectSerializer.serialize(detachKeys, 'string', ''));
        }

        // Query Params
        if (logs !== undefined) {
            requestContext.setQueryParam('logs', ObjectSerializer.serialize(logs, 'boolean', ''));
        }

        // Query Params
        if (stream !== undefined) {
            requestContext.setQueryParam('stream', ObjectSerializer.serialize(stream, 'boolean', ''));
        }

        // Query Params
        if (stdout !== undefined) {
            requestContext.setQueryParam('stdout', ObjectSerializer.serialize(stdout, 'boolean', ''));
        }

        // Query Params
        if (stderr !== undefined) {
            requestContext.setQueryParam('stderr', ObjectSerializer.serialize(stderr, 'boolean', ''));
        }

        // Query Params
        if (stdin !== undefined) {
            requestContext.setQueryParam('stdin', ObjectSerializer.serialize(stdin, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 
     * Report on changes to container's filesystem; adds, deletes or modifications.
     * @param name the name or id of the container
     * @param parent specify a second layer which is used to compare against it instead of the parent layer
     * @param diffType select what you want to match, default is all
     */
    public async containerChangesLibpod(name: string, parent?: string, diffType?: 'all' | 'container' | 'image', _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerChangesLibpod', 'name');
        }




        // Path Params
        const localVarPath = '/libpod/containers/{name}/changes'
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
     * Create a container
     * @param body Container to create
     * @param name container name
     */
    public async containerCreate(body: CreateContainerConfig, name?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerCreate', 'body');
        }



        // Path Params
        const localVarPath = '/containers/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam('name', ObjectSerializer.serialize(name, 'string', ''));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            'application/json',
        
            'application/x-tar',
        ]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, 'CreateContainerConfig', ''),
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
     * Remove a container
     * @param name the name or ID of the container
     * @param force If the container is running, kill it before removing it.
     * @param v Remove the volumes associated with the container.
     * @param link not supported
     */
    public async containerDelete(name: string, force?: boolean, v?: boolean, link?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerDelete', 'name');
        }





        // Path Params
        const localVarPath = '/containers/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam('force', ObjectSerializer.serialize(force, 'boolean', ''));
        }

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam('v', ObjectSerializer.serialize(v, 'boolean', ''));
        }

        // Query Params
        if (link !== undefined) {
            requestContext.setQueryParam('link', ObjectSerializer.serialize(link, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param name the name or ID of the container
     */
    public async containerExport(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerExport', 'name');
        }


        // Path Params
        const localVarPath = '/containers/{name}/export'
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
     * Return low-level information about a container.
     * Inspect container
     * @param name the name or id of the container
     * @param size include the size of the container
     */
    public async containerInspect(name: string, size?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerInspect', 'name');
        }



        // Path Params
        const localVarPath = '/containers/{name}/json'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam('size', ObjectSerializer.serialize(size, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Signal to send to the container as an integer or string (e.g. SIGINT)
     * Kill container
     * @param name the name or ID of the container
     * @param all Send kill signal to all containers
     * @param signal signal to be sent to container
     */
    public async containerKill(name: string, all?: boolean, signal?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerKill', 'name');
        }




        // Path Params
        const localVarPath = '/containers/{name}/kill'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }

        // Query Params
        if (signal !== undefined) {
            requestContext.setQueryParam('signal', ObjectSerializer.serialize(signal, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of containers
     * List containers
     * @param all Return all containers. By default, only running containers are shown
     * @param external Return containers in storage not controlled by Podman
     * @param limit Return this number of most recently created containers, including non-running ones.
     * @param size Return the size of container as fields SizeRw and SizeRootFs.
     * @param filters Returns a list of containers.  - ancestor&#x3D;(&lt;image-name&gt;[:&lt;tag&gt;], &lt;image id&gt;, or &lt;image@digest&gt;)  - before&#x3D;(&lt;container id&gt; or &lt;container name&gt;)  - expose&#x3D;(&lt;port&gt;[/&lt;proto&gt;]|&lt;startport-endport&gt;/[&lt;proto&gt;])  - exited&#x3D;&lt;int&gt; containers with exit code of &lt;int&gt;  - health&#x3D;(starting|healthy|unhealthy|none)  - id&#x3D;&lt;ID&gt; a container&#39;s ID  - is-task&#x3D;(true|false)  - label&#x3D;key or label&#x3D;\&quot;key&#x3D;value\&quot; of a container label  - name&#x3D;&lt;name&gt; a container&#39;s name  - network&#x3D;(&lt;network id&gt; or &lt;network name&gt;)  - publish&#x3D;(&lt;port&gt;[/&lt;proto&gt;]|&lt;startport-endport&gt;/[&lt;proto&gt;])  - since&#x3D;(&lt;container id&gt; or &lt;container name&gt;)  - status&#x3D;(created|restarting|running|removing|paused|exited|dead)  - volume&#x3D;(&lt;volume name&gt; or &lt;mount point destination&gt;) 
     */
    public async containerList(all?: boolean, external?: boolean, limit?: number, size?: boolean, filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/containers/json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
        if (limit !== undefined) {
            requestContext.setQueryParam('limit', ObjectSerializer.serialize(limit, 'number', ''));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam('size', ObjectSerializer.serialize(size, 'boolean', ''));
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
     * Get stdout and stderr logs from a container.
     * Get container logs
     * @param name the name or ID of the container
     * @param follow Keep connection after returning logs.
     * @param stdout Return logs from stdout
     * @param stderr Return logs from stderr
     * @param since Only return logs since this time, as a UNIX timestamp
     * @param until Only return logs before this time, as a UNIX timestamp
     * @param timestamps Add timestamps to every log line
     * @param tail Only return this number of log lines from the end of the logs
     */
    public async containerLogs(name: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: string, until?: string, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerLogs', 'name');
        }









        // Path Params
        const localVarPath = '/containers/{name}/logs'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (follow !== undefined) {
            requestContext.setQueryParam('follow', ObjectSerializer.serialize(follow, 'boolean', ''));
        }

        // Query Params
        if (stdout !== undefined) {
            requestContext.setQueryParam('stdout', ObjectSerializer.serialize(stdout, 'boolean', ''));
        }

        // Query Params
        if (stderr !== undefined) {
            requestContext.setQueryParam('stderr', ObjectSerializer.serialize(stderr, 'boolean', ''));
        }

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam('since', ObjectSerializer.serialize(since, 'string', ''));
        }

        // Query Params
        if (until !== undefined) {
            requestContext.setQueryParam('until', ObjectSerializer.serialize(until, 'string', ''));
        }

        // Query Params
        if (timestamps !== undefined) {
            requestContext.setQueryParam('timestamps', ObjectSerializer.serialize(timestamps, 'boolean', ''));
        }

        // Query Params
        if (tail !== undefined) {
            requestContext.setQueryParam('tail', ObjectSerializer.serialize(tail, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use the cgroups freezer to suspend all processes in a container.
     * Pause container
     * @param name the name or ID of the container
     */
    public async containerPause(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerPause', 'name');
        }


        // Path Params
        const localVarPath = '/containers/{name}/pause'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove containers not in use
     * Delete stopped containers
     * @param filters Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public async containerPrune(filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/containers/prune';

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
     * Change the name of an existing container.
     * Rename an existing container
     * @param name Full or partial ID or full name of the container to rename
     * @param name2 New name for the container
     */
    public async containerRename(name: string, name2: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerRename', 'name');
        }


        // verify required parameter 'name2' is not null or undefined
        if (name2 === null || name2 === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerRename', 'name2');
        }


        // Path Params
        const localVarPath = '/containers/{name}/rename'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (name2 !== undefined) {
            requestContext.setQueryParam('name', ObjectSerializer.serialize(name2, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Resize the terminal attached to a container (for use with Attach).
     * Resize a container's TTY
     * @param name the name or ID of the container
     * @param h Height to set for the terminal, in characters
     * @param w Width to set for the terminal, in characters
     * @param running Ignore containers not running errors
     */
    public async containerResize(name: string, h?: number, w?: number, running?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerResize', 'name');
        }





        // Path Params
        const localVarPath = '/containers/{name}/resize'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (h !== undefined) {
            requestContext.setQueryParam('h', ObjectSerializer.serialize(h, 'number', ''));
        }

        // Query Params
        if (w !== undefined) {
            requestContext.setQueryParam('w', ObjectSerializer.serialize(w, 'number', ''));
        }

        // Query Params
        if (running !== undefined) {
            requestContext.setQueryParam('running', ObjectSerializer.serialize(running, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Restart container
     * @param name the name or ID of the container
     * @param t timeout before sending kill signal to container
     */
    public async containerRestart(name: string, t?: number, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerRestart', 'name');
        }



        // Path Params
        const localVarPath = '/containers/{name}/restart'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (t !== undefined) {
            requestContext.setQueryParam('t', ObjectSerializer.serialize(t, 'number', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Start a container
     * @param name the name or ID of the container
     * @param detachKeys Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-&lt;value&gt; where &lt;value&gt; is one of: a-z, @, ^, [, , or _.
     */
    public async containerStart(name: string, detachKeys?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerStart', 'name');
        }



        // Path Params
        const localVarPath = '/containers/{name}/start'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (detachKeys !== undefined) {
            requestContext.setQueryParam('detachKeys', ObjectSerializer.serialize(detachKeys, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This returns a live stream of a container’s resource usage statistics.
     * Get stats for a container
     * @param name the name or ID of the container
     * @param stream Stream the output
     * @param oneShot Provide a one-shot response in which preCPU stats are blank, resulting in a single cycle return.
     */
    public async containerStats(name: string, stream?: boolean, oneShot?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerStats', 'name');
        }




        // Path Params
        const localVarPath = '/containers/{name}/stats'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (stream !== undefined) {
            requestContext.setQueryParam('stream', ObjectSerializer.serialize(stream, 'boolean', ''));
        }

        // Query Params
        if (oneShot !== undefined) {
            requestContext.setQueryParam('one-shot', ObjectSerializer.serialize(oneShot, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop a container
     * Stop a container
     * @param name the name or ID of the container
     * @param t number of seconds to wait before killing container
     */
    public async containerStop(name: string, t?: number, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerStop', 'name');
        }



        // Path Params
        const localVarPath = '/containers/{name}/stop'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (t !== undefined) {
            requestContext.setQueryParam('t', ObjectSerializer.serialize(t, 'number', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List processes running inside a container
     * @param name the name or ID of the container
     * @param psArgs arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used.
     */
    public async containerTop(name: string, psArgs?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerTop', 'name');
        }



        // Path Params
        const localVarPath = '/containers/{name}/top'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (psArgs !== undefined) {
            requestContext.setQueryParam('ps_args', ObjectSerializer.serialize(psArgs, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Resume a paused container
     * Unpause container
     * @param name the name or ID of the container
     */
    public async containerUnpause(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerUnpause', 'name');
        }


        // Path Params
        const localVarPath = '/containers/{name}/unpause'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Block until a container stops or given condition is met.
     * Wait on a container
     * @param name the name or ID of the container
     * @param condition wait until container is to a given condition. default is stopped. valid conditions are:   - configured   - created   - exited   - paused   - running   - stopped 
     * @param interval Time Interval to wait before polling for completion.
     */
    public async containerWait(name: string, condition?: string, interval?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'containerWait', 'name');
        }




        // Path Params
        const localVarPath = '/containers/{name}/wait'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (condition !== undefined) {
            requestContext.setQueryParam('condition', ObjectSerializer.serialize(condition, 'string', ''));
        }

        // Query Params
        if (interval !== undefined) {
            requestContext.setQueryParam('interval', ObjectSerializer.serialize(interval, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new image from a container
     * New Image
     * @param container the name or ID of a container
     * @param repo the repository name for the created image
     * @param tag tag name for the created image
     * @param comment commit message
     * @param author author of the image
     * @param pause pause the container before committing it
     * @param changes instructions to apply while committing in Dockerfile format
     * @param squash squash newly built layers into a single new layer
     */
    public async imageCommit(container?: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: string, squash?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/commit';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (container !== undefined) {
            requestContext.setQueryParam('container', ObjectSerializer.serialize(container, 'string', ''));
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
        if (comment !== undefined) {
            requestContext.setQueryParam('comment', ObjectSerializer.serialize(comment, 'string', ''));
        }

        // Query Params
        if (author !== undefined) {
            requestContext.setQueryParam('author', ObjectSerializer.serialize(author, 'string', ''));
        }

        // Query Params
        if (pause !== undefined) {
            requestContext.setQueryParam('pause', ObjectSerializer.serialize(pause, 'boolean', ''));
        }

        // Query Params
        if (changes !== undefined) {
            requestContext.setQueryParam('changes', ObjectSerializer.serialize(changes, 'string', ''));
        }

        // Query Params
        if (squash !== undefined) {
            requestContext.setQueryParam('squash', ObjectSerializer.serialize(squash, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Put a tar archive of files into a container
     * Put files into a container
     * @param name container name or id
     * @param path Path to a directory in the container to extract
     * @param noOverwriteDirNonDir if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa (1 or true)
     * @param copyUIDGID copy UID/GID maps to the dest file or di (1 or true)
     * @param request tarfile of files to copy into the container
     */
    public async putContainerArchive(name: string, path: string, noOverwriteDirNonDir?: string, copyUIDGID?: string, request?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersCompatApi', 'putContainerArchive', 'name');
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('ContainersCompatApi', 'putContainerArchive', 'path');
        }





        // Path Params
        const localVarPath = '/containers/{name}/archive'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (path !== undefined) {
            requestContext.setQueryParam('path', ObjectSerializer.serialize(path, 'string', ''));
        }

        // Query Params
        if (noOverwriteDirNonDir !== undefined) {
            requestContext.setQueryParam('noOverwriteDirNonDir', ObjectSerializer.serialize(noOverwriteDirNonDir, 'string', ''));
        }

        // Query Params
        if (copyUIDGID !== undefined) {
            requestContext.setQueryParam('copyUIDGID', ObjectSerializer.serialize(copyUIDGID, 'string', ''));
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

}

export class ContainersCompatApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerArchive(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
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
     * @params response Response returned by the server for a request to containerArchiveLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerArchiveLibpod(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'binary',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
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
     * @params response Response returned by the server for a request to containerAttach
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerAttach(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('101', response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, 'No error, connection has been hijacked for transporting streams.', undefined, response.headers);
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
            return;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerChangesLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerChangesLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerCreate(response: ResponseContext): Promise<ContainerCreateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('201', response.httpStatusCode)) {
            const body: ContainerCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerCreateResponse', '',
            ) as ContainerCreateResponse;
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
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
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
            const body: ContainerCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerCreateResponse', '',
            ) as ContainerCreateResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerDelete(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
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
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
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
     * @params response Response returned by the server for a request to containerExport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerExport(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerInspect
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerInspect(response: ResponseContext): Promise<ContainerJSON > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ContainerJSON = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerJSON', '',
            ) as ContainerJSON;
            return body;
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
            const body: ContainerJSON = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerJSON', '',
            ) as ContainerJSON;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerKill
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerKill(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
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
     * @params response Response returned by the server for a request to containerList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerList(response: ResponseContext): Promise<Array<Container> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<Container> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<Container>', '',
            ) as Array<Container>;
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
            const body: Array<Container> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<Container>', '',
            ) as Array<Container>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerLogs(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerPause
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerPause(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to containerPrune
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerPrune(response: ResponseContext): Promise<Array<ContainersPruneReport> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<ContainersPruneReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ContainersPruneReport>', '',
            ) as Array<ContainersPruneReport>;
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
            const body: Array<ContainersPruneReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ContainersPruneReport>', '',
            ) as Array<ContainersPruneReport>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerRename
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerRename(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
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
     * @params response Response returned by the server for a request to containerResize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerResize(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'any', '',
            ) as any;
            return body;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'any', '',
            ) as any;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerRestart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerRestart(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to containerStart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerStart(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('304', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(304, 'Container already started', body, response.headers);
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
     * @params response Response returned by the server for a request to containerStats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerStats(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'any', '',
            ) as any;
            return body;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'any', '',
            ) as any;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerStop
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerStop(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('304', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(304, 'Container already stopped', body, response.headers);
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
     * @params response Response returned by the server for a request to containerTop
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerTop(response: ResponseContext): Promise<ContainerTopOKBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ContainerTopOKBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerTopOKBody', '',
            ) as ContainerTopOKBody;
            return body;
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
            const body: ContainerTopOKBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerTopOKBody', '',
            ) as ContainerTopOKBody;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerUnpause
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerUnpause(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to containerWait
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerWait(response: ResponseContext): Promise<ContainerWait200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ContainerWait200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerWait200Response', '',
            ) as ContainerWait200Response;
            return body;
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
            const body: ContainerWait200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerWait200Response', '',
            ) as ContainerWait200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageCommit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageCommit(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('201', response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to putContainerArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putContainerArchive(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('400', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(400, 'Bad parameter in request', body, response.headers);
        }
        if (isCodeInRange('403', response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, 'the container rootfs is read-only', undefined, response.headers);
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

}
