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

export interface ContainersApiContainerAttachLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerAttachLibpod
     */
    name: string
    /**
     * keys to use for detaching from the container
     * @type string
     * @memberof ContainersApicontainerAttachLibpod
     */
    detachKeys?: string
    /**
     * Stream all logs from the container across the connection. Happens before streaming attach (if requested). At least one of logs or stream must be set
     * @type boolean
     * @memberof ContainersApicontainerAttachLibpod
     */
    logs?: boolean
    /**
     * Attach to the container. If unset, and logs is set, only the container&#39;s logs will be sent. At least one of stream or logs must be set
     * @type boolean
     * @memberof ContainersApicontainerAttachLibpod
     */
    stream?: boolean
    /**
     * Attach to container STDOUT
     * @type boolean
     * @memberof ContainersApicontainerAttachLibpod
     */
    stdout?: boolean
    /**
     * Attach to container STDERR
     * @type boolean
     * @memberof ContainersApicontainerAttachLibpod
     */
    stderr?: boolean
    /**
     * Attach to container STDIN
     * @type boolean
     * @memberof ContainersApicontainerAttachLibpod
     */
    stdin?: boolean
}

export interface ContainersApiContainerChangesLibpodRequest {
    /**
     * the name or id of the container
     * @type string
     * @memberof ContainersApicontainerChangesLibpod
     */
    name: string
    /**
     * specify a second layer which is used to compare against it instead of the parent layer
     * @type string
     * @memberof ContainersApicontainerChangesLibpod
     */
    parent?: string
    /**
     * select what you want to match, default is all
     * @type &#39;all&#39; | &#39;container&#39; | &#39;image&#39;
     * @memberof ContainersApicontainerChangesLibpod
     */
    diffType?: 'all' | 'container' | 'image'
}

export interface ContainersApiContainerCheckpointLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerCheckpointLibpod
     */
    name: string
    /**
     * keep all temporary checkpoint files
     * @type boolean
     * @memberof ContainersApicontainerCheckpointLibpod
     */
    keep?: boolean
    /**
     * leave the container running after writing checkpoint to disk
     * @type boolean
     * @memberof ContainersApicontainerCheckpointLibpod
     */
    leaveRunning?: boolean
    /**
     * checkpoint a container with established TCP connections
     * @type boolean
     * @memberof ContainersApicontainerCheckpointLibpod
     */
    tcpEstablished?: boolean
    /**
     * export the checkpoint image to a tar.gz
     * @type boolean
     * @memberof ContainersApicontainerCheckpointLibpod
     */
    _export?: boolean
    /**
     * do not include root file-system changes when exporting
     * @type boolean
     * @memberof ContainersApicontainerCheckpointLibpod
     */
    ignoreRootFS?: boolean
    /**
     * add checkpoint statistics to the returned CheckpointReport
     * @type boolean
     * @memberof ContainersApicontainerCheckpointLibpod
     */
    printStats?: boolean
}

export interface ContainersApiContainerCreateLibpodRequest {
    /**
     * attributes for creating a container
     * @type SpecGenerator
     * @memberof ContainersApicontainerCreateLibpod
     */
    create?: SpecGenerator
}

export interface ContainersApiContainerDeleteLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerDeleteLibpod
     */
    name: string
    /**
     * additionally remove containers that depend on the container to be removed
     * @type boolean
     * @memberof ContainersApicontainerDeleteLibpod
     */
    depend?: boolean
    /**
     * force stop container if running
     * @type boolean
     * @memberof ContainersApicontainerDeleteLibpod
     */
    force?: boolean
    /**
     * ignore errors when the container to be removed does not existxo
     * @type boolean
     * @memberof ContainersApicontainerDeleteLibpod
     */
    ignore?: boolean
    /**
     * number of seconds to wait before killing container when force removing
     * @type number
     * @memberof ContainersApicontainerDeleteLibpod
     */
    timeout?: number
    /**
     * delete volumes
     * @type boolean
     * @memberof ContainersApicontainerDeleteLibpod
     */
    v?: boolean
}

export interface ContainersApiContainerExistsLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerExistsLibpod
     */
    name: string
}

export interface ContainersApiContainerExportLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerExportLibpod
     */
    name: string
}

export interface ContainersApiContainerHealthcheckLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerHealthcheckLibpod
     */
    name: string
}

export interface ContainersApiContainerInitLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerInitLibpod
     */
    name: string
}

export interface ContainersApiContainerInspectLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerInspectLibpod
     */
    name: string
    /**
     * display filesystem usage
     * @type boolean
     * @memberof ContainersApicontainerInspectLibpod
     */
    size?: boolean
}

export interface ContainersApiContainerKillLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerKillLibpod
     */
    name: string
    /**
     * signal to be sent to container, either by integer or SIG_ name
     * @type string
     * @memberof ContainersApicontainerKillLibpod
     */
    signal?: string
}

export interface ContainersApiContainerListLibpodRequest {
    /**
     * Return all containers. By default, only running containers are shown
     * @type boolean
     * @memberof ContainersApicontainerListLibpod
     */
    all?: boolean
    /**
     * Return this number of most recently created containers, including non-running ones.
     * @type number
     * @memberof ContainersApicontainerListLibpod
     */
    limit?: number
    /**
     * Ignored. Previously included details on pod name and ID that are currently included by default.
     * @type boolean
     * @memberof ContainersApicontainerListLibpod
     */
    pod?: boolean
    /**
     * Return the size of container as fields SizeRw and SizeRootFs.
     * @type boolean
     * @memberof ContainersApicontainerListLibpod
     */
    size?: boolean
    /**
     * Sync container state with OCI runtime
     * @type boolean
     * @memberof ContainersApicontainerListLibpod
     */
    sync?: boolean
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the containers list. Available filters: - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60; or &#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;, &#x60;healthy&#x60;, &#x60;unhealthy&#x60; or &#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container&#39;s ID - &#x60;is-task&#x60;&#x3D;(&#x60;true&#x60; or &#x60;false&#x60;) - &#x60;label&#x60;&#x3D;(&#x60;key&#x60; or &#x60;\&quot;key&#x3D;value\&quot;&#x60;) of an container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;pod&#x60;&#x3D;(&#x60;&lt;pod id&gt;&#x60; or &#x60;&lt;pod name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60; or &#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x60;&#x3D;(&#x60;created&#x60;, &#x60;restarting&#x60;, &#x60;running&#x60;, &#x60;removing&#x60;, &#x60;paused&#x60;, &#x60;exited&#x60; or &#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;) 
     * @type string
     * @memberof ContainersApicontainerListLibpod
     */
    filters?: string
}

export interface ContainersApiContainerLogsLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerLogsLibpod
     */
    name: string
    /**
     * Keep connection after returning logs.
     * @type boolean
     * @memberof ContainersApicontainerLogsLibpod
     */
    follow?: boolean
    /**
     * Return logs from stdout
     * @type boolean
     * @memberof ContainersApicontainerLogsLibpod
     */
    stdout?: boolean
    /**
     * Return logs from stderr
     * @type boolean
     * @memberof ContainersApicontainerLogsLibpod
     */
    stderr?: boolean
    /**
     * Only return logs since this time, as a UNIX timestamp
     * @type string
     * @memberof ContainersApicontainerLogsLibpod
     */
    since?: string
    /**
     * Only return logs before this time, as a UNIX timestamp
     * @type string
     * @memberof ContainersApicontainerLogsLibpod
     */
    until?: string
    /**
     * Add timestamps to every log line
     * @type boolean
     * @memberof ContainersApicontainerLogsLibpod
     */
    timestamps?: boolean
    /**
     * Only return this number of log lines from the end of the logs
     * @type string
     * @memberof ContainersApicontainerLogsLibpod
     */
    tail?: string
}

export interface ContainersApiContainerMountLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerMountLibpod
     */
    name: string
}

export interface ContainersApiContainerPauseLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerPauseLibpod
     */
    name: string
}

export interface ContainersApiContainerPruneLibpodRequest {
    /**
     * Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * @type string
     * @memberof ContainersApicontainerPruneLibpod
     */
    filters?: string
}

export interface ContainersApiContainerRenameLibpodRequest {
    /**
     * Full or partial ID or full name of the container to rename
     * @type string
     * @memberof ContainersApicontainerRenameLibpod
     */
    name: string
    /**
     * New name for the container
     * @type string
     * @memberof ContainersApicontainerRenameLibpod
     */
    name2: string
}

export interface ContainersApiContainerResizeLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerResizeLibpod
     */
    name: string
    /**
     * Height to set for the terminal, in characters
     * @type number
     * @memberof ContainersApicontainerResizeLibpod
     */
    h?: number
    /**
     * Width to set for the terminal, in characters
     * @type number
     * @memberof ContainersApicontainerResizeLibpod
     */
    w?: number
}

export interface ContainersApiContainerRestartLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerRestartLibpod
     */
    name: string
    /**
     * number of seconds to wait before killing container
     * @type number
     * @memberof ContainersApicontainerRestartLibpod
     */
    t?: number
}

export interface ContainersApiContainerRestoreLibpodRequest {
    /**
     * the name or id of the container
     * @type string
     * @memberof ContainersApicontainerRestoreLibpod
     */
    name: string
    /**
     * the name of the container when restored from a tar. can only be used with import
     * @type string
     * @memberof ContainersApicontainerRestoreLibpod
     */
    name2?: string
    /**
     * keep all temporary checkpoint files
     * @type boolean
     * @memberof ContainersApicontainerRestoreLibpod
     */
    keep?: boolean
    /**
     * leave the container running after writing checkpoint to disk
     * @type boolean
     * @memberof ContainersApicontainerRestoreLibpod
     */
    leaveRunning?: boolean
    /**
     * checkpoint a container with established TCP connections
     * @type boolean
     * @memberof ContainersApicontainerRestoreLibpod
     */
    tcpEstablished?: boolean
    /**
     * import the restore from a checkpoint tar.gz
     * @type boolean
     * @memberof ContainersApicontainerRestoreLibpod
     */
    _import?: boolean
    /**
     * do not include root file-system changes when exporting
     * @type boolean
     * @memberof ContainersApicontainerRestoreLibpod
     */
    ignoreRootFS?: boolean
    /**
     * ignore IP address if set statically
     * @type boolean
     * @memberof ContainersApicontainerRestoreLibpod
     */
    ignoreStaticIP?: boolean
    /**
     * ignore MAC address if set statically
     * @type boolean
     * @memberof ContainersApicontainerRestoreLibpod
     */
    ignoreStaticMAC?: boolean
    /**
     * add restore statistics to the returned RestoreReport
     * @type boolean
     * @memberof ContainersApicontainerRestoreLibpod
     */
    printStats?: boolean
}

export interface ContainersApiContainerShowMountedLibpodRequest {
}

export interface ContainersApiContainerStartLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerStartLibpod
     */
    name: string
    /**
     * Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-&lt;value&gt; where &lt;value&gt; is one of: a-z, @, ^, [, , or _.
     * @type string
     * @memberof ContainersApicontainerStartLibpod
     */
    detachKeys?: string
}

export interface ContainersApiContainerStatsLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerStatsLibpod
     */
    name: string
    /**
     * Stream the output
     * @type boolean
     * @memberof ContainersApicontainerStatsLibpod
     */
    stream?: boolean
}

export interface ContainersApiContainerStopLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerStopLibpod
     */
    name: string
    /**
     * Stop all containers
     * @type boolean
     * @memberof ContainersApicontainerStopLibpod
     */
    all?: boolean
    /**
     * number of seconds to wait before killing container
     * @type number
     * @memberof ContainersApicontainerStopLibpod
     */
    timeout?: number
    /**
     * do not return error if container is already stopped
     * @type boolean
     * @memberof ContainersApicontainerStopLibpod
     */
    ignore?: boolean
}

export interface ContainersApiContainerTopLibpodRequest {
    /**
     * Name of container to query for processes (As of version 1.xx)
     * @type string
     * @memberof ContainersApicontainerTopLibpod
     */
    name: string
    /**
     * when true, repeatedly stream the latest output (As of version 4.0)
     * @type boolean
     * @memberof ContainersApicontainerTopLibpod
     */
    stream?: boolean
    /**
     * if streaming, delay in seconds between updates. Must be &gt;1. (As of version 4.0)
     * @type number
     * @memberof ContainersApicontainerTopLibpod
     */
    delay?: number
    /**
     * arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used. 
     * @type string
     * @memberof ContainersApicontainerTopLibpod
     */
    psArgs?: string
}

export interface ContainersApiContainerUnmountLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerUnmountLibpod
     */
    name: string
}

export interface ContainersApiContainerUnpauseLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerUnpauseLibpod
     */
    name: string
}

export interface ContainersApiContainerWaitLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersApicontainerWaitLibpod
     */
    name: string
    /**
     * Conditions to wait for. If no condition provided the &#39;exited&#39; condition is assumed.
     * @type Array&lt;&#39;configured&#39; | &#39;created&#39; | &#39;running&#39; | &#39;stopped&#39; | &#39;paused&#39; | &#39;exited&#39; | &#39;removing&#39; | &#39;stopping&#39;&gt;
     * @memberof ContainersApicontainerWaitLibpod
     */
    condition?: Array<'configured' | 'created' | 'running' | 'stopped' | 'paused' | 'exited' | 'removing' | 'stopping'>
    /**
     * Time Interval to wait before polling for completion.
     * @type string
     * @memberof ContainersApicontainerWaitLibpod
     */
    interval?: string
}

export interface ContainersApiContainersStatsAllLibpodRequest {
    /**
     * names or IDs of containers
     * @type Array&lt;string&gt;
     * @memberof ContainersApicontainersStatsAllLibpod
     */
    containers?: Array<string>
    /**
     * Stream the output
     * @type boolean
     * @memberof ContainersApicontainersStatsAllLibpod
     */
    stream?: boolean
    /**
     * Time in seconds between stats reports
     * @type number
     * @memberof ContainersApicontainersStatsAllLibpod
     */
    interval?: number
}

export interface ContainersApiGenerateKubeLibpodRequest {
    /**
     * Name or ID of the container or pod.
     * @type Array&lt;string&gt;
     * @memberof ContainersApigenerateKubeLibpod
     */
    names: Array<string>
    /**
     * Generate YAML for a Kubernetes service object.
     * @type boolean
     * @memberof ContainersApigenerateKubeLibpod
     */
    service?: boolean
}

export interface ContainersApiGenerateSystemdLibpodRequest {
    /**
     * Name or ID of the container or pod.
     * @type string
     * @memberof ContainersApigenerateSystemdLibpod
     */
    name: string
    /**
     * Use container/pod names instead of IDs.
     * @type boolean
     * @memberof ContainersApigenerateSystemdLibpod
     */
    useName?: boolean
    /**
     * Create a new container instead of starting an existing one.
     * @type boolean
     * @memberof ContainersApigenerateSystemdLibpod
     */
    _new?: boolean
    /**
     * Do not generate the header including the Podman version and the timestamp.
     * @type boolean
     * @memberof ContainersApigenerateSystemdLibpod
     */
    noHeader?: boolean
    /**
     * Start timeout in seconds.
     * @type number
     * @memberof ContainersApigenerateSystemdLibpod
     */
    startTimeout?: number
    /**
     * Stop timeout in seconds.
     * @type number
     * @memberof ContainersApigenerateSystemdLibpod
     */
    stopTimeout?: number
    /**
     * Systemd restart-policy.
     * @type &#39;no&#39; | &#39;on-success&#39; | &#39;on-failure&#39; | &#39;on-abnormal&#39; | &#39;on-watchdog&#39; | &#39;on-abort&#39; | &#39;always&#39;
     * @memberof ContainersApigenerateSystemdLibpod
     */
    restartPolicy?: 'no' | 'on-success' | 'on-failure' | 'on-abnormal' | 'on-watchdog' | 'on-abort' | 'always'
    /**
     * Systemd unit name prefix for containers.
     * @type string
     * @memberof ContainersApigenerateSystemdLibpod
     */
    containerPrefix?: string
    /**
     * Systemd unit name prefix for pods.
     * @type string
     * @memberof ContainersApigenerateSystemdLibpod
     */
    podPrefix?: string
    /**
     * Systemd unit name separator between name/id and prefix.
     * @type string
     * @memberof ContainersApigenerateSystemdLibpod
     */
    separator?: string
    /**
     * Configures the time to sleep before restarting a service.
     * @type number
     * @memberof ContainersApigenerateSystemdLibpod
     */
    restartSec?: number
    /**
     * Systemd Wants list for the container or pods.
     * @type Array&lt;string&gt;
     * @memberof ContainersApigenerateSystemdLibpod
     */
    wants?: Array<string>
    /**
     * Systemd After list for the container or pods.
     * @type Array&lt;string&gt;
     * @memberof ContainersApigenerateSystemdLibpod
     */
    after?: Array<string>
    /**
     * Systemd Requires list for the container or pods.
     * @type Array&lt;string&gt;
     * @memberof ContainersApigenerateSystemdLibpod
     */
    requires?: Array<string>
}

