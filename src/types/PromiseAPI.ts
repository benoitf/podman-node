import type { HttpFile } from '../http/http';
import type { Configuration} from '../configuration';

import type { AuthConfig } from '../models/AuthConfig';
import type { AuthReport } from '../models/AuthReport';
import type { ComponentVersion } from '../models/ComponentVersion';
import type { Container } from '../models/Container';
import type { ContainerCreateResponse } from '../models/ContainerCreateResponse';
import type { ContainerExecRequest } from '../models/ContainerExecRequest';
import type { ContainerJSON } from '../models/ContainerJSON';
import type { ContainerStats } from '../models/ContainerStats';
import type { ContainerTopOKBody } from '../models/ContainerTopOKBody';
import type { ContainerWait200Response } from '../models/ContainerWait200Response';
import type { ContainersPruneReport } from '../models/ContainersPruneReport';
import type { ContainersPruneReportLibpod } from '../models/ContainersPruneReportLibpod';
import type { CreateContainerConfig } from '../models/CreateContainerConfig';
import type { ExecStartLibpodRequest } from '../models/ExecStartLibpodRequest';
import type { ExecStartRequest } from '../models/ExecStartRequest';
import type { HealthCheckResults } from '../models/HealthCheckResults';
import type { HistoryResponse } from '../models/HistoryResponse';
import type { IdResponse } from '../models/IdResponse';
import type { ImageBuild200Response } from '../models/ImageBuild200Response';
import type { ImageBuildLibpod200Response } from '../models/ImageBuildLibpod200Response';
import type { ImageData } from '../models/ImageData';
import type { ImageDelete200ResponseInner } from '../models/ImageDelete200ResponseInner';
import type { ImageImportReport } from '../models/ImageImportReport';
import type { ImageInspect } from '../models/ImageInspect';
import type { ImageLoadReport } from '../models/ImageLoadReport';
import type { ImageSearch200Response } from '../models/ImageSearch200Response';
import type { ImageSummary } from '../models/ImageSummary';
import type { ImageTreeReport } from '../models/ImageTreeReport';
import type { Info } from '../models/Info';
import type { InspectContainerData } from '../models/InspectContainerData';
import type { InspectExecSession } from '../models/InspectExecSession';
import type { InspectPodData } from '../models/InspectPodData';
import type { LibpodContainersRmReport } from '../models/LibpodContainersRmReport';
import type { LibpodImageSummary } from '../models/LibpodImageSummary';
import type { LibpodImagesPullReport } from '../models/LibpodImagesPullReport';
import type { LibpodImagesRemoveReport } from '../models/LibpodImagesRemoveReport';
import type { ListContainer } from '../models/ListContainer';
import type { ListPodsReport } from '../models/ListPodsReport';
import type { ManifestAddOptions } from '../models/ManifestAddOptions';
import type { ManifestModifyOptions } from '../models/ManifestModifyOptions';
import type { ManifestModifyReport } from '../models/ManifestModifyReport';
import type { Network } from '../models/Network';
import type { NetworkConnect } from '../models/NetworkConnect';
import type { NetworkConnectOptions } from '../models/NetworkConnectOptions';
import type { NetworkCreate201Response } from '../models/NetworkCreate201Response';
import type { NetworkCreateLibpod } from '../models/NetworkCreateLibpod';
import type { NetworkCreateRequest } from '../models/NetworkCreateRequest';
import type { NetworkDisconnect } from '../models/NetworkDisconnect';
import type { NetworkPrune200Response } from '../models/NetworkPrune200Response';
import type { NetworkPruneReport } from '../models/NetworkPruneReport';
import type { NetworkResource } from '../models/NetworkResource';
import type { NetworkRmReport } from '../models/NetworkRmReport';
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
import type { PruneReport } from '../models/PruneReport';
import type { Schema2List } from '../models/Schema2List';
import type { SecretCreate } from '../models/SecretCreate';
import type { SecretCreateLibpod201Response } from '../models/SecretCreateLibpod201Response';
import type { SecretInfoReport } from '../models/SecretInfoReport';
import type { SecretInfoReportCompat } from '../models/SecretInfoReportCompat';
import type { SpecGenerator } from '../models/SpecGenerator';
import type { SystemDfReport } from '../models/SystemDfReport';
import type { SystemPruneReport } from '../models/SystemPruneReport';
import type { Volume } from '../models/Volume';
import type { VolumeConfigResponse } from '../models/VolumeConfigResponse';
import type { VolumeCreate } from '../models/VolumeCreate';
import type { VolumeCreateOptions } from '../models/VolumeCreateOptions';
import type { VolumeListOKBody } from '../models/VolumeListOKBody';
import type { VolumesPruneReport } from '../models/VolumesPruneReport';
import { ObservableContainersApi } from './ObservableAPI';

