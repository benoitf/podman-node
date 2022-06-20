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
import type { IdResponse } from '../models/IdResponse';
import type { InspectPodData } from '../models/InspectPodData';
import type { ListPodsReport } from '../models/ListPodsReport';
import type { PlayKubeReport } from '../models/PlayKubeReport';
import type { PodKillReport } from '../models/PodKillReport';
import type { PodPauseReport } from '../models/PodPauseReport';
import type { PodPruneReport } from '../models/PodPruneReport';
import type { PodRestartReport } from '../models/PodRestartReport';
import type { PodRmReport } from '../models/PodRmReport';
import type { PodSpecGenerator } from '../models/PodSpecGenerator';
import type { PodStartReport } from '../models/PodStartReport';
import type { PodStatsReport } from '../models/PodStatsReport';
import type { PodStopReport } from '../models/PodStopReport';
import type { PodTopOKBody } from '../models/PodTopOKBody';
import type { PodUnpauseReport } from '../models/PodUnpauseReport';

/**
 * no description
 */
export class PodsApiRequestFactory extends BaseAPIRequestFactory {

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
            throw new RequiredError('PodsApi', 'generateKubeLibpod', 'names');
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
            throw new RequiredError('PodsApi', 'generateSystemdLibpod', 'name');
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
     * Create a pod
     * @param create attributes for creating a pod
     */
    public async podCreateLibpod(create?: PodSpecGenerator, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/libpod/pods/create';

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
            ObjectSerializer.serialize(create, 'PodSpecGenerator', ''),
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
     * Remove pod
     * @param name the name or ID of the pod
     * @param force force removal of a running pod by first stopping all containers, then removing all containers in the pod
     */
    public async podDeleteLibpod(name: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podDeleteLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/pods/{name}'
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
     * Check if a pod exists by name or ID
     * Pod exists
     * @param name the name or ID of the pod
     */
    public async podExistsLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podExistsLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/pods/{name}/exists'
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
     * Inspect pod
     * @param name the name or ID of the pod
     */
    public async podInspectLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podInspectLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/pods/{name}/json'
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
     * Kill a pod
     * @param name the name or ID of the pod
     * @param signal signal to be sent to pod
     */
    public async podKillLibpod(name: string, signal?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podKillLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/pods/{name}/kill'
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
     * List pods
     * @param filters JSON encoded value of the filters (a map[string][]string) to process on the pods list. Available filters:   - &#x60;id&#x3D;&lt;pod-id&gt;&#x60; Matches all of pod id.   - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches pods based on the presence of a label alone or a label and a value.   - &#x60;name&#x3D;&lt;pod-name&gt;&#x60; Matches all of pod name.   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; List pods created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;status&#x3D;&lt;pod-status&gt;&#x60; Pod&#39;s status: &#x60;stopped&#x60;, &#x60;running&#x60;, &#x60;paused&#x60;, &#x60;exited&#x60;, &#x60;dead&#x60;, &#x60;created&#x60;, &#x60;degraded&#x60;.   - &#x60;network&#x3D;&lt;pod-network&gt;&#x60; Name or full ID of network.   - &#x60;ctr-names&#x3D;&lt;pod-ctr-names&gt;&#x60; Container name within the pod.   - &#x60;ctr-ids&#x3D;&lt;pod-ctr-ids&gt;&#x60; Container ID within the pod.   - &#x60;ctr-status&#x3D;&lt;pod-ctr-status&gt;&#x60; Container status within the pod.   - &#x60;ctr-number&#x3D;&lt;pod-ctr-number&gt;&#x60; Number of containers in the pod. 
     */
    public async podListLibpod(filters?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/libpod/pods/json';

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
     * Pause a pod
     * Pause a pod
     * @param name the name or ID of the pod
     */
    public async podPauseLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podPauseLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/pods/{name}/pause'
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
     * Prune unused pods
     */
    public async podPruneLibpod(_options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/libpod/pods/prune';

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
     * Restart a pod
     * @param name the name or ID of the pod
     */
    public async podRestartLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podRestartLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/pods/{name}/restart'
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
     * Start a pod
     * @param name the name or ID of the pod
     */
    public async podStartLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podStartLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/pods/{name}/start'
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
     * Display a live stream of resource usage statistics for the containers in one or more pods
     * Statistics for one or more pods
     * @param all Provide statistics for all running pods.
     * @param namesOrIDs Names or IDs of pods.
     */
    public async podStatsAllLibpod(all?: boolean, namesOrIDs?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/libpod/pods/stats';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam('all', ObjectSerializer.serialize(all, 'boolean', ''));
        }

        // Query Params
        if (namesOrIDs !== undefined) {
            requestContext.setQueryParam('namesOrIDs', ObjectSerializer.serialize(namesOrIDs, 'Array<string>', ''));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop a pod
     * @param name the name or ID of the pod
     * @param t timeout
     */
    public async podStopLibpod(name: string, t?: number, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podStopLibpod', 'name');
        }



        // Path Params
        const localVarPath = '/libpod/pods/{name}/stop'
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
     * List processes running inside a pod
     * List processes
     * @param name Name of pod to query for processes
     * @param stream when true, repeatedly stream the latest output (As of version 4.0)
     * @param delay if streaming, delay in seconds between updates. Must be &gt;1. (As of version 4.0)
     * @param psArgs arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used. 
     */
    public async podTopLibpod(name: string, stream?: boolean, delay?: number, psArgs?: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podTopLibpod', 'name');
        }





        // Path Params
        const localVarPath = '/libpod/pods/{name}/top'
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
     * Unpause a pod
     * @param name the name or ID of the pod
     */
    public async podUnpauseLibpod(name: string, _options?: Configuration): Promise<RequestContext> {
        const _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('PodsApi', 'podUnpauseLibpod', 'name');
        }


        // Path Params
        const localVarPath = '/libpod/pods/{name}/unpause'
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

}

export class PodsApiResponseProcessor {

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
     * @params response Response returned by the server for a request to podCreateLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podCreateLibpod(response: ResponseContext): Promise<IdResponse > {
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
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'string', '',
            ) as string;
            throw new ApiException<string>(409, 'status conflict', body, response.headers);
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
     * @params response Response returned by the server for a request to podDeleteLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podDeleteLibpod(response: ResponseContext): Promise<PodRmReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodRmReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodRmReport', '',
            ) as PodRmReport;
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
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
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
            const body: PodRmReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodRmReport', '',
            ) as PodRmReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podExistsLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podExistsLibpod(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('204', response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
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
     * @params response Response returned by the server for a request to podInspectLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podInspectLibpod(response: ResponseContext): Promise<InspectPodData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: InspectPodData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'InspectPodData', '',
            ) as InspectPodData;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
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
            const body: InspectPodData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'InspectPodData', '',
            ) as InspectPodData;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podKillLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podKillLibpod(response: ResponseContext): Promise<PodKillReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodKillReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodKillReport', '',
            ) as PodKillReport;
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
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: PodKillReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodKillReport', '',
            ) as PodKillReport;
            throw new ApiException<PodKillReport>(409, 'Kill Pod', body, response.headers);
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
            const body: PodKillReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodKillReport', '',
            ) as PodKillReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podListLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podListLibpod(response: ResponseContext): Promise<Array<ListPodsReport> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<ListPodsReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ListPodsReport>', '',
            ) as Array<ListPodsReport>;
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
            const body: Array<ListPodsReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<ListPodsReport>', '',
            ) as Array<ListPodsReport>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podPauseLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podPauseLibpod(response: ResponseContext): Promise<PodPauseReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodPauseReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodPauseReport', '',
            ) as PodPauseReport;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: PodPauseReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodPauseReport', '',
            ) as PodPauseReport;
            throw new ApiException<PodPauseReport>(409, 'Pause pod', body, response.headers);
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
            const body: PodPauseReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodPauseReport', '',
            ) as PodPauseReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podPruneLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podPruneLibpod(response: ResponseContext): Promise<PodPruneReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodPruneReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodPruneReport', '',
            ) as PodPruneReport;
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
            throw new ApiException<undefined>(response.httpStatusCode, 'pod already exists', undefined, response.headers);
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
            const body: PodPruneReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodPruneReport', '',
            ) as PodPruneReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podRestartLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podRestartLibpod(response: ResponseContext): Promise<PodRestartReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodRestartReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodRestartReport', '',
            ) as PodRestartReport;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: PodRestartReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodRestartReport', '',
            ) as PodRestartReport;
            throw new ApiException<PodRestartReport>(409, 'Restart pod', body, response.headers);
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
            const body: PodRestartReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodRestartReport', '',
            ) as PodRestartReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podStartLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podStartLibpod(response: ResponseContext): Promise<PodStartReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodStartReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodStartReport', '',
            ) as PodStartReport;
            return body;
        }
        if (isCodeInRange('304', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(304, 'Pod already started', body, response.headers);
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: PodStartReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodStartReport', '',
            ) as PodStartReport;
            throw new ApiException<PodStartReport>(409, 'Start pod', body, response.headers);
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
            const body: PodStartReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodStartReport', '',
            ) as PodStartReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podStatsAllLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podStatsAllLibpod(response: ResponseContext): Promise<Array<PodStatsReport> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: Array<PodStatsReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<PodStatsReport>', '',
            ) as Array<PodStatsReport>;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
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
            const body: Array<PodStatsReport> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'Array<PodStatsReport>', '',
            ) as Array<PodStatsReport>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podStopLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podStopLibpod(response: ResponseContext): Promise<PodStopReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodStopReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodStopReport', '',
            ) as PodStopReport;
            return body;
        }
        if (isCodeInRange('304', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(304, 'Pod already stopped', body, response.headers);
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
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: PodStopReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodStopReport', '',
            ) as PodStopReport;
            throw new ApiException<PodStopReport>(409, 'Stop pod', body, response.headers);
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
            const body: PodStopReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodStopReport', '',
            ) as PodStopReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podTopLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podTopLibpod(response: ResponseContext): Promise<PodTopOKBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodTopOKBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodTopOKBody', '',
            ) as PodTopOKBody;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
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
            const body: PodTopOKBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodTopOKBody', '',
            ) as PodTopOKBody;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to podUnpauseLibpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async podUnpauseLibpod(response: ResponseContext): Promise<PodUnpauseReport > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (isCodeInRange('200', response.httpStatusCode)) {
            const body: PodUnpauseReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodUnpauseReport', '',
            ) as PodUnpauseReport;
            return body;
        }
        if (isCodeInRange('404', response.httpStatusCode)) {
            const body: ErrorModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'ErrorModel', '',
            ) as ErrorModel;
            throw new ApiException<ErrorModel>(404, 'No such pod', body, response.headers);
        }
        if (isCodeInRange('409', response.httpStatusCode)) {
            const body: PodUnpauseReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodUnpauseReport', '',
            ) as PodUnpauseReport;
            throw new ApiException<PodUnpauseReport>(409, 'Unpause pod', body, response.headers);
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
            const body: PodUnpauseReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                'PodUnpauseReport', '',
            ) as PodUnpauseReport;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
    }

}