export interface ContainersApiImageCommitLibpodRequest {
    /**
     * the name or ID of a container
     * @type string
     * @memberof ContainersApiimageCommitLibpod
     */
    container: string
    /**
     * the repository name for the created image
     * @type string
     * @memberof ContainersApiimageCommitLibpod
     */
    repo?: string
    /**
     * tag name for the created image
     * @type string
     * @memberof ContainersApiimageCommitLibpod
     */
    tag?: string
    /**
     * commit message
     * @type string
     * @memberof ContainersApiimageCommitLibpod
     */
    comment?: string
    /**
     * author of the image
     * @type string
     * @memberof ContainersApiimageCommitLibpod
     */
    author?: string
    /**
     * pause the container before committing it
     * @type boolean
     * @memberof ContainersApiimageCommitLibpod
     */
    pause?: boolean
    /**
     * instructions to apply while committing in Dockerfile format (i.e. \&quot;CMD&#x3D;/bin/foo\&quot;)
     * @type Array&lt;string&gt;
     * @memberof ContainersApiimageCommitLibpod
     */
    changes?: Array<string>
    /**
     * format of the image manifest and metadata (default \&quot;oci\&quot;)
     * @type string
     * @memberof ContainersApiimageCommitLibpod
     */
    format?: string
}

export interface ContainersApiPlayKubeDownLibpodRequest {
}

export interface ContainersApiPlayKubeLibpodRequest {
    /**
     * USe the network mode or specify an array of networks.
     * @type Array&lt;string&gt;
     * @memberof ContainersApiplayKubeLibpod
     */
    network?: Array<string>
    /**
     * Require HTTPS and verify signatures when contacting registries.
     * @type boolean
     * @memberof ContainersApiplayKubeLibpod
     */
    tlsVerify?: boolean
    /**
     * Logging driver for the containers in the pod.
     * @type string
     * @memberof ContainersApiplayKubeLibpod
     */
    logDriver?: string
    /**
     * Start the pod after creating it.
     * @type boolean
     * @memberof ContainersApiplayKubeLibpod
     */
    start?: boolean
    /**
     * Static IPs used for the pods.
     * @type Array&lt;string&gt;
     * @memberof ContainersApiplayKubeLibpod
     */
    staticIPs?: Array<string>
    /**
     * Static MACs used for the pods.
     * @type Array&lt;string&gt;
     * @memberof ContainersApiplayKubeLibpod
     */
    staticMACs?: Array<string>
    /**
     * Kubernetes YAML file.
     * @type string
     * @memberof ContainersApiplayKubeLibpod
     */
    request?: string
}

export interface ContainersApiPutContainerArchiveLibpodRequest {
    /**
     * container name or id
     * @type string
     * @memberof ContainersApiputContainerArchiveLibpod
     */
    name: string
    /**
     * Path to a directory in the container to extract
     * @type string
     * @memberof ContainersApiputContainerArchiveLibpod
     */
    path: string
    /**
     * pause the container while copying (defaults to true)
     * @type boolean
     * @memberof ContainersApiputContainerArchiveLibpod
     */
    pause?: boolean
    /**
     * tarfile of files to copy into the container
     * @type string
     * @memberof ContainersApiputContainerArchiveLibpod
     */
    request?: string
}

export class ObjectContainersApi {
    private api: ObservableContainersApi;

    public constructor(configuration: Configuration, requestFactory?: ContainersApiRequestFactory, responseProcessor?: ContainersApiResponseProcessor) {
        this.api = new ObservableContainersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Hijacks the connection to forward the container's standard streams to the client.
     * Attach to a container
     * @param param the request object
     */
    public containerAttachLibpod(param: ContainersApiContainerAttachLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerAttachLibpod(param.name, param.detachKeys, param.logs, param.stream, param.stdout, param.stderr, param.stdin,  options).toPromise();
    }

    /**
     * Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 
     * Report on changes to container's filesystem; adds, deletes or modifications.
     * @param param the request object
     */
    public containerChangesLibpod(param: ContainersApiContainerChangesLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerChangesLibpod(param.name, param.parent, param.diffType,  options).toPromise();
    }

    /**
     * Checkpoint a container
     * @param param the request object
     */
    public containerCheckpointLibpod(param: ContainersApiContainerCheckpointLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerCheckpointLibpod(param.name, param.keep, param.leaveRunning, param.tcpEstablished, param._export, param.ignoreRootFS, param.printStats,  options).toPromise();
    }

    /**
     * Create a container
     * @param param the request object
     */
    public containerCreateLibpod(param: ContainersApiContainerCreateLibpodRequest = {}, options?: Configuration): Promise<ContainerCreateResponse> {
        return this.api.containerCreateLibpod(param.create,  options).toPromise();
    }

    /**
     * Delete container
     * Delete container
     * @param param the request object
     */
    public containerDeleteLibpod(param: ContainersApiContainerDeleteLibpodRequest, options?: Configuration): Promise<void | Array<LibpodContainersRmReport>> {
        return this.api.containerDeleteLibpod(param.name, param.depend, param.force, param.ignore, param.timeout, param.v,  options).toPromise();
    }

    /**
     * Quick way to determine if a container exists by name or ID
     * Check if container exists
     * @param param the request object
     */
    public containerExistsLibpod(param: ContainersApiContainerExistsLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerExistsLibpod(param.name,  options).toPromise();
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param param the request object
     */
    public containerExportLibpod(param: ContainersApiContainerExportLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerExportLibpod(param.name,  options).toPromise();
    }

    /**
     * Execute the defined healthcheck and return information about the results
     * Run a container's healthcheck
     * @param param the request object
     */
    public containerHealthcheckLibpod(param: ContainersApiContainerHealthcheckLibpodRequest, options?: Configuration): Promise<HealthCheckResults> {
        return this.api.containerHealthcheckLibpod(param.name,  options).toPromise();
    }

    /**
     * Performs all tasks necessary for initializing the container but does not start the container.
     * Initialize a container
     * @param param the request object
     */
    public containerInitLibpod(param: ContainersApiContainerInitLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerInitLibpod(param.name,  options).toPromise();
    }

    /**
     * Return low-level information about a container.
     * Inspect container
     * @param param the request object
     */
    public containerInspectLibpod(param: ContainersApiContainerInspectLibpodRequest, options?: Configuration): Promise<InspectContainerData> {
        return this.api.containerInspectLibpod(param.name, param.size,  options).toPromise();
    }

    /**
     * send a signal to a container, defaults to killing the container
     * Kill container
     * @param param the request object
     */
    public containerKillLibpod(param: ContainersApiContainerKillLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerKillLibpod(param.name, param.signal,  options).toPromise();
    }

    /**
     * Returns a list of containers
     * List containers
     * @param param the request object
     */
    public containerListLibpod(param: ContainersApiContainerListLibpodRequest = {}, options?: Configuration): Promise<Array<ListContainer>> {
        return this.api.containerListLibpod(param.all, param.limit, param.pod, param.size, param.sync, param.filters,  options).toPromise();
    }

    /**
     * Get stdout and stderr logs from a container.
     * Get container logs
     * @param param the request object
     */
    public containerLogsLibpod(param: ContainersApiContainerLogsLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerLogsLibpod(param.name, param.follow, param.stdout, param.stderr, param.since, param.until, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Mount a container to the filesystem
     * Mount a container
     * @param param the request object
     */
    public containerMountLibpod(param: ContainersApiContainerMountLibpodRequest, options?: Configuration): Promise<string> {
        return this.api.containerMountLibpod(param.name,  options).toPromise();
    }

    /**
     * Use the cgroups freezer to suspend all processes in a container.
     * Pause a container
     * @param param the request object
     */
    public containerPauseLibpod(param: ContainersApiContainerPauseLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerPauseLibpod(param.name,  options).toPromise();
    }

    /**
     * Remove containers not in use
     * Delete stopped containers
     * @param param the request object
     */
    public containerPruneLibpod(param: ContainersApiContainerPruneLibpodRequest = {}, options?: Configuration): Promise<Array<ContainersPruneReportLibpod>> {
        return this.api.containerPruneLibpod(param.filters,  options).toPromise();
    }

    /**
     * Change the name of an existing container.
     * Rename an existing container
     * @param param the request object
     */
    public containerRenameLibpod(param: ContainersApiContainerRenameLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerRenameLibpod(param.name, param.name2,  options).toPromise();
    }

    /**
     * Resize the terminal attached to a container (for use with Attach).
     * Resize a container's TTY
     * @param param the request object
     */
    public containerResizeLibpod(param: ContainersApiContainerResizeLibpodRequest, options?: Configuration): Promise<any> {
        return this.api.containerResizeLibpod(param.name, param.h, param.w,  options).toPromise();
    }

    /**
     * Restart a container
     * @param param the request object
     */
    public containerRestartLibpod(param: ContainersApiContainerRestartLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerRestartLibpod(param.name, param.t,  options).toPromise();
    }

    /**
     * Restore a container from a checkpoint.
     * Restore a container
     * @param param the request object
     */
    public containerRestoreLibpod(param: ContainersApiContainerRestoreLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerRestoreLibpod(param.name, param.name2, param.keep, param.leaveRunning, param.tcpEstablished, param._import, param.ignoreRootFS, param.ignoreStaticIP, param.ignoreStaticMAC, param.printStats,  options).toPromise();
    }

    /**
     * Lists all mounted containers mount points
     * Show mounted containers
     * @param param the request object
     */
    public containerShowMountedLibpod(param: ContainersApiContainerShowMountedLibpodRequest = {}, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.containerShowMountedLibpod( options).toPromise();
    }

    /**
     * Start a container
     * @param param the request object
     */
    public containerStartLibpod(param: ContainersApiContainerStartLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerStartLibpod(param.name, param.detachKeys,  options).toPromise();
    }

    /**
     * DEPRECATED. This endpoint will be removed with the next major release. Please use /libpod/containers/stats instead.
     * Get stats for a container
     * @param param the request object
     */
    public containerStatsLibpod(param: ContainersApiContainerStatsLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerStatsLibpod(param.name, param.stream,  options).toPromise();
    }

    /**
     * Stop a container
     * @param param the request object
     */
    public containerStopLibpod(param: ContainersApiContainerStopLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerStopLibpod(param.name, param.all, param.timeout, param.ignore,  options).toPromise();
    }

    /**
     * List processes running inside a container
     * List processes
     * @param param the request object
     */
    public containerTopLibpod(param: ContainersApiContainerTopLibpodRequest, options?: Configuration): Promise<ContainerTopOKBody> {
        return this.api.containerTopLibpod(param.name, param.stream, param.delay, param.psArgs,  options).toPromise();
    }

    /**
     * Unmount a container from the filesystem
     * Unmount a container
     * @param param the request object
     */
    public containerUnmountLibpod(param: ContainersApiContainerUnmountLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerUnmountLibpod(param.name,  options).toPromise();
    }

    /**
     * Unpause Container
     * @param param the request object
     */
    public containerUnpauseLibpod(param: ContainersApiContainerUnpauseLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerUnpauseLibpod(param.name,  options).toPromise();
    }

    /**
     * Wait on a container to meet a given condition
     * Wait on a container
     * @param param the request object
     */
    public containerWaitLibpod(param: ContainersApiContainerWaitLibpodRequest, options?: Configuration): Promise<number> {
        return this.api.containerWaitLibpod(param.name, param.condition, param.interval,  options).toPromise();
    }

    /**
     * Return a live stream of resource usage statistics of one or more container. If no container is specified, the statistics of all containers are returned.
     * Get stats for one or more containers
     * @param param the request object
     */
    public containersStatsAllLibpod(param: ContainersApiContainersStatsAllLibpodRequest = {}, options?: Configuration): Promise<ContainerStats> {
        return this.api.containersStatsAllLibpod(param.containers, param.stream, param.interval,  options).toPromise();
    }

    /**
     * Generate Kubernetes YAML based on a pod or container.
     * Generate a Kubernetes YAML file.
     * @param param the request object
     */
    public generateKubeLibpod(param: ContainersApiGenerateKubeLibpodRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.generateKubeLibpod(param.names, param.service,  options).toPromise();
    }

    /**
     * Generate Systemd Units based on a pod or container.
     * Generate Systemd Units
     * @param param the request object
     */
    public generateSystemdLibpod(param: ContainersApiGenerateSystemdLibpodRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.generateSystemdLibpod(param.name, param.useName, param._new, param.noHeader, param.startTimeout, param.stopTimeout, param.restartPolicy, param.containerPrefix, param.podPrefix, param.separator, param.restartSec, param.wants, param.after, param.requires,  options).toPromise();
    }

    /**
     * Create a new image from a container
     * Commit
     * @param param the request object
     */
    public imageCommitLibpod(param: ContainersApiImageCommitLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.imageCommitLibpod(param.container, param.repo, param.tag, param.comment, param.author, param.pause, param.changes, param.format,  options).toPromise();
    }

    /**
     * Tears down pods defined in a YAML file
     * Remove pods from play kube
     * @param param the request object
     */
    public playKubeDownLibpod(param: ContainersApiPlayKubeDownLibpodRequest = {}, options?: Configuration): Promise<PlayKubeReport> {
        return this.api.playKubeDownLibpod( options).toPromise();
    }

    /**
     * Create and run pods based on a Kubernetes YAML file (pod or service kind).
     * Play a Kubernetes YAML file.
     * @param param the request object
     */
    public playKubeLibpod(param: ContainersApiPlayKubeLibpodRequest = {}, options?: Configuration): Promise<PlayKubeReport> {
        return this.api.playKubeLibpod(param.network, param.tlsVerify, param.logDriver, param.start, param.staticIPs, param.staticMACs, param.request,  options).toPromise();
    }

    /**
     * Copy a tar archive of files into a container
     * Copy files into a container
     * @param param the request object
     */
    public putContainerArchiveLibpod(param: ContainersApiPutContainerArchiveLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.putContainerArchiveLibpod(param.name, param.path, param.pause, param.request,  options).toPromise();
    }

}

import { ObservableContainersCompatApi } from './ObservableAPI';
import type { ContainersCompatApiRequestFactory, ContainersCompatApiResponseProcessor} from '../apis/ContainersCompatApi';

export interface ContainersCompatApiContainerArchiveRequest {
    /**
     * container name or id
     * @type string
     * @memberof ContainersCompatApicontainerArchive
     */
    name: string
    /**
     * Path to a directory in the container to extract
     * @type string
     * @memberof ContainersCompatApicontainerArchive
     */
    path: string
}

export interface ContainersCompatApiContainerArchiveLibpodRequest {
    /**
     * container name or id
     * @type string
     * @memberof ContainersCompatApicontainerArchiveLibpod
     */
    name: string
    /**
     * Path to a directory in the container to extract
     * @type string
     * @memberof ContainersCompatApicontainerArchiveLibpod
     */
    path: string
    /**
     * JSON encoded map[string]string to translate paths
     * @type string
     * @memberof ContainersCompatApicontainerArchiveLibpod
     */
    rename?: string
}

export interface ContainersCompatApiContainerAttachRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerAttach
     */
    name: string
    /**
     * keys to use for detaching from the container
     * @type string
     * @memberof ContainersCompatApicontainerAttach
     */
    detachKeys?: string
    /**
     * Stream all logs from the container across the connection. Happens before streaming attach (if requested). At least one of logs or stream must be set
     * @type boolean
     * @memberof ContainersCompatApicontainerAttach
     */
    logs?: boolean
    /**
     * Attach to the container. If unset, and logs is set, only the container&#39;s logs will be sent. At least one of stream or logs must be set
     * @type boolean
     * @memberof ContainersCompatApicontainerAttach
     */
    stream?: boolean
    /**
     * Attach to container STDOUT
     * @type boolean
     * @memberof ContainersCompatApicontainerAttach
     */
    stdout?: boolean
    /**
     * Attach to container STDERR
     * @type boolean
     * @memberof ContainersCompatApicontainerAttach
     */
    stderr?: boolean
    /**
     * Attach to container STDIN
     * @type boolean
     * @memberof ContainersCompatApicontainerAttach
     */
    stdin?: boolean
}

export interface ContainersCompatApiContainerChangesLibpodRequest {
    /**
     * the name or id of the container
     * @type string
     * @memberof ContainersCompatApicontainerChangesLibpod
     */
    name: string
    /**
     * specify a second layer which is used to compare against it instead of the parent layer
     * @type string
     * @memberof ContainersCompatApicontainerChangesLibpod
     */
    parent?: string
    /**
     * select what you want to match, default is all
     * @type &#39;all&#39; | &#39;container&#39; | &#39;image&#39;
     * @memberof ContainersCompatApicontainerChangesLibpod
     */
    diffType?: 'all' | 'container' | 'image'
}

export interface ContainersCompatApiContainerCreateRequest {
    /**
     * Container to create
     * @type CreateContainerConfig
     * @memberof ContainersCompatApicontainerCreate
     */
    body: CreateContainerConfig
    /**
     * container name
     * @type string
     * @memberof ContainersCompatApicontainerCreate
     */
    name?: string
}

export interface ContainersCompatApiContainerDeleteRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerDelete
     */
    name: string
    /**
     * If the container is running, kill it before removing it.
     * @type boolean
     * @memberof ContainersCompatApicontainerDelete
     */
    force?: boolean
    /**
     * Remove the volumes associated with the container.
     * @type boolean
     * @memberof ContainersCompatApicontainerDelete
     */
    v?: boolean
    /**
     * not supported
     * @type boolean
     * @memberof ContainersCompatApicontainerDelete
     */
    link?: boolean
}

export interface ContainersCompatApiContainerExportRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerExport
     */
    name: string
}

export interface ContainersCompatApiContainerInspectRequest {
    /**
     * the name or id of the container
     * @type string
     * @memberof ContainersCompatApicontainerInspect
     */
    name: string
    /**
     * include the size of the container
     * @type boolean
     * @memberof ContainersCompatApicontainerInspect
     */
    size?: boolean
}

export interface ContainersCompatApiContainerKillRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerKill
     */
    name: string
    /**
     * Send kill signal to all containers
     * @type boolean
     * @memberof ContainersCompatApicontainerKill
     */
    all?: boolean
    /**
     * signal to be sent to container
     * @type string
     * @memberof ContainersCompatApicontainerKill
     */
    signal?: string
}

