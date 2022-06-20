# .ContainersApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerAttachLibpod**](ContainersApi.md#containerAttachLibpod) | **POST** /libpod/containers/{name}/attach | Attach to a container
[**containerChangesLibpod**](ContainersApi.md#containerChangesLibpod) | **GET** /libpod/containers/{name}/changes | Report on changes to container&#39;s filesystem; adds, deletes or modifications.
[**containerCheckpointLibpod**](ContainersApi.md#containerCheckpointLibpod) | **POST** /libpod/containers/{name}/checkpoint | Checkpoint a container
[**containerCreateLibpod**](ContainersApi.md#containerCreateLibpod) | **POST** /libpod/containers/create | Create a container
[**containerDeleteLibpod**](ContainersApi.md#containerDeleteLibpod) | **DELETE** /libpod/containers/{name} | Delete container
[**containerExistsLibpod**](ContainersApi.md#containerExistsLibpod) | **GET** /libpod/containers/{name}/exists | Check if container exists
[**containerExportLibpod**](ContainersApi.md#containerExportLibpod) | **GET** /libpod/containers/{name}/export | Export a container
[**containerHealthcheckLibpod**](ContainersApi.md#containerHealthcheckLibpod) | **GET** /libpod/containers/{name}/healthcheck | Run a container&#39;s healthcheck
[**containerInitLibpod**](ContainersApi.md#containerInitLibpod) | **POST** /libpod/containers/{name}/init | Initialize a container
[**containerInspectLibpod**](ContainersApi.md#containerInspectLibpod) | **GET** /libpod/containers/{name}/json | Inspect container
[**containerKillLibpod**](ContainersApi.md#containerKillLibpod) | **POST** /libpod/containers/{name}/kill | Kill container
[**containerListLibpod**](ContainersApi.md#containerListLibpod) | **GET** /libpod/containers/json | List containers
[**containerLogsLibpod**](ContainersApi.md#containerLogsLibpod) | **GET** /libpod/containers/{name}/logs | Get container logs
[**containerMountLibpod**](ContainersApi.md#containerMountLibpod) | **POST** /libpod/containers/{name}/mount | Mount a container
[**containerPauseLibpod**](ContainersApi.md#containerPauseLibpod) | **POST** /libpod/containers/{name}/pause | Pause a container
[**containerPruneLibpod**](ContainersApi.md#containerPruneLibpod) | **POST** /libpod/containers/prune | Delete stopped containers
[**containerRenameLibpod**](ContainersApi.md#containerRenameLibpod) | **POST** /libpod/containers/{name}/rename | Rename an existing container
[**containerResizeLibpod**](ContainersApi.md#containerResizeLibpod) | **POST** /libpod/containers/{name}/resize | Resize a container&#39;s TTY
[**containerRestartLibpod**](ContainersApi.md#containerRestartLibpod) | **POST** /libpod/containers/{name}/restart | Restart a container
[**containerRestoreLibpod**](ContainersApi.md#containerRestoreLibpod) | **POST** /libpod/containers/{name}/restore | Restore a container
[**containerShowMountedLibpod**](ContainersApi.md#containerShowMountedLibpod) | **GET** /libpod/containers/showmounted | Show mounted containers
[**containerStartLibpod**](ContainersApi.md#containerStartLibpod) | **POST** /libpod/containers/{name}/start | Start a container
[**containerStatsLibpod**](ContainersApi.md#containerStatsLibpod) | **GET** /libpod/containers/{name}/stats | Get stats for a container
[**containerStopLibpod**](ContainersApi.md#containerStopLibpod) | **POST** /libpod/containers/{name}/stop | Stop a container
[**containerTopLibpod**](ContainersApi.md#containerTopLibpod) | **GET** /libpod/containers/{name}/top | List processes
[**containerUnmountLibpod**](ContainersApi.md#containerUnmountLibpod) | **POST** /libpod/containers/{name}/unmount | Unmount a container
[**containerUnpauseLibpod**](ContainersApi.md#containerUnpauseLibpod) | **POST** /libpod/containers/{name}/unpause | Unpause Container
[**containerWaitLibpod**](ContainersApi.md#containerWaitLibpod) | **POST** /libpod/containers/{name}/wait | Wait on a container
[**containersStatsAllLibpod**](ContainersApi.md#containersStatsAllLibpod) | **GET** /libpod/containers/stats | Get stats for one or more containers
[**generateKubeLibpod**](ContainersApi.md#generateKubeLibpod) | **GET** /libpod/generate/kube | Generate a Kubernetes YAML file.
[**generateSystemdLibpod**](ContainersApi.md#generateSystemdLibpod) | **GET** /libpod/generate/{name}/systemd | Generate Systemd Units
[**imageCommitLibpod**](ContainersApi.md#imageCommitLibpod) | **POST** /libpod/commit | Commit
[**playKubeDownLibpod**](ContainersApi.md#playKubeDownLibpod) | **DELETE** /libpod/play/kube | Remove pods from play kube
[**playKubeLibpod**](ContainersApi.md#playKubeLibpod) | **POST** /libpod/play/kube | Play a Kubernetes YAML file.
[**putContainerArchiveLibpod**](ContainersApi.md#putContainerArchiveLibpod) | **PUT** /libpod/containers/{name}/archive | Copy files into a container


# **containerAttachLibpod**
> containerAttachLibpod()

Hijacks the connection to forward the container's standard streams to the client.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerAttachLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | keys to use for detaching from the container (optional)
  detachKeys: "detachKeys_example",
  // boolean | Stream all logs from the container across the connection. Happens before streaming attach (if requested). At least one of logs or stream must be set (optional)
  logs: true,
  // boolean | Attach to the container. If unset, and logs is set, only the container's logs will be sent. At least one of stream or logs must be set (optional)
  stream: true,
  // boolean | Attach to container STDOUT (optional)
  stdout: true,
  // boolean | Attach to container STDERR (optional)
  stderr: true,
  // boolean | Attach to container STDIN (optional)
  stdin: true,
};

apiInstance.containerAttachLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **detachKeys** | [**string**] | keys to use for detaching from the container | (optional) defaults to undefined
 **logs** | [**boolean**] | Stream all logs from the container across the connection. Happens before streaming attach (if requested). At least one of logs or stream must be set | (optional) defaults to undefined
 **stream** | [**boolean**] | Attach to the container. If unset, and logs is set, only the container&#39;s logs will be sent. At least one of stream or logs must be set | (optional) defaults to undefined
 **stdout** | [**boolean**] | Attach to container STDOUT | (optional) defaults to undefined
 **stderr** | [**boolean**] | Attach to container STDERR | (optional) defaults to undefined
 **stdin** | [**boolean**] | Attach to container STDIN | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**101** | No error, connection has been hijacked for transporting streams. |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerChangesLibpod**
> void containerChangesLibpod()

Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerChangesLibpodRequest = {
  // string | the name or id of the container
  name: "name_example",
  // string | specify a second layer which is used to compare against it instead of the parent layer (optional)
  parent: "parent_example",
  // 'all' | 'container' | 'image' | select what you want to match, default is all (optional)
  diffType: "all",
};

apiInstance.containerChangesLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or id of the container | defaults to undefined
 **parent** | [**string**] | specify a second layer which is used to compare against it instead of the parent layer | (optional) defaults to undefined
 **diffType** | [**&#39;all&#39; | &#39;container&#39; | &#39;image&#39;**]**Array<&#39;all&#39; &#124; &#39;container&#39; &#124; &#39;image&#39;>** | select what you want to match, default is all | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Changes |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerCheckpointLibpod**
> void containerCheckpointLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerCheckpointLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | keep all temporary checkpoint files (optional)
  keep: true,
  // boolean | leave the container running after writing checkpoint to disk (optional)
  leaveRunning: true,
  // boolean | checkpoint a container with established TCP connections (optional)
  tcpEstablished: true,
  // boolean | export the checkpoint image to a tar.gz (optional)
  _export: true,
  // boolean | do not include root file-system changes when exporting (optional)
  ignoreRootFS: true,
  // boolean | add checkpoint statistics to the returned CheckpointReport (optional)
  printStats: true,
};

apiInstance.containerCheckpointLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **keep** | [**boolean**] | keep all temporary checkpoint files | (optional) defaults to undefined
 **leaveRunning** | [**boolean**] | leave the container running after writing checkpoint to disk | (optional) defaults to undefined
 **tcpEstablished** | [**boolean**] | checkpoint a container with established TCP connections | (optional) defaults to undefined
 **_export** | [**boolean**] | export the checkpoint image to a tar.gz | (optional) defaults to undefined
 **ignoreRootFS** | [**boolean**] | do not include root file-system changes when exporting | (optional) defaults to undefined
 **printStats** | [**boolean**] | add checkpoint statistics to the returned CheckpointReport | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | tarball is returned in body if exported |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerCreateLibpod**
> ContainerCreateResponse containerCreateLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerCreateLibpodRequest = {
  // SpecGenerator | attributes for creating a container (optional)
  create: {
    networks: {
      "key": {
        aliases: [
          "aliases_example",
        ],
        interfaceName: "interfaceName_example",
        staticIps: [
          [
            1,
          ],
        ],
        staticMac: [
          1,
        ],
      },
    },
    annotations: {
      "key": "key_example",
    },
    apparmorProfile: "apparmorProfile_example",
    capAdd: [
      "capAdd_example",
    ],
    capDrop: [
      "capDrop_example",
    ],
    cgroupParent: "cgroupParent_example",
    cgroupns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
    cgroupsMode: "cgroupsMode_example",
    chrootDirectories: [
      "chrootDirectories_example",
    ],
    cniNetworks: [
      "cniNetworks_example",
    ],
    command: [
      "command_example",
    ],
    conmonPidFile: "conmonPidFile_example",
    containerCreateCommand: [
      "containerCreateCommand_example",
    ],
    cpuPeriod: 1,
    cpuQuota: 1,
    createWorkingDir: true,
    dependencyContainers: [
      "dependencyContainers_example",
    ],
    deviceCgroupRule: [
      {
        access: "access_example",
        allow: true,
        major: 1,
        minor: 1,
        type: "type_example",
      },
    ],
    devices: [
      {
        fileMode: 1,
        gid: 1,
        major: 1,
        minor: 1,
        path: "path_example",
        type: "type_example",
        uid: 1,
      },
    ],
    devicesFrom: [
      "devicesFrom_example",
    ],
    dnsOption: [
      "dnsOption_example",
    ],
    dnsSearch: [
      "dnsSearch_example",
    ],
    dnsServer: [
      [
        1,
      ],
    ],
    entrypoint: [
      "entrypoint_example",
    ],
    env: {
      "key": "key_example",
    },
    envHost: true,
    expose: {},
    groups: [
      "groups_example",
    ],
    healthconfig: {
      interval: 1,
      retries: 1,
      startPeriod: 1,
      test: [
        "test_example",
      ],
      timeout: 1,
    },
    hostDeviceList: [
      {
        fileMode: 1,
        gid: 1,
        major: 1,
        minor: 1,
        path: "path_example",
        type: "type_example",
        uid: 1,
      },
    ],
    hostadd: [
      "hostadd_example",
    ],
    hostname: "hostname_example",
    hostusers: [
      "hostusers_example",
    ],
    httpproxy: true,
    idmappings: {
      autoUserNs: true,
      autoUserNsOpts: {
        additionalGIDMappings: [
          {
            containerId: 1,
            hostId: 1,
            size: 1,
          },
        ],
        additionalUIDMappings: [
          {
            containerId: 1,
            hostId: 1,
            size: 1,
          },
        ],
        groupFile: "groupFile_example",
        initialSize: 1,
        passwdFile: "passwdFile_example",
        size: 1,
      },
      gIDMap: [
        {
          containerId: 1,
          hostId: 1,
          size: 1,
        },
      ],
      hostGIDMapping: true,
      hostUIDMapping: true,
      uIDMap: [
        {
          containerId: 1,
          hostId: 1,
          size: 1,
        },
      ],
    },
    image: "image_example",
    imageVolumeMode: "imageVolumeMode_example",
    imageVolumes: [
      {
        destination: "destination_example",
        readWrite: true,
        source: "source_example",
      },
    ],
    init: true,
    initContainerType: "initContainerType_example",
    initPath: "initPath_example",
    ipcns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
    labels: {
      "key": "key_example",
    },
    logConfiguration: {
      config: {
        "key": "key_example",
      },
      type: "type_example",
    },
    managePassword: true,
    mask: [
      "mask_example",
    ],
    mounts: [
      {
        bindOptions: {
          nonRecursive: true,
          propagation: "propagation_example",
        },
        consistency: "consistency_example",
        readOnly: true,
        source: "source_example",
        target: "target_example",
        tmpfsOptions: {
          mode: 1,
          sizeBytes: 1,
        },
        type: "type_example",
        volumeOptions: {
          driverConfig: {
            name: "name_example",
            options: {
              "key": "key_example",
            },
          },
          labels: {
            "key": "key_example",
          },
          noCopy: true,
        },
      },
    ],
    name: "name_example",
    namespace: "namespace_example",
    netns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
    networkOptions: {
      "key": [
        "key_example",
      ],
    },
    noNewPrivileges: true,
    ociRuntime: "ociRuntime_example",
    oomScoreAdj: 1,
    overlayVolumes: [
      {
        destination: "destination_example",
        options: [
          "options_example",
        ],
        source: "source_example",
      },
    ],
    passwdEntry: "passwdEntry_example",
    personality: {
      domain: "domain_example",
      flags: [
        "flags_example",
      ],
    },
    pidns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
    pod: "pod_example",
    portmappings: [
      {
        containerPort: 1,
        hostIp: "hostIp_example",
        hostPort: 1,
        protocol: "protocol_example",
        range: 1,
      },
    ],
    privileged: true,
    procfsOpts: [
      "procfsOpts_example",
    ],
    publishImagePorts: true,
    rLimits: [
      {
        hard: 1,
        soft: 1,
        type: "type_example",
      },
    ],
    rawImageName: "rawImageName_example",
    readOnlyFilesystem: true,
    remove: true,
    resourceLimits: {
      blockIO: {
        leafWeight: 1,
        throttleReadBpsDevice: [
          {
            major: 1,
            minor: 1,
            rate: 1,
          },
        ],
        throttleReadIOPSDevice: [
          {
            major: 1,
            minor: 1,
            rate: 1,
          },
        ],
        throttleWriteBpsDevice: [
          {
            major: 1,
            minor: 1,
            rate: 1,
          },
        ],
        throttleWriteIOPSDevice: [
          {
            major: 1,
            minor: 1,
            rate: 1,
          },
        ],
        weight: 1,
        weightDevice: [
          {
            leafWeight: 1,
            major: 1,
            minor: 1,
            weight: 1,
          },
        ],
      },
      cpu: {
        cpus: "cpus_example",
        mems: "mems_example",
        period: 1,
        quota: 1,
        realtimePeriod: 1,
        realtimeRuntime: 1,
        shares: 1,
      },
      devices: [
        {
          access: "access_example",
          allow: true,
          major: 1,
          minor: 1,
          type: "type_example",
        },
      ],
      hugepageLimits: [
        {
          limit: 1,
          pageSize: "pageSize_example",
        },
      ],
      memory: {
        disableOOMKiller: true,
        kernel: 1,
        kernelTCP: 1,
        limit: 1,
        reservation: 1,
        swap: 1,
        swappiness: 1,
        useHierarchy: true,
      },
      network: {
        classID: 1,
        priorities: [
          {
            name: "name_example",
            priority: 1,
          },
        ],
      },
      pids: {
        limit: 1,
      },
      rdma: {
        "key": {
          hcaHandles: 1,
          hcaObjects: 1,
        },
      },
      unified: {
        "key": "key_example",
      },
    },
    restartPolicy: "restartPolicy_example",
    restartTries: 1,
    rootfs: "rootfs_example",
    rootfsOverlay: true,
    rootfsPropagation: "rootfsPropagation_example",
    sdnotifyMode: "sdnotifyMode_example",
    seccompPolicy: "seccompPolicy_example",
    seccompProfilePath: "seccompProfilePath_example",
    secretEnv: {
      "key": "key_example",
    },
    secrets: [
      {
        GID: 1,
        mode: 1,
        source: "source_example",
        target: "target_example",
        UID: 1,
      },
    ],
    selinuxOpts: [
      "selinuxOpts_example",
    ],
    shmSize: 1,
    stdin: true,
    stopSignal: 1,
    stopTimeout: 1,
    storageOpts: {
      "key": "key_example",
    },
    sysctl: {
      "key": "key_example",
    },
    systemd: "systemd_example",
    terminal: true,
    throttleReadBpsDevice: {
      "key": {
        major: 1,
        minor: 1,
        rate: 1,
      },
    },
    throttleReadIOPSDevice: {
      "key": {
        major: 1,
        minor: 1,
        rate: 1,
      },
    },
    throttleWriteBpsDevice: {
      "key": {
        major: 1,
        minor: 1,
        rate: 1,
      },
    },
    throttleWriteIOPSDevice: {
      "key": {
        major: 1,
        minor: 1,
        rate: 1,
      },
    },
    timeout: 1,
    timezone: "timezone_example",
    umask: "umask_example",
    unified: {
      "key": "key_example",
    },
    unmask: [
      "unmask_example",
    ],
    unsetenv: [
      "unsetenv_example",
    ],
    unsetenvall: true,
    useImageHosts: true,
    useImageResolveConf: true,
    user: "user_example",
    userns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
    utsns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
    _volatile: true,
    volumes: [
      {
        dest: "dest_example",
        name: "name_example",
        options: [
          "options_example",
        ],
      },
    ],
    volumesFrom: [
      "volumesFrom_example",
    ],
    weightDevice: {
      "key": {
        leafWeight: 1,
        major: 1,
        minor: 1,
        weight: 1,
      },
    },
    workDir: "workDir_example",
  },
};

apiInstance.containerCreateLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create** | **SpecGenerator**| attributes for creating a container |


### Return type

**ContainerCreateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create container |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such container |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerDeleteLibpod**
> void | Array<LibpodContainersRmReport> containerDeleteLibpod()

Delete container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerDeleteLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | additionally remove containers that depend on the container to be removed (optional)
  depend: true,
  // boolean | force stop container if running (optional)
  force: true,
  // boolean | ignore errors when the container to be removed does not existxo (optional)
  ignore: true,
  // number | number of seconds to wait before killing container when force removing (optional)
  timeout: 10,
  // boolean | delete volumes (optional)
  v: true,
};

apiInstance.containerDeleteLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **depend** | [**boolean**] | additionally remove containers that depend on the container to be removed | (optional) defaults to undefined
 **force** | [**boolean**] | force stop container if running | (optional) defaults to undefined
 **ignore** | [**boolean**] | ignore errors when the container to be removed does not existxo | (optional) defaults to undefined
 **timeout** | [**number**] | number of seconds to wait before killing container when force removing | (optional) defaults to 10
 **v** | [**boolean**] | delete volumes | (optional) defaults to undefined


### Return type

**void | Array<LibpodContainersRmReport>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Remove Containers |  -  |
**204** | no error |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such container |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerExistsLibpod**
> void containerExistsLibpod()

Quick way to determine if a container exists by name or ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerExistsLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerExistsLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | container exists |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerExportLibpod**
> void containerExportLibpod()

Export the contents of a container as a tarball.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerExportLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerExportLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | tarball is returned in body |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerHealthcheckLibpod**
> HealthCheckResults containerHealthcheckLibpod()

Execute the defined healthcheck and return information about the results

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerHealthcheckLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerHealthcheckLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**HealthCheckResults**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Healthcheck Results |  -  |
**404** | No such container |  -  |
**409** | container has no healthcheck or is not running |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerInitLibpod**
> void containerInitLibpod()

Performs all tasks necessary for initializing the container but does not start the container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerInitLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerInitLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**304** | container already initialized |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerInspectLibpod**
> InspectContainerData containerInspectLibpod()

Return low-level information about a container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerInspectLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | display filesystem usage (optional)
  size: true,
};

apiInstance.containerInspectLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **size** | [**boolean**] | display filesystem usage | (optional) defaults to undefined


### Return type

**InspectContainerData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inspect container |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerKillLibpod**
> void containerKillLibpod()

send a signal to a container, defaults to killing the container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerKillLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | signal to be sent to container, either by integer or SIG_ name (optional)
  signal: "TERM",
};

apiInstance.containerKillLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **signal** | [**string**] | signal to be sent to container, either by integer or SIG_ name | (optional) defaults to 'TERM'


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**404** | No such container |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerListLibpod**
> Array<ListContainer> containerListLibpod()

Returns a list of containers

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerListLibpodRequest = {
  // boolean | Return all containers. By default, only running containers are shown (optional)
  all: false,
  // number | Return this number of most recently created containers, including non-running ones. (optional)
  limit: 1,
  // boolean | Ignored. Previously included details on pod name and ID that are currently included by default. (optional)
  pod: false,
  // boolean | Return the size of container as fields SizeRw and SizeRootFs. (optional)
  size: false,
  // boolean | Sync container state with OCI runtime (optional)
  sync: false,
  // string | A JSON encoded value of the filters (a `map[string][]string`) to process on the containers list. Available filters: - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`) - `before`=(`<container id>` or `<container name>`) - `expose`=(`<port>[/<proto>]` or `<startport-endport>/[<proto>]`) - `exited=<int>` containers with exit code of `<int>` - `health`=(`starting`, `healthy`, `unhealthy` or `none`) - `id=<ID>` a container's ID - `is-task`=(`true` or `false`) - `label`=(`key` or `\"key=value\"`) of an container label - `name=<name>` a container's name - `network`=(`<network id>` or `<network name>`) - `pod`=(`<pod id>` or `<pod name>`) - `publish`=(`<port>[/<proto>]` or `<startport-endport>/[<proto>]`) - `since`=(`<container id>` or `<container name>`) - `status`=(`created`, `restarting`, `running`, `removing`, `paused`, `exited` or `dead`) - `volume`=(`<volume name>` or `<mount point destination>`)  (optional)
  filters: "filters_example",
};

apiInstance.containerListLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] | Return all containers. By default, only running containers are shown | (optional) defaults to undefined
 **limit** | [**number**] | Return this number of most recently created containers, including non-running ones. | (optional) defaults to undefined
 **pod** | [**boolean**] | Ignored. Previously included details on pod name and ID that are currently included by default. | (optional) defaults to undefined
 **size** | [**boolean**] | Return the size of container as fields SizeRw and SizeRootFs. | (optional) defaults to undefined
 **sync** | [**boolean**] | Sync container state with OCI runtime | (optional) defaults to undefined
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the containers list. Available filters: - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60; or &#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;, &#x60;healthy&#x60;, &#x60;unhealthy&#x60; or &#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container&#39;s ID - &#x60;is-task&#x60;&#x3D;(&#x60;true&#x60; or &#x60;false&#x60;) - &#x60;label&#x60;&#x3D;(&#x60;key&#x60; or &#x60;\&quot;key&#x3D;value\&quot;&#x60;) of an container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;pod&#x60;&#x3D;(&#x60;&lt;pod id&gt;&#x60; or &#x60;&lt;pod name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60; or &#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x60;&#x3D;(&#x60;created&#x60;, &#x60;restarting&#x60;, &#x60;running&#x60;, &#x60;removing&#x60;, &#x60;paused&#x60;, &#x60;exited&#x60; or &#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;)  | (optional) defaults to undefined


### Return type

**Array<ListContainer>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List Containers |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerLogsLibpod**
> void containerLogsLibpod()

Get stdout and stderr logs from a container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerLogsLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | Keep connection after returning logs. (optional)
  follow: true,
  // boolean | Return logs from stdout (optional)
  stdout: true,
  // boolean | Return logs from stderr (optional)
  stderr: true,
  // string | Only return logs since this time, as a UNIX timestamp (optional)
  since: "since_example",
  // string | Only return logs before this time, as a UNIX timestamp (optional)
  until: "until_example",
  // boolean | Add timestamps to every log line (optional)
  timestamps: false,
  // string | Only return this number of log lines from the end of the logs (optional)
  tail: "all",
};

apiInstance.containerLogsLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **follow** | [**boolean**] | Keep connection after returning logs. | (optional) defaults to undefined
 **stdout** | [**boolean**] | Return logs from stdout | (optional) defaults to undefined
 **stderr** | [**boolean**] | Return logs from stderr | (optional) defaults to undefined
 **since** | [**string**] | Only return logs since this time, as a UNIX timestamp | (optional) defaults to undefined
 **until** | [**string**] | Only return logs before this time, as a UNIX timestamp | (optional) defaults to undefined
 **timestamps** | [**boolean**] | Add timestamps to every log line | (optional) defaults to undefined
 **tail** | [**string**] | Only return this number of log lines from the end of the logs | (optional) defaults to 'all'


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | logs returned as a stream in response body. |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerMountLibpod**
> string containerMountLibpod()

Mount a container to the filesystem

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerMountLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerMountLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | mounted container |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerPauseLibpod**
> void containerPauseLibpod()

Use the cgroups freezer to suspend all processes in a container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerPauseLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerPauseLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerPruneLibpod**
> Array<ContainersPruneReportLibpod> containerPruneLibpod()

Remove containers not in use

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerPruneLibpodRequest = {
  // string | Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters:  - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.  - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

apiInstance.containerPruneLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**Array<ContainersPruneReportLibpod>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Prune Containers |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerRenameLibpod**
> void containerRenameLibpod()

Change the name of an existing container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerRenameLibpodRequest = {
  // string | Full or partial ID or full name of the container to rename
  name: "name_example",
  // string | New name for the container
  name2: "name_example",
};

apiInstance.containerRenameLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Full or partial ID or full name of the container to rename | defaults to undefined
 **name2** | [**string**] | New name for the container | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**404** | No such container |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerResizeLibpod**
> any containerResizeLibpod()

Resize the terminal attached to a container (for use with Attach).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerResizeLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // number | Height to set for the terminal, in characters (optional)
  h: 1,
  // number | Width to set for the terminal, in characters (optional)
  w: 1,
};

apiInstance.containerResizeLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **h** | [**number**] | Height to set for the terminal, in characters | (optional) defaults to undefined
 **w** | [**number**] | Width to set for the terminal, in characters | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | No such container |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerRestartLibpod**
> void containerRestartLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerRestartLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // number | number of seconds to wait before killing container (optional)
  t: 10,
};

apiInstance.containerRestartLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **t** | [**number**] | number of seconds to wait before killing container | (optional) defaults to 10


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerRestoreLibpod**
> void containerRestoreLibpod()

Restore a container from a checkpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerRestoreLibpodRequest = {
  // string | the name or id of the container
  name: "name_example",
  // string | the name of the container when restored from a tar. can only be used with import (optional)
  name2: "name_example",
  // boolean | keep all temporary checkpoint files (optional)
  keep: true,
  // boolean | leave the container running after writing checkpoint to disk (optional)
  leaveRunning: true,
  // boolean | checkpoint a container with established TCP connections (optional)
  tcpEstablished: true,
  // boolean | import the restore from a checkpoint tar.gz (optional)
  _import: true,
  // boolean | do not include root file-system changes when exporting (optional)
  ignoreRootFS: true,
  // boolean | ignore IP address if set statically (optional)
  ignoreStaticIP: true,
  // boolean | ignore MAC address if set statically (optional)
  ignoreStaticMAC: true,
  // boolean | add restore statistics to the returned RestoreReport (optional)
  printStats: true,
};

apiInstance.containerRestoreLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or id of the container | defaults to undefined
 **name2** | [**string**] | the name of the container when restored from a tar. can only be used with import | (optional) defaults to undefined
 **keep** | [**boolean**] | keep all temporary checkpoint files | (optional) defaults to undefined
 **leaveRunning** | [**boolean**] | leave the container running after writing checkpoint to disk | (optional) defaults to undefined
 **tcpEstablished** | [**boolean**] | checkpoint a container with established TCP connections | (optional) defaults to undefined
 **_import** | [**boolean**] | import the restore from a checkpoint tar.gz | (optional) defaults to undefined
 **ignoreRootFS** | [**boolean**] | do not include root file-system changes when exporting | (optional) defaults to undefined
 **ignoreStaticIP** | [**boolean**] | ignore IP address if set statically | (optional) defaults to undefined
 **ignoreStaticMAC** | [**boolean**] | ignore MAC address if set statically | (optional) defaults to undefined
 **printStats** | [**boolean**] | add restore statistics to the returned RestoreReport | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | tarball is returned in body if exported |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerShowMountedLibpod**
> { [key: string]: string; } containerShowMountedLibpod()

Lists all mounted containers mount points

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:any = {};

apiInstance.containerShowMountedLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | mounted containers |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerStartLibpod**
> void containerStartLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerStartLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _. (optional)
  detachKeys: "ctrl-p,ctrl-q",
};

apiInstance.containerStartLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **detachKeys** | [**string**] | Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-&lt;value&gt; where &lt;value&gt; is one of: a-z, @, ^, [, , or _. | (optional) defaults to 'ctrl-p,ctrl-q'


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**304** | Container already started |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerStatsLibpod**
> void containerStatsLibpod()

DEPRECATED. This endpoint will be removed with the next major release. Please use /libpod/containers/stats instead.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerStatsLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | Stream the output (optional)
  stream: true,
};

apiInstance.containerStatsLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **stream** | [**boolean**] | Stream the output | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | No such container |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerStopLibpod**
> void containerStopLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerStopLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | Stop all containers (optional)
  all: false,
  // number | number of seconds to wait before killing container (optional)
  timeout: 10,
  // boolean | do not return error if container is already stopped (optional)
  ignore: false,
};

apiInstance.containerStopLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **all** | [**boolean**] | Stop all containers | (optional) defaults to undefined
 **timeout** | [**number**] | number of seconds to wait before killing container | (optional) defaults to 10
 **ignore** | [**boolean**] | do not return error if container is already stopped | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**304** | Container already stopped |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerTopLibpod**
> ContainerTopOKBody containerTopLibpod()

List processes running inside a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerTopLibpodRequest = {
  // string | Name of container to query for processes (As of version 1.xx)
  name: "name_example",
  // boolean | when true, repeatedly stream the latest output (As of version 4.0) (optional)
  stream: true,
  // number | if streaming, delay in seconds between updates. Must be >1. (As of version 4.0) (optional)
  delay: 5,
  // string | arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used.  (optional)
  psArgs: "-ef",
};

apiInstance.containerTopLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of container to query for processes (As of version 1.xx) | defaults to undefined
 **stream** | [**boolean**] | when true, repeatedly stream the latest output (As of version 4.0) | (optional) defaults to undefined
 **delay** | [**number**] | if streaming, delay in seconds between updates. Must be &gt;1. (As of version 4.0) | (optional) defaults to 5
 **psArgs** | [**string**] | arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used.  | (optional) defaults to '-ef'


### Return type

**ContainerTopOKBody**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List processes in container |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerUnmountLibpod**
> void containerUnmountLibpod()

Unmount a container from the filesystem

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerUnmountLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerUnmountLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | ok |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerUnpauseLibpod**
> void containerUnpauseLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerUnpauseLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerUnpauseLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no error |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerWaitLibpod**
> number containerWaitLibpod()

Wait on a container to meet a given condition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainerWaitLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // Array<'configured' | 'created' | 'running' | 'stopped' | 'paused' | 'exited' | 'removing' | 'stopping'> | Conditions to wait for. If no condition provided the 'exited' condition is assumed. (optional)
  condition: [
    "configured",
  ],
  // string | Time Interval to wait before polling for completion. (optional)
  interval: "250ms",
};

apiInstance.containerWaitLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **condition** | **Array<&#39;configured&#39; &#124; &#39;created&#39; &#124; &#39;running&#39; &#124; &#39;stopped&#39; &#124; &#39;paused&#39; &#124; &#39;exited&#39; &#124; &#39;removing&#39; &#124; &#39;stopping&#39;>** | Conditions to wait for. If no condition provided the &#39;exited&#39; condition is assumed. | (optional) defaults to undefined
 **interval** | [**string**] | Time Interval to wait before polling for completion. | (optional) defaults to '250ms'


### Return type

**number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status code |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containersStatsAllLibpod**
> ContainerStats containersStatsAllLibpod()

Return a live stream of resource usage statistics of one or more container. If no container is specified, the statistics of all containers are returned.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiContainersStatsAllLibpodRequest = {
  // Array<string> | names or IDs of containers (optional)
  containers: [
    "containers_example",
  ],
  // boolean | Stream the output (optional)
  stream: true,
  // number | Time in seconds between stats reports (optional)
  interval: 5,
};

apiInstance.containersStatsAllLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **containers** | **Array&lt;string&gt;** | names or IDs of containers | (optional) defaults to undefined
 **stream** | [**boolean**] | Stream the output | (optional) defaults to undefined
 **interval** | [**number**] | Time in seconds between stats reports | (optional) defaults to 5


### Return type

**ContainerStats**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get stats for one or more containers |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateKubeLibpod**
> HttpFile generateKubeLibpod()

Generate Kubernetes YAML based on a pod or container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiGenerateKubeLibpodRequest = {
  // Array<string> | Name or ID of the container or pod.
  names: [
    "names_example",
  ],
  // boolean | Generate YAML for a Kubernetes service object. (optional)
  service: false,
};

apiInstance.generateKubeLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **names** | **Array&lt;string&gt;** | Name or ID of the container or pod. | defaults to undefined
 **service** | [**boolean**] | Generate YAML for a Kubernetes service object. | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/vnd.yaml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Kubernetes YAML file describing pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateSystemdLibpod**
> { [key: string]: string; } generateSystemdLibpod()

Generate Systemd Units based on a pod or container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiGenerateSystemdLibpodRequest = {
  // string | Name or ID of the container or pod.
  name: "name_example",
  // boolean | Use container/pod names instead of IDs. (optional)
  useName: false,
  // boolean | Create a new container instead of starting an existing one. (optional)
  _new: false,
  // boolean | Do not generate the header including the Podman version and the timestamp. (optional)
  noHeader: false,
  // number | Start timeout in seconds. (optional)
  startTimeout: 0,
  // number | Stop timeout in seconds. (optional)
  stopTimeout: 10,
  // 'no' | 'on-success' | 'on-failure' | 'on-abnormal' | 'on-watchdog' | 'on-abort' | 'always' | Systemd restart-policy. (optional)
  restartPolicy: "on-failure",
  // string | Systemd unit name prefix for containers. (optional)
  containerPrefix: "container",
  // string | Systemd unit name prefix for pods. (optional)
  podPrefix: "pod",
  // string | Systemd unit name separator between name/id and prefix. (optional)
  separator: "-",
  // number | Configures the time to sleep before restarting a service. (optional)
  restartSec: 0,
  // Array<string> | Systemd Wants list for the container or pods. (optional)
  wants: [
    "[]",
  ],
  // Array<string> | Systemd After list for the container or pods. (optional)
  after: [
    "[]",
  ],
  // Array<string> | Systemd Requires list for the container or pods. (optional)
  requires: [
    "[]",
  ],
};

apiInstance.generateSystemdLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name or ID of the container or pod. | defaults to undefined
 **useName** | [**boolean**] | Use container/pod names instead of IDs. | (optional) defaults to undefined
 **_new** | [**boolean**] | Create a new container instead of starting an existing one. | (optional) defaults to undefined
 **noHeader** | [**boolean**] | Do not generate the header including the Podman version and the timestamp. | (optional) defaults to undefined
 **startTimeout** | [**number**] | Start timeout in seconds. | (optional) defaults to 0
 **stopTimeout** | [**number**] | Stop timeout in seconds. | (optional) defaults to 10
 **restartPolicy** | [**&#39;no&#39; | &#39;on-success&#39; | &#39;on-failure&#39; | &#39;on-abnormal&#39; | &#39;on-watchdog&#39; | &#39;on-abort&#39; | &#39;always&#39;**]**Array<&#39;no&#39; &#124; &#39;on-success&#39; &#124; &#39;on-failure&#39; &#124; &#39;on-abnormal&#39; &#124; &#39;on-watchdog&#39; &#124; &#39;on-abort&#39; &#124; &#39;always&#39;>** | Systemd restart-policy. | (optional) defaults to 'on-failure'
 **containerPrefix** | [**string**] | Systemd unit name prefix for containers. | (optional) defaults to 'container'
 **podPrefix** | [**string**] | Systemd unit name prefix for pods. | (optional) defaults to 'pod'
 **separator** | [**string**] | Systemd unit name separator between name/id and prefix. | (optional) defaults to '-'
 **restartSec** | [**number**] | Configures the time to sleep before restarting a service. | (optional) defaults to 0
 **wants** | **Array&lt;string&gt;** | Systemd Wants list for the container or pods. | (optional) defaults to undefined
 **after** | **Array&lt;string&gt;** | Systemd After list for the container or pods. | (optional) defaults to undefined
 **requires** | **Array&lt;string&gt;** | Systemd Requires list for the container or pods. | (optional) defaults to undefined


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageCommitLibpod**
> void imageCommitLibpod()

Create a new image from a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiImageCommitLibpodRequest = {
  // string | the name or ID of a container
  container: "container_example",
  // string | the repository name for the created image (optional)
  repo: "repo_example",
  // string | tag name for the created image (optional)
  tag: "tag_example",
  // string | commit message (optional)
  comment: "comment_example",
  // string | author of the image (optional)
  author: "author_example",
  // boolean | pause the container before committing it (optional)
  pause: true,
  // Array<string> | instructions to apply while committing in Dockerfile format (i.e. \"CMD=/bin/foo\") (optional)
  changes: [
    "changes_example",
  ],
  // string | format of the image manifest and metadata (default \"oci\") (optional)
  format: "format_example",
};

apiInstance.imageCommitLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **container** | [**string**] | the name or ID of a container | defaults to undefined
 **repo** | [**string**] | the repository name for the created image | (optional) defaults to undefined
 **tag** | [**string**] | tag name for the created image | (optional) defaults to undefined
 **comment** | [**string**] | commit message | (optional) defaults to undefined
 **author** | [**string**] | author of the image | (optional) defaults to undefined
 **pause** | [**boolean**] | pause the container before committing it | (optional) defaults to undefined
 **changes** | **Array&lt;string&gt;** | instructions to apply while committing in Dockerfile format (i.e. \&quot;CMD&#x3D;/bin/foo\&quot;) | (optional) defaults to undefined
 **format** | [**string**] | format of the image manifest and metadata (default \&quot;oci\&quot;) | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | no error |  -  |
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **playKubeDownLibpod**
> PlayKubeReport playKubeDownLibpod()

Tears down pods defined in a YAML file

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:any = {};

apiInstance.playKubeDownLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PlayKubeReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PlayKube response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **playKubeLibpod**
> PlayKubeReport playKubeLibpod()

Create and run pods based on a Kubernetes YAML file (pod or service kind).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiPlayKubeLibpodRequest = {
  // Array<string> | USe the network mode or specify an array of networks. (optional)
  network: [
    "network_example",
  ],
  // boolean | Require HTTPS and verify signatures when contacting registries. (optional)
  tlsVerify: true,
  // string | Logging driver for the containers in the pod. (optional)
  logDriver: "logDriver_example",
  // boolean | Start the pod after creating it. (optional)
  start: true,
  // Array<string> | Static IPs used for the pods. (optional)
  staticIPs: [
    "staticIPs_example",
  ],
  // Array<string> | Static MACs used for the pods. (optional)
  staticMACs: [
    "staticMACs_example",
  ],
  // string | Kubernetes YAML file. (optional)
  request: "request_example",
};

apiInstance.playKubeLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **string**| Kubernetes YAML file. |
 **network** | **Array&lt;string&gt;** | USe the network mode or specify an array of networks. | (optional) defaults to undefined
 **tlsVerify** | [**boolean**] | Require HTTPS and verify signatures when contacting registries. | (optional) defaults to undefined
 **logDriver** | [**string**] | Logging driver for the containers in the pod. | (optional) defaults to undefined
 **start** | [**boolean**] | Start the pod after creating it. | (optional) defaults to undefined
 **staticIPs** | **Array&lt;string&gt;** | Static IPs used for the pods. | (optional) defaults to undefined
 **staticMACs** | **Array&lt;string&gt;** | Static MACs used for the pods. | (optional) defaults to undefined


### Return type

**PlayKubeReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PlayKube response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putContainerArchiveLibpod**
> void putContainerArchiveLibpod()

Copy a tar archive of files into a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersApi(configuration);

let body:.ContainersApiPutContainerArchiveLibpodRequest = {
  // string | container name or id
  name: "name_example",
  // string | Path to a directory in the container to extract
  path: "path_example",
  // boolean | pause the container while copying (defaults to true) (optional)
  pause: true,
  // string | tarfile of files to copy into the container (optional)
  request: "request_example",
};

apiInstance.putContainerArchiveLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **string**| tarfile of files to copy into the container |
 **name** | [**string**] | container name or id | defaults to undefined
 **path** | [**string**] | Path to a directory in the container to extract | defaults to undefined
 **pause** | [**boolean**] | pause the container while copying (defaults to true) | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**400** | Bad parameter in request |  -  |
**403** | the container rootfs is read-only |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


