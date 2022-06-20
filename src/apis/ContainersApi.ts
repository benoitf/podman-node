// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import type {Configuration} from '../configuration';
import type {RequestContext, ResponseContext, HttpFile} from '../http/http';
import { HttpMethod} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import type {SecurityAuthentication} from '../auth/auth';


import type { ContainerCreateResponse } from '../models/ContainerCreateResponse';
import type { ContainerStats } from '../models/ContainerStats';
import type { ContainerTopOKBody } from '../models/ContainerTopOKBody';
import type { ContainersPruneReportLibpod } from '../models/ContainersPruneReportLibpod';
import type { ErrorModel } from '../models/ErrorModel';
import type { HealthCheckResults } from '../models/HealthCheckResults';
import type { InspectContainerData } from '../models/InspectContainerData';
import type { LibpodContainersRmReport } from '../models/LibpodContainersRmReport';
import type { ListContainer } from '../models/ListContainer';
import type { PlayKubeReport } from '../models/PlayKubeReport';
import type { SpecGenerator } from '../models/SpecGenerator';

/**
 * no description
 */
export class ContainersApiRequestFactory extends BaseAPIRequestFactory {

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
    public async containerAttachLibpod(name: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdout?: boolean, stderr?: boolean, stdin?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerAttachLibpod', 'name');
        }








        // Path Params
        const localVarPath = '/libpod/containers/{name}/attach'
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
            throw new RequiredError('ContainersApi', 'containerChangesLibpod', 'name');
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
     * Checkpoint a container
     * @param name the name or ID of the container
     * @param keep keep all temporary checkpoint files
     * @param leaveRunning leave the container running after writing checkpoint to disk
     * @param tcpEstablished checkpoint a container with established TCP connections
     * @param _export export the checkpoint image to a tar.gz
     * @param ignoreRootFS do not include root file-system changes when exporting
     * @param printStats add checkpoint statistics to the returned CheckpointReport
     */
    public async containerCheckpointLibpod(name: string, keep?: boolean, leaveRunning?: boolean, tcpEstablished?: boolean, _export?: boolean, ignoreRootFS?: boolean, printStats?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerCheckpointLibpod', 'name');
        }








        // Path Params
        const localVarPath = '/libpod/containers/{name}/checkpoint'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (keep !== undefined) {
            requestContext.setQueryParam('keep', ObjectSerializer.serialize(keep, 'boolean', ''));
        }

        // Query Params
        if (leaveRunning !== undefined) {
            requestContext.setQueryParam('leaveRunning', ObjectSerializer.serialize(leaveRunning, 'boolean', ''));
        }

        // Query Params
        if (tcpEstablished !== undefined) {
            requestContext.setQueryParam('tcpEstablished', ObjectSerializer.serialize(tcpEstablished, 'boolean', ''));
        }

        // Query Params
        if (_export !== undefined) {
            requestContext.setQueryParam('export', ObjectSerializer.serialize(_export, 'boolean', ''));
        }

        // Query Params
        if (ignoreRootFS !== undefined) {
            requestContext.setQueryParam('ignoreRootFS', ObjectSerializer.serialize(ignoreRootFS, 'boolean', ''));
        }