export interface ContainersCompatApiContainerListRequest {
    /**
     * Return all containers. By default, only running containers are shown
     * @type boolean
     * @memberof ContainersCompatApicontainerList
     */
    all?: boolean
    /**
     * Return containers in storage not controlled by Podman
     * @type boolean
     * @memberof ContainersCompatApicontainerList
     */
    external?: boolean
    /**
     * Return this number of most recently created containers, including non-running ones.
     * @type number
     * @memberof ContainersCompatApicontainerList
     */
    limit?: number
    /**
     * Return the size of container as fields SizeRw and SizeRootFs.
     * @type boolean
     * @memberof ContainersCompatApicontainerList
     */
    size?: boolean
    /**
     * Returns a list of containers.  - ancestor&#x3D;(&lt;image-name&gt;[:&lt;tag&gt;], &lt;image id&gt;, or &lt;image@digest&gt;)  - before&#x3D;(&lt;container id&gt; or &lt;container name&gt;)  - expose&#x3D;(&lt;port&gt;[/&lt;proto&gt;]|&lt;startport-endport&gt;/[&lt;proto&gt;])  - exited&#x3D;&lt;int&gt; containers with exit code of &lt;int&gt;  - health&#x3D;(starting|healthy|unhealthy|none)  - id&#x3D;&lt;ID&gt; a container&#39;s ID  - is-task&#x3D;(true|false)  - label&#x3D;key or label&#x3D;\&quot;key&#x3D;value\&quot; of a container label  - name&#x3D;&lt;name&gt; a container&#39;s name  - network&#x3D;(&lt;network id&gt; or &lt;network name&gt;)  - publish&#x3D;(&lt;port&gt;[/&lt;proto&gt;]|&lt;startport-endport&gt;/[&lt;proto&gt;])  - since&#x3D;(&lt;container id&gt; or &lt;container name&gt;)  - status&#x3D;(created|restarting|running|removing|paused|exited|dead)  - volume&#x3D;(&lt;volume name&gt; or &lt;mount point destination&gt;) 
     * @type string
     * @memberof ContainersCompatApicontainerList
     */
    filters?: string
}

export interface ContainersCompatApiContainerLogsRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerLogs
     */
    name: string
    /**
     * Keep connection after returning logs.
     * @type boolean
     * @memberof ContainersCompatApicontainerLogs
     */
    follow?: boolean
    /**
     * Return logs from stdout
     * @type boolean
     * @memberof ContainersCompatApicontainerLogs
     */
    stdout?: boolean
    /**
     * Return logs from stderr
     * @type boolean
     * @memberof ContainersCompatApicontainerLogs
     */
    stderr?: boolean
    /**
     * Only return logs since this time, as a UNIX timestamp
     * @type string
     * @memberof ContainersCompatApicontainerLogs
     */
    since?: string
    /**
     * Only return logs before this time, as a UNIX timestamp
     * @type string
     * @memberof ContainersCompatApicontainerLogs
     */
    until?: string
    /**
     * Add timestamps to every log line
     * @type boolean
     * @memberof ContainersCompatApicontainerLogs
     */
    timestamps?: boolean
    /**
     * Only return this number of log lines from the end of the logs
     * @type string
     * @memberof ContainersCompatApicontainerLogs
     */
    tail?: string
}

export interface ContainersCompatApiContainerPauseRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerPause
     */
    name: string
}

export interface ContainersCompatApiContainerPruneRequest {
    /**
     * Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * @type string
     * @memberof ContainersCompatApicontainerPrune
     */
    filters?: string
}

export interface ContainersCompatApiContainerRenameRequest {
    /**
     * Full or partial ID or full name of the container to rename
     * @type string
     * @memberof ContainersCompatApicontainerRename
     */
    name: string
    /**
     * New name for the container
     * @type string
     * @memberof ContainersCompatApicontainerRename
     */
    name2: string
}

export interface ContainersCompatApiContainerResizeRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerResize
     */
    name: string
    /**
     * Height to set for the terminal, in characters
     * @type number
     * @memberof ContainersCompatApicontainerResize
     */
    h?: number
    /**
     * Width to set for the terminal, in characters
     * @type number
     * @memberof ContainersCompatApicontainerResize
     */
    w?: number
    /**
     * Ignore containers not running errors
     * @type boolean
     * @memberof ContainersCompatApicontainerResize
     */
    running?: boolean
}

export interface ContainersCompatApiContainerRestartRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerRestart
     */
    name: string
    /**
     * timeout before sending kill signal to container
     * @type number
     * @memberof ContainersCompatApicontainerRestart
     */
    t?: number
}

export interface ContainersCompatApiContainerStartRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerStart
     */
    name: string
    /**
     * Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-&lt;value&gt; where &lt;value&gt; is one of: a-z, @, ^, [, , or _.
     * @type string
     * @memberof ContainersCompatApicontainerStart
     */
    detachKeys?: string
}

export interface ContainersCompatApiContainerStatsRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerStats
     */
    name: string
    /**
     * Stream the output
     * @type boolean
     * @memberof ContainersCompatApicontainerStats
     */
    stream?: boolean
    /**
     * Provide a one-shot response in which preCPU stats are blank, resulting in a single cycle return.
     * @type boolean
     * @memberof ContainersCompatApicontainerStats
     */
    oneShot?: boolean
}

export interface ContainersCompatApiContainerStopRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerStop
     */
    name: string
    /**
     * number of seconds to wait before killing container
     * @type number
     * @memberof ContainersCompatApicontainerStop
     */
    t?: number
}

export interface ContainersCompatApiContainerTopRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerTop
     */
    name: string
    /**
     * arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used.
     * @type string
     * @memberof ContainersCompatApicontainerTop
     */
    psArgs?: string
}

export interface ContainersCompatApiContainerUnpauseRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerUnpause
     */
    name: string
}

export interface ContainersCompatApiContainerWaitRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ContainersCompatApicontainerWait
     */
    name: string
    /**
     * wait until container is to a given condition. default is stopped. valid conditions are:   - configured   - created   - exited   - paused   - running   - stopped 
     * @type string
     * @memberof ContainersCompatApicontainerWait
     */
    condition?: string
    /**
     * Time Interval to wait before polling for completion.
     * @type string
     * @memberof ContainersCompatApicontainerWait
     */
    interval?: string
}

export interface ContainersCompatApiImageCommitRequest {
    /**
     * the name or ID of a container
     * @type string
     * @memberof ContainersCompatApiimageCommit
     */
    container?: string
    /**
     * the repository name for the created image
     * @type string
     * @memberof ContainersCompatApiimageCommit
     */
    repo?: string
    /**
     * tag name for the created image
     * @type string
     * @memberof ContainersCompatApiimageCommit
     */
    tag?: string
    /**
     * commit message
     * @type string
     * @memberof ContainersCompatApiimageCommit
     */
    comment?: string
    /**
     * author of the image
     * @type string
     * @memberof ContainersCompatApiimageCommit
     */
    author?: string
    /**
     * pause the container before committing it
     * @type boolean
     * @memberof ContainersCompatApiimageCommit
     */
    pause?: boolean
    /**
     * instructions to apply while committing in Dockerfile format
     * @type string
     * @memberof ContainersCompatApiimageCommit
     */
    changes?: string
    /**
     * squash newly built layers into a single new layer
     * @type boolean
     * @memberof ContainersCompatApiimageCommit
     */
    squash?: boolean
}

export interface ContainersCompatApiPutContainerArchiveRequest {
    /**
     * container name or id
     * @type string
     * @memberof ContainersCompatApiputContainerArchive
     */
    name: string
    /**
     * Path to a directory in the container to extract
     * @type string
     * @memberof ContainersCompatApiputContainerArchive
     */
    path: string
    /**
     * if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa (1 or true)
     * @type string
     * @memberof ContainersCompatApiputContainerArchive
     */
    noOverwriteDirNonDir?: string
    /**
     * copy UID/GID maps to the dest file or di (1 or true)
     * @type string
     * @memberof ContainersCompatApiputContainerArchive
     */
    copyUIDGID?: string
    /**
     * tarfile of files to copy into the container
     * @type string
     * @memberof ContainersCompatApiputContainerArchive
     */
    request?: string
}

export class ObjectContainersCompatApi {
    private api: ObservableContainersCompatApi;