import type { ContainersApiRequestFactory, ContainersApiResponseProcessor} from '../apis/ContainersApi';
export class PromiseContainersApi {
    private api: ObservableContainersApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContainersApiRequestFactory,
        responseProcessor?: ContainersApiResponseProcessor,
    ) {
        this.api = new ObservableContainersApi(configuration, requestFactory, responseProcessor);
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
    public containerAttachLibpod(name: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdout?: boolean, stderr?: boolean, stdin?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerAttachLibpod(name, detachKeys, logs, stream, stdout, stderr, stdin, _options);
        return result.toPromise();
    }

    /**
     * Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 
     * Report on changes to container's filesystem; adds, deletes or modifications.
     * @param name the name or id of the container
     * @param parent specify a second layer which is used to compare against it instead of the parent layer
     * @param diffType select what you want to match, default is all
     */
    public containerChangesLibpod(name: string, parent?: string, diffType?: 'all' | 'container' | 'image', _options?: Configuration): Promise<void> {
        const result = this.api.containerChangesLibpod(name, parent, diffType, _options);
        return result.toPromise();
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
    public containerCheckpointLibpod(name: string, keep?: boolean, leaveRunning?: boolean, tcpEstablished?: boolean, _export?: boolean, ignoreRootFS?: boolean, printStats?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerCheckpointLibpod(name, keep, leaveRunning, tcpEstablished, _export, ignoreRootFS, printStats, _options);
        return result.toPromise();
    }

    /**
     * Create a container
     * @param create attributes for creating a container
     */
    public containerCreateLibpod(create?: SpecGenerator, _options?: Configuration): Promise<ContainerCreateResponse> {
        const result = this.api.containerCreateLibpod(create, _options);
        return result.toPromise();
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
    public containerDeleteLibpod(name: string, depend?: boolean, force?: boolean, ignore?: boolean, timeout?: number, v?: boolean, _options?: Configuration): Promise<void | Array<LibpodContainersRmReport>> {
        const result = this.api.containerDeleteLibpod(name, depend, force, ignore, timeout, v, _options);
        return result.toPromise();
    }

    /**
     * Quick way to determine if a container exists by name or ID
     * Check if container exists
     * @param name the name or ID of the container
     */
    public containerExistsLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerExistsLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param name the name or ID of the container
     */
    public containerExportLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerExportLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Execute the defined healthcheck and return information about the results
     * Run a container's healthcheck
     * @param name the name or ID of the container
     */
    public containerHealthcheckLibpod(name: string, _options?: Configuration): Promise<HealthCheckResults> {
        const result = this.api.containerHealthcheckLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Performs all tasks necessary for initializing the container but does not start the container.
     * Initialize a container
     * @param name the name or ID of the container
     */
    public containerInitLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerInitLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about a container.
     * Inspect container
     * @param name the name or ID of the container
     * @param size display filesystem usage
     */
    public containerInspectLibpod(name: string, size?: boolean, _options?: Configuration): Promise<InspectContainerData> {
        const result = this.api.containerInspectLibpod(name, size, _options);
        return result.toPromise();
    }

    /**
     * send a signal to a container, defaults to killing the container
     * Kill container
     * @param name the name or ID of the container
     * @param signal signal to be sent to container, either by integer or SIG_ name
     */
    public containerKillLibpod(name: string, signal?: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerKillLibpod(name, signal, _options);
        return result.toPromise();
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
    public containerListLibpod(all?: boolean, limit?: number, pod?: boolean, size?: boolean, sync?: boolean, filters?: string, _options?: Configuration): Promise<Array<ListContainer>> {
        const result = this.api.containerListLibpod(all, limit, pod, size, sync, filters, _options);
        return result.toPromise();
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
    public containerLogsLibpod(name: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: string, until?: string, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerLogsLibpod(name, follow, stdout, stderr, since, until, timestamps, tail, _options);
        return result.toPromise();
    }

    /**
     * Mount a container to the filesystem
     * Mount a container
     * @param name the name or ID of the container
     */
    public containerMountLibpod(name: string, _options?: Configuration): Promise<string> {
        const result = this.api.containerMountLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Use the cgroups freezer to suspend all processes in a container.
     * Pause a container
     * @param name the name or ID of the container
     */
    public containerPauseLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerPauseLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Remove containers not in use
     * Delete stopped containers
     * @param filters Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public containerPruneLibpod(filters?: string, _options?: Configuration): Promise<Array<ContainersPruneReportLibpod>> {
        const result = this.api.containerPruneLibpod(filters, _options);
        return result.toPromise();
    }

    /**
     * Change the name of an existing container.
     * Rename an existing container
     * @param name Full or partial ID or full name of the container to rename
     * @param name2 New name for the container
     */
    public containerRenameLibpod(name: string, name2: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerRenameLibpod(name, name2, _options);
        return result.toPromise();
    }

    /**
     * Resize the terminal attached to a container (for use with Attach).
     * Resize a container's TTY
     * @param name the name or ID of the container
     * @param h Height to set for the terminal, in characters
     * @param w Width to set for the terminal, in characters
     */
    public containerResizeLibpod(name: string, h?: number, w?: number, _options?: Configuration): Promise<any> {
        const result = this.api.containerResizeLibpod(name, h, w, _options);
        return result.toPromise();
    }

    /**
     * Restart a container
     * @param name the name or ID of the container
     * @param t number of seconds to wait before killing container
     */
    public containerRestartLibpod(name: string, t?: number, _options?: Configuration): Promise<void> {
        const result = this.api.containerRestartLibpod(name, t, _options);
        return result.toPromise();
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
    public containerRestoreLibpod(name: string, name2?: string, keep?: boolean, leaveRunning?: boolean, tcpEstablished?: boolean, _import?: boolean, ignoreRootFS?: boolean, ignoreStaticIP?: boolean, ignoreStaticMAC?: boolean, printStats?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerRestoreLibpod(name, name2, keep, leaveRunning, tcpEstablished, _import, ignoreRootFS, ignoreStaticIP, ignoreStaticMAC, printStats, _options);
        return result.toPromise();
    }

    /**
     * Lists all mounted containers mount points
     * Show mounted containers
     */
    public containerShowMountedLibpod(_options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.containerShowMountedLibpod(_options);
        return result.toPromise();
    }

    /**
     * Start a container
     * @param name the name or ID of the container
     * @param detachKeys Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-&lt;value&gt; where &lt;value&gt; is one of: a-z, @, ^, [, , or _.
     */
    public containerStartLibpod(name: string, detachKeys?: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerStartLibpod(name, detachKeys, _options);
        return result.toPromise();
    }

    /**
     * DEPRECATED. This endpoint will be removed with the next major release. Please use /libpod/containers/stats instead.
     * Get stats for a container
     * @param name the name or ID of the container
     * @param stream Stream the output
     */
    public containerStatsLibpod(name: string, stream?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerStatsLibpod(name, stream, _options);
        return result.toPromise();
    }

    /**
     * Stop a container
     * @param name the name or ID of the container
     * @param all Stop all containers
     * @param timeout number of seconds to wait before killing container
     * @param ignore do not return error if container is already stopped
     */
    public containerStopLibpod(name: string, all?: boolean, timeout?: number, ignore?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerStopLibpod(name, all, timeout, ignore, _options);
        return result.toPromise();
    }

    /**
     * List processes running inside a container
     * List processes
     * @param name Name of container to query for processes (As of version 1.xx)
     * @param stream when true, repeatedly stream the latest output (As of version 4.0)
     * @param delay if streaming, delay in seconds between updates. Must be &gt;1. (As of version 4.0)
     * @param psArgs arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used. 
     */
    public containerTopLibpod(name: string, stream?: boolean, delay?: number, psArgs?: string, _options?: Configuration): Promise<ContainerTopOKBody> {
        const result = this.api.containerTopLibpod(name, stream, delay, psArgs, _options);
        return result.toPromise();
    }

    /**
     * Unmount a container from the filesystem
     * Unmount a container
     * @param name the name or ID of the container
     */
    public containerUnmountLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerUnmountLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Unpause Container
     * @param name the name or ID of the container
     */
    public containerUnpauseLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerUnpauseLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Wait on a container to meet a given condition
     * Wait on a container
     * @param name the name or ID of the container
     * @param condition Conditions to wait for. If no condition provided the &#39;exited&#39; condition is assumed.
     * @param interval Time Interval to wait before polling for completion.
     */
    public containerWaitLibpod(name: string, condition?: Array<'configured' | 'created' | 'running' | 'stopped' | 'paused' | 'exited' | 'removing' | 'stopping'>, interval?: string, _options?: Configuration): Promise<number> {
        const result = this.api.containerWaitLibpod(name, condition, interval, _options);
        return result.toPromise();
    }

    /**
     * Return a live stream of resource usage statistics of one or more container. If no container is specified, the statistics of all containers are returned.
     * Get stats for one or more containers
     * @param containers names or IDs of containers
     * @param stream Stream the output
     * @param interval Time in seconds between stats reports
     */
    public containersStatsAllLibpod(containers?: Array<string>, stream?: boolean, interval?: number, _options?: Configuration): Promise<ContainerStats> {
        const result = this.api.containersStatsAllLibpod(containers, stream, interval, _options);
        return result.toPromise();
    }

    /**
     * Generate Kubernetes YAML based on a pod or container.
     * Generate a Kubernetes YAML file.
     * @param names Name or ID of the container or pod.
     * @param service Generate YAML for a Kubernetes service object.
     */
    public generateKubeLibpod(names: Array<string>, service?: boolean, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.generateKubeLibpod(names, service, _options);
        return result.toPromise();
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
    public generateSystemdLibpod(name: string, useName?: boolean, _new?: boolean, noHeader?: boolean, startTimeout?: number, stopTimeout?: number, restartPolicy?: 'no' | 'on-success' | 'on-failure' | 'on-abnormal' | 'on-watchdog' | 'on-abort' | 'always', containerPrefix?: string, podPrefix?: string, separator?: string, restartSec?: number, wants?: Array<string>, after?: Array<string>, requires?: Array<string>, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.generateSystemdLibpod(name, useName, _new, noHeader, startTimeout, stopTimeout, restartPolicy, containerPrefix, podPrefix, separator, restartSec, wants, after, requires, _options);
        return result.toPromise();
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
    public imageCommitLibpod(container: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: Array<string>, format?: string, _options?: Configuration): Promise<void> {
        const result = this.api.imageCommitLibpod(container, repo, tag, comment, author, pause, changes, format, _options);
        return result.toPromise();
    }

    /**
     * Tears down pods defined in a YAML file
     * Remove pods from play kube
     */
    public playKubeDownLibpod(_options?: Configuration): Promise<PlayKubeReport> {
        const result = this.api.playKubeDownLibpod(_options);
        return result.toPromise();
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
    public playKubeLibpod(network?: Array<string>, tlsVerify?: boolean, logDriver?: string, start?: boolean, staticIPs?: Array<string>, staticMACs?: Array<string>, request?: string, _options?: Configuration): Promise<PlayKubeReport> {
        const result = this.api.playKubeLibpod(network, tlsVerify, logDriver, start, staticIPs, staticMACs, request, _options);
        return result.toPromise();
    }

    /**
     * Copy a tar archive of files into a container
     * Copy files into a container
     * @param name container name or id
     * @param path Path to a directory in the container to extract
     * @param pause pause the container while copying (defaults to true)
     * @param request tarfile of files to copy into the container
     */
    public putContainerArchiveLibpod(name: string, path: string, pause?: boolean, request?: string, _options?: Configuration): Promise<void> {
        const result = this.api.putContainerArchiveLibpod(name, path, pause, request, _options);
        return result.toPromise();
    }


}



import { ObservableContainersCompatApi } from './ObservableAPI';

import type { ContainersCompatApiRequestFactory, ContainersCompatApiResponseProcessor} from '../apis/ContainersCompatApi';
export class PromiseContainersCompatApi {
    private api: ObservableContainersCompatApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContainersCompatApiRequestFactory,
        responseProcessor?: ContainersCompatApiResponseProcessor,
    ) {
        this.api = new ObservableContainersCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a tar archive of files from a container
     * Get files from a container
     * @param name container name or id
     * @param path Path to a directory in the container to extract
     */
    public containerArchive(name: string, path: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.containerArchive(name, path, _options);
        return result.toPromise();
    }

    /**
     * Copy a tar archive of files from a container
     * Copy files from a container
     * @param name container name or id
     * @param path Path to a directory in the container to extract
     * @param rename JSON encoded map[string]string to translate paths
     */
    public containerArchiveLibpod(name: string, path: string, rename?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.containerArchiveLibpod(name, path, rename, _options);
        return result.toPromise();
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
    public containerAttach(name: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdout?: boolean, stderr?: boolean, stdin?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerAttach(name, detachKeys, logs, stream, stdout, stderr, stdin, _options);
        return result.toPromise();
    }

    /**
     * Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 
     * Report on changes to container's filesystem; adds, deletes or modifications.
     * @param name the name or id of the container
     * @param parent specify a second layer which is used to compare against it instead of the parent layer
     * @param diffType select what you want to match, default is all
     */
    public containerChangesLibpod(name: string, parent?: string, diffType?: 'all' | 'container' | 'image', _options?: Configuration): Promise<void> {
        const result = this.api.containerChangesLibpod(name, parent, diffType, _options);
        return result.toPromise();
    }

    /**
     * Create a container
     * @param body Container to create
     * @param name container name
     */
    public containerCreate(body: CreateContainerConfig, name?: string, _options?: Configuration): Promise<ContainerCreateResponse> {
        const result = this.api.containerCreate(body, name, _options);
        return result.toPromise();
    }

    /**
     * Remove a container
     * @param name the name or ID of the container
     * @param force If the container is running, kill it before removing it.
     * @param v Remove the volumes associated with the container.
     * @param link not supported
     */
    public containerDelete(name: string, force?: boolean, v?: boolean, link?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.containerDelete(name, force, v, link, _options);
        return result.toPromise();
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param name the name or ID of the container
     */
    public containerExport(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerExport(name, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about a container.
     * Inspect container
     * @param name the name or id of the container
     * @param size include the size of the container
     */
    public containerInspect(name: string, size?: boolean, _options?: Configuration): Promise<ContainerJSON> {
        const result = this.api.containerInspect(name, size, _options);
        return result.toPromise();
    }

    /**
     * Signal to send to the container as an integer or string (e.g. SIGINT)
     * Kill container
     * @param name the name or ID of the container
     * @param all Send kill signal to all containers
     * @param signal signal to be sent to container
     */
    public containerKill(name: string, all?: boolean, signal?: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerKill(name, all, signal, _options);
        return result.toPromise();
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
    public containerList(all?: boolean, external?: boolean, limit?: number, size?: boolean, filters?: string, _options?: Configuration): Promise<Array<Container>> {
        const result = this.api.containerList(all, external, limit, size, filters, _options);
        return result.toPromise();
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
    public containerLogs(name: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: string, until?: string, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerLogs(name, follow, stdout, stderr, since, until, timestamps, tail, _options);
        return result.toPromise();
    }

    /**
     * Use the cgroups freezer to suspend all processes in a container.
     * Pause container
     * @param name the name or ID of the container
     */
    public containerPause(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerPause(name, _options);
        return result.toPromise();
    }

    /**
     * Remove containers not in use
     * Delete stopped containers
     * @param filters Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public containerPrune(filters?: string, _options?: Configuration): Promise<Array<ContainersPruneReport>> {
        const result = this.api.containerPrune(filters, _options);
        return result.toPromise();
    }

    /**
     * Change the name of an existing container.
     * Rename an existing container
     * @param name Full or partial ID or full name of the container to rename
     * @param name2 New name for the container
     */
    public containerRename(name: string, name2: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerRename(name, name2, _options);
        return result.toPromise();
    }

    /**
     * Resize the terminal attached to a container (for use with Attach).
     * Resize a container's TTY
     * @param name the name or ID of the container
     * @param h Height to set for the terminal, in characters
     * @param w Width to set for the terminal, in characters
     * @param running Ignore containers not running errors
     */
    public containerResize(name: string, h?: number, w?: number, running?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.containerResize(name, h, w, running, _options);
        return result.toPromise();
    }

    /**
     * Restart container
     * @param name the name or ID of the container
     * @param t timeout before sending kill signal to container
     */
    public containerRestart(name: string, t?: number, _options?: Configuration): Promise<void> {
        const result = this.api.containerRestart(name, t, _options);
        return result.toPromise();
    }

    /**
     * Start a container
     * @param name the name or ID of the container
     * @param detachKeys Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-&lt;value&gt; where &lt;value&gt; is one of: a-z, @, ^, [, , or _.
     */
    public containerStart(name: string, detachKeys?: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerStart(name, detachKeys, _options);
        return result.toPromise();
    }

    /**
     * This returns a live stream of a container’s resource usage statistics.
     * Get stats for a container
     * @param name the name or ID of the container
     * @param stream Stream the output
     * @param oneShot Provide a one-shot response in which preCPU stats are blank, resulting in a single cycle return.
     */
    public containerStats(name: string, stream?: boolean, oneShot?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.containerStats(name, stream, oneShot, _options);
        return result.toPromise();
    }

    /**
     * Stop a container
     * Stop a container
     * @param name the name or ID of the container
     * @param t number of seconds to wait before killing container
     */
    public containerStop(name: string, t?: number, _options?: Configuration): Promise<void> {
        const result = this.api.containerStop(name, t, _options);
        return result.toPromise();
    }

    /**
     * List processes running inside a container
     * @param name the name or ID of the container
     * @param psArgs arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used.
     */
    public containerTop(name: string, psArgs?: string, _options?: Configuration): Promise<ContainerTopOKBody> {
        const result = this.api.containerTop(name, psArgs, _options);
        return result.toPromise();
    }

    /**
     * Resume a paused container
     * Unpause container
     * @param name the name or ID of the container
     */
    public containerUnpause(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.containerUnpause(name, _options);
        return result.toPromise();
    }

    /**
     * Block until a container stops or given condition is met.
     * Wait on a container
     * @param name the name or ID of the container
     * @param condition wait until container is to a given condition. default is stopped. valid conditions are:   - configured   - created   - exited   - paused   - running   - stopped 
     * @param interval Time Interval to wait before polling for completion.
     */
    public containerWait(name: string, condition?: string, interval?: string, _options?: Configuration): Promise<ContainerWait200Response> {
        const result = this.api.containerWait(name, condition, interval, _options);
        return result.toPromise();
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
    public imageCommit(container?: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: string, squash?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.imageCommit(container, repo, tag, comment, author, pause, changes, squash, _options);
        return result.toPromise();
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
    public putContainerArchive(name: string, path: string, noOverwriteDirNonDir?: string, copyUIDGID?: string, request?: string, _options?: Configuration): Promise<void> {
        const result = this.api.putContainerArchive(name, path, noOverwriteDirNonDir, copyUIDGID, request, _options);
        return result.toPromise();
    }


}



import { ObservableExecApi } from './ObservableAPI';

import type { ExecApiRequestFactory, ExecApiResponseProcessor} from '../apis/ExecApi';
export class PromiseExecApi {
    private api: ObservableExecApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExecApiRequestFactory,
        responseProcessor?: ExecApiResponseProcessor,
    ) {
        this.api = new ObservableExecApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.
     * Create an exec instance
     * @param name name of container
     * @param control Attributes for create
     */
    public containerExecLibpod(name: string, control?: ContainerExecRequest, _options?: Configuration): Promise<void> {
        const result = this.api.containerExecLibpod(name, control, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param id Exec instance ID
     */
    public execInspectLibpod(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.execInspectLibpod(id, _options);
        return result.toPromise();
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param id Exec instance ID
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     */
    public execResizeLibpod(id: string, h?: number, w?: number, _options?: Configuration): Promise<void> {
        const result = this.api.execResizeLibpod(id, h, w, _options);
        return result.toPromise();
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.
     * Start an exec instance
     * @param id Exec instance ID
     * @param control Attributes for start
     */
    public execStartLibpod(id: string, control?: ExecStartLibpodRequest, _options?: Configuration): Promise<void> {
        const result = this.api.execStartLibpod(id, control, _options);
        return result.toPromise();
    }


}



import { ObservableExecCompatApi } from './ObservableAPI';

import type { ExecCompatApiRequestFactory, ExecCompatApiResponseProcessor} from '../apis/ExecCompatApi';
export class PromiseExecCompatApi {
    private api: ObservableExecCompatApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExecCompatApiRequestFactory,
        responseProcessor?: ExecCompatApiResponseProcessor,
    ) {
        this.api = new ObservableExecCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.
     * Create an exec instance
     * @param name name of container
     * @param control Attributes for create
     */
    public containerExec(name: string, control?: ContainerExecRequest, _options?: Configuration): Promise<void> {
        const result = this.api.containerExec(name, control, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param id Exec instance ID
     */
    public execInspect(id: string, _options?: Configuration): Promise<InspectExecSession> {
        const result = this.api.execInspect(id, _options);
        return result.toPromise();
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param id Exec instance ID
     * @param h Height of the TTY session in characters
     * @param w Width of the TTY session in characters
     * @param running Ignore containers not running errors
     */
    public execResize(id: string, h?: number, w?: number, running?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.execResize(id, h, w, running, _options);
        return result.toPromise();
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.
     * Start an exec instance
     * @param id Exec instance ID
     * @param control Attributes for start
     */
    public execStart(id: string, control?: ExecStartRequest, _options?: Configuration): Promise<void> {
        const result = this.api.execStart(id, control, _options);
        return result.toPromise();
    }


}



import { ObservableImagesApi } from './ObservableAPI';

import type { ImagesApiRequestFactory, ImagesApiResponseProcessor} from '../apis/ImagesApi';
export class PromiseImagesApi {
    private api: ObservableImagesApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImagesApiRequestFactory,
        responseProcessor?: ImagesApiResponseProcessor,
    ) {
        this.api = new ObservableImagesApi(configuration, requestFactory, responseProcessor);
    }

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
    public imageBuildLibpod(dockerfile?: string, t?: string, allplatforms?: boolean, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: boolean, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, layers?: boolean, networkmode?: string, platform?: string, target?: string, outputs?: string, httpproxy?: boolean, unsetenv?: Array<string>, _options?: Configuration): Promise<ImageBuildLibpod200Response> {
        const result = this.api.imageBuildLibpod(dockerfile, t, allplatforms, extrahosts, remote, q, nocache, cachefrom, pull, rm, forcerm, memory, memswap, cpushares, cpusetcpus, cpuperiod, cpuquota, buildargs, shmsize, squash, labels, layers, networkmode, platform, target, outputs, httpproxy, unsetenv, _options);
        return result.toPromise();
    }

    /**
     * Returns which files in a images's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 
     * Report on changes to images's filesystem; adds, deletes or modifications.
     * @param name the name or id of the image
     * @param parent specify a second layer which is used to compare against it instead of the parent layer
     * @param diffType select what you want to match, default is all
     */
    public imageChangesLibpod(name: string, parent?: string, diffType?: 'all' | 'container' | 'image', _options?: Configuration): Promise<void> {
        const result = this.api.imageChangesLibpod(name, parent, diffType, _options);
        return result.toPromise();
    }

    /**
     * Remove one or more images from the storage.
     * Remove one or more images from the storage.
     * @param images Images IDs or names to remove.
     * @param all Remove all images.
     * @param force Force image removal (including containers using the images).
     * @param ignore Ignore if a specified image does not exist and do not throw an error.
     */
    public imageDeleteAllLibpod(images?: Array<string>, all?: boolean, force?: boolean, ignore?: boolean, _options?: Configuration): Promise<LibpodImagesRemoveReport> {
        const result = this.api.imageDeleteAllLibpod(images, all, force, ignore, _options);
        return result.toPromise();
    }

    /**
     * Remove an image from the local storage.
     * Remove an image from the local storage.
     * @param name name or ID of image to remove
     * @param force remove the image even if used by containers or has other tags
     */
    public imageDeleteLibpod(name: string, force?: boolean, _options?: Configuration): Promise<LibpodImagesRemoveReport> {
        const result = this.api.imageDeleteLibpod(name, force, _options);
        return result.toPromise();
    }

    /**
     * Check if image exists in local store
     * Image exists
     * @param name the name or ID of the container
     */
    public imageExistsLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.imageExistsLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Export multiple images into a single object. Only `docker-archive` is currently supported.
     * Export multiple images
     * @param format format for exported image (only docker-archive is supported)
     * @param references references to images to export
     * @param compress use compression on image
     * @param ociAcceptUncompressedLayers accept uncompressed layers when copying OCI images
     */
    public imageExportLibpod(format?: string, references?: Array<string>, compress?: boolean, ociAcceptUncompressedLayers?: boolean, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imageExportLibpod(format, references, compress, ociAcceptUncompressedLayers, _options);
        return result.toPromise();
    }

    /**
     * Export an image
     * Export an image
     * @param name the name or ID of the container
     * @param format format for exported image
     * @param compress use compression on image
     */
    public imageGetLibpod(name: string, format?: string, compress?: boolean, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imageGetLibpod(name, format, compress, _options);
        return result.toPromise();
    }

    /**
     * Return parent layers of an image.
     * History of an image
     * @param name the name or ID of the container
     */
    public imageHistoryLibpod(name: string, _options?: Configuration): Promise<HistoryResponse> {
        const result = this.api.imageHistoryLibpod(name, _options);
        return result.toPromise();
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
    public imageImportLibpod(upload: HttpFile, contentType?: 'application/x-tar', changes?: Array<string>, message?: string, reference?: string, url?: string, _options?: Configuration): Promise<ImageImportReport> {
        const result = this.api.imageImportLibpod(upload, contentType, changes, message, reference, url, _options);
        return result.toPromise();
    }

    /**
     * Obtain low-level information about an image
     * Inspect an image
     * @param name the name or ID of the container
     */
    public imageInspectLibpod(name: string, _options?: Configuration): Promise<ImageData> {
        const result = this.api.imageInspectLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of images on the server
     * List Images
     * @param all Show all images. Only images from a final layer (no children) are shown by default.
     * @param filters A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;id&#x60;&#x3D;(&#x60;&lt;image-id&gt;&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) 
     */
    public imageListLibpod(all?: boolean, filters?: string, _options?: Configuration): Promise<Array<LibpodImageSummary>> {
        const result = this.api.imageListLibpod(all, filters, _options);
        return result.toPromise();
    }

    /**
     * Load an image (oci-archive or docker-archive) stream.
     * Load image
     * @param upload tarball of container image
     */
    public imageLoadLibpod(upload: string, _options?: Configuration): Promise<ImageLoadReport> {
        const result = this.api.imageLoadLibpod(upload, _options);
        return result.toPromise();
    }

    /**
     * Remove images that are not being used by a container
     * Prune unused images
     * @param all Remove all images not in use by containers, not just dangling ones 
     * @param external Remove images even when they are used by external containers (e.g, by build containers) 
     * @param filters filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only      unused *and* untagged images. When set to &#x60;false&#x60;      (or &#x60;0&#x60;), all unused images are pruned.   - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public imagePruneLibpod(all?: boolean, external?: boolean, filters?: string, _options?: Configuration): Promise<Array<PruneReport>> {
        const result = this.api.imagePruneLibpod(all, external, filters, _options);
        return result.toPromise();
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
    public imagePullLibpod(reference?: string, quiet?: boolean, credentials?: string, arch?: string, OS?: string, variant?: string, policy?: string, tlsVerify?: boolean, allTags?: boolean, xRegistryAuth?: string, _options?: Configuration): Promise<LibpodImagesPullReport> {
        const result = this.api.imagePullLibpod(reference, quiet, credentials, arch, OS, variant, policy, tlsVerify, allTags, xRegistryAuth, _options);
        return result.toPromise();
    }

    /**
     * Push an image to a container registry
     * Push Image
     * @param name Name of image to push.
     * @param destination Allows for pushing the image to a different destination than the image refers to.
     * @param tlsVerify Require TLS verification.
     * @param xRegistryAuth A base64-encoded auth configuration.
     */
    public imagePushLibpod(name: string, destination?: string, tlsVerify?: boolean, xRegistryAuth?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imagePushLibpod(name, destination, tlsVerify, xRegistryAuth, _options);
        return result.toPromise();
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
    public imageSearchLibpod(term?: string, limit?: number, filters?: string, tlsVerify?: boolean, listTags?: boolean, _options?: Configuration): Promise<ImageSearch200Response> {
        const result = this.api.imageSearchLibpod(term, limit, filters, tlsVerify, listTags, _options);
        return result.toPromise();
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param name the name or ID of the container
     * @param repo the repository to tag in
     * @param tag the name of the new tag
     */
    public imageTagLibpod(name: string, repo?: string, tag?: string, _options?: Configuration): Promise<void> {
        const result = this.api.imageTagLibpod(name, repo, tag, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the image tree for the provided image name or ID
     * Image tree
     * @param name the name or ID of the container
     * @param whatrequires show all child images and layers of the specified image
     */
    public imageTreeLibpod(name: string, whatrequires?: boolean, _options?: Configuration): Promise<ImageTreeReport> {
        const result = this.api.imageTreeLibpod(name, whatrequires, _options);
        return result.toPromise();
    }

    /**
     * Untag an image. If not repo and tag are specified, all tags are removed from the image.
     * Untag an image
     * @param name the name or ID of the container
     * @param repo the repository to untag
     * @param tag the name of the tag to untag
     */
    public imageUntagLibpod(name: string, repo?: string, tag?: string, _options?: Configuration): Promise<void> {
        const result = this.api.imageUntagLibpod(name, repo, tag, _options);
        return result.toPromise();
    }


}



import { ObservableImagesCompatApi } from './ObservableAPI';

import type { ImagesCompatApiRequestFactory, ImagesCompatApiResponseProcessor} from '../apis/ImagesCompatApi';
export class PromiseImagesCompatApi {
    private api: ObservableImagesCompatApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImagesCompatApiRequestFactory,
        responseProcessor?: ImagesCompatApiResponseProcessor,
    ) {
        this.api = new ObservableImagesCompatApi(configuration, requestFactory, responseProcessor);
    }

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
    public imageBuild(contentType?: 'application/x-tar', xRegistryConfig?: string, dockerfile?: string, t?: string, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: boolean, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, networkmode?: string, platform?: string, target?: string, outputs?: string, inputStream?: HttpFile, _options?: Configuration): Promise<ImageBuild200Response> {
        const result = this.api.imageBuild(contentType, xRegistryConfig, dockerfile, t, extrahosts, remote, q, nocache, cachefrom, pull, rm, forcerm, memory, memswap, cpushares, cpusetcpus, cpuperiod, cpuquota, buildargs, shmsize, squash, labels, networkmode, platform, target, outputs, inputStream, _options);
        return result.toPromise();
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
    public imageCreate(xRegistryAuth?: string, fromImage?: string, fromSrc?: string, repo?: string, tag?: string, message?: string, platform?: string, inputImage?: HttpFile, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imageCreate(xRegistryAuth, fromImage, fromSrc, repo, tag, message, platform, inputImage, _options);
        return result.toPromise();
    }

    /**
     * Delete an image from local storage
     * Remove Image
     * @param name name or ID of image to delete
     * @param force remove the image even if used by containers or has other tags
     * @param noprune not supported. will be logged as an invalid parameter if enabled
     */
    public imageDelete(name: string, force?: boolean, noprune?: boolean, _options?: Configuration): Promise<Array<ImageDelete200ResponseInner>> {
        const result = this.api.imageDelete(name, force, noprune, _options);
        return result.toPromise();
    }

    /**
     * Export an image in tarball format
     * Export an image
     * @param name the name or ID of the container
     */
    public imageGet(name: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imageGet(name, _options);
        return result.toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for several image repositories
     * Export several images
     * @param names one or more image names or IDs comma separated
     */
    public imageGetAll(names: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imageGetAll(names, _options);
        return result.toPromise();
    }

    /**
     * Return parent layers of an image.
     * History of an image
     * @param name the name or ID of the container
     */
    public imageHistory(name: string, _options?: Configuration): Promise<HistoryResponse> {
        const result = this.api.imageHistory(name, _options);
        return result.toPromise();
    }

    /**
     * Return low-level information about an image.
     * Inspect an image
     * @param name the name or ID of the container
     */
    public imageInspect(name: string, _options?: Configuration): Promise<ImageInspect> {
        const result = this.api.imageInspect(name, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * List Images
     * @param all Show all images. Only images from a final layer (no children) are shown by default.
     * @param filters A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) 
     * @param digests Not supported
     */
    public imageList(all?: boolean, filters?: string, digests?: boolean, _options?: Configuration): Promise<Array<ImageSummary>> {
        const result = this.api.imageList(all, filters, digests, _options);
        return result.toPromise();
    }

    /**
     * Load a set of images and tags into a repository.
     * Import image
     * @param quiet not supported
     * @param request tarball of container image
     */
    public imageLoad(quiet?: boolean, request?: string, _options?: Configuration): Promise<void> {
        const result = this.api.imageLoad(quiet, request, _options);
        return result.toPromise();
    }

    /**
     * Remove images from local storage that are not being used by a container
     * Prune unused images
     * @param filters filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only      unused *and* untagged images. When set to &#x60;false&#x60;      (or &#x60;0&#x60;), all unused images are pruned.   - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public imagePrune(filters?: string, _options?: Configuration): Promise<Array<ImageDelete200ResponseInner>> {
        const result = this.api.imagePrune(filters, _options);
        return result.toPromise();
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
    public imagePush(name: string, tag?: string, all?: boolean, compress?: boolean, destination?: string, xRegistryAuth?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.imagePush(name, tag, all, compress, destination, xRegistryAuth, _options);
        return result.toPromise();
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
    public imageSearch(term?: string, limit?: number, filters?: string, tlsVerify?: boolean, listTags?: boolean, _options?: Configuration): Promise<ImageSearch200Response> {
        const result = this.api.imageSearch(term, limit, filters, tlsVerify, listTags, _options);
        return result.toPromise();
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param name the name or ID of the container
     * @param repo the repository to tag in
     * @param tag the name of the new tag
     */
    public imageTag(name: string, repo?: string, tag?: string, _options?: Configuration): Promise<void> {
        const result = this.api.imageTag(name, repo, tag, _options);
        return result.toPromise();
    }


}



import { ObservableManifestsApi } from './ObservableAPI';

import type { ManifestsApiRequestFactory, ManifestsApiResponseProcessor} from '../apis/ManifestsApi';
export class PromiseManifestsApi {
    private api: ObservableManifestsApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: ManifestsApiRequestFactory,
        responseProcessor?: ManifestsApiResponseProcessor,
    ) {
        this.api = new ObservableManifestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add an image to a manifest list  Deprecated: As of 4.0.0 use ManifestModifyLibpod instead 
     * Add image
     * @param name the name or ID of the manifest
     * @param options options for creating a manifest
     */
    public manifestAddLibpod(name: string, options?: ManifestAddOptions, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.manifestAddLibpod(name, options, _options);
        return result.toPromise();
    }

    /**
     * Create a manifest list
     * Create
     * @param name manifest list or index name to create
     * @param images One or more names of an image or a manifest list. Repeat parameter as needed.  Support for multiple images, as of version 4.0.0 Alias of &#x60;image&#x60; is support for compatibility with &lt; 4.0.0 Response status code is 200 with &lt; 4.0.0 for compatibility 
     * @param all add all contents if given list
     * @param options options for new manifest
     */
    public manifestCreateLibpod(name: string, images: string, all?: boolean, options?: ManifestModifyOptions, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.manifestCreateLibpod(name, images, all, options, _options);
        return result.toPromise();
    }

    /**
     * Delete named manifest list  As of v4.0.0 
     * Delete manifest list
     * @param name The name or ID of the  list to be deleted
     */
    public manifestDeleteLibpod(name: string, _options?: Configuration): Promise<LibpodImagesRemoveReport> {
        const result = this.api.manifestDeleteLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Check if manifest list exists  Note: There is no contract that the manifest list will exist for a follow-on operation 
     * Exists
     * @param name the name or ID of the manifest list
     */
    public manifestExistsLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.manifestExistsLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Display attributes of given manifest list
     * Inspect
     * @param name the name or ID of the manifest list
     */
    public manifestInspectLibpod(name: string, _options?: Configuration): Promise<Schema2List> {
        const result = this.api.manifestInspectLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Add/Remove an image(s) to a manifest list  Note: operations are not atomic when multiple Images are provided.  As of v4.0.0 
     * Modify manifest list
     * @param name the name or ID of the manifest
     * @param options options for mutating a manifest
     * @param tlsVerify skip TLS verification for registries
     */
    public manifestModifyLibpod(name: string, options: ManifestModifyOptions, tlsVerify?: boolean, _options?: Configuration): Promise<ManifestModifyReport> {
        const result = this.api.manifestModifyLibpod(name, options, tlsVerify, _options);
        return result.toPromise();
    }

    /**
     * Push a manifest list or image index to the named registry  As of v4.0.0 
     * Push manifest list to registry
     * @param name the name or ID of the manifest list
     * @param destination the registry for the manifest list
     * @param all push all images
     * @param tlsVerify skip TLS verification for registries
     */
    public manifestPushLibpod(name: string, destination: string, all?: boolean, tlsVerify?: boolean, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.manifestPushLibpod(name, destination, all, tlsVerify, _options);
        return result.toPromise();
    }

    /**
     * Push a manifest list or image index to a registry  Deprecated: As of 4.0.0 use ManifestPushLibpod instead 
     * Push manifest to registry
     * @param name the name or ID of the manifest
     * @param destination the destination for the manifest
     * @param all push all images
     */
    public manifestPushV3Libpod(name: string, destination: string, all?: boolean, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.manifestPushV3Libpod(name, destination, all, _options);
        return result.toPromise();
    }


}



import { ObservableNetworksApi } from './ObservableAPI';

import type { NetworksApiRequestFactory, NetworksApiResponseProcessor} from '../apis/NetworksApi';
export class PromiseNetworksApi {
    private api: ObservableNetworksApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworksApiRequestFactory,
        responseProcessor?: NetworksApiResponseProcessor,
    ) {
        this.api = new ObservableNetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connect a container to a network.
     * Connect container to network
     * @param name the name of the network
     * @param create attributes for connecting a container to a network
     */
    public networkConnectLibpod(name: string, create?: NetworkConnectOptions, _options?: Configuration): Promise<void> {
        const result = this.api.networkConnectLibpod(name, create, _options);
        return result.toPromise();
    }

    /**
     * Create a new network configuration
     * Create network
     * @param create attributes for creating a network
     */
    public networkCreateLibpod(create?: NetworkCreateLibpod, _options?: Configuration): Promise<Network> {
        const result = this.api.networkCreateLibpod(create, _options);
        return result.toPromise();
    }

    /**
     * Remove a CNI configured network
     * Remove a network
     * @param name the name of the network
     * @param force remove containers associated with network
     */
    public networkDeleteLibpod(name: string, force?: boolean, _options?: Configuration): Promise<Array<NetworkRmReport>> {
        const result = this.api.networkDeleteLibpod(name, force, _options);
        return result.toPromise();
    }

    /**
     * Disconnect a container from a network.
     * Disconnect container from network
     * @param name the name of the network
     * @param create attributes for disconnecting a container from a network
     */
    public networkDisconnectLibpod(name: string, create?: NetworkDisconnect, _options?: Configuration): Promise<void> {
        const result = this.api.networkDisconnectLibpod(name, create, _options);
        return result.toPromise();
    }

    /**
     * Check if network exists
     * Network exists
     * @param name the name or ID of the network
     */
    public networkExistsLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.networkExistsLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Display low level configuration for a CNI network.   - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string. 
     * Inspect a network
     * @param name the name of the network
     */
    public networkInspectLibpod(name: string, _options?: Configuration): Promise<Network> {
        const result = this.api.networkInspectLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Display summary of network configurations.   - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string. 
     * List networks
     * @param filters JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the network list. Available filters:   - &#x60;name&#x3D;[name]&#x60; Matches network name (accepts regex).   - &#x60;id&#x3D;[id]&#x60; Matches for full or partial ID.   - &#x60;driver&#x3D;[driver]&#x60; Only bridge is supported.   - &#x60;label&#x3D;[key]&#x60; or &#x60;label&#x3D;[key&#x3D;value]&#x60; Matches networks based on the presence of a label alone or a label and a value.   - &#x60;until&#x3D;[timestamp]&#x60; Matches all networks that were create before the given timestamp. 
     */
    public networkListLibpod(filters?: string, _options?: Configuration): Promise<Array<Network>> {
        const result = this.api.networkListLibpod(filters, _options);
        return result.toPromise();
    }

    /**
     * Remove CNI networks that do not have containers
     * Delete unused networks
     * @param filters Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public networkPruneLibpod(filters?: string, _options?: Configuration): Promise<Array<NetworkPruneReport>> {
        const result = this.api.networkPruneLibpod(filters, _options);
        return result.toPromise();
    }


}



import { ObservableNetworksCompatApi } from './ObservableAPI';

import type { NetworksCompatApiRequestFactory, NetworksCompatApiResponseProcessor} from '../apis/NetworksCompatApi';
export class PromiseNetworksCompatApi {
    private api: ObservableNetworksCompatApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworksCompatApiRequestFactory,
        responseProcessor?: NetworksCompatApiResponseProcessor,
    ) {
        this.api = new ObservableNetworksCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connect a container to a network.  This endpoint is current a no-op
     * Connect container to network
     * @param name the name of the network
     * @param create attributes for connecting a container to a network
     */
    public networkConnect(name: string, create?: NetworkConnect, _options?: Configuration): Promise<void> {
        const result = this.api.networkConnect(name, create, _options);
        return result.toPromise();
    }

    /**
     * Create a network configuration
     * Create network
     * @param create attributes for creating a network
     */
    public networkCreate(create?: NetworkCreateRequest, _options?: Configuration): Promise<NetworkCreate201Response> {
        const result = this.api.networkCreate(create, _options);
        return result.toPromise();
    }

    /**
     * Remove a network
     * Remove a network
     * @param name the name of the network
     */
    public networkDelete(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.networkDelete(name, _options);
        return result.toPromise();
    }

    /**
     * Disconnect a container from a network.  This endpoint is current a no-op
     * Disconnect container from network
     * @param name the name of the network
     * @param create attributes for disconnecting a container from a network
     */
    public networkDisconnect(name: string, create?: NetworkDisconnect, _options?: Configuration): Promise<void> {
        const result = this.api.networkDisconnect(name, create, _options);
        return result.toPromise();
    }

    /**
     * Display low level configuration network
     * Inspect a network
     * @param name the name of the network
     * @param verbose Detailed inspect output for troubleshooting
     * @param scope Filter the network by scope (swarm, global, or local)
     */
    public networkInspect(name: string, verbose?: boolean, scope?: string, _options?: Configuration): Promise<NetworkResource> {
        const result = this.api.networkInspect(name, verbose, scope, _options);
        return result.toPromise();
    }

    /**
     * Display summary of network configurations
     * List networks
     * @param filters JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the network list. Currently available filters:   - &#x60;name&#x3D;[name]&#x60; Matches network name (accepts regex).   - &#x60;id&#x3D;[id]&#x60; Matches for full or partial ID.   - &#x60;driver&#x3D;[driver]&#x60; Only bridge is supported.   - &#x60;label&#x3D;[key]&#x60; or &#x60;label&#x3D;[key&#x3D;value]&#x60; Matches networks based on the presence of a label alone or a label and a value. 
     */
    public networkList(filters?: string, _options?: Configuration): Promise<Array<NetworkResource>> {
        const result = this.api.networkList(filters, _options);
        return result.toPromise();
    }

    /**
     * Remove CNI networks that do not have containers
     * Delete unused networks
     * @param filters Filters to process on the prune list, encoded as JSON (a map[string][]string). Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &lt;timestamp&gt; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public networkPrune(filters?: string, _options?: Configuration): Promise<NetworkPrune200Response> {
        const result = this.api.networkPrune(filters, _options);
        return result.toPromise();
    }


}



import { ObservablePodsApi } from './ObservableAPI';

import type { PodsApiRequestFactory, PodsApiResponseProcessor} from '../apis/PodsApi';
export class PromisePodsApi {
    private api: ObservablePodsApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: PodsApiRequestFactory,
        responseProcessor?: PodsApiResponseProcessor,
    ) {
        this.api = new ObservablePodsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate Kubernetes YAML based on a pod or container.
     * Generate a Kubernetes YAML file.
     * @param names Name or ID of the container or pod.
     * @param service Generate YAML for a Kubernetes service object.
     */
    public generateKubeLibpod(names: Array<string>, service?: boolean, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.generateKubeLibpod(names, service, _options);
        return result.toPromise();
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
    public generateSystemdLibpod(name: string, useName?: boolean, _new?: boolean, noHeader?: boolean, startTimeout?: number, stopTimeout?: number, restartPolicy?: 'no' | 'on-success' | 'on-failure' | 'on-abnormal' | 'on-watchdog' | 'on-abort' | 'always', containerPrefix?: string, podPrefix?: string, separator?: string, restartSec?: number, wants?: Array<string>, after?: Array<string>, requires?: Array<string>, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.generateSystemdLibpod(name, useName, _new, noHeader, startTimeout, stopTimeout, restartPolicy, containerPrefix, podPrefix, separator, restartSec, wants, after, requires, _options);
        return result.toPromise();
    }

    /**
     * Tears down pods defined in a YAML file
     * Remove pods from play kube
     */
    public playKubeDownLibpod(_options?: Configuration): Promise<PlayKubeReport> {
        const result = this.api.playKubeDownLibpod(_options);
        return result.toPromise();
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
    public playKubeLibpod(network?: Array<string>, tlsVerify?: boolean, logDriver?: string, start?: boolean, staticIPs?: Array<string>, staticMACs?: Array<string>, request?: string, _options?: Configuration): Promise<PlayKubeReport> {
        const result = this.api.playKubeLibpod(network, tlsVerify, logDriver, start, staticIPs, staticMACs, request, _options);
        return result.toPromise();
    }

    /**
     * Create a pod
     * @param create attributes for creating a pod
     */
    public podCreateLibpod(create?: PodSpecGenerator, _options?: Configuration): Promise<IdResponse> {
        const result = this.api.podCreateLibpod(create, _options);
        return result.toPromise();
    }

    /**
     * Remove pod
     * @param name the name or ID of the pod
     * @param force force removal of a running pod by first stopping all containers, then removing all containers in the pod
     */
    public podDeleteLibpod(name: string, force?: boolean, _options?: Configuration): Promise<PodRmReport> {
        const result = this.api.podDeleteLibpod(name, force, _options);
        return result.toPromise();
    }

    /**
     * Check if a pod exists by name or ID
     * Pod exists
     * @param name the name or ID of the pod
     */
    public podExistsLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.podExistsLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Inspect pod
     * @param name the name or ID of the pod
     */
    public podInspectLibpod(name: string, _options?: Configuration): Promise<InspectPodData> {
        const result = this.api.podInspectLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Kill a pod
     * @param name the name or ID of the pod
     * @param signal signal to be sent to pod
     */
    public podKillLibpod(name: string, signal?: string, _options?: Configuration): Promise<PodKillReport> {
        const result = this.api.podKillLibpod(name, signal, _options);
        return result.toPromise();
    }

    /**
     * List pods
     * @param filters JSON encoded value of the filters (a map[string][]string) to process on the pods list. Available filters:   - &#x60;id&#x3D;&lt;pod-id&gt;&#x60; Matches all of pod id.   - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches pods based on the presence of a label alone or a label and a value.   - &#x60;name&#x3D;&lt;pod-name&gt;&#x60; Matches all of pod name.   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; List pods created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;status&#x3D;&lt;pod-status&gt;&#x60; Pod&#39;s status: &#x60;stopped&#x60;, &#x60;running&#x60;, &#x60;paused&#x60;, &#x60;exited&#x60;, &#x60;dead&#x60;, &#x60;created&#x60;, &#x60;degraded&#x60;.   - &#x60;network&#x3D;&lt;pod-network&gt;&#x60; Name or full ID of network.   - &#x60;ctr-names&#x3D;&lt;pod-ctr-names&gt;&#x60; Container name within the pod.   - &#x60;ctr-ids&#x3D;&lt;pod-ctr-ids&gt;&#x60; Container ID within the pod.   - &#x60;ctr-status&#x3D;&lt;pod-ctr-status&gt;&#x60; Container status within the pod.   - &#x60;ctr-number&#x3D;&lt;pod-ctr-number&gt;&#x60; Number of containers in the pod. 
     */
    public podListLibpod(filters?: string, _options?: Configuration): Promise<Array<ListPodsReport>> {
        const result = this.api.podListLibpod(filters, _options);
        return result.toPromise();
    }

    /**
     * Pause a pod
     * Pause a pod
     * @param name the name or ID of the pod
     */
    public podPauseLibpod(name: string, _options?: Configuration): Promise<PodPauseReport> {
        const result = this.api.podPauseLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Prune unused pods
     */
    public podPruneLibpod(_options?: Configuration): Promise<PodPruneReport> {
        const result = this.api.podPruneLibpod(_options);
        return result.toPromise();
    }

    /**
     * Restart a pod
     * @param name the name or ID of the pod
     */
    public podRestartLibpod(name: string, _options?: Configuration): Promise<PodRestartReport> {
        const result = this.api.podRestartLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Start a pod
     * @param name the name or ID of the pod
     */
    public podStartLibpod(name: string, _options?: Configuration): Promise<PodStartReport> {
        const result = this.api.podStartLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Display a live stream of resource usage statistics for the containers in one or more pods
     * Statistics for one or more pods
     * @param all Provide statistics for all running pods.
     * @param namesOrIDs Names or IDs of pods.
     */
    public podStatsAllLibpod(all?: boolean, namesOrIDs?: Array<string>, _options?: Configuration): Promise<Array<PodStatsReport>> {
        const result = this.api.podStatsAllLibpod(all, namesOrIDs, _options);
        return result.toPromise();
    }

    /**
     * Stop a pod
     * @param name the name or ID of the pod
     * @param t timeout
     */
    public podStopLibpod(name: string, t?: number, _options?: Configuration): Promise<PodStopReport> {
        const result = this.api.podStopLibpod(name, t, _options);
        return result.toPromise();
    }

    /**
     * List processes running inside a pod
     * List processes
     * @param name Name of pod to query for processes
     * @param stream when true, repeatedly stream the latest output (As of version 4.0)
     * @param delay if streaming, delay in seconds between updates. Must be &gt;1. (As of version 4.0)
     * @param psArgs arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used. 
     */
    public podTopLibpod(name: string, stream?: boolean, delay?: number, psArgs?: string, _options?: Configuration): Promise<PodTopOKBody> {
        const result = this.api.podTopLibpod(name, stream, delay, psArgs, _options);
        return result.toPromise();
    }

    /**
     * Unpause a pod
     * @param name the name or ID of the pod
     */
    public podUnpauseLibpod(name: string, _options?: Configuration): Promise<PodUnpauseReport> {
        const result = this.api.podUnpauseLibpod(name, _options);
        return result.toPromise();
    }


}



import { ObservableSecretsApi } from './ObservableAPI';

import type { SecretsApiRequestFactory, SecretsApiResponseProcessor} from '../apis/SecretsApi';
export class PromiseSecretsApi {
    private api: ObservableSecretsApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretsApiRequestFactory,
        responseProcessor?: SecretsApiResponseProcessor,
    ) {
        this.api = new ObservableSecretsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a secret
     * @param name User-defined name of the secret.
     * @param driver Secret driver
     * @param request Secret
     */
    public secretCreateLibpod(name: string, driver?: string, request?: string, _options?: Configuration): Promise<SecretCreateLibpod201Response> {
        const result = this.api.secretCreateLibpod(name, driver, request, _options);
        return result.toPromise();
    }

    /**
     * Remove secret
     * @param name the name or ID of the secret
     * @param all Remove all secrets
     */
    public secretDeleteLibpod(name: string, all?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.secretDeleteLibpod(name, all, _options);
        return result.toPromise();
    }

    /**
     * Inspect secret
     * @param name the name or ID of the secret
     */
    public secretInspectLibpod(name: string, _options?: Configuration): Promise<SecretInfoReport> {
        const result = this.api.secretInspectLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of secrets
     * List secrets
     */
    public secretListLibpod(_options?: Configuration): Promise<Array<SecretInfoReport>> {
        const result = this.api.secretListLibpod(_options);
        return result.toPromise();
    }


}



import { ObservableSecretsCompatApi } from './ObservableAPI';

import type { SecretsCompatApiRequestFactory, SecretsCompatApiResponseProcessor} from '../apis/SecretsCompatApi';
export class PromiseSecretsCompatApi {
    private api: ObservableSecretsCompatApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretsCompatApiRequestFactory,
        responseProcessor?: SecretsCompatApiResponseProcessor,
    ) {
        this.api = new ObservableSecretsCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a secret
     * @param create attributes for creating a secret 
     */
    public secretCreate(create?: SecretCreate, _options?: Configuration): Promise<SecretCreateLibpod201Response> {
        const result = this.api.secretCreate(create, _options);
        return result.toPromise();
    }

    /**
     * Remove secret
     * @param name the name or ID of the secret
     */
    public secretDelete(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.secretDelete(name, _options);
        return result.toPromise();
    }

    /**
     * Inspect secret
     * @param name the name or ID of the secret
     */
    public secretInspect(name: string, _options?: Configuration): Promise<SecretInfoReportCompat> {
        const result = this.api.secretInspect(name, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of secrets
     * List secrets
     */
    public secretList(_options?: Configuration): Promise<Array<SecretInfoReportCompat>> {
        const result = this.api.secretList(_options);
        return result.toPromise();
    }


}



import { ObservableSystemApi } from './ObservableAPI';

import type { SystemApiRequestFactory, SystemApiResponseProcessor} from '../apis/SystemApi';
export class PromiseSystemApi {
    private api: ObservableSystemApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor,
    ) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return information about disk usage for containers, images, and volumes
     * Show disk usage
     */
    public systemDataUsageLibpod(_options?: Configuration): Promise<SystemDfReport> {
        const result = this.api.systemDataUsageLibpod(_options);
        return result.toPromise();
    }

    /**
     * Returns events filtered on query parameters
     * Get events
     * @param since start streaming events from this time
     * @param until stop streaming events later than this
     * @param filters JSON encoded map[string][]string of constraints
     * @param stream when false, do not follow events
     */
    public systemEventsLibpod(since?: string, until?: string, filters?: string, stream?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.systemEventsLibpod(since, until, filters, stream, _options);
        return result.toPromise();
    }

    /**
     * Returns information on the system and libpod configuration
     * Get info
     */
    public systemInfoLibpod(_options?: Configuration): Promise<Info> {
        const result = this.api.systemInfoLibpod(_options);
        return result.toPromise();
    }

    /**
     * Return protocol information in response headers. `HEAD /libpod/_ping` is also supported. `/_ping` is available for compatibility with other engines. The '_ping' endpoints are not versioned. 
     * Ping service
     */
    public systemPing(_options?: Configuration): Promise<string> {
        const result = this.api.systemPing(_options);
        return result.toPromise();
    }

    /**
     * Prune unused data
     */
    public systemPruneLibpod(_options?: Configuration): Promise<SystemPruneReport> {
        const result = this.api.systemPruneLibpod(_options);
        return result.toPromise();
    }

    /**
     * Component Version information
     */
    public systemVersionLibpod(_options?: Configuration): Promise<ComponentVersion> {
        const result = this.api.systemVersionLibpod(_options);
        return result.toPromise();
    }


}



import { ObservableSystemCompatApi } from './ObservableAPI';

import type { SystemCompatApiRequestFactory, SystemCompatApiResponseProcessor} from '../apis/SystemCompatApi';
export class PromiseSystemCompatApi {
    private api: ObservableSystemCompatApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemCompatApiRequestFactory,
        responseProcessor?: SystemCompatApiResponseProcessor,
    ) {
        this.api = new ObservableSystemCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check auth configuration
     * @param authConfig Authentication to check
     */
    public systemAuth(authConfig?: AuthConfig, _options?: Configuration): Promise<AuthReport> {
        const result = this.api.systemAuth(authConfig, _options);
        return result.toPromise();
    }

    /**
     * Return information about disk usage for containers, images, and volumes
     * Show disk usage
     */
    public systemDataUsage(_options?: Configuration): Promise<SystemDfReport> {
        const result = this.api.systemDataUsage(_options);
        return result.toPromise();
    }

    /**
     * Returns events filtered on query parameters
     * Get events
     * @param since start streaming events from this time
     * @param until stop streaming events later than this
     * @param filters JSON encoded map[string][]string of constraints
     */
    public systemEvents(since?: string, until?: string, filters?: string, _options?: Configuration): Promise<void> {
        const result = this.api.systemEvents(since, until, filters, _options);
        return result.toPromise();
    }

    /**
     * Returns information on the system and libpod configuration
     * Get info
     */
    public systemInfo(_options?: Configuration): Promise<void> {
        const result = this.api.systemInfo(_options);
        return result.toPromise();
    }

    /**
     * Return protocol information in response headers. `HEAD /libpod/_ping` is also supported. `/_ping` is available for compatibility with other engines. The '_ping' endpoints are not versioned. 
     * Ping service
     */
    public systemPing(_options?: Configuration): Promise<string> {
        const result = this.api.systemPing(_options);
        return result.toPromise();
    }

    /**
     * Component Version information
     */
    public systemVersion(_options?: Configuration): Promise<ComponentVersion> {
        const result = this.api.systemVersion(_options);
        return result.toPromise();
    }


}



import { ObservableVolumesApi } from './ObservableAPI';

import type { VolumesApiRequestFactory, VolumesApiResponseProcessor} from '../apis/VolumesApi';
export class PromiseVolumesApi {
    private api: ObservableVolumesApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: VolumesApiRequestFactory,
        responseProcessor?: VolumesApiResponseProcessor,
    ) {
        this.api = new ObservableVolumesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a volume
     * @param create attributes for creating a volume
     */
    public volumeCreateLibpod(create?: VolumeCreateOptions, _options?: Configuration): Promise<VolumeConfigResponse> {
        const result = this.api.volumeCreateLibpod(create, _options);
        return result.toPromise();
    }

    /**
     * Remove volume
     * @param name the name or ID of the volume
     * @param force force removal
     */
    public volumeDeleteLibpod(name: string, force?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.volumeDeleteLibpod(name, force, _options);
        return result.toPromise();
    }

    /**
     * Check if a volume exists
     * Volume exists
     * @param name the name of the volume
     */
    public volumeExistsLibpod(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.volumeExistsLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Inspect volume
     * @param name the name or ID of the volume
     */
    public volumeInspectLibpod(name: string, _options?: Configuration): Promise<VolumeConfigResponse> {
        const result = this.api.volumeInspectLibpod(name, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of volumes
     * List volumes
     * @param filters JSON encoded value of the filters (a map[string][]string) to process on the volumes list. Available filters:   - driver&#x3D;&lt;volume-driver-name&gt; Matches volumes based on their driver.   - label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;:&lt;value&gt; Matches volumes based on the presence of a label alone or a label and a value.   - name&#x3D;&lt;volume-name&gt; Matches all of volume name.   - opt&#x3D;&lt;driver-option&gt; Matches a storage driver options   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; List volumes created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. 
     */
    public volumeListLibpod(filters?: string, _options?: Configuration): Promise<Array<VolumeConfigResponse>> {
        const result = this.api.volumeListLibpod(filters, _options);
        return result.toPromise();
    }

    /**
     * Prune volumes
     * @param filters JSON encoded value of filters (a map[string][]string) to match volumes against before pruning. Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune volumes created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public volumePruneLibpod(filters?: string, _options?: Configuration): Promise<Array<PruneReport>> {
        const result = this.api.volumePruneLibpod(filters, _options);
        return result.toPromise();
    }


}



import { ObservableVolumesCompatApi } from './ObservableAPI';

import type { VolumesCompatApiRequestFactory, VolumesCompatApiResponseProcessor} from '../apis/VolumesCompatApi';
export class PromiseVolumesCompatApi {
    private api: ObservableVolumesCompatApi;

    public constructor(
        configuration: Configuration,
        requestFactory?: VolumesCompatApiRequestFactory,
        responseProcessor?: VolumesCompatApiResponseProcessor,
    ) {
        this.api = new ObservableVolumesCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a volume
     * @param create attributes for creating a volume. Note: If a volume by the same name exists, a 201 response with that volume&#39;s information will be generated. 
     */
    public volumeCreate(create?: VolumeCreate, _options?: Configuration): Promise<Volume> {
        const result = this.api.volumeCreate(create, _options);
        return result.toPromise();
    }

    /**
     * Remove volume
     * @param name the name or ID of the volume
     * @param force Force removal of the volume. This actually only causes errors due to the names volume not being found to be suppressed, which is the behaviour Docker implements. 
     */
    public volumeDelete(name: string, force?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.volumeDelete(name, force, _options);
        return result.toPromise();
    }

    /**
     * Inspect volume
     * @param name the name or ID of the volume
     */
    public volumeInspect(name: string, _options?: Configuration): Promise<Volume> {
        const result = this.api.volumeInspect(name, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of volume
     * List volumes
     * @param filters JSON encoded value of the filters (a map[string][]string) to process on the volumes list. Available filters:   - driver&#x3D;&lt;volume-driver-name&gt; Matches volumes based on their driver.   - label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;:&lt;value&gt; Matches volumes based on the presence of a label alone or a label and a value.   - name&#x3D;&lt;volume-name&gt; Matches all of volume name.   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; List volumes created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  Note:   The boolean &#x60;dangling&#x60; filter is not yet implemented for this endpoint. 
     */
    public volumeList(filters?: string, _options?: Configuration): Promise<VolumeListOKBody> {
        const result = this.api.volumeList(filters, _options);
        return result.toPromise();
    }

    /**
     * Prune volumes
     * @param filters JSON encoded value of filters (a map[string][]string) to match volumes against before pruning. Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune volumes created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     */
    public volumePrune(filters?: string, _options?: Configuration): Promise<VolumesPruneReport> {
        const result = this.api.volumePrune(filters, _options);
        return result.toPromise();
    }


}