        // Query Params
        if (printStats !== undefined) {
            requestContext.setQueryParam('printStats', ObjectSerializer.serialize(printStats, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a container
     * @param create attributes for creating a container
     */
    public async containerCreateLibpod(create?: SpecGenerator, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/libpod/containers/create';

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
            ObjectSerializer.serialize(create, 'SpecGenerator', ''),
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
     * Delete container
     * Delete container
     * @param name the name or ID of the container
     * @param depend additionally remove containers that depend on the container to be removed
     * @param force force stop container if running
     * @param ignore ignore errors when the container to be removed does not existxo
     * @param timeout number of seconds to wait before killing container when force removing
     * @param v delete volumes
     */
    public async containerDeleteLibpod(name: string, depend?: boolean, force?: boolean, ignore?: boolean, timeout?: number, v?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerDeleteLibpod', 'name');
        }







        // Path Params
        const localVarPath = '/libpod/containers/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (depend !== undefined) {
            requestContext.setQueryParam('depend', ObjectSerializer.serialize(depend, 'boolean', ''));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam('force', ObjectSerializer.serialize(force, 'boolean', ''));
        }

        // Query Params
        if (ignore !== undefined) {
            requestContext.setQueryParam('ignore', ObjectSerializer.serialize(ignore, 'boolean', ''));
        }

        // Query Params
        if (timeout !== undefined) {
            requestContext.setQueryParam('timeout', ObjectSerializer.serialize(timeout, 'number', ''));
        }

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam('v', ObjectSerializer.serialize(v, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Quick way to determine if a container exists by name or ID
     * Check if container exists
     * @param name the name or ID of the container
     */
    public async containerExistsLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerExistsLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/exists'
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
     * Export the contents of a container as a tarball.
     * Export a container
     * @param name the name or ID of the container
     */
    public async containerExportLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerExportLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/export'
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
     * Execute the defined healthcheck and return information about the results
     * Run a container's healthcheck
     * @param name the name or ID of the container
     */
    public async containerHealthcheckLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerHealthcheckLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/healthcheck'
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
     * Performs all tasks necessary for initializing the container but does not start the container.
     * Initialize a container
     * @param name the name or ID of the container
     */
    public async containerInitLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerInitLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/init'
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
     * Return low-level information about a container.
     * Inspect container
     * @param name the name or ID of the container
     * @param size display filesystem usage
     */
    public async containerInspectLibpod(name: string, size?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerInspectLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/containers/{name}/json'
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
     * send a signal to a container, defaults to killing the container
     * Kill container
     * @param name the name or ID of the container
     * @param signal signal to be sent to container, either by integer or SIG_ name
     */
    public async containerKillLibpod(name: string, signal?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerKillLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/containers/{name}/kill'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

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
     * @param limit Return this number of most recently created containers, including non-running ones.
     * @param pod Ignored. Previously included details on pod name and ID that are currently included by default.
     * @param size Return the size of container as fields SizeRw and SizeRootFs.
     * @param sync Sync container state with OCI runtime
     * @param filters A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the containers list. Available filters: - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60; or &#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;, &#x60;healthy&#x60;, &#x60;unhealthy&#x60; or &#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container&#39;s ID - &#x60;is-task&#x60;&#x3D;(&#x60;true&#x60; or &#x60;false&#x60;) - &#x60;label&#x60;&#x3D;(&#x60;key&#x60; or &#x60;\&quot;key&#x3D;value\&quot;&#x60;) of an container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;pod&#x60;&#x3D;(&#x60;&lt;pod id&gt;&#x60; or &#x60;&lt;pod name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60; or &#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x60;&#x3D;(&#x60;created&#x60;, &#x60;restarting&#x60;, &#x60;running&#x60;, &#x60;removing&#x60;, &#x60;paused&#x60;, &#x60;exited&#x60; or &#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;) 
     */
    public async containerListLibpod(all?: boolean, limit?: number, pod?: boolean, size?: boolean, sync?: boolean, filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/libpod/containers/json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam('limit', ObjectSerializer.serialize(limit, 'number', ''));
        }

        // Query Params
        if (pod !== undefined) {
            requestContext.setQueryParam('pod', ObjectSerializer.serialize(pod, 'boolean', ''));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam('size', ObjectSerializer.serialize(size, 'boolean', ''));
        }

        // Query Params
        if (sync !== undefined) {
            requestContext.setQueryParam('sync', ObjectSerializer.serialize(sync, 'boolean', ''));
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
    public async containerLogsLibpod(name: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: string, until?: string, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerLogsLibpod', 'name');
        }









        // Path Params
        const localVarPath = '/libpod/containers/{name}/logs'
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
     * Mount a container to the filesystem
     * Mount a container
     * @param name the name or ID of the container
     */
    public async containerMountLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerMountLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/mount'
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
     * Use the cgroups freezer to suspend all processes in a container.
     * Pause a container
     * @param name the name or ID of the container
     */
    public async containerPauseLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerPauseLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/pause'
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
    public async containerPruneLibpod(filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/libpod/containers/prune';

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
    public async containerRenameLibpod(name: string, name2: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerRenameLibpod', 'name');
        }


        // verify required parameter 'name2' is not null or undefined
        if (name2 === null || name2 === undefined) {
            throw new RequiredError('ContainersApi', 'containerRenameLibpod', 'name2');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/rename'
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
     */
    public async containerResizeLibpod(name: string, h?: number, w?: number, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerResizeLibpod', 'name');
        }




        // Path Params
        const localVarPath = '/libpod/containers/{name}/resize'
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Restart a container
     * @param name the name or ID of the container
     * @param t number of seconds to wait before killing container
     */
    public async containerRestartLibpod(name: string, t?: number, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerRestartLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/containers/{name}/restart'
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
     * Restore a container from a checkpoint.
     * Restore a container
     * @param name the name or id of the container
     * @param name2 the name of the container when restored from a tar. can only be used with import
     * @param keep keep all temporary checkpoint files
     * @param leaveRunning leave the container running after writing checkpoint to disk
     * @param tcpEstablished checkpoint a container with established TCP connections
     * @param _import import the restore from a checkpoint tar.gz
     * @param ignoreRootFS do not include root file-system changes when exporting
     * @param ignoreStaticIP ignore IP address if set statically
     * @param ignoreStaticMAC ignore MAC address if set statically
     * @param printStats add restore statistics to the returned RestoreReport
     */
    public async containerRestoreLibpod(name: string, name2?: string, keep?: boolean, leaveRunning?: boolean, tcpEstablished?: boolean, _import?: boolean, ignoreRootFS?: boolean, ignoreStaticIP?: boolean, ignoreStaticMAC?: boolean, printStats?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerRestoreLibpod', 'name');
        }











        // Path Params
        const localVarPath = '/libpod/containers/{name}/restore'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (name2 !== undefined) {
            requestContext.setQueryParam('name', ObjectSerializer.serialize(name2, 'string', ''));
        }

        // Query Params
        if (keep !== undefined) {
            requestContext.setQueryParam('keep', ObjectSerializer.serialize(keep, 'boolean', ''));
        }

        // Query Params
        if (leaveRunning !== undefined) {
            requestContext.setQueryParam('leaveRunning', ObjectSerializer.serialize(leaveRunning, 'boolean', ''));
        }

        // Query Params
        if (tcpEstablished !== undefined) {
            requestContext.setQueryParam('tcpEstablished', ObjectSerializer.serialize(tcpEstablished, 'boolean', ''));
        }

        // Query Params
        if (_import !== undefined) {
            requestContext.setQueryParam('import', ObjectSerializer.serialize(_import, 'boolean', ''));
        }

        // Query Params
        if (ignoreRootFS !== undefined) {
            requestContext.setQueryParam('ignoreRootFS', ObjectSerializer.serialize(ignoreRootFS, 'boolean', ''));
        }

        // Query Params
        if (ignoreStaticIP !== undefined) {
            requestContext.setQueryParam('ignoreStaticIP', ObjectSerializer.serialize(ignoreStaticIP, 'boolean', ''));
        }

        // Query Params
        if (ignoreStaticMAC !== undefined) {
            requestContext.setQueryParam('ignoreStaticMAC', ObjectSerializer.serialize(ignoreStaticMAC, 'boolean', ''));
        }

        // Query Params
        if (printStats !== undefined) {
            requestContext.setQueryParam('printStats', ObjectSerializer.serialize(printStats, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all mounted containers mount points
     * Show mounted containers
     */
    public async containerShowMountedLibpod(_options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/libpod/containers/showmounted';

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
     * Start a container
     * @param name the name or ID of the container
     * @param detachKeys Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-&lt;value&gt; where &lt;value&gt; is one of: a-z, @, ^, [, , or _.
     */
    public async containerStartLibpod(name: string, detachKeys?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerStartLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/containers/{name}/start'
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
     * DEPRECATED. This endpoint will be removed with the next major release. Please use /libpod/containers/stats instead.
     * Get stats for a container
     * @param name the name or ID of the container
     * @param stream Stream the output
     */
    public async containerStatsLibpod(name: string, stream?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerStatsLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/containers/{name}/stats'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (stream !== undefined) {
            requestContext.setQueryParam('stream', ObjectSerializer.serialize(stream, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop a container
     * @param name the name or ID of the container
     * @param all Stop all containers
     * @param timeout number of seconds to wait before killing container
     * @param ignore do not return error if container is already stopped
     */
    public async containerStopLibpod(name: string, all?: boolean, timeout?: number, ignore?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerStopLibpod', 'name');
        }





        // Path Params
        const localVarPath = '/libpod/containers/{name}/stop'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }

        // Query Params
        if (timeout !== undefined) {
            requestContext.setQueryParam('timeout', ObjectSerializer.serialize(timeout, 'number', ''));
        }

        // Query Params
        if (ignore !== undefined) {
            requestContext.setQueryParam('Ignore', ObjectSerializer.serialize(ignore, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List processes running inside a container
     * List processes
     * @param name Name of container to query for processes (As of version 1.xx)
     * @param stream when true, repeatedly stream the latest output (As of version 4.0)
     * @param delay if streaming, delay in seconds between updates. Must be &gt;1. (As of version 4.0)
     * @param psArgs arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used. 
     */
    public async containerTopLibpod(name: string, stream?: boolean, delay?: number, psArgs?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerTopLibpod', 'name');
        }





        // Path Params
        const localVarPath = '/libpod/containers/{name}/top'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (stream !== undefined) {
            requestContext.setQueryParam('stream', ObjectSerializer.serialize(stream, 'boolean', ''));
        }

        // Query Params
        if (delay !== undefined) {
            requestContext.setQueryParam('delay', ObjectSerializer.serialize(delay, 'number', ''));
        }

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
     * Unmount a container from the filesystem
     * Unmount a container
     * @param name the name or ID of the container
     */
    public async containerUnmountLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerUnmountLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/unmount'
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
     * Unpause Container
     * @param name the name or ID of the container
     */
    public async containerUnpauseLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerUnpauseLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/containers/{name}/unpause'
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
     * Wait on a container to meet a given condition
     * Wait on a container
     * @param name the name or ID of the container
     * @param condition Conditions to wait for. If no condition provided the &#39;exited&#39; condition is assumed.
     * @param interval Time Interval to wait before polling for completion.
     */
    public async containerWaitLibpod(name: string, condition?: Array<'configured' | 'created' | 'running' | 'stopped' | 'paused' | 'exited' | 'removing' | 'stopping'>, interval?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'containerWaitLibpod', 'name');
        }




        // Path Params
        const localVarPath = '/libpod/containers/{name}/wait'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (condition !== undefined) {
            requestContext.setQueryParam('condition', ObjectSerializer.serialize(condition, 'Array<\'configured\' | \'created\' | \'running\' | \'stopped\' | \'paused\' | \'exited\' | \'removing\' | \'stopping\'>', ''));
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
     * Return a live stream of resource usage statistics of one or more container. If no container is specified, the statistics of all containers are returned.
     * Get stats for one or more containers
     * @param containers names or IDs of containers
     * @param stream Stream the output
     * @param interval Time in seconds between stats reports
     */
    public async containersStatsAllLibpod(containers?: Array<string>, stream?: boolean, interval?: number, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/libpod/containers/stats';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (containers !== undefined) {
            requestContext.setQueryParam('containers', ObjectSerializer.serialize(containers, 'Array<string>', ''));
        }

        // Query Params
        if (stream !== undefined) {
            requestContext.setQueryParam('stream', ObjectSerializer.serialize(stream, 'boolean', ''));
        }

        // Query Params
        if (interval !== undefined) {
            requestContext.setQueryParam('interval', ObjectSerializer.serialize(interval, 'number', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generate Kubernetes YAML based on a pod or container.
     * Generate a Kubernetes YAML file.
     * @param names Name or ID of the container or pod.
     * @param service Generate YAML for a Kubernetes service object.
     */
    public async generateKubeLibpod(names: Array<string>, service?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'names' is not null or undefined
        if (names === null || names === undefined) {
            throw new RequiredError('ContainersApi', 'generateKubeLibpod', 'names');
        }



        // Path Params
        const localVarPath = '/libpod/generate/kube';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (names !== undefined) {
            requestContext.setQueryParam('names', ObjectSerializer.serialize(names, 'Array<string>', ''));
        }

        // Query Params
        if (service !== undefined) {
            requestContext.setQueryParam('service', ObjectSerializer.serialize(service, 'boolean', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generate Systemd Units based on a pod or container.
     * Generate Systemd Units
     * @param name Name or ID of the container or pod.
     * @param useName Use container/pod names instead of IDs.
     * @param _new Create a new container instead of starting an existing one.
     * @param noHeader Do not generate the header including the Podman version and the timestamp.
     * @param startTimeout Start timeout in seconds.
     * @param stopTimeout Stop timeout in seconds.
     * @param restartPolicy Systemd restart-policy.
     * @param containerPrefix Systemd unit name prefix for containers.
     * @param podPrefix Systemd unit name prefix for pods.
     * @param separator Systemd unit name separator between name/id and prefix.
     * @param restartSec Configures the time to sleep before restarting a service.
     * @param wants Systemd Wants list for the container or pods.
     * @param after Systemd After list for the container or pods.
     * @param requires Systemd Requires list for the container or pods.
     */
    public async generateSystemdLibpod(name: string, useName?: boolean, _new?: boolean, noHeader?: boolean, startTimeout?: number, stopTimeout?: number, restartPolicy?: 'no' | 'on-success' | 'on-failure' | 'on-abnormal' | 'on-watchdog' | 'on-abort' | 'always', containerPrefix?: string, podPrefix?: string, separator?: string, restartSec?: number, wants?: Array<string>, after?: Array<string>, requires?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'generateSystemdLibpod', 'name');
        }















        // Path Params
        const localVarPath = '/libpod/generate/{name}/systemd'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (useName !== undefined) {
            requestContext.setQueryParam('useName', ObjectSerializer.serialize(useName, 'boolean', ''));
        }

        // Query Params
        if (_new !== undefined) {
            requestContext.setQueryParam('new', ObjectSerializer.serialize(_new, 'boolean', ''));
        }

        // Query Params
        if (noHeader !== undefined) {
            requestContext.setQueryParam('noHeader', ObjectSerializer.serialize(noHeader, 'boolean', ''));
        }

        // Query Params
        if (startTimeout !== undefined) {
            requestContext.setQueryParam('startTimeout', ObjectSerializer.serialize(startTimeout, 'number', ''));
        }

        // Query Params
        if (stopTimeout !== undefined) {
            requestContext.setQueryParam('stopTimeout', ObjectSerializer.serialize(stopTimeout, 'number', ''));
        }

        // Query Params
        if (restartPolicy !== undefined) {
            requestContext.setQueryParam('restartPolicy', ObjectSerializer.serialize(restartPolicy, '\'no\' | \'on-success\' | \'on-failure\' | \'on-abnormal\' | \'on-watchdog\' | \'on-abort\' | \'always\'', ''));
        }

        // Query Params
        if (containerPrefix !== undefined) {
            requestContext.setQueryParam('containerPrefix', ObjectSerializer.serialize(containerPrefix, 'string', ''));
        }

        // Query Params
        if (podPrefix !== undefined) {
            requestContext.setQueryParam('podPrefix', ObjectSerializer.serialize(podPrefix, 'string', ''));
        }

        // Query Params
        if (separator !== undefined) {
            requestContext.setQueryParam('separator', ObjectSerializer.serialize(separator, 'string', ''));
        }

        // Query Params
        if (restartSec !== undefined) {
            requestContext.setQueryParam('restartSec', ObjectSerializer.serialize(restartSec, 'number', ''));
        }

        // Query Params
        if (wants !== undefined) {
            requestContext.setQueryParam('wants', ObjectSerializer.serialize(wants, 'Array<string>', ''));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam('after', ObjectSerializer.serialize(after, 'Array<string>', ''));
        }

        // Query Params
        if (requires !== undefined) {
            requestContext.setQueryParam('requires', ObjectSerializer.serialize(requires, 'Array<string>', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new image from a container
     * Commit
     * @param container the name or ID of a container
     * @param repo the repository name for the created image
     * @param tag tag name for the created image
     * @param comment commit message
     * @param author author of the image
     * @param pause pause the container before committing it
     * @param changes instructions to apply while committing in Dockerfile format (i.e. \&quot;CMD&#x3D;/bin/foo\&quot;)
     * @param format format of the image manifest and metadata (default \&quot;oci\&quot;)
     */
    public async imageCommitLibpod(container: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: Array<string>, format?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'container' is not null or undefined
        if (container === null || container === undefined) {
            throw new RequiredError('ContainersApi', 'imageCommitLibpod', 'container');
        }









        // Path Params
        const localVarPath = '/libpod/commit';

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
            requestContext.setQueryParam('changes', ObjectSerializer.serialize(changes, 'Array<string>', ''));
        }

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam('format', ObjectSerializer.serialize(format, 'string', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Tears down pods defined in a YAML file
     * Remove pods from play kube
     */
    public async playKubeDownLibpod(_options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/libpod/play/kube';

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
     * Create and run pods based on a Kubernetes YAML file (pod or service kind).
     * Play a Kubernetes YAML file.
     * @param network USe the network mode or specify an array of networks.
     * @param tlsVerify Require HTTPS and verify signatures when contacting registries.
     * @param logDriver Logging driver for the containers in the pod.
     * @param start Start the pod after creating it.
     * @param staticIPs Static IPs used for the pods.
     * @param staticMACs Static MACs used for the pods.
     * @param request Kubernetes YAML file.
     */
    public async playKubeLibpod(network?: Array<string>, tlsVerify?: boolean, logDriver?: string, start?: boolean, staticIPs?: Array<string>, staticMACs?: Array<string>, request?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/libpod/play/kube';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (network !== undefined) {
            requestContext.setQueryParam('network', ObjectSerializer.serialize(network, 'Array<string>', ''));
        }

        // Query Params
        if (tlsVerify !== undefined) {
            requestContext.setQueryParam('tlsVerify', ObjectSerializer.serialize(tlsVerify, 'boolean', ''));
        }

        // Query Params
        if (logDriver !== undefined) {
            requestContext.setQueryParam('logDriver', ObjectSerializer.serialize(logDriver, 'string', ''));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam('start', ObjectSerializer.serialize(start, 'boolean', ''));
        }

        // Query Params
        if (staticIPs !== undefined) {
            requestContext.setQueryParam('staticIPs', ObjectSerializer.serialize(staticIPs, 'Array<string>', ''));
        }

        // Query Params
        if (staticMACs !== undefined) {
            requestContext.setQueryParam('staticMACs', ObjectSerializer.serialize(staticMACs, 'Array<string>', ''));
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
     * Copy a tar archive of files into a container
     * Copy files into a container
     * @param name container name or id
     * @param path Path to a directory in the container to extract
     * @param pause pause the container while copying (defaults to true)
     * @param request tarfile of files to copy into the container
     */
    public async putContainerArchiveLibpod(name: string, path: string, pause?: boolean, request?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('ContainersApi', 'putContainerArchiveLibpod', 'name');
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('ContainersApi', 'putContainerArchiveLibpod', 'path');
        }




        // Path Params
        const localVarPath = '/libpod/containers/{name}/archive'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (path !== undefined) {
            requestContext.setQueryParam('path', ObjectSerializer.serialize(path, 'string', ''));
        }

        // Query Params
        if (pause !== undefined) {
            requestContext.setQueryParam('pause', ObjectSerializer.serialize(pause, 'boolean', ''));
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

export class ContainersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerAttachLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerAttachLibpod(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to containerCheckpointLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerCheckpointLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerCreateLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerCreateLibpod(response: ResponseContext): Promise<ContainerCreateResponse > {
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
     * @params response Response returned by the server for a request to containerDeleteLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerDeleteLibpod(response: ResponseContext): Promise<void | Array<LibpodContainersRmReport> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<LibpodContainersRmReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<LibpodContainersRmReport>', '',
            ) as Array<LibpodContainersRmReport>;
            return body;
        }
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
            const body: void | Array<LibpodContainersRmReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'void | Array<LibpodContainersRmReport>', '',
            ) as void | Array<LibpodContainersRmReport>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerExistsLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerExistsLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerExportLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerExportLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerHealthcheckLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerHealthcheckLibpod(response: ResponseContext): Promise<HealthCheckResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: HealthCheckResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'HealthCheckResults', '',
            ) as HealthCheckResults;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, 'container has no healthcheck or is not running', undefined, response.headers);
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
            const body: HealthCheckResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'HealthCheckResults', '',
            ) as HealthCheckResults;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerInitLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerInitLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('304', response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, 'container already initialized', undefined, response.headers);
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
     * @params response Response returned by the server for a request to containerInspectLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerInspectLibpod(response: ResponseContext): Promise<InspectContainerData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: InspectContainerData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'InspectContainerData', '',
            ) as InspectContainerData;
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
            const body: InspectContainerData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'InspectContainerData', '',
            ) as InspectContainerData;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerKillLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerKillLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerListLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerListLibpod(response: ResponseContext): Promise<Array<ListContainer> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<ListContainer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ListContainer>', '',
            ) as Array<ListContainer>;
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
            const body: Array<ListContainer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ListContainer>', '',
            ) as Array<ListContainer>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerLogsLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerLogsLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerMountLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerMountLibpod(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'string', '',
            ) as string;
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
     * @params response Response returned by the server for a request to containerPauseLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerPauseLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerPruneLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerPruneLibpod(response: ResponseContext): Promise<Array<ContainersPruneReportLibpod> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<ContainersPruneReportLibpod> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ContainersPruneReportLibpod>', '',
            ) as Array<ContainersPruneReportLibpod>;
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
            const body: Array<ContainersPruneReportLibpod> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ContainersPruneReportLibpod>', '',
            ) as Array<ContainersPruneReportLibpod>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerRenameLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerRenameLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerResizeLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerResizeLibpod(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to containerRestartLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerRestartLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerRestoreLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerRestoreLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerShowMountedLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerShowMountedLibpod(response: ResponseContext): Promise<{ [key: string]: string; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                '{ [key: string]: string; }', '',
            ) as { [key: string]: string; };
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
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                '{ [key: string]: string; }', '',
            ) as { [key: string]: string; };
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containerStartLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerStartLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerStatsLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerStatsLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerStopLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerStopLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerTopLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerTopLibpod(response: ResponseContext): Promise<ContainerTopOKBody > {
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
     * @params response Response returned by the server for a request to containerUnmountLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerUnmountLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerUnpauseLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerUnpauseLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to containerWaitLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containerWaitLibpod(response: ResponseContext): Promise<number > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: number = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'number', 'int32',
            ) as number;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'int32',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such container', body, response.headers);
        }
        if (isCodeInRange('500', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', 'int32',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(500, 'Internal server error', body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: number = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'number', 'int32',
            ) as number;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to containersStatsAllLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async containersStatsAllLibpod(response: ResponseContext): Promise<ContainerStats > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: ContainerStats = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerStats', '',
            ) as ContainerStats;
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
            const body: ContainerStats = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ContainerStats', '',
            ) as ContainerStats;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateKubeLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateKubeLibpod(response: ResponseContext): Promise<HttpFile > {
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
     * @params response Response returned by the server for a request to generateSystemdLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateSystemdLibpod(response: ResponseContext): Promise<{ [key: string]: string; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                '{ [key: string]: string; }', '',
            ) as { [key: string]: string; };
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
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                '{ [key: string]: string; }', '',
            ) as { [key: string]: string; };
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageCommitLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageCommitLibpod(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to playKubeDownLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async playKubeDownLibpod(response: ResponseContext): Promise<PlayKubeReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PlayKubeReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PlayKubeReport', '',
            ) as PlayKubeReport;
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
            const body: PlayKubeReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PlayKubeReport', '',
            ) as PlayKubeReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to playKubeLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async playKubeLibpod(response: ResponseContext): Promise<PlayKubeReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PlayKubeReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PlayKubeReport', '',
            ) as PlayKubeReport;
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
            const body: PlayKubeReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PlayKubeReport', '',
            ) as PlayKubeReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putContainerArchiveLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putContainerArchiveLibpod(response: ResponseContext): Promise<void > {
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