    public constructor(configuration: Configuration, requestFactory?: ContainersCompatApiRequestFactory, responseProcessor?: ContainersCompatApiResponseProcessor) {
        this.api = new ObservableContainersCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a tar archive of files from a container
     * Get files from a container
     * @param param the request object
     */
    public containerArchive(param: ContainersCompatApiContainerArchiveRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.containerArchive(param.name, param.path,  options).toPromise();
    }

    /**
     * Copy a tar archive of files from a container
     * Copy files from a container
     * @param param the request object
     */
    public containerArchiveLibpod(param: ContainersCompatApiContainerArchiveLibpodRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.containerArchiveLibpod(param.name, param.path, param.rename,  options).toPromise();
    }

    /**
     * Hijacks the connection to forward the container's standard streams to the client.
     * Attach to a container
     * @param param the request object
     */
    public containerAttach(param: ContainersCompatApiContainerAttachRequest, options?: Configuration): Promise<void> {
        return this.api.containerAttach(param.name, param.detachKeys, param.logs, param.stream, param.stdout, param.stderr, param.stdin,  options).toPromise();
    }

    /**
     * Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 
     * Report on changes to container's filesystem; adds, deletes or modifications.
     * @param param the request object
     */
    public containerChangesLibpod(param: ContainersCompatApiContainerChangesLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerChangesLibpod(param.name, param.parent, param.diffType,  options).toPromise();
    }

    /**
     * Create a container
     * @param param the request object
     */
    public containerCreate(param: ContainersCompatApiContainerCreateRequest, options?: Configuration): Promise<ContainerCreateResponse> {
        return this.api.containerCreate(param.body, param.name,  options).toPromise();
    }

    /**
     * Remove a container
     * @param param the request object
     */
    public containerDelete(param: ContainersCompatApiContainerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.containerDelete(param.name, param.force, param.v, param.link,  options).toPromise();
    }

    /**
     * Export the contents of a container as a tarball.
     * Export a container
     * @param param the request object
     */
    public containerExport(param: ContainersCompatApiContainerExportRequest, options?: Configuration): Promise<void> {
        return this.api.containerExport(param.name,  options).toPromise();
    }

    /**
     * Return low-level information about a container.
     * Inspect container
     * @param param the request object
     */
    public containerInspect(param: ContainersCompatApiContainerInspectRequest, options?: Configuration): Promise<ContainerJSON> {
        return this.api.containerInspect(param.name, param.size,  options).toPromise();
    }

    /**
     * Signal to send to the container as an integer or string (e.g. SIGINT)
     * Kill container
     * @param param the request object
     */
    public containerKill(param: ContainersCompatApiContainerKillRequest, options?: Configuration): Promise<void> {
        return this.api.containerKill(param.name, param.all, param.signal,  options).toPromise();
    }

    /**
     * Returns a list of containers
     * List containers
     * @param param the request object
     */
    public containerList(param: ContainersCompatApiContainerListRequest = {}, options?: Configuration): Promise<Array<Container>> {
        return this.api.containerList(param.all, param.external, param.limit, param.size, param.filters,  options).toPromise();
    }

    /**
     * Get stdout and stderr logs from a container.
     * Get container logs
     * @param param the request object
     */
    public containerLogs(param: ContainersCompatApiContainerLogsRequest, options?: Configuration): Promise<void> {
        return this.api.containerLogs(param.name, param.follow, param.stdout, param.stderr, param.since, param.until, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Use the cgroups freezer to suspend all processes in a container.
     * Pause container
     * @param param the request object
     */
    public containerPause(param: ContainersCompatApiContainerPauseRequest, options?: Configuration): Promise<void> {
        return this.api.containerPause(param.name,  options).toPromise();
    }

    /**
     * Remove containers not in use
     * Delete stopped containers
     * @param param the request object
     */
    public containerPrune(param: ContainersCompatApiContainerPruneRequest = {}, options?: Configuration): Promise<Array<ContainersPruneReport>> {
        return this.api.containerPrune(param.filters,  options).toPromise();
    }

    /**
     * Change the name of an existing container.
     * Rename an existing container
     * @param param the request object
     */
    public containerRename(param: ContainersCompatApiContainerRenameRequest, options?: Configuration): Promise<void> {
        return this.api.containerRename(param.name, param.name2,  options).toPromise();
    }

    /**
     * Resize the terminal attached to a container (for use with Attach).
     * Resize a container's TTY
     * @param param the request object
     */
    public containerResize(param: ContainersCompatApiContainerResizeRequest, options?: Configuration): Promise<any> {
        return this.api.containerResize(param.name, param.h, param.w, param.running,  options).toPromise();
    }

    /**
     * Restart container
     * @param param the request object
     */
    public containerRestart(param: ContainersCompatApiContainerRestartRequest, options?: Configuration): Promise<void> {
        return this.api.containerRestart(param.name, param.t,  options).toPromise();
    }

    /**
     * Start a container
     * @param param the request object
     */
    public containerStart(param: ContainersCompatApiContainerStartRequest, options?: Configuration): Promise<void> {
        return this.api.containerStart(param.name, param.detachKeys,  options).toPromise();
    }

    /**
     * This returns a live stream of a container’s resource usage statistics.
     * Get stats for a container
     * @param param the request object
     */
    public containerStats(param: ContainersCompatApiContainerStatsRequest, options?: Configuration): Promise<any> {
        return this.api.containerStats(param.name, param.stream, param.oneShot,  options).toPromise();
    }

    /**
     * Stop a container
     * Stop a container
     * @param param the request object
     */
    public containerStop(param: ContainersCompatApiContainerStopRequest, options?: Configuration): Promise<void> {
        return this.api.containerStop(param.name, param.t,  options).toPromise();
    }

    /**
     * List processes running inside a container
     * @param param the request object
     */
    public containerTop(param: ContainersCompatApiContainerTopRequest, options?: Configuration): Promise<ContainerTopOKBody> {
        return this.api.containerTop(param.name, param.psArgs,  options).toPromise();
    }

    /**
     * Resume a paused container
     * Unpause container
     * @param param the request object
     */
    public containerUnpause(param: ContainersCompatApiContainerUnpauseRequest, options?: Configuration): Promise<void> {
        return this.api.containerUnpause(param.name,  options).toPromise();
    }

    /**
     * Block until a container stops or given condition is met.
     * Wait on a container
     * @param param the request object
     */
    public containerWait(param: ContainersCompatApiContainerWaitRequest, options?: Configuration): Promise<ContainerWait200Response> {
        return this.api.containerWait(param.name, param.condition, param.interval,  options).toPromise();
    }

    /**
     * Create a new image from a container
     * New Image
     * @param param the request object
     */
    public imageCommit(param: ContainersCompatApiImageCommitRequest = {}, options?: Configuration): Promise<void> {
        return this.api.imageCommit(param.container, param.repo, param.tag, param.comment, param.author, param.pause, param.changes, param.squash,  options).toPromise();
    }

    /**
     * Put a tar archive of files into a container
     * Put files into a container
     * @param param the request object
     */
    public putContainerArchive(param: ContainersCompatApiPutContainerArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.putContainerArchive(param.name, param.path, param.noOverwriteDirNonDir, param.copyUIDGID, param.request,  options).toPromise();
    }

}

import { ObservableExecApi } from './ObservableAPI';
import type { ExecApiRequestFactory, ExecApiResponseProcessor} from '../apis/ExecApi';

export interface ExecApiContainerExecLibpodRequest {
    /**
     * name of container
     * @type string
     * @memberof ExecApicontainerExecLibpod
     */
    name: string
    /**
     * Attributes for create
     * @type ContainerExecRequest
     * @memberof ExecApicontainerExecLibpod
     */
    control?: ContainerExecRequest
}

export interface ExecApiExecInspectLibpodRequest {
    /**
     * Exec instance ID
     * @type string
     * @memberof ExecApiexecInspectLibpod
     */
    id: string
}

export interface ExecApiExecResizeLibpodRequest {
    /**
     * Exec instance ID
     * @type string
     * @memberof ExecApiexecResizeLibpod
     */
    id: string
    /**
     * Height of the TTY session in characters
     * @type number
     * @memberof ExecApiexecResizeLibpod
     */
    h?: number
    /**
     * Width of the TTY session in characters
     * @type number
     * @memberof ExecApiexecResizeLibpod
     */
    w?: number
}

export interface ExecApiExecStartLibpodRequest {
    /**
     * Exec instance ID
     * @type string
     * @memberof ExecApiexecStartLibpod
     */
    id: string
    /**
     * Attributes for start
     * @type ExecStartLibpodRequest
     * @memberof ExecApiexecStartLibpod
     */
    control?: ExecStartLibpodRequest
}

export class ObjectExecApi {
    private api: ObservableExecApi;

    public constructor(configuration: Configuration, requestFactory?: ExecApiRequestFactory, responseProcessor?: ExecApiResponseProcessor) {
        this.api = new ObservableExecApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.
     * Create an exec instance
     * @param param the request object
     */
    public containerExecLibpod(param: ExecApiContainerExecLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.containerExecLibpod(param.name, param.control,  options).toPromise();
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param param the request object
     */
    public execInspectLibpod(param: ExecApiExecInspectLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.execInspectLibpod(param.id,  options).toPromise();
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param param the request object
     */
    public execResizeLibpod(param: ExecApiExecResizeLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.execResizeLibpod(param.id, param.h, param.w,  options).toPromise();
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.
     * Start an exec instance
     * @param param the request object
     */
    public execStartLibpod(param: ExecApiExecStartLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.execStartLibpod(param.id, param.control,  options).toPromise();
    }

}

import { ObservableExecCompatApi } from './ObservableAPI';
import type { ExecCompatApiRequestFactory, ExecCompatApiResponseProcessor} from '../apis/ExecCompatApi';

export interface ExecCompatApiContainerExecRequest {
    /**
     * name of container
     * @type string
     * @memberof ExecCompatApicontainerExec
     */
    name: string
    /**
     * Attributes for create
     * @type ContainerExecRequest
     * @memberof ExecCompatApicontainerExec
     */
    control?: ContainerExecRequest
}

export interface ExecCompatApiExecInspectRequest {
    /**
     * Exec instance ID
     * @type string
     * @memberof ExecCompatApiexecInspect
     */
    id: string
}

export interface ExecCompatApiExecResizeRequest {
    /**
     * Exec instance ID
     * @type string
     * @memberof ExecCompatApiexecResize
     */
    id: string
    /**
     * Height of the TTY session in characters
     * @type number
     * @memberof ExecCompatApiexecResize
     */
    h?: number
    /**
     * Width of the TTY session in characters
     * @type number
     * @memberof ExecCompatApiexecResize
     */
    w?: number
    /**
     * Ignore containers not running errors
     * @type boolean
     * @memberof ExecCompatApiexecResize
     */
    running?: boolean
}

export interface ExecCompatApiExecStartRequest {
    /**
     * Exec instance ID
     * @type string
     * @memberof ExecCompatApiexecStart
     */
    id: string
    /**
     * Attributes for start
     * @type ExecStartRequest
     * @memberof ExecCompatApiexecStart
     */
    control?: ExecStartRequest
}

export class ObjectExecCompatApi {
    private api: ObservableExecCompatApi;

    public constructor(configuration: Configuration, requestFactory?: ExecCompatApiRequestFactory, responseProcessor?: ExecCompatApiResponseProcessor) {
        this.api = new ObservableExecCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.
     * Create an exec instance
     * @param param the request object
     */
    public containerExec(param: ExecCompatApiContainerExecRequest, options?: Configuration): Promise<void> {
        return this.api.containerExec(param.name, param.control,  options).toPromise();
    }

    /**
     * Return low-level information about an exec instance.
     * Inspect an exec instance
     * @param param the request object
     */
    public execInspect(param: ExecCompatApiExecInspectRequest, options?: Configuration): Promise<InspectExecSession> {
        return this.api.execInspect(param.id,  options).toPromise();
    }

    /**
     * Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance. 
     * Resize an exec instance
     * @param param the request object
     */
    public execResize(param: ExecCompatApiExecResizeRequest, options?: Configuration): Promise<void> {
        return this.api.execResize(param.id, param.h, param.w, param.running,  options).toPromise();
    }

    /**
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.
     * Start an exec instance
     * @param param the request object
     */
    public execStart(param: ExecCompatApiExecStartRequest, options?: Configuration): Promise<void> {
        return this.api.execStart(param.id, param.control,  options).toPromise();
    }

}

import { ObservableImagesApi } from './ObservableAPI';
import type { ImagesApiRequestFactory, ImagesApiResponseProcessor} from '../apis/ImagesApi';

export interface ImagesApiImageBuildLibpodRequest {
    /**
     * Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if remote is specified and points to an external &#x60;Dockerfile&#x60;. 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    dockerfile?: string
    /**
     * A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format.  If you omit the tag the default latest value is assumed. You can provide several t parameters.
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    t?: string
    /**
     * Instead of building for a set of platforms specified using the platform option, inspect the build&#39;s base images, and build for all of the platforms that are available.  Stages that use *scratch* as a starting point can not be inspected, so at least one non-*scratch* stage must be present for detection to work usefully. 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    allplatforms?: boolean
    /**
     * TBD Extra hosts to add to /etc/hosts (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    extrahosts?: string
    /**
     * A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called Dockerfile and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path inside the tarball. (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    remote?: string
    /**
     * Suppress verbose build output 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    q?: boolean
    /**
     * Do not use the cache when building the image (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    nocache?: boolean
    /**
     * JSON array of images used to build cache resolution (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    cachefrom?: string
    /**
     * Attempt to pull the image even if an older image exists locally (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    pull?: boolean
    /**
     * Remove intermediate containers after a successful build (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    rm?: boolean
    /**
     * Always remove intermediate containers, even upon failure (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    forcerm?: boolean
    /**
     * Memory is the upper limit (in bytes) on how much memory running containers can use (As of version 1.xx) 
     * @type number
     * @memberof ImagesApiimageBuildLibpod
     */
    memory?: number
    /**
     * MemorySwap limits the amount of memory and swap together (As of version 1.xx) 
     * @type number
     * @memberof ImagesApiimageBuildLibpod
     */
    memswap?: number
    /**
     * CPUShares (relative weight (As of version 1.xx) 
     * @type number
     * @memberof ImagesApiimageBuildLibpod
     */
    cpushares?: number
    /**
     * CPUSetCPUs in which to allow execution (0-3, 0,1) (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    cpusetcpus?: string
    /**
     * CPUPeriod limits the CPU CFS (Completely Fair Scheduler) period (As of version 1.xx) 
     * @type number
     * @memberof ImagesApiimageBuildLibpod
     */
    cpuperiod?: number
    /**
     * CPUQuota limits the CPU CFS (Completely Fair Scheduler) quota (As of version 1.xx) 
     * @type number
     * @memberof ImagesApiimageBuildLibpod
     */
    cpuquota?: number
    /**
     * JSON map of string pairs denoting build-time variables. For example, the build argument &#x60;Foo&#x60; with the value of &#x60;bar&#x60; would be encoded in JSON as &#x60;[\&quot;Foo\&quot;:\&quot;bar\&quot;]&#x60;.  For example, buildargs&#x3D;{\&quot;Foo\&quot;:\&quot;bar\&quot;}.  Note(s): * This should not be used to pass secrets. * The value of buildargs should be URI component encoded before being passed to the API.  (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    buildargs?: string
    /**
     * ShmSize is the \&quot;size\&quot; value to use when mounting an shmfs on the container&#39;s /dev/shm directory. Default is 64MB (As of version 1.xx) 
     * @type number
     * @memberof ImagesApiimageBuildLibpod
     */
    shmsize?: number
    /**
     * Silently ignored. Squash the resulting images layers into a single layer (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    squash?: boolean
    /**
     * JSON map of key, value pairs to set as labels on the new image (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    labels?: string
    /**
     * Cache intermediate layers during build. (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    layers?: boolean
    /**
     * Sets the networking mode for the run commands during build. Supported standard values are:   * &#x60;bridge&#x60; limited to containers within a single host, port mapping required for external access   * &#x60;host&#x60; no isolation between host and containers on this network   * &#x60;none&#x60; disable all networking for this container   * container:&lt;nameOrID&gt; share networking with given container   ---All other values are assumed to be a custom network&#39;s name (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    networkmode?: string
    /**
     * Platform format os[/arch[/variant]] (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    platform?: string
    /**
     * Target build stage (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    target?: string
    /**
     * output configuration TBD (As of version 1.xx) 
     * @type string
     * @memberof ImagesApiimageBuildLibpod
     */
    outputs?: string
    /**
     * Inject http proxy environment variables into container (As of version 2.0.0) 
     * @type boolean
     * @memberof ImagesApiimageBuildLibpod
     */
    httpproxy?: boolean
    /**
     * Unset environment variables from the final image.
     * @type Array&lt;string&gt;
     * @memberof ImagesApiimageBuildLibpod
     */
    unsetenv?: Array<string>
}

export interface ImagesApiImageChangesLibpodRequest {
    /**
     * the name or id of the image
     * @type string
     * @memberof ImagesApiimageChangesLibpod
     */
    name: string
    /**
     * specify a second layer which is used to compare against it instead of the parent layer
     * @type string
     * @memberof ImagesApiimageChangesLibpod
     */
    parent?: string
    /**
     * select what you want to match, default is all
     * @type &#39;all&#39; | &#39;container&#39; | &#39;image&#39;
     * @memberof ImagesApiimageChangesLibpod
     */
    diffType?: 'all' | 'container' | 'image'
}

export interface ImagesApiImageDeleteAllLibpodRequest {
    /**
     * Images IDs or names to remove.
     * @type Array&lt;string&gt;
     * @memberof ImagesApiimageDeleteAllLibpod
     */
    images?: Array<string>
    /**
     * Remove all images.
     * @type boolean
     * @memberof ImagesApiimageDeleteAllLibpod
     */
    all?: boolean
    /**
     * Force image removal (including containers using the images).
     * @type boolean
     * @memberof ImagesApiimageDeleteAllLibpod
     */
    force?: boolean
    /**
     * Ignore if a specified image does not exist and do not throw an error.
     * @type boolean
     * @memberof ImagesApiimageDeleteAllLibpod
     */
    ignore?: boolean
}

export interface ImagesApiImageDeleteLibpodRequest {
    /**
     * name or ID of image to remove
     * @type string
     * @memberof ImagesApiimageDeleteLibpod
     */
    name: string
    /**
     * remove the image even if used by containers or has other tags
     * @type boolean
     * @memberof ImagesApiimageDeleteLibpod
     */
    force?: boolean
}

export interface ImagesApiImageExistsLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesApiimageExistsLibpod
     */
    name: string
}

export interface ImagesApiImageExportLibpodRequest {
    /**
     * format for exported image (only docker-archive is supported)
     * @type string
     * @memberof ImagesApiimageExportLibpod
     */
    format?: string
    /**
     * references to images to export
     * @type Array&lt;string&gt;
     * @memberof ImagesApiimageExportLibpod
     */
    references?: Array<string>
    /**
     * use compression on image
     * @type boolean
     * @memberof ImagesApiimageExportLibpod
     */
    compress?: boolean
    /**
     * accept uncompressed layers when copying OCI images
     * @type boolean
     * @memberof ImagesApiimageExportLibpod
     */
    ociAcceptUncompressedLayers?: boolean
}

export interface ImagesApiImageGetLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesApiimageGetLibpod
     */
    name: string
    /**
     * format for exported image
     * @type string
     * @memberof ImagesApiimageGetLibpod
     */
    format?: string
    /**
     * use compression on image
     * @type boolean
     * @memberof ImagesApiimageGetLibpod
     */
    compress?: boolean
}

export interface ImagesApiImageHistoryLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesApiimageHistoryLibpod
     */
    name: string
}

export interface ImagesApiImageImportLibpodRequest {
    /**
     * tarball for imported image
     * @type HttpFile
     * @memberof ImagesApiimageImportLibpod
     */
    upload: HttpFile
    /**
     * 
     * @type &#39;application/x-tar&#39;
     * @memberof ImagesApiimageImportLibpod
     */
    contentType?: 'application/x-tar'
    /**
     * Apply the following possible instructions to the created image: CMD | ENTRYPOINT | ENV | EXPOSE | LABEL | STOPSIGNAL | USER | VOLUME | WORKDIR.  JSON encoded string
     * @type Array&lt;string&gt;
     * @memberof ImagesApiimageImportLibpod
     */
    changes?: Array<string>
    /**
     * Set commit message for imported image
     * @type string
     * @memberof ImagesApiimageImportLibpod
     */
    message?: string
    /**
     * Optional Name[:TAG] for the image
     * @type string
     * @memberof ImagesApiimageImportLibpod
     */
    reference?: string
    /**
     * Load image from the specified URL
     * @type string
     * @memberof ImagesApiimageImportLibpod
     */
    url?: string
}

export interface ImagesApiImageInspectLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesApiimageInspectLibpod
     */
    name: string
}

export interface ImagesApiImageListLibpodRequest {
    /**
     * Show all images. Only images from a final layer (no children) are shown by default.
     * @type boolean
     * @memberof ImagesApiimageListLibpod
     */
    all?: boolean
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;id&#x60;&#x3D;(&#x60;&lt;image-id&gt;&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) 
     * @type string
     * @memberof ImagesApiimageListLibpod
     */
    filters?: string
}

export interface ImagesApiImageLoadLibpodRequest {
    /**
     * tarball of container image
     * @type string
     * @memberof ImagesApiimageLoadLibpod
     */
    upload: string
}

export interface ImagesApiImagePruneLibpodRequest {
    /**
     * Remove all images not in use by containers, not just dangling ones 
     * @type boolean
     * @memberof ImagesApiimagePruneLibpod
     */
    all?: boolean
    /**
     * Remove images even when they are used by external containers (e.g, by build containers) 
     * @type boolean
     * @memberof ImagesApiimagePruneLibpod
     */
    external?: boolean
    /**
     * filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only      unused *and* untagged images. When set to &#x60;false&#x60;      (or &#x60;0&#x60;), all unused images are pruned.   - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * @type string
     * @memberof ImagesApiimagePruneLibpod
     */
    filters?: string
}

export interface ImagesApiImagePullLibpodRequest {
    /**
     * Mandatory reference to the image (e.g., quay.io/image/name:tag)
     * @type string
     * @memberof ImagesApiimagePullLibpod
     */
    reference?: string
    /**
     * silences extra stream data on pull
     * @type boolean
     * @memberof ImagesApiimagePullLibpod
     */
    quiet?: boolean
    /**
     * username:password for the registry
     * @type string
     * @memberof ImagesApiimagePullLibpod
     */
    credentials?: string
    /**
     * Pull image for the specified architecture.
     * @type string
     * @memberof ImagesApiimagePullLibpod
     */
    arch?: string
    /**
     * Pull image for the specified operating system.
     * @type string
     * @memberof ImagesApiimagePullLibpod
     */
    OS?: string
    /**
     * Pull image for the specified variant.
     * @type string
     * @memberof ImagesApiimagePullLibpod
     */
    variant?: string
    /**
     * Pull policy, \&quot;always\&quot; (default), \&quot;missing\&quot;, \&quot;newer\&quot;, \&quot;never\&quot;.
     * @type string
     * @memberof ImagesApiimagePullLibpod
     */
    policy?: string
    /**
     * Require TLS verification.
     * @type boolean
     * @memberof ImagesApiimagePullLibpod
     */
    tlsVerify?: boolean
    /**
     * Pull all tagged images in the repository.
     * @type boolean
     * @memberof ImagesApiimagePullLibpod
     */
    allTags?: boolean
    /**
     * base-64 encoded auth config. Must include the following four values: username, password, email and server address OR simply just an identity token.
     * @type string
     * @memberof ImagesApiimagePullLibpod
     */
    xRegistryAuth?: string
}

export interface ImagesApiImagePushLibpodRequest {
    /**
     * Name of image to push.
     * @type string
     * @memberof ImagesApiimagePushLibpod
     */
    name: string
    /**
     * Allows for pushing the image to a different destination than the image refers to.
     * @type string
     * @memberof ImagesApiimagePushLibpod
     */
    destination?: string
    /**
     * Require TLS verification.
     * @type boolean
     * @memberof ImagesApiimagePushLibpod
     */
    tlsVerify?: boolean
    /**
     * A base64-encoded auth configuration.
     * @type string
     * @memberof ImagesApiimagePushLibpod
     */
    xRegistryAuth?: string
}

export interface ImagesApiImageSearchLibpodRequest {
    /**
     * term to search
     * @type string
     * @memberof ImagesApiimageSearchLibpod
     */
    term?: string
    /**
     * maximum number of results
     * @type number
     * @memberof ImagesApiimageSearchLibpod
     */
    limit?: number
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;is-automated&#x3D;(true|false)&#x60; - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least &#39;number&#39; stars. 
     * @type string
     * @memberof ImagesApiimageSearchLibpod
     */
    filters?: string
    /**
     * skip TLS verification for registries
     * @type boolean
     * @memberof ImagesApiimageSearchLibpod
     */
    tlsVerify?: boolean
    /**
     * list the available tags in the repository
     * @type boolean
     * @memberof ImagesApiimageSearchLibpod
     */
    listTags?: boolean
}

export interface ImagesApiImageTagLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesApiimageTagLibpod
     */
    name: string
    /**
     * the repository to tag in
     * @type string
     * @memberof ImagesApiimageTagLibpod
     */
    repo?: string
    /**
     * the name of the new tag
     * @type string
     * @memberof ImagesApiimageTagLibpod
     */
    tag?: string
}

export interface ImagesApiImageTreeLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesApiimageTreeLibpod
     */
    name: string
    /**
     * show all child images and layers of the specified image
     * @type boolean
     * @memberof ImagesApiimageTreeLibpod
     */
    whatrequires?: boolean
}

export interface ImagesApiImageUntagLibpodRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesApiimageUntagLibpod
     */
    name: string
    /**
     * the repository to untag
     * @type string
     * @memberof ImagesApiimageUntagLibpod
     */
    repo?: string
    /**
     * the name of the tag to untag
     * @type string
     * @memberof ImagesApiimageUntagLibpod
     */
    tag?: string
}

export class ObjectImagesApi {
    private api: ObservableImagesApi;

    public constructor(configuration: Configuration, requestFactory?: ImagesApiRequestFactory, responseProcessor?: ImagesApiResponseProcessor) {
        this.api = new ObservableImagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Build an image from the given Dockerfile(s)
     * Create image
     * @param param the request object
     */
    public imageBuildLibpod(param: ImagesApiImageBuildLibpodRequest = {}, options?: Configuration): Promise<ImageBuildLibpod200Response> {
        return this.api.imageBuildLibpod(param.dockerfile, param.t, param.allplatforms, param.extrahosts, param.remote, param.q, param.nocache, param.cachefrom, param.pull, param.rm, param.forcerm, param.memory, param.memswap, param.cpushares, param.cpusetcpus, param.cpuperiod, param.cpuquota, param.buildargs, param.shmsize, param.squash, param.labels, param.layers, param.networkmode, param.platform, param.target, param.outputs, param.httpproxy, param.unsetenv,  options).toPromise();
    }

    /**
     * Returns which files in a images's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 
     * Report on changes to images's filesystem; adds, deletes or modifications.
     * @param param the request object
     */
    public imageChangesLibpod(param: ImagesApiImageChangesLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.imageChangesLibpod(param.name, param.parent, param.diffType,  options).toPromise();
    }

    /**
     * Remove one or more images from the storage.
     * Remove one or more images from the storage.
     * @param param the request object
     */
    public imageDeleteAllLibpod(param: ImagesApiImageDeleteAllLibpodRequest = {}, options?: Configuration): Promise<LibpodImagesRemoveReport> {
        return this.api.imageDeleteAllLibpod(param.images, param.all, param.force, param.ignore,  options).toPromise();
    }

    /**
     * Remove an image from the local storage.
     * Remove an image from the local storage.
     * @param param the request object
     */
    public imageDeleteLibpod(param: ImagesApiImageDeleteLibpodRequest, options?: Configuration): Promise<LibpodImagesRemoveReport> {
        return this.api.imageDeleteLibpod(param.name, param.force,  options).toPromise();
    }

    /**
     * Check if image exists in local store
     * Image exists
     * @param param the request object
     */
    public imageExistsLibpod(param: ImagesApiImageExistsLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.imageExistsLibpod(param.name,  options).toPromise();
    }

    /**
     * Export multiple images into a single object. Only `docker-archive` is currently supported.
     * Export multiple images
     * @param param the request object
     */
    public imageExportLibpod(param: ImagesApiImageExportLibpodRequest = {}, options?: Configuration): Promise<HttpFile> {
        return this.api.imageExportLibpod(param.format, param.references, param.compress, param.ociAcceptUncompressedLayers,  options).toPromise();
    }

    /**
     * Export an image
     * Export an image
     * @param param the request object
     */
    public imageGetLibpod(param: ImagesApiImageGetLibpodRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.imageGetLibpod(param.name, param.format, param.compress,  options).toPromise();
    }

    /**
     * Return parent layers of an image.
     * History of an image
     * @param param the request object
     */
    public imageHistoryLibpod(param: ImagesApiImageHistoryLibpodRequest, options?: Configuration): Promise<HistoryResponse> {
        return this.api.imageHistoryLibpod(param.name,  options).toPromise();
    }

    /**
     * Import a previously exported tarball as an image.
     * Import image
     * @param param the request object
     */
    public imageImportLibpod(param: ImagesApiImageImportLibpodRequest, options?: Configuration): Promise<ImageImportReport> {
        return this.api.imageImportLibpod(param.upload, param.contentType, param.changes, param.message, param.reference, param.url,  options).toPromise();
    }

    /**
     * Obtain low-level information about an image
     * Inspect an image
     * @param param the request object
     */
    public imageInspectLibpod(param: ImagesApiImageInspectLibpodRequest, options?: Configuration): Promise<ImageData> {
        return this.api.imageInspectLibpod(param.name,  options).toPromise();
    }

    /**
     * Returns a list of images on the server
     * List Images
     * @param param the request object
     */
    public imageListLibpod(param: ImagesApiImageListLibpodRequest = {}, options?: Configuration): Promise<Array<LibpodImageSummary>> {
        return this.api.imageListLibpod(param.all, param.filters,  options).toPromise();
    }

    /**
     * Load an image (oci-archive or docker-archive) stream.
     * Load image
     * @param param the request object
     */
    public imageLoadLibpod(param: ImagesApiImageLoadLibpodRequest, options?: Configuration): Promise<ImageLoadReport> {
        return this.api.imageLoadLibpod(param.upload,  options).toPromise();
    }

    /**
     * Remove images that are not being used by a container
     * Prune unused images
     * @param param the request object
     */
    public imagePruneLibpod(param: ImagesApiImagePruneLibpodRequest = {}, options?: Configuration): Promise<Array<PruneReport>> {
        return this.api.imagePruneLibpod(param.all, param.external, param.filters,  options).toPromise();
    }

    /**
     * Pull one or more images from a container registry.
     * Pull images
     * @param param the request object
     */
    public imagePullLibpod(param: ImagesApiImagePullLibpodRequest = {}, options?: Configuration): Promise<LibpodImagesPullReport> {
        return this.api.imagePullLibpod(param.reference, param.quiet, param.credentials, param.arch, param.OS, param.variant, param.policy, param.tlsVerify, param.allTags, param.xRegistryAuth,  options).toPromise();
    }

    /**
     * Push an image to a container registry
     * Push Image
     * @param param the request object
     */
    public imagePushLibpod(param: ImagesApiImagePushLibpodRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.imagePushLibpod(param.name, param.destination, param.tlsVerify, param.xRegistryAuth,  options).toPromise();
    }

    /**
     * Search registries for images
     * Search images
     * @param param the request object
     */
    public imageSearchLibpod(param: ImagesApiImageSearchLibpodRequest = {}, options?: Configuration): Promise<ImageSearch200Response> {
        return this.api.imageSearchLibpod(param.term, param.limit, param.filters, param.tlsVerify, param.listTags,  options).toPromise();
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param param the request object
     */
    public imageTagLibpod(param: ImagesApiImageTagLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.imageTagLibpod(param.name, param.repo, param.tag,  options).toPromise();
    }

    /**
     * Retrieve the image tree for the provided image name or ID
     * Image tree
     * @param param the request object
     */
    public imageTreeLibpod(param: ImagesApiImageTreeLibpodRequest, options?: Configuration): Promise<ImageTreeReport> {
        return this.api.imageTreeLibpod(param.name, param.whatrequires,  options).toPromise();
    }

    /**
     * Untag an image. If not repo and tag are specified, all tags are removed from the image.
     * Untag an image
     * @param param the request object
     */
    public imageUntagLibpod(param: ImagesApiImageUntagLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.imageUntagLibpod(param.name, param.repo, param.tag,  options).toPromise();
    }

}

import { ObservableImagesCompatApi } from './ObservableAPI';
import type { ImagesCompatApiRequestFactory, ImagesCompatApiResponseProcessor} from '../apis/ImagesCompatApi';

export interface ImagesCompatApiImageBuildRequest {
    /**
     * 
     * @type &#39;application/x-tar&#39;
     * @memberof ImagesCompatApiimageBuild
     */
    contentType?: 'application/x-tar'
    /**
     * 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    xRegistryConfig?: string
    /**
     * Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if remote is specified and points to an external &#x60;Dockerfile&#x60;. 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    dockerfile?: string
    /**
     * A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format. If you omit the tag the default latest value is assumed. You can provide several t parameters.
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    t?: string
    /**
     * TBD Extra hosts to add to /etc/hosts (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    extrahosts?: string
    /**
     * A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called Dockerfile and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path inside the tarball. (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    remote?: string
    /**
     * Suppress verbose build output 
     * @type boolean
     * @memberof ImagesCompatApiimageBuild
     */
    q?: boolean
    /**
     * Do not use the cache when building the image (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesCompatApiimageBuild
     */
    nocache?: boolean
    /**
     * JSON array of images used to build cache resolution (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    cachefrom?: string
    /**
     * Attempt to pull the image even if an older image exists locally (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesCompatApiimageBuild
     */
    pull?: boolean
    /**
     * Remove intermediate containers after a successful build (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesCompatApiimageBuild
     */
    rm?: boolean
    /**
     * Always remove intermediate containers, even upon failure (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesCompatApiimageBuild
     */
    forcerm?: boolean
    /**
     * Memory is the upper limit (in bytes) on how much memory running containers can use (As of version 1.xx) 
     * @type number
     * @memberof ImagesCompatApiimageBuild
     */
    memory?: number
    /**
     * MemorySwap limits the amount of memory and swap together (As of version 1.xx) 
     * @type number
     * @memberof ImagesCompatApiimageBuild
     */
    memswap?: number
    /**
     * CPUShares (relative weight (As of version 1.xx) 
     * @type number
     * @memberof ImagesCompatApiimageBuild
     */
    cpushares?: number
    /**
     * CPUSetCPUs in which to allow execution (0-3, 0,1) (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    cpusetcpus?: string
    /**
     * CPUPeriod limits the CPU CFS (Completely Fair Scheduler) period (As of version 1.xx) 
     * @type number
     * @memberof ImagesCompatApiimageBuild
     */
    cpuperiod?: number
    /**
     * CPUQuota limits the CPU CFS (Completely Fair Scheduler) quota (As of version 1.xx) 
     * @type number
     * @memberof ImagesCompatApiimageBuild
     */
    cpuquota?: number
    /**
     * JSON map of string pairs denoting build-time variables. For example, the build argument &#x60;Foo&#x60; with the value of &#x60;bar&#x60; would be encoded in JSON as &#x60;[\&quot;Foo\&quot;:\&quot;bar\&quot;]&#x60;.  For example, buildargs&#x3D;{\&quot;Foo\&quot;:\&quot;bar\&quot;}.  Note(s): * This should not be used to pass secrets. * The value of buildargs should be URI component encoded before being passed to the API.  (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    buildargs?: string
    /**
     * ShmSize is the \&quot;size\&quot; value to use when mounting an shmfs on the container&#39;s /dev/shm directory. Default is 64MB (As of version 1.xx) 
     * @type number
     * @memberof ImagesCompatApiimageBuild
     */
    shmsize?: number
    /**
     * Silently ignored. Squash the resulting images layers into a single layer (As of version 1.xx) 
     * @type boolean
     * @memberof ImagesCompatApiimageBuild
     */
    squash?: boolean
    /**
     * JSON map of key, value pairs to set as labels on the new image (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    labels?: string
    /**
     * Sets the networking mode for the run commands during build. Supported standard values are:   * &#x60;bridge&#x60; limited to containers within a single host, port mapping required for external access   * &#x60;host&#x60; no isolation between host and containers on this network   * &#x60;none&#x60; disable all networking for this container   * container:&lt;nameOrID&gt; share networking with given container   ---All other values are assumed to be a custom network&#39;s name (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    networkmode?: string
    /**
     * Platform format os[/arch[/variant]] (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    platform?: string
    /**
     * Target build stage (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    target?: string
    /**
     * output configuration TBD (As of version 1.xx) 
     * @type string
     * @memberof ImagesCompatApiimageBuild
     */
    outputs?: string
    /**
     * A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz. 
     * @type HttpFile
     * @memberof ImagesCompatApiimageBuild
     */
    inputStream?: HttpFile
}

export interface ImagesCompatApiImageCreateRequest {
    /**
     * A base64-encoded auth configuration.
     * @type string
     * @memberof ImagesCompatApiimageCreate
     */
    xRegistryAuth?: string
    /**
     * Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
     * @type string
     * @memberof ImagesCompatApiimageCreate
     */
    fromImage?: string
    /**
     * Source to import. The value may be a URL from which the image can be retrieved or - to read the image from the request body. This parameter may only be used when importing an image
     * @type string
     * @memberof ImagesCompatApiimageCreate
     */
    fromSrc?: string
    /**
     * Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
     * @type string
     * @memberof ImagesCompatApiimageCreate
     */
    repo?: string
    /**
     * Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     * @type string
     * @memberof ImagesCompatApiimageCreate
     */
    tag?: string
    /**
     * Set commit message for imported image.
     * @type string
     * @memberof ImagesCompatApiimageCreate
     */
    message?: string
    /**
     * Platform in the format os[/arch[/variant]]
     * @type string
     * @memberof ImagesCompatApiimageCreate
     */
    platform?: string
    /**
     * Image content if fromSrc parameter was used
     * @type HttpFile
     * @memberof ImagesCompatApiimageCreate
     */
    inputImage?: HttpFile
}

export interface ImagesCompatApiImageDeleteRequest {
    /**
     * name or ID of image to delete
     * @type string
     * @memberof ImagesCompatApiimageDelete
     */
    name: string
    /**
     * remove the image even if used by containers or has other tags
     * @type boolean
     * @memberof ImagesCompatApiimageDelete
     */
    force?: boolean
    /**
     * not supported. will be logged as an invalid parameter if enabled
     * @type boolean
     * @memberof ImagesCompatApiimageDelete
     */
    noprune?: boolean
}

export interface ImagesCompatApiImageGetRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesCompatApiimageGet
     */
    name: string
}

export interface ImagesCompatApiImageGetAllRequest {
    /**
     * one or more image names or IDs comma separated
     * @type string
     * @memberof ImagesCompatApiimageGetAll
     */
    names: string
}

export interface ImagesCompatApiImageHistoryRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesCompatApiimageHistory
     */
    name: string
}

export interface ImagesCompatApiImageInspectRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesCompatApiimageInspect
     */
    name: string
}

export interface ImagesCompatApiImageListRequest {
    /**
     * Show all images. Only images from a final layer (no children) are shown by default.
     * @type boolean
     * @memberof ImagesCompatApiimageList
     */
    all?: boolean
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) 
     * @type string
     * @memberof ImagesCompatApiimageList
     */
    filters?: string
    /**
     * Not supported
     * @type boolean
     * @memberof ImagesCompatApiimageList
     */
    digests?: boolean
}

export interface ImagesCompatApiImageLoadRequest {
    /**
     * not supported
     * @type boolean
     * @memberof ImagesCompatApiimageLoad
     */
    quiet?: boolean
    /**
     * tarball of container image
     * @type string
     * @memberof ImagesCompatApiimageLoad
     */
    request?: string
}

export interface ImagesCompatApiImagePruneRequest {
    /**
     * filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only      unused *and* untagged images. When set to &#x60;false&#x60;      (or &#x60;0&#x60;), all unused images are pruned.   - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * @type string
     * @memberof ImagesCompatApiimagePrune
     */
    filters?: string
}

export interface ImagesCompatApiImagePushRequest {
    /**
     * Name of image to push.
     * @type string
     * @memberof ImagesCompatApiimagePush
     */
    name: string
    /**
     * The tag to associate with the image on the registry.
     * @type string
     * @memberof ImagesCompatApiimagePush
     */
    tag?: string
    /**
     * All indicates whether to push all images related to the image list
     * @type boolean
     * @memberof ImagesCompatApiimagePush
     */
    all?: boolean
    /**
     * use compression on image
     * @type boolean
     * @memberof ImagesCompatApiimagePush
     */
    compress?: boolean
    /**
     * destination name for the image being pushed
     * @type string
     * @memberof ImagesCompatApiimagePush
     */
    destination?: string
    /**
     * A base64-encoded auth configuration.
     * @type string
     * @memberof ImagesCompatApiimagePush
     */
    xRegistryAuth?: string
}

export interface ImagesCompatApiImageSearchRequest {
    /**
     * term to search
     * @type string
     * @memberof ImagesCompatApiimageSearch
     */
    term?: string
    /**
     * maximum number of results
     * @type number
     * @memberof ImagesCompatApiimageSearch
     */
    limit?: number
    /**
     * A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;is-automated&#x3D;(true|false)&#x60; - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least &#39;number&#39; stars. 
     * @type string
     * @memberof ImagesCompatApiimageSearch
     */
    filters?: string
    /**
     * skip TLS verification for registries
     * @type boolean
     * @memberof ImagesCompatApiimageSearch
     */
    tlsVerify?: boolean
    /**
     * list the available tags in the repository
     * @type boolean
     * @memberof ImagesCompatApiimageSearch
     */
    listTags?: boolean
}

export interface ImagesCompatApiImageTagRequest {
    /**
     * the name or ID of the container
     * @type string
     * @memberof ImagesCompatApiimageTag
     */
    name: string
    /**
     * the repository to tag in
     * @type string
     * @memberof ImagesCompatApiimageTag
     */
    repo?: string
    /**
     * the name of the new tag
     * @type string
     * @memberof ImagesCompatApiimageTag
     */
    tag?: string
}

export class ObjectImagesCompatApi {
    private api: ObservableImagesCompatApi;

    public constructor(configuration: Configuration, requestFactory?: ImagesCompatApiRequestFactory, responseProcessor?: ImagesCompatApiResponseProcessor) {
        this.api = new ObservableImagesCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Build an image from the given Dockerfile(s)
     * Create image
     * @param param the request object
     */
    public imageBuild(param: ImagesCompatApiImageBuildRequest = {}, options?: Configuration): Promise<ImageBuild200Response> {
        return this.api.imageBuild(param.contentType, param.xRegistryConfig, param.dockerfile, param.t, param.extrahosts, param.remote, param.q, param.nocache, param.cachefrom, param.pull, param.rm, param.forcerm, param.memory, param.memswap, param.cpushares, param.cpusetcpus, param.cpuperiod, param.cpuquota, param.buildargs, param.shmsize, param.squash, param.labels, param.networkmode, param.platform, param.target, param.outputs, param.inputStream,  options).toPromise();
    }

    /**
     * Create an image by either pulling it from a registry or importing it.
     * Create an image
     * @param param the request object
     */
    public imageCreate(param: ImagesCompatApiImageCreateRequest = {}, options?: Configuration): Promise<HttpFile> {
        return this.api.imageCreate(param.xRegistryAuth, param.fromImage, param.fromSrc, param.repo, param.tag, param.message, param.platform, param.inputImage,  options).toPromise();
    }

    /**
     * Delete an image from local storage
     * Remove Image
     * @param param the request object
     */
    public imageDelete(param: ImagesCompatApiImageDeleteRequest, options?: Configuration): Promise<Array<ImageDelete200ResponseInner>> {
        return this.api.imageDelete(param.name, param.force, param.noprune,  options).toPromise();
    }

    /**
     * Export an image in tarball format
     * Export an image
     * @param param the request object
     */
    public imageGet(param: ImagesCompatApiImageGetRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.imageGet(param.name,  options).toPromise();
    }

    /**
     * Get a tarball containing all images and metadata for several image repositories
     * Export several images
     * @param param the request object
     */
    public imageGetAll(param: ImagesCompatApiImageGetAllRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.imageGetAll(param.names,  options).toPromise();
    }

    /**
     * Return parent layers of an image.
     * History of an image
     * @param param the request object
     */
    public imageHistory(param: ImagesCompatApiImageHistoryRequest, options?: Configuration): Promise<HistoryResponse> {
        return this.api.imageHistory(param.name,  options).toPromise();
    }

    /**
     * Return low-level information about an image.
     * Inspect an image
     * @param param the request object
     */
    public imageInspect(param: ImagesCompatApiImageInspectRequest, options?: Configuration): Promise<ImageInspect> {
        return this.api.imageInspect(param.name,  options).toPromise();
    }

    /**
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * List Images
     * @param param the request object
     */
    public imageList(param: ImagesCompatApiImageListRequest = {}, options?: Configuration): Promise<Array<ImageSummary>> {
        return this.api.imageList(param.all, param.filters, param.digests,  options).toPromise();
    }

    /**
     * Load a set of images and tags into a repository.
     * Import image
     * @param param the request object
     */
    public imageLoad(param: ImagesCompatApiImageLoadRequest = {}, options?: Configuration): Promise<void> {
        return this.api.imageLoad(param.quiet, param.request,  options).toPromise();
    }

    /**
     * Remove images from local storage that are not being used by a container
     * Prune unused images
     * @param param the request object
     */
    public imagePrune(param: ImagesCompatApiImagePruneRequest = {}, options?: Configuration): Promise<Array<ImageDelete200ResponseInner>> {
        return this.api.imagePrune(param.filters,  options).toPromise();
    }

    /**
     * Push an image to a container registry
     * Push Image
     * @param param the request object
     */
    public imagePush(param: ImagesCompatApiImagePushRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.imagePush(param.name, param.tag, param.all, param.compress, param.destination, param.xRegistryAuth,  options).toPromise();
    }

    /**
     * Search registries for an image
     * Search images
     * @param param the request object
     */
    public imageSearch(param: ImagesCompatApiImageSearchRequest = {}, options?: Configuration): Promise<ImageSearch200Response> {
        return this.api.imageSearch(param.term, param.limit, param.filters, param.tlsVerify, param.listTags,  options).toPromise();
    }

    /**
     * Tag an image so that it becomes part of a repository.
     * Tag an image
     * @param param the request object
     */
    public imageTag(param: ImagesCompatApiImageTagRequest, options?: Configuration): Promise<void> {
        return this.api.imageTag(param.name, param.repo, param.tag,  options).toPromise();
    }

}

import { ObservableManifestsApi } from './ObservableAPI';
import type { ManifestsApiRequestFactory, ManifestsApiResponseProcessor} from '../apis/ManifestsApi';

export interface ManifestsApiManifestAddLibpodRequest {
    /**
     * the name or ID of the manifest
     * @type string
     * @memberof ManifestsApimanifestAddLibpod
     */
    name: string
    /**
     * options for creating a manifest
     * @type ManifestAddOptions
     * @memberof ManifestsApimanifestAddLibpod
     */
    options?: ManifestAddOptions
}

export interface ManifestsApiManifestCreateLibpodRequest {
    /**
     * manifest list or index name to create
     * @type string
     * @memberof ManifestsApimanifestCreateLibpod
     */
    name: string
    /**
     * One or more names of an image or a manifest list. Repeat parameter as needed.  Support for multiple images, as of version 4.0.0 Alias of &#x60;image&#x60; is support for compatibility with &lt; 4.0.0 Response status code is 200 with &lt; 4.0.0 for compatibility 
     * @type string
     * @memberof ManifestsApimanifestCreateLibpod
     */
    images: string
    /**
     * add all contents if given list
     * @type boolean
     * @memberof ManifestsApimanifestCreateLibpod
     */
    all?: boolean
    /**
     * options for new manifest
     * @type ManifestModifyOptions
     * @memberof ManifestsApimanifestCreateLibpod
     */
    options?: ManifestModifyOptions
}

export interface ManifestsApiManifestDeleteLibpodRequest {
    /**
     * The name or ID of the  list to be deleted
     * @type string
     * @memberof ManifestsApimanifestDeleteLibpod
     */
    name: string
}

export interface ManifestsApiManifestExistsLibpodRequest {
    /**
     * the name or ID of the manifest list
     * @type string
     * @memberof ManifestsApimanifestExistsLibpod
     */
    name: string
}

export interface ManifestsApiManifestInspectLibpodRequest {
    /**
     * the name or ID of the manifest list
     * @type string
     * @memberof ManifestsApimanifestInspectLibpod
     */
    name: string
}

export interface ManifestsApiManifestModifyLibpodRequest {
    /**
     * the name or ID of the manifest
     * @type string
     * @memberof ManifestsApimanifestModifyLibpod
     */
    name: string
    /**
     * options for mutating a manifest
     * @type ManifestModifyOptions
     * @memberof ManifestsApimanifestModifyLibpod
     */
    options: ManifestModifyOptions
    /**
     * skip TLS verification for registries
     * @type boolean
     * @memberof ManifestsApimanifestModifyLibpod
     */
    tlsVerify?: boolean
}

export interface ManifestsApiManifestPushLibpodRequest {
    /**
     * the name or ID of the manifest list
     * @type string
     * @memberof ManifestsApimanifestPushLibpod
     */
    name: string
    /**
     * the registry for the manifest list
     * @type string
     * @memberof ManifestsApimanifestPushLibpod
     */
    destination: string
    /**
     * push all images
     * @type boolean
     * @memberof ManifestsApimanifestPushLibpod
     */
    all?: boolean
    /**
     * skip TLS verification for registries
     * @type boolean
     * @memberof ManifestsApimanifestPushLibpod
     */
    tlsVerify?: boolean
}

export interface ManifestsApiManifestPushV3LibpodRequest {
    /**
     * the name or ID of the manifest
     * @type string
     * @memberof ManifestsApimanifestPushV3Libpod
     */
    name: string
    /**
     * the destination for the manifest
     * @type string
     * @memberof ManifestsApimanifestPushV3Libpod
     */
    destination: string
    /**
     * push all images
     * @type boolean
     * @memberof ManifestsApimanifestPushV3Libpod
     */
    all?: boolean
}

export class ObjectManifestsApi {
    private api: ObservableManifestsApi;

    public constructor(configuration: Configuration, requestFactory?: ManifestsApiRequestFactory, responseProcessor?: ManifestsApiResponseProcessor) {
        this.api = new ObservableManifestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add an image to a manifest list  Deprecated: As of 4.0.0 use ManifestModifyLibpod instead 
     * Add image
     * @param param the request object
     */
    public manifestAddLibpod(param: ManifestsApiManifestAddLibpodRequest, options?: Configuration): Promise<IdResponse> {
        return this.api.manifestAddLibpod(param.name, param.options,  options).toPromise();
    }

    /**
     * Create a manifest list
     * Create
     * @param param the request object
     */
    public manifestCreateLibpod(param: ManifestsApiManifestCreateLibpodRequest, options?: Configuration): Promise<IdResponse> {
        return this.api.manifestCreateLibpod(param.name, param.images, param.all, param.options,  options).toPromise();
    }

    /**
     * Delete named manifest list  As of v4.0.0 
     * Delete manifest list
     * @param param the request object
     */
    public manifestDeleteLibpod(param: ManifestsApiManifestDeleteLibpodRequest, options?: Configuration): Promise<LibpodImagesRemoveReport> {
        return this.api.manifestDeleteLibpod(param.name,  options).toPromise();
    }

    /**
     * Check if manifest list exists  Note: There is no contract that the manifest list will exist for a follow-on operation 
     * Exists
     * @param param the request object
     */
    public manifestExistsLibpod(param: ManifestsApiManifestExistsLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.manifestExistsLibpod(param.name,  options).toPromise();
    }

    /**
     * Display attributes of given manifest list
     * Inspect
     * @param param the request object
     */
    public manifestInspectLibpod(param: ManifestsApiManifestInspectLibpodRequest, options?: Configuration): Promise<Schema2List> {
        return this.api.manifestInspectLibpod(param.name,  options).toPromise();
    }

    /**
     * Add/Remove an image(s) to a manifest list  Note: operations are not atomic when multiple Images are provided.  As of v4.0.0 
     * Modify manifest list
     * @param param the request object
     */
    public manifestModifyLibpod(param: ManifestsApiManifestModifyLibpodRequest, options?: Configuration): Promise<ManifestModifyReport> {
        return this.api.manifestModifyLibpod(param.name, param.options, param.tlsVerify,  options).toPromise();
    }

    /**
     * Push a manifest list or image index to the named registry  As of v4.0.0 
     * Push manifest list to registry
     * @param param the request object
     */
    public manifestPushLibpod(param: ManifestsApiManifestPushLibpodRequest, options?: Configuration): Promise<IdResponse> {
        return this.api.manifestPushLibpod(param.name, param.destination, param.all, param.tlsVerify,  options).toPromise();
    }

    /**
     * Push a manifest list or image index to a registry  Deprecated: As of 4.0.0 use ManifestPushLibpod instead 
     * Push manifest to registry
     * @param param the request object
     */
    public manifestPushV3Libpod(param: ManifestsApiManifestPushV3LibpodRequest, options?: Configuration): Promise<IdResponse> {
        return this.api.manifestPushV3Libpod(param.name, param.destination, param.all,  options).toPromise();
    }

}

import { ObservableNetworksApi } from './ObservableAPI';
import type { NetworksApiRequestFactory, NetworksApiResponseProcessor} from '../apis/NetworksApi';

export interface NetworksApiNetworkConnectLibpodRequest {
    /**
     * the name of the network
     * @type string
     * @memberof NetworksApinetworkConnectLibpod
     */
    name: string
    /**
     * attributes for connecting a container to a network
     * @type NetworkConnectOptions
     * @memberof NetworksApinetworkConnectLibpod
     */
    create?: NetworkConnectOptions
}

export interface NetworksApiNetworkCreateLibpodRequest {
    /**
     * attributes for creating a network
     * @type NetworkCreateLibpod
     * @memberof NetworksApinetworkCreateLibpod
     */
    create?: NetworkCreateLibpod
}

export interface NetworksApiNetworkDeleteLibpodRequest {
    /**
     * the name of the network
     * @type string
     * @memberof NetworksApinetworkDeleteLibpod
     */
    name: string
    /**
     * remove containers associated with network
     * @type boolean
     * @memberof NetworksApinetworkDeleteLibpod
     */
    force?: boolean
}

export interface NetworksApiNetworkDisconnectLibpodRequest {
    /**
     * the name of the network
     * @type string
     * @memberof NetworksApinetworkDisconnectLibpod
     */
    name: string
    /**
     * attributes for disconnecting a container from a network
     * @type NetworkDisconnect
     * @memberof NetworksApinetworkDisconnectLibpod
     */
    create?: NetworkDisconnect
}

export interface NetworksApiNetworkExistsLibpodRequest {
    /**
     * the name or ID of the network
     * @type string
     * @memberof NetworksApinetworkExistsLibpod
     */
    name: string
}

export interface NetworksApiNetworkInspectLibpodRequest {
    /**
     * the name of the network
     * @type string
     * @memberof NetworksApinetworkInspectLibpod
     */
    name: string
}

export interface NetworksApiNetworkListLibpodRequest {
    /**
     * JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the network list. Available filters:   - &#x60;name&#x3D;[name]&#x60; Matches network name (accepts regex).   - &#x60;id&#x3D;[id]&#x60; Matches for full or partial ID.   - &#x60;driver&#x3D;[driver]&#x60; Only bridge is supported.   - &#x60;label&#x3D;[key]&#x60; or &#x60;label&#x3D;[key&#x3D;value]&#x60; Matches networks based on the presence of a label alone or a label and a value.   - &#x60;until&#x3D;[timestamp]&#x60; Matches all networks that were create before the given timestamp. 
     * @type string
     * @memberof NetworksApinetworkListLibpod
     */
    filters?: string
}

export interface NetworksApiNetworkPruneLibpodRequest {
    /**
     * Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * @type string
     * @memberof NetworksApinetworkPruneLibpod
     */
    filters?: string
}

export class ObjectNetworksApi {
    private api: ObservableNetworksApi;

    public constructor(configuration: Configuration, requestFactory?: NetworksApiRequestFactory, responseProcessor?: NetworksApiResponseProcessor) {
        this.api = new ObservableNetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connect a container to a network.
     * Connect container to network
     * @param param the request object
     */
    public networkConnectLibpod(param: NetworksApiNetworkConnectLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.networkConnectLibpod(param.name, param.create,  options).toPromise();
    }

    /**
     * Create a new network configuration
     * Create network
     * @param param the request object
     */
    public networkCreateLibpod(param: NetworksApiNetworkCreateLibpodRequest = {}, options?: Configuration): Promise<Network> {
        return this.api.networkCreateLibpod(param.create,  options).toPromise();
    }

    /**
     * Remove a CNI configured network
     * Remove a network
     * @param param the request object
     */
    public networkDeleteLibpod(param: NetworksApiNetworkDeleteLibpodRequest, options?: Configuration): Promise<Array<NetworkRmReport>> {
        return this.api.networkDeleteLibpod(param.name, param.force,  options).toPromise();
    }

    /**
     * Disconnect a container from a network.
     * Disconnect container from network
     * @param param the request object
     */
    public networkDisconnectLibpod(param: NetworksApiNetworkDisconnectLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.networkDisconnectLibpod(param.name, param.create,  options).toPromise();
    }

    /**
     * Check if network exists
     * Network exists
     * @param param the request object
     */
    public networkExistsLibpod(param: NetworksApiNetworkExistsLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.networkExistsLibpod(param.name,  options).toPromise();
    }

    /**
     * Display low level configuration for a CNI network.   - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string. 
     * Inspect a network
     * @param param the request object
     */
    public networkInspectLibpod(param: NetworksApiNetworkInspectLibpodRequest, options?: Configuration): Promise<Network> {
        return this.api.networkInspectLibpod(param.name,  options).toPromise();
    }

    /**
     * Display summary of network configurations.   - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string. 
     * List networks
     * @param param the request object
     */
    public networkListLibpod(param: NetworksApiNetworkListLibpodRequest = {}, options?: Configuration): Promise<Array<Network>> {
        return this.api.networkListLibpod(param.filters,  options).toPromise();
    }

    /**
     * Remove CNI networks that do not have containers
     * Delete unused networks
     * @param param the request object
     */
    public networkPruneLibpod(param: NetworksApiNetworkPruneLibpodRequest = {}, options?: Configuration): Promise<Array<NetworkPruneReport>> {
        return this.api.networkPruneLibpod(param.filters,  options).toPromise();
    }

}

import { ObservableNetworksCompatApi } from './ObservableAPI';
import type { NetworksCompatApiRequestFactory, NetworksCompatApiResponseProcessor} from '../apis/NetworksCompatApi';

export interface NetworksCompatApiNetworkConnectRequest {
    /**
     * the name of the network
     * @type string
     * @memberof NetworksCompatApinetworkConnect
     */
    name: string
    /**
     * attributes for connecting a container to a network
     * @type NetworkConnect
     * @memberof NetworksCompatApinetworkConnect
     */
    create?: NetworkConnect
}

export interface NetworksCompatApiNetworkCreateRequest {
    /**
     * attributes for creating a network
     * @type NetworkCreateRequest
     * @memberof NetworksCompatApinetworkCreate
     */
    create?: NetworkCreateRequest
}

export interface NetworksCompatApiNetworkDeleteRequest {
    /**
     * the name of the network
     * @type string
     * @memberof NetworksCompatApinetworkDelete
     */
    name: string
}

export interface NetworksCompatApiNetworkDisconnectRequest {
    /**
     * the name of the network
     * @type string
     * @memberof NetworksCompatApinetworkDisconnect
     */
    name: string
    /**
     * attributes for disconnecting a container from a network
     * @type NetworkDisconnect
     * @memberof NetworksCompatApinetworkDisconnect
     */
    create?: NetworkDisconnect
}

export interface NetworksCompatApiNetworkInspectRequest {
    /**
     * the name of the network
     * @type string
     * @memberof NetworksCompatApinetworkInspect
     */
    name: string
    /**
     * Detailed inspect output for troubleshooting
     * @type boolean
     * @memberof NetworksCompatApinetworkInspect
     */
    verbose?: boolean
    /**
     * Filter the network by scope (swarm, global, or local)
     * @type string
     * @memberof NetworksCompatApinetworkInspect
     */
    scope?: string
}

export interface NetworksCompatApiNetworkListRequest {
    /**
     * JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the network list. Currently available filters:   - &#x60;name&#x3D;[name]&#x60; Matches network name (accepts regex).   - &#x60;id&#x3D;[id]&#x60; Matches for full or partial ID.   - &#x60;driver&#x3D;[driver]&#x60; Only bridge is supported.   - &#x60;label&#x3D;[key]&#x60; or &#x60;label&#x3D;[key&#x3D;value]&#x60; Matches networks based on the presence of a label alone or a label and a value. 
     * @type string
     * @memberof NetworksCompatApinetworkList
     */
    filters?: string
}

export interface NetworksCompatApiNetworkPruneRequest {
    /**
     * Filters to process on the prune list, encoded as JSON (a map[string][]string). Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &lt;timestamp&gt; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * @type string
     * @memberof NetworksCompatApinetworkPrune
     */
    filters?: string
}

export class ObjectNetworksCompatApi {
    private api: ObservableNetworksCompatApi;

    public constructor(configuration: Configuration, requestFactory?: NetworksCompatApiRequestFactory, responseProcessor?: NetworksCompatApiResponseProcessor) {
        this.api = new ObservableNetworksCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connect a container to a network.  This endpoint is current a no-op
     * Connect container to network
     * @param param the request object
     */
    public networkConnect(param: NetworksCompatApiNetworkConnectRequest, options?: Configuration): Promise<void> {
        return this.api.networkConnect(param.name, param.create,  options).toPromise();
    }

    /**
     * Create a network configuration
     * Create network
     * @param param the request object
     */
    public networkCreate(param: NetworksCompatApiNetworkCreateRequest = {}, options?: Configuration): Promise<NetworkCreate201Response> {
        return this.api.networkCreate(param.create,  options).toPromise();
    }

    /**
     * Remove a network
     * Remove a network
     * @param param the request object
     */
    public networkDelete(param: NetworksCompatApiNetworkDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.networkDelete(param.name,  options).toPromise();
    }

    /**
     * Disconnect a container from a network.  This endpoint is current a no-op
     * Disconnect container from network
     * @param param the request object
     */
    public networkDisconnect(param: NetworksCompatApiNetworkDisconnectRequest, options?: Configuration): Promise<void> {
        return this.api.networkDisconnect(param.name, param.create,  options).toPromise();
    }

    /**
     * Display low level configuration network
     * Inspect a network
     * @param param the request object
     */
    public networkInspect(param: NetworksCompatApiNetworkInspectRequest, options?: Configuration): Promise<NetworkResource> {
        return this.api.networkInspect(param.name, param.verbose, param.scope,  options).toPromise();
    }

    /**
     * Display summary of network configurations
     * List networks
     * @param param the request object
     */
    public networkList(param: NetworksCompatApiNetworkListRequest = {}, options?: Configuration): Promise<Array<NetworkResource>> {
        return this.api.networkList(param.filters,  options).toPromise();
    }

    /**
     * Remove CNI networks that do not have containers
     * Delete unused networks
     * @param param the request object
     */
    public networkPrune(param: NetworksCompatApiNetworkPruneRequest = {}, options?: Configuration): Promise<NetworkPrune200Response> {
        return this.api.networkPrune(param.filters,  options).toPromise();
    }

}

import { ObservablePodsApi } from './ObservableAPI';
import type { PodsApiRequestFactory, PodsApiResponseProcessor} from '../apis/PodsApi';

export interface PodsApiGenerateKubeLibpodRequest {
    /**
     * Name or ID of the container or pod.
     * @type Array&lt;string&gt;
     * @memberof PodsApigenerateKubeLibpod
     */
    names: Array<string>
    /**
     * Generate YAML for a Kubernetes service object.
     * @type boolean
     * @memberof PodsApigenerateKubeLibpod
     */
    service?: boolean
}

export interface PodsApiGenerateSystemdLibpodRequest {
    /**
     * Name or ID of the container or pod.
     * @type string
     * @memberof PodsApigenerateSystemdLibpod
     */
    name: string
    /**
     * Use container/pod names instead of IDs.
     * @type boolean
     * @memberof PodsApigenerateSystemdLibpod
     */
    useName?: boolean
    /**
     * Create a new container instead of starting an existing one.
     * @type boolean
     * @memberof PodsApigenerateSystemdLibpod
     */
    _new?: boolean
    /**
     * Do not generate the header including the Podman version and the timestamp.
     * @type boolean
     * @memberof PodsApigenerateSystemdLibpod
     */
    noHeader?: boolean
    /**
     * Start timeout in seconds.
     * @type number
     * @memberof PodsApigenerateSystemdLibpod
     */
    startTimeout?: number
    /**
     * Stop timeout in seconds.
     * @type number
     * @memberof PodsApigenerateSystemdLibpod
     */
    stopTimeout?: number
    /**
     * Systemd restart-policy.
     * @type &#39;no&#39; | &#39;on-success&#39; | &#39;on-failure&#39; | &#39;on-abnormal&#39; | &#39;on-watchdog&#39; | &#39;on-abort&#39; | &#39;always&#39;
     * @memberof PodsApigenerateSystemdLibpod
     */
    restartPolicy?: 'no' | 'on-success' | 'on-failure' | 'on-abnormal' | 'on-watchdog' | 'on-abort' | 'always'
    /**
     * Systemd unit name prefix for containers.
     * @type string
     * @memberof PodsApigenerateSystemdLibpod
     */
    containerPrefix?: string
    /**
     * Systemd unit name prefix for pods.
     * @type string
     * @memberof PodsApigenerateSystemdLibpod
     */
    podPrefix?: string
    /**
     * Systemd unit name separator between name/id and prefix.
     * @type string
     * @memberof PodsApigenerateSystemdLibpod
     */
    separator?: string
    /**
     * Configures the time to sleep before restarting a service.
     * @type number
     * @memberof PodsApigenerateSystemdLibpod
     */
    restartSec?: number
    /**
     * Systemd Wants list for the container or pods.
     * @type Array&lt;string&gt;
     * @memberof PodsApigenerateSystemdLibpod
     */
    wants?: Array<string>
    /**
     * Systemd After list for the container or pods.
     * @type Array&lt;string&gt;
     * @memberof PodsApigenerateSystemdLibpod
     */
    after?: Array<string>
    /**
     * Systemd Requires list for the container or pods.
     * @type Array&lt;string&gt;
     * @memberof PodsApigenerateSystemdLibpod
     */
    requires?: Array<string>
}

export interface PodsApiPlayKubeDownLibpodRequest {
}

export interface PodsApiPlayKubeLibpodRequest {
    /**
     * USe the network mode or specify an array of networks.
     * @type Array&lt;string&gt;
     * @memberof PodsApiplayKubeLibpod
     */
    network?: Array<string>
    /**
     * Require HTTPS and verify signatures when contacting registries.
     * @type boolean
     * @memberof PodsApiplayKubeLibpod
     */
    tlsVerify?: boolean
    /**
     * Logging driver for the containers in the pod.
     * @type string
     * @memberof PodsApiplayKubeLibpod
     */
    logDriver?: string
    /**
     * Start the pod after creating it.
     * @type boolean
     * @memberof PodsApiplayKubeLibpod
     */
    start?: boolean
    /**
     * Static IPs used for the pods.
     * @type Array&lt;string&gt;
     * @memberof PodsApiplayKubeLibpod
     */
    staticIPs?: Array<string>
    /**
     * Static MACs used for the pods.
     * @type Array&lt;string&gt;
     * @memberof PodsApiplayKubeLibpod
     */
    staticMACs?: Array<string>
    /**
     * Kubernetes YAML file.
     * @type string
     * @memberof PodsApiplayKubeLibpod
     */
    request?: string
}

export interface PodsApiPodCreateLibpodRequest {
    /**
     * attributes for creating a pod
     * @type PodSpecGenerator
     * @memberof PodsApipodCreateLibpod
     */
    create?: PodSpecGenerator
}

export interface PodsApiPodDeleteLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodDeleteLibpod
     */
    name: string
    /**
     * force removal of a running pod by first stopping all containers, then removing all containers in the pod
     * @type boolean
     * @memberof PodsApipodDeleteLibpod
     */
    force?: boolean
}

export interface PodsApiPodExistsLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodExistsLibpod
     */
    name: string
}

export interface PodsApiPodInspectLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodInspectLibpod
     */
    name: string
}

export interface PodsApiPodKillLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodKillLibpod
     */
    name: string
    /**
     * signal to be sent to pod
     * @type string
     * @memberof PodsApipodKillLibpod
     */
    signal?: string
}

export interface PodsApiPodListLibpodRequest {
    /**
     * JSON encoded value of the filters (a map[string][]string) to process on the pods list. Available filters:   - &#x60;id&#x3D;&lt;pod-id&gt;&#x60; Matches all of pod id.   - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches pods based on the presence of a label alone or a label and a value.   - &#x60;name&#x3D;&lt;pod-name&gt;&#x60; Matches all of pod name.   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; List pods created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;status&#x3D;&lt;pod-status&gt;&#x60; Pod&#39;s status: &#x60;stopped&#x60;, &#x60;running&#x60;, &#x60;paused&#x60;, &#x60;exited&#x60;, &#x60;dead&#x60;, &#x60;created&#x60;, &#x60;degraded&#x60;.   - &#x60;network&#x3D;&lt;pod-network&gt;&#x60; Name or full ID of network.   - &#x60;ctr-names&#x3D;&lt;pod-ctr-names&gt;&#x60; Container name within the pod.   - &#x60;ctr-ids&#x3D;&lt;pod-ctr-ids&gt;&#x60; Container ID within the pod.   - &#x60;ctr-status&#x3D;&lt;pod-ctr-status&gt;&#x60; Container status within the pod.   - &#x60;ctr-number&#x3D;&lt;pod-ctr-number&gt;&#x60; Number of containers in the pod. 
     * @type string
     * @memberof PodsApipodListLibpod
     */
    filters?: string
}

export interface PodsApiPodPauseLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodPauseLibpod
     */
    name: string
}

export interface PodsApiPodPruneLibpodRequest {
}

export interface PodsApiPodRestartLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodRestartLibpod
     */
    name: string
}

export interface PodsApiPodStartLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodStartLibpod
     */
    name: string
}

export interface PodsApiPodStatsAllLibpodRequest {
    /**
     * Provide statistics for all running pods.
     * @type boolean
     * @memberof PodsApipodStatsAllLibpod
     */
    all?: boolean
    /**
     * Names or IDs of pods.
     * @type Array&lt;string&gt;
     * @memberof PodsApipodStatsAllLibpod
     */
    namesOrIDs?: Array<string>
}

export interface PodsApiPodStopLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodStopLibpod
     */
    name: string
    /**
     * timeout
     * @type number
     * @memberof PodsApipodStopLibpod
     */
    t?: number
}

export interface PodsApiPodTopLibpodRequest {
    /**
     * Name of pod to query for processes
     * @type string
     * @memberof PodsApipodTopLibpod
     */
    name: string
    /**
     * when true, repeatedly stream the latest output (As of version 4.0)
     * @type boolean
     * @memberof PodsApipodTopLibpod
     */
    stream?: boolean
    /**
     * if streaming, delay in seconds between updates. Must be &gt;1. (As of version 4.0)
     * @type number
     * @memberof PodsApipodTopLibpod
     */
    delay?: number
    /**
     * arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used. 
     * @type string
     * @memberof PodsApipodTopLibpod
     */
    psArgs?: string
}

export interface PodsApiPodUnpauseLibpodRequest {
    /**
     * the name or ID of the pod
     * @type string
     * @memberof PodsApipodUnpauseLibpod
     */
    name: string
}

export class ObjectPodsApi {
    private api: ObservablePodsApi;

    public constructor(configuration: Configuration, requestFactory?: PodsApiRequestFactory, responseProcessor?: PodsApiResponseProcessor) {
        this.api = new ObservablePodsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate Kubernetes YAML based on a pod or container.
     * Generate a Kubernetes YAML file.
     * @param param the request object
     */
    public generateKubeLibpod(param: PodsApiGenerateKubeLibpodRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.generateKubeLibpod(param.names, param.service,  options).toPromise();
    }

    /**
     * Generate Systemd Units based on a pod or container.
     * Generate Systemd Units
     * @param param the request object
     */
    public generateSystemdLibpod(param: PodsApiGenerateSystemdLibpodRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.generateSystemdLibpod(param.name, param.useName, param._new, param.noHeader, param.startTimeout, param.stopTimeout, param.restartPolicy, param.containerPrefix, param.podPrefix, param.separator, param.restartSec, param.wants, param.after, param.requires,  options).toPromise();
    }

    /**
     * Tears down pods defined in a YAML file
     * Remove pods from play kube
     * @param param the request object
     */
    public playKubeDownLibpod(param: PodsApiPlayKubeDownLibpodRequest = {}, options?: Configuration): Promise<PlayKubeReport> {
        return this.api.playKubeDownLibpod( options).toPromise();
    }

    /**
     * Create and run pods based on a Kubernetes YAML file (pod or service kind).
     * Play a Kubernetes YAML file.
     * @param param the request object
     */
    public playKubeLibpod(param: PodsApiPlayKubeLibpodRequest = {}, options?: Configuration): Promise<PlayKubeReport> {
        return this.api.playKubeLibpod(param.network, param.tlsVerify, param.logDriver, param.start, param.staticIPs, param.staticMACs, param.request,  options).toPromise();
    }

    /**
     * Create a pod
     * @param param the request object
     */
    public podCreateLibpod(param: PodsApiPodCreateLibpodRequest = {}, options?: Configuration): Promise<IdResponse> {
        return this.api.podCreateLibpod(param.create,  options).toPromise();
    }

    /**
     * Remove pod
     * @param param the request object
     */
    public podDeleteLibpod(param: PodsApiPodDeleteLibpodRequest, options?: Configuration): Promise<PodRmReport> {
        return this.api.podDeleteLibpod(param.name, param.force,  options).toPromise();
    }

    /**
     * Check if a pod exists by name or ID
     * Pod exists
     * @param param the request object
     */
    public podExistsLibpod(param: PodsApiPodExistsLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.podExistsLibpod(param.name,  options).toPromise();
    }

    /**
     * Inspect pod
     * @param param the request object
     */
    public podInspectLibpod(param: PodsApiPodInspectLibpodRequest, options?: Configuration): Promise<InspectPodData> {
        return this.api.podInspectLibpod(param.name,  options).toPromise();
    }

    /**
     * Kill a pod
     * @param param the request object
     */
    public podKillLibpod(param: PodsApiPodKillLibpodRequest, options?: Configuration): Promise<PodKillReport> {
        return this.api.podKillLibpod(param.name, param.signal,  options).toPromise();
    }

    /**
     * List pods
     * @param param the request object
     */
    public podListLibpod(param: PodsApiPodListLibpodRequest = {}, options?: Configuration): Promise<Array<ListPodsReport>> {
        return this.api.podListLibpod(param.filters,  options).toPromise();
    }

    /**
     * Pause a pod
     * Pause a pod
     * @param param the request object
     */
    public podPauseLibpod(param: PodsApiPodPauseLibpodRequest, options?: Configuration): Promise<PodPauseReport> {
        return this.api.podPauseLibpod(param.name,  options).toPromise();
    }

    /**
     * Prune unused pods
     * @param param the request object
     */
    public podPruneLibpod(param: PodsApiPodPruneLibpodRequest = {}, options?: Configuration): Promise<PodPruneReport> {
        return this.api.podPruneLibpod( options).toPromise();
    }

    /**
     * Restart a pod
     * @param param the request object
     */
    public podRestartLibpod(param: PodsApiPodRestartLibpodRequest, options?: Configuration): Promise<PodRestartReport> {
        return this.api.podRestartLibpod(param.name,  options).toPromise();
    }

    /**
     * Start a pod
     * @param param the request object
     */
    public podStartLibpod(param: PodsApiPodStartLibpodRequest, options?: Configuration): Promise<PodStartReport> {
        return this.api.podStartLibpod(param.name,  options).toPromise();
    }

    /**
     * Display a live stream of resource usage statistics for the containers in one or more pods
     * Statistics for one or more pods
     * @param param the request object
     */
    public podStatsAllLibpod(param: PodsApiPodStatsAllLibpodRequest = {}, options?: Configuration): Promise<Array<PodStatsReport>> {
        return this.api.podStatsAllLibpod(param.all, param.namesOrIDs,  options).toPromise();
    }

    /**
     * Stop a pod
     * @param param the request object
     */
    public podStopLibpod(param: PodsApiPodStopLibpodRequest, options?: Configuration): Promise<PodStopReport> {
        return this.api.podStopLibpod(param.name, param.t,  options).toPromise();
    }

    /**
     * List processes running inside a pod
     * List processes
     * @param param the request object
     */
    public podTopLibpod(param: PodsApiPodTopLibpodRequest, options?: Configuration): Promise<PodTopOKBody> {
        return this.api.podTopLibpod(param.name, param.stream, param.delay, param.psArgs,  options).toPromise();
    }

    /**
     * Unpause a pod
     * @param param the request object
     */
    public podUnpauseLibpod(param: PodsApiPodUnpauseLibpodRequest, options?: Configuration): Promise<PodUnpauseReport> {
        return this.api.podUnpauseLibpod(param.name,  options).toPromise();
    }

}

import { ObservableSecretsApi } from './ObservableAPI';
import type { SecretsApiRequestFactory, SecretsApiResponseProcessor} from '../apis/SecretsApi';

export interface SecretsApiSecretCreateLibpodRequest {
    /**
     * User-defined name of the secret.
     * @type string
     * @memberof SecretsApisecretCreateLibpod
     */
    name: string
    /**
     * Secret driver
     * @type string
     * @memberof SecretsApisecretCreateLibpod
     */
    driver?: string
    /**
     * Secret
     * @type string
     * @memberof SecretsApisecretCreateLibpod
     */
    request?: string
}

export interface SecretsApiSecretDeleteLibpodRequest {
    /**
     * the name or ID of the secret
     * @type string
     * @memberof SecretsApisecretDeleteLibpod
     */
    name: string
    /**
     * Remove all secrets
     * @type boolean
     * @memberof SecretsApisecretDeleteLibpod
     */
    all?: boolean
}

export interface SecretsApiSecretInspectLibpodRequest {
    /**
     * the name or ID of the secret
     * @type string
     * @memberof SecretsApisecretInspectLibpod
     */
    name: string
}

export interface SecretsApiSecretListLibpodRequest {
}

export class ObjectSecretsApi {
    private api: ObservableSecretsApi;

    public constructor(configuration: Configuration, requestFactory?: SecretsApiRequestFactory, responseProcessor?: SecretsApiResponseProcessor) {
        this.api = new ObservableSecretsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a secret
     * @param param the request object
     */
    public secretCreateLibpod(param: SecretsApiSecretCreateLibpodRequest, options?: Configuration): Promise<SecretCreateLibpod201Response> {
        return this.api.secretCreateLibpod(param.name, param.driver, param.request,  options).toPromise();
    }

    /**
     * Remove secret
     * @param param the request object
     */
    public secretDeleteLibpod(param: SecretsApiSecretDeleteLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.secretDeleteLibpod(param.name, param.all,  options).toPromise();
    }

    /**
     * Inspect secret
     * @param param the request object
     */
    public secretInspectLibpod(param: SecretsApiSecretInspectLibpodRequest, options?: Configuration): Promise<SecretInfoReport> {
        return this.api.secretInspectLibpod(param.name,  options).toPromise();
    }

    /**
     * Returns a list of secrets
     * List secrets
     * @param param the request object
     */
    public secretListLibpod(param: SecretsApiSecretListLibpodRequest = {}, options?: Configuration): Promise<Array<SecretInfoReport>> {
        return this.api.secretListLibpod( options).toPromise();
    }

}

import { ObservableSecretsCompatApi } from './ObservableAPI';
import type { SecretsCompatApiRequestFactory, SecretsCompatApiResponseProcessor} from '../apis/SecretsCompatApi';

export interface SecretsCompatApiSecretCreateRequest {
    /**
     * attributes for creating a secret 
     * @type SecretCreate
     * @memberof SecretsCompatApisecretCreate
     */
    create?: SecretCreate
}

export interface SecretsCompatApiSecretDeleteRequest {
    /**
     * the name or ID of the secret
     * @type string
     * @memberof SecretsCompatApisecretDelete
     */
    name: string
}

export interface SecretsCompatApiSecretInspectRequest {
    /**
     * the name or ID of the secret
     * @type string
     * @memberof SecretsCompatApisecretInspect
     */
    name: string
}

export interface SecretsCompatApiSecretListRequest {
}

export class ObjectSecretsCompatApi {
    private api: ObservableSecretsCompatApi;

    public constructor(configuration: Configuration, requestFactory?: SecretsCompatApiRequestFactory, responseProcessor?: SecretsCompatApiResponseProcessor) {
        this.api = new ObservableSecretsCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a secret
     * @param param the request object
     */
    public secretCreate(param: SecretsCompatApiSecretCreateRequest = {}, options?: Configuration): Promise<SecretCreateLibpod201Response> {
        return this.api.secretCreate(param.create,  options).toPromise();
    }

    /**
     * Remove secret
     * @param param the request object
     */
    public secretDelete(param: SecretsCompatApiSecretDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.secretDelete(param.name,  options).toPromise();
    }

    /**
     * Inspect secret
     * @param param the request object
     */
    public secretInspect(param: SecretsCompatApiSecretInspectRequest, options?: Configuration): Promise<SecretInfoReportCompat> {
        return this.api.secretInspect(param.name,  options).toPromise();
    }

    /**
     * Returns a list of secrets
     * List secrets
     * @param param the request object
     */
    public secretList(param: SecretsCompatApiSecretListRequest = {}, options?: Configuration): Promise<Array<SecretInfoReportCompat>> {
        return this.api.secretList( options).toPromise();
    }

}

import { ObservableSystemApi } from './ObservableAPI';
import type { SystemApiRequestFactory, SystemApiResponseProcessor} from '../apis/SystemApi';

export interface SystemApiSystemDataUsageLibpodRequest {
}

export interface SystemApiSystemEventsLibpodRequest {
    /**
     * start streaming events from this time
     * @type string
     * @memberof SystemApisystemEventsLibpod
     */
    since?: string
    /**
     * stop streaming events later than this
     * @type string
     * @memberof SystemApisystemEventsLibpod
     */
    until?: string
    /**
     * JSON encoded map[string][]string of constraints
     * @type string
     * @memberof SystemApisystemEventsLibpod
     */
    filters?: string
    /**
     * when false, do not follow events
     * @type boolean
     * @memberof SystemApisystemEventsLibpod
     */
    stream?: boolean
}

export interface SystemApiSystemInfoLibpodRequest {
}

export interface SystemApiSystemPingRequest {
}

export interface SystemApiSystemPruneLibpodRequest {
}

export interface SystemApiSystemVersionLibpodRequest {
}

export class ObjectSystemApi {
    private api: ObservableSystemApi;

    public constructor(configuration: Configuration, requestFactory?: SystemApiRequestFactory, responseProcessor?: SystemApiResponseProcessor) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return information about disk usage for containers, images, and volumes
     * Show disk usage
     * @param param the request object
     */
    public systemDataUsageLibpod(param: SystemApiSystemDataUsageLibpodRequest = {}, options?: Configuration): Promise<SystemDfReport> {
        return this.api.systemDataUsageLibpod( options).toPromise();
    }

    /**
     * Returns events filtered on query parameters
     * Get events
     * @param param the request object
     */
    public systemEventsLibpod(param: SystemApiSystemEventsLibpodRequest = {}, options?: Configuration): Promise<void> {
        return this.api.systemEventsLibpod(param.since, param.until, param.filters, param.stream,  options).toPromise();
    }

    /**
     * Returns information on the system and libpod configuration
     * Get info
     * @param param the request object
     */
    public systemInfoLibpod(param: SystemApiSystemInfoLibpodRequest = {}, options?: Configuration): Promise<Info> {
        return this.api.systemInfoLibpod( options).toPromise();
    }

    /**
     * Return protocol information in response headers. `HEAD /libpod/_ping` is also supported. `/_ping` is available for compatibility with other engines. The '_ping' endpoints are not versioned. 
     * Ping service
     * @param param the request object
     */
    public systemPing(param: SystemApiSystemPingRequest = {}, options?: Configuration): Promise<string> {
        return this.api.systemPing( options).toPromise();
    }

    /**
     * Prune unused data
     * @param param the request object
     */
    public systemPruneLibpod(param: SystemApiSystemPruneLibpodRequest = {}, options?: Configuration): Promise<SystemPruneReport> {
        return this.api.systemPruneLibpod( options).toPromise();
    }

    /**
     * Component Version information
     * @param param the request object
     */
    public systemVersionLibpod(param: SystemApiSystemVersionLibpodRequest = {}, options?: Configuration): Promise<ComponentVersion> {
        return this.api.systemVersionLibpod( options).toPromise();
    }

}

import { ObservableSystemCompatApi } from './ObservableAPI';
import type { SystemCompatApiRequestFactory, SystemCompatApiResponseProcessor} from '../apis/SystemCompatApi';

export interface SystemCompatApiSystemAuthRequest {
    /**
     * Authentication to check
     * @type AuthConfig
     * @memberof SystemCompatApisystemAuth
     */
    authConfig?: AuthConfig
}

export interface SystemCompatApiSystemDataUsageRequest {
}

export interface SystemCompatApiSystemEventsRequest {
    /**
     * start streaming events from this time
     * @type string
     * @memberof SystemCompatApisystemEvents
     */
    since?: string
    /**
     * stop streaming events later than this
     * @type string
     * @memberof SystemCompatApisystemEvents
     */
    until?: string
    /**
     * JSON encoded map[string][]string of constraints
     * @type string
     * @memberof SystemCompatApisystemEvents
     */
    filters?: string
}

export interface SystemCompatApiSystemInfoRequest {
}

export interface SystemCompatApiSystemPingRequest {
}

export interface SystemCompatApiSystemVersionRequest {
}

export class ObjectSystemCompatApi {
    private api: ObservableSystemCompatApi;

    public constructor(configuration: Configuration, requestFactory?: SystemCompatApiRequestFactory, responseProcessor?: SystemCompatApiResponseProcessor) {
        this.api = new ObservableSystemCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check auth configuration
     * @param param the request object
     */
    public systemAuth(param: SystemCompatApiSystemAuthRequest = {}, options?: Configuration): Promise<AuthReport> {
        return this.api.systemAuth(param.authConfig,  options).toPromise();
    }

    /**
     * Return information about disk usage for containers, images, and volumes
     * Show disk usage
     * @param param the request object
     */
    public systemDataUsage(param: SystemCompatApiSystemDataUsageRequest = {}, options?: Configuration): Promise<SystemDfReport> {
        return this.api.systemDataUsage( options).toPromise();
    }

    /**
     * Returns events filtered on query parameters
     * Get events
     * @param param the request object
     */
    public systemEvents(param: SystemCompatApiSystemEventsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.systemEvents(param.since, param.until, param.filters,  options).toPromise();
    }

    /**
     * Returns information on the system and libpod configuration
     * Get info
     * @param param the request object
     */
    public systemInfo(param: SystemCompatApiSystemInfoRequest = {}, options?: Configuration): Promise<void> {
        return this.api.systemInfo( options).toPromise();
    }

    /**
     * Return protocol information in response headers. `HEAD /libpod/_ping` is also supported. `/_ping` is available for compatibility with other engines. The '_ping' endpoints are not versioned. 
     * Ping service
     * @param param the request object
     */
    public systemPing(param: SystemCompatApiSystemPingRequest = {}, options?: Configuration): Promise<string> {
        return this.api.systemPing( options).toPromise();
    }

    /**
     * Component Version information
     * @param param the request object
     */
    public systemVersion(param: SystemCompatApiSystemVersionRequest = {}, options?: Configuration): Promise<ComponentVersion> {
        return this.api.systemVersion( options).toPromise();
    }

}

import { ObservableVolumesApi } from './ObservableAPI';
import type { VolumesApiRequestFactory, VolumesApiResponseProcessor} from '../apis/VolumesApi';

export interface VolumesApiVolumeCreateLibpodRequest {
    /**
     * attributes for creating a volume
     * @type VolumeCreateOptions
     * @memberof VolumesApivolumeCreateLibpod
     */
    create?: VolumeCreateOptions
}

export interface VolumesApiVolumeDeleteLibpodRequest {
    /**
     * the name or ID of the volume
     * @type string
     * @memberof VolumesApivolumeDeleteLibpod
     */
    name: string
    /**
     * force removal
     * @type boolean
     * @memberof VolumesApivolumeDeleteLibpod
     */
    force?: boolean
}

export interface VolumesApiVolumeExistsLibpodRequest {
    /**
     * the name of the volume
     * @type string
     * @memberof VolumesApivolumeExistsLibpod
     */
    name: string
}

export interface VolumesApiVolumeInspectLibpodRequest {
    /**
     * the name or ID of the volume
     * @type string
     * @memberof VolumesApivolumeInspectLibpod
     */
    name: string
}

export interface VolumesApiVolumeListLibpodRequest {
    /**
     * JSON encoded value of the filters (a map[string][]string) to process on the volumes list. Available filters:   - driver&#x3D;&lt;volume-driver-name&gt; Matches volumes based on their driver.   - label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;:&lt;value&gt; Matches volumes based on the presence of a label alone or a label and a value.   - name&#x3D;&lt;volume-name&gt; Matches all of volume name.   - opt&#x3D;&lt;driver-option&gt; Matches a storage driver options   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; List volumes created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. 
     * @type string
     * @memberof VolumesApivolumeListLibpod
     */
    filters?: string
}

export interface VolumesApiVolumePruneLibpodRequest {
    /**
     * JSON encoded value of filters (a map[string][]string) to match volumes against before pruning. Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune volumes created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * @type string
     * @memberof VolumesApivolumePruneLibpod
     */
    filters?: string
}

export class ObjectVolumesApi {
    private api: ObservableVolumesApi;

    public constructor(configuration: Configuration, requestFactory?: VolumesApiRequestFactory, responseProcessor?: VolumesApiResponseProcessor) {
        this.api = new ObservableVolumesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a volume
     * @param param the request object
     */
    public volumeCreateLibpod(param: VolumesApiVolumeCreateLibpodRequest = {}, options?: Configuration): Promise<VolumeConfigResponse> {
        return this.api.volumeCreateLibpod(param.create,  options).toPromise();
    }

    /**
     * Remove volume
     * @param param the request object
     */
    public volumeDeleteLibpod(param: VolumesApiVolumeDeleteLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.volumeDeleteLibpod(param.name, param.force,  options).toPromise();
    }

    /**
     * Check if a volume exists
     * Volume exists
     * @param param the request object
     */
    public volumeExistsLibpod(param: VolumesApiVolumeExistsLibpodRequest, options?: Configuration): Promise<void> {
        return this.api.volumeExistsLibpod(param.name,  options).toPromise();
    }

    /**
     * Inspect volume
     * @param param the request object
     */
    public volumeInspectLibpod(param: VolumesApiVolumeInspectLibpodRequest, options?: Configuration): Promise<VolumeConfigResponse> {
        return this.api.volumeInspectLibpod(param.name,  options).toPromise();
    }

    /**
     * Returns a list of volumes
     * List volumes
     * @param param the request object
     */
    public volumeListLibpod(param: VolumesApiVolumeListLibpodRequest = {}, options?: Configuration): Promise<Array<VolumeConfigResponse>> {
        return this.api.volumeListLibpod(param.filters,  options).toPromise();
    }

    /**
     * Prune volumes
     * @param param the request object
     */
    public volumePruneLibpod(param: VolumesApiVolumePruneLibpodRequest = {}, options?: Configuration): Promise<Array<PruneReport>> {
        return this.api.volumePruneLibpod(param.filters,  options).toPromise();
    }

}

import { ObservableVolumesCompatApi } from './ObservableAPI';
import type { VolumesCompatApiRequestFactory, VolumesCompatApiResponseProcessor} from '../apis/VolumesCompatApi';

export interface VolumesCompatApiVolumeCreateRequest {
    /**
     * attributes for creating a volume. Note: If a volume by the same name exists, a 201 response with that volume&#39;s information will be generated. 
     * @type VolumeCreate
     * @memberof VolumesCompatApivolumeCreate
     */
    create?: VolumeCreate
}

export interface VolumesCompatApiVolumeDeleteRequest {
    /**
     * the name or ID of the volume
     * @type string
     * @memberof VolumesCompatApivolumeDelete
     */
    name: string
    /**
     * Force removal of the volume. This actually only causes errors due to the names volume not being found to be suppressed, which is the behaviour Docker implements. 
     * @type boolean
     * @memberof VolumesCompatApivolumeDelete
     */
    force?: boolean
}

export interface VolumesCompatApiVolumeInspectRequest {
    /**
     * the name or ID of the volume
     * @type string
     * @memberof VolumesCompatApivolumeInspect
     */
    name: string
}

export interface VolumesCompatApiVolumeListRequest {
    /**
     * JSON encoded value of the filters (a map[string][]string) to process on the volumes list. Available filters:   - driver&#x3D;&lt;volume-driver-name&gt; Matches volumes based on their driver.   - label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;:&lt;value&gt; Matches volumes based on the presence of a label alone or a label and a value.   - name&#x3D;&lt;volume-name&gt; Matches all of volume name.   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; List volumes created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  Note:   The boolean &#x60;dangling&#x60; filter is not yet implemented for this endpoint. 
     * @type string
     * @memberof VolumesCompatApivolumeList
     */
    filters?: string
}

export interface VolumesCompatApiVolumePruneRequest {
    /**
     * JSON encoded value of filters (a map[string][]string) to match volumes against before pruning. Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune volumes created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune volumes with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels. 
     * @type string
     * @memberof VolumesCompatApivolumePrune
     */
    filters?: string
}

export class ObjectVolumesCompatApi {
    private api: ObservableVolumesCompatApi;

    public constructor(configuration: Configuration, requestFactory?: VolumesCompatApiRequestFactory, responseProcessor?: VolumesCompatApiResponseProcessor) {
        this.api = new ObservableVolumesCompatApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a volume
     * @param param the request object
     */
    public volumeCreate(param: VolumesCompatApiVolumeCreateRequest = {}, options?: Configuration): Promise<Volume> {
        return this.api.volumeCreate(param.create,  options).toPromise();
    }

    /**
     * Remove volume
     * @param param the request object
     */
    public volumeDelete(param: VolumesCompatApiVolumeDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.volumeDelete(param.name, param.force,  options).toPromise();
    }

    /**
     * Inspect volume
     * @param param the request object
     */
    public volumeInspect(param: VolumesCompatApiVolumeInspectRequest, options?: Configuration): Promise<Volume> {
        return this.api.volumeInspect(param.name,  options).toPromise();
    }

    /**
     * Returns a list of volume
     * List volumes
     * @param param the request object
     */
    public volumeList(param: VolumesCompatApiVolumeListRequest = {}, options?: Configuration): Promise<VolumeListOKBody> {
        return this.api.volumeList(param.filters,  options).toPromise();
    }

    /**
     * Prune volumes
     * @param param the request object
     */
    public volumePrune(param: VolumesCompatApiVolumePruneRequest = {}, options?: Configuration): Promise<VolumesPruneReport> {
        return this.api.volumePrune(param.filters,  options).toPromise();
    }

}
