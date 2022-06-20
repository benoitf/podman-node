# .ContainersCompatApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerArchive**](ContainersCompatApi.md#containerArchive) | **GET** /containers/{name}/archive | Get files from a container
[**containerArchiveLibpod**](ContainersCompatApi.md#containerArchiveLibpod) | **GET** /libpod/containers/{name}/archive | Copy files from a container
[**containerAttach**](ContainersCompatApi.md#containerAttach) | **POST** /containers/{name}/attach | Attach to a container
[**containerChangesLibpod**](ContainersCompatApi.md#containerChangesLibpod) | **GET** /libpod/containers/{name}/changes | Report on changes to container&#39;s filesystem; adds, deletes or modifications.
[**containerCreate**](ContainersCompatApi.md#containerCreate) | **POST** /containers/create | Create a container
[**containerDelete**](ContainersCompatApi.md#containerDelete) | **DELETE** /containers/{name} | Remove a container
[**containerExport**](ContainersCompatApi.md#containerExport) | **GET** /containers/{name}/export | Export a container
[**containerInspect**](ContainersCompatApi.md#containerInspect) | **GET** /containers/{name}/json | Inspect container
[**containerKill**](ContainersCompatApi.md#containerKill) | **POST** /containers/{name}/kill | Kill container
[**containerList**](ContainersCompatApi.md#containerList) | **GET** /containers/json | List containers
[**containerLogs**](ContainersCompatApi.md#containerLogs) | **GET** /containers/{name}/logs | Get container logs
[**containerPause**](ContainersCompatApi.md#containerPause) | **POST** /containers/{name}/pause | Pause container
[**containerPrune**](ContainersCompatApi.md#containerPrune) | **POST** /containers/prune | Delete stopped containers
[**containerRename**](ContainersCompatApi.md#containerRename) | **POST** /containers/{name}/rename | Rename an existing container
[**containerResize**](ContainersCompatApi.md#containerResize) | **POST** /containers/{name}/resize | Resize a container&#39;s TTY
[**containerRestart**](ContainersCompatApi.md#containerRestart) | **POST** /containers/{name}/restart | Restart container
[**containerStart**](ContainersCompatApi.md#containerStart) | **POST** /containers/{name}/start | Start a container
[**containerStats**](ContainersCompatApi.md#containerStats) | **GET** /containers/{name}/stats | Get stats for a container
[**containerStop**](ContainersCompatApi.md#containerStop) | **POST** /containers/{name}/stop | Stop a container
[**containerTop**](ContainersCompatApi.md#containerTop) | **GET** /containers/{name}/top | List processes running inside a container
[**containerUnpause**](ContainersCompatApi.md#containerUnpause) | **POST** /containers/{name}/unpause | Unpause container
[**containerWait**](ContainersCompatApi.md#containerWait) | **POST** /containers/{name}/wait | Wait on a container
[**imageCommit**](ContainersCompatApi.md#imageCommit) | **POST** /commit | New Image
[**putContainerArchive**](ContainersCompatApi.md#putContainerArchive) | **PUT** /containers/{name}/archive | Put files into a container


# **containerArchive**
> HttpFile containerArchive()

Get a tar archive of files from a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerArchiveRequest = {
  // string | container name or id
  name: "name_example",
  // string | Path to a directory in the container to extract
  path: "path_example",
};

apiInstance.containerArchive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | container name or id | defaults to undefined
 **path** | [**string**] | Path to a directory in the container to extract | defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerArchiveLibpod**
> HttpFile containerArchiveLibpod()

Copy a tar archive of files from a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerArchiveLibpodRequest = {
  // string | container name or id
  name: "name_example",
  // string | Path to a directory in the container to extract
  path: "path_example",
  // string | JSON encoded map[string]string to translate paths (optional)
  rename: "rename_example",
};

apiInstance.containerArchiveLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | container name or id | defaults to undefined
 **path** | [**string**] | Path to a directory in the container to extract | defaults to undefined
 **rename** | [**string**] | JSON encoded map[string]string to translate paths | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerAttach**
> containerAttach()

Hijacks the connection to forward the container's standard streams to the client.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerAttachRequest = {
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

apiInstance.containerAttach(body).then((data:any) => {
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
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerChangesLibpodRequest = {
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

# **containerCreate**
> ContainerCreateResponse containerCreate(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerCreateRequest = {
  // CreateContainerConfig | Container to create
  body: {
    argsEscaped: true,
    attachStderr: true,
    attachStdin: true,
    attachStdout: true,
    cmd: [
      "cmd_example",
    ],
    domainname: "domainname_example",
    entrypoint: [
      "entrypoint_example",
    ],
    env: [
      "env_example",
    ],
    exposedPorts: {
      "key": {},
    },
    healthcheck: {
      interval: 1,
      retries: 1,
      startPeriod: 1,
      test: [
        "test_example",
      ],
      timeout: 1,
    },
    hostConfig: {
      autoRemove: true,
      binds: [
        "binds_example",
      ],
      blkioDeviceReadBps: [
        {
          path: "path_example",
          rate: 1,
        },
      ],
      blkioDeviceReadIOps: [
        {
          path: "path_example",
          rate: 1,
        },
      ],
      blkioDeviceWriteBps: [
        {
          path: "path_example",
          rate: 1,
        },
      ],
      blkioDeviceWriteIOps: [
        {
          path: "path_example",
          rate: 1,
        },
      ],
      blkioWeight: 1,
      blkioWeightDevice: [
        {
          path: "path_example",
          weight: 1,
        },
      ],
      capAdd: [
        "capAdd_example",
      ],
      capDrop: [
        "capDrop_example",
      ],
      cgroup: "cgroup_example",
      cgroupParent: "cgroupParent_example",
      cgroupnsMode: "cgroupnsMode_example",
      consoleSize: [
        1,
      ],
      containerIDFile: "containerIDFile_example",
      cpuCount: 1,
      cpuPercent: 1,
      cpuPeriod: 1,
      cpuQuota: 1,
      cpuRealtimePeriod: 1,
      cpuRealtimeRuntime: 1,
      cpuShares: 1,
      cpusetCpus: "cpusetCpus_example",
      cpusetMems: "cpusetMems_example",
      deviceCgroupRules: [
        "deviceCgroupRules_example",
      ],
      deviceRequests: [
        {
          capabilities: [
            [
              "string_example",
            ],
          ],
          count: 1,
          deviceIDs: [
            "deviceIDs_example",
          ],
          driver: "driver_example",
          options: {
            "key": "key_example",
          },
        },
      ],
      devices: [
        {
          cgroupPermissions: "cgroupPermissions_example",
          pathInContainer: "pathInContainer_example",
          pathOnHost: "pathOnHost_example",
        },
      ],
      dns: [
        "dns_example",
      ],
      dnsOptions: [
        "dnsOptions_example",
      ],
      dnsSearch: [
        "dnsSearch_example",
      ],
      extraHosts: [
        "extraHosts_example",
      ],
      groupAdd: [
        "groupAdd_example",
      ],
      iOMaximumBandwidth: 1,
      iOMaximumIOps: 1,
      init: true,
      ipcMode: "ipcMode_example",
      isolation: "isolation_example",
      kernelMemory: 1,
      kernelMemoryTCP: 1,
      links: [
        "links_example",
      ],
      logConfig: {
        config: {
          "key": "key_example",
        },
        type: "type_example",
      },
      maskedPaths: [
        "maskedPaths_example",
      ],
      memory: 1,
      memoryReservation: 1,
      memorySwap: 1,
      memorySwappiness: 1,
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
      nanoCpus: 1,
      networkMode: "networkMode_example",
      oomKillDisable: true,
      oomScoreAdj: 1,
      pidMode: "pidMode_example",
      pidsLimit: 1,
      portBindings: {
        "key": [
          {
            hostIp: "hostIp_example",
            hostPort: "hostPort_example",
          },
        ],
      },
      privileged: true,
      publishAllPorts: true,
      readonlyPaths: [
        "readonlyPaths_example",
      ],
      readonlyRootfs: true,
      restartPolicy: {
        maximumRetryCount: 1,
        name: "name_example",
      },
      runtime: "runtime_example",
      securityOpt: [
        "securityOpt_example",
      ],
      shmSize: 1,
      storageOpt: {
        "key": "key_example",
      },
      sysctls: {
        "key": "key_example",
      },
      tmpfs: {
        "key": "key_example",
      },
      uTSMode: "uTSMode_example",
      ulimits: [
        {
          hard: 1,
          name: "name_example",
          soft: 1,
        },
      ],
      usernsMode: "usernsMode_example",
      volumeDriver: "volumeDriver_example",
      volumesFrom: [
        "volumesFrom_example",
      ],
    },
    hostname: "hostname_example",
    image: "image_example",
    labels: {
      "key": "key_example",
    },
    macAddress: "macAddress_example",
    name: "name_example",
    networkDisabled: true,
    networkingConfig: {
      endpointsConfig: {
        "key": {
          aliases: [
            "aliases_example",
          ],
          driverOpts: {
            "key": "key_example",
          },
          endpointID: "endpointID_example",
          gateway: "gateway_example",
          globalIPv6Address: "globalIPv6Address_example",
          globalIPv6PrefixLen: 1,
          iPAMConfig: {
            iPv4Address: "iPv4Address_example",
            iPv6Address: "iPv6Address_example",
            linkLocalIPs: [
              "linkLocalIPs_example",
            ],
          },
          iPAddress: "iPAddress_example",
          iPPrefixLen: 1,
          iPv6Gateway: "iPv6Gateway_example",
          links: [
            "links_example",
          ],
          macAddress: "macAddress_example",
          networkID: "networkID_example",
        },
      },
    },
    onBuild: [
      "onBuild_example",
    ],
    openStdin: true,
    shell: [
      "shell_example",
    ],
    stdinOnce: true,
    stopSignal: "stopSignal_example",
    stopTimeout: 1,
    tty: true,
    unsetEnv: [
      "unsetEnv_example",
    ],
    unsetEnvAll: true,
    user: "user_example",
    volumes: {
      "key": {},
    },
    workingDir: "workingDir_example",
  },
  // string | container name (optional)
  name: "name_example",
};

apiInstance.containerCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateContainerConfig**| Container to create |
 **name** | [**string**] | container name | (optional) defaults to undefined


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

# **containerDelete**
> void containerDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerDeleteRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | If the container is running, kill it before removing it. (optional)
  force: false,
  // boolean | Remove the volumes associated with the container. (optional)
  v: false,
  // boolean | not supported (optional)
  link: true,
};

apiInstance.containerDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **force** | [**boolean**] | If the container is running, kill it before removing it. | (optional) defaults to undefined
 **v** | [**boolean**] | Remove the volumes associated with the container. | (optional) defaults to undefined
 **link** | [**boolean**] | not supported | (optional) defaults to undefined


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
**400** | Bad parameter in request |  -  |
**404** | No such container |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerExport**
> void containerExport()

Export the contents of a container as a tarball.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerExportRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerExport(body).then((data:any) => {
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

# **containerInspect**
> ContainerJSON containerInspect()

Return low-level information about a container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerInspectRequest = {
  // string | the name or id of the container
  name: "name_example",
  // boolean | include the size of the container (optional)
  size: false,
};

apiInstance.containerInspect(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or id of the container | defaults to undefined
 **size** | [**boolean**] | include the size of the container | (optional) defaults to undefined


### Return type

**ContainerJSON**

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

# **containerKill**
> void containerKill()

Signal to send to the container as an integer or string (e.g. SIGINT)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerKillRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | Send kill signal to all containers (optional)
  all: false,
  // string | signal to be sent to container (optional)
  signal: "SIGKILL",
};

apiInstance.containerKill(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **all** | [**boolean**] | Send kill signal to all containers | (optional) defaults to undefined
 **signal** | [**string**] | signal to be sent to container | (optional) defaults to 'SIGKILL'


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

# **containerList**
> Array<Container> containerList()

Returns a list of containers

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerListRequest = {
  // boolean | Return all containers. By default, only running containers are shown (optional)
  all: false,
  // boolean | Return containers in storage not controlled by Podman (optional)
  external: false,
  // number | Return this number of most recently created containers, including non-running ones. (optional)
  limit: 1,
  // boolean | Return the size of container as fields SizeRw and SizeRootFs. (optional)
  size: false,
  // string | Returns a list of containers.  - ancestor=(<image-name>[:<tag>], <image id>, or <image@digest>)  - before=(<container id> or <container name>)  - expose=(<port>[/<proto>]|<startport-endport>/[<proto>])  - exited=<int> containers with exit code of <int>  - health=(starting|healthy|unhealthy|none)  - id=<ID> a container's ID  - is-task=(true|false)  - label=key or label=\"key=value\" of a container label  - name=<name> a container's name  - network=(<network id> or <network name>)  - publish=(<port>[/<proto>]|<startport-endport>/[<proto>])  - since=(<container id> or <container name>)  - status=(created|restarting|running|removing|paused|exited|dead)  - volume=(<volume name> or <mount point destination>)  (optional)
  filters: "filters_example",
};

apiInstance.containerList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] | Return all containers. By default, only running containers are shown | (optional) defaults to undefined
 **external** | [**boolean**] | Return containers in storage not controlled by Podman | (optional) defaults to undefined
 **limit** | [**number**] | Return this number of most recently created containers, including non-running ones. | (optional) defaults to undefined
 **size** | [**boolean**] | Return the size of container as fields SizeRw and SizeRootFs. | (optional) defaults to undefined
 **filters** | [**string**] | Returns a list of containers.  - ancestor&#x3D;(&lt;image-name&gt;[:&lt;tag&gt;], &lt;image id&gt;, or &lt;image@digest&gt;)  - before&#x3D;(&lt;container id&gt; or &lt;container name&gt;)  - expose&#x3D;(&lt;port&gt;[/&lt;proto&gt;]|&lt;startport-endport&gt;/[&lt;proto&gt;])  - exited&#x3D;&lt;int&gt; containers with exit code of &lt;int&gt;  - health&#x3D;(starting|healthy|unhealthy|none)  - id&#x3D;&lt;ID&gt; a container&#39;s ID  - is-task&#x3D;(true|false)  - label&#x3D;key or label&#x3D;\&quot;key&#x3D;value\&quot; of a container label  - name&#x3D;&lt;name&gt; a container&#39;s name  - network&#x3D;(&lt;network id&gt; or &lt;network name&gt;)  - publish&#x3D;(&lt;port&gt;[/&lt;proto&gt;]|&lt;startport-endport&gt;/[&lt;proto&gt;])  - since&#x3D;(&lt;container id&gt; or &lt;container name&gt;)  - status&#x3D;(created|restarting|running|removing|paused|exited|dead)  - volume&#x3D;(&lt;volume name&gt; or &lt;mount point destination&gt;)  | (optional) defaults to undefined


### Return type

**Array<Container>**

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

# **containerLogs**
> void containerLogs()

Get stdout and stderr logs from a container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerLogsRequest = {
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

apiInstance.containerLogs(body).then((data:any) => {
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

# **containerPause**
> void containerPause()

Use the cgroups freezer to suspend all processes in a container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerPauseRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerPause(body).then((data:any) => {
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

# **containerPrune**
> Array<ContainersPruneReport> containerPrune()

Remove containers not in use

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerPruneRequest = {
  // string | Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters:  - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.  - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

apiInstance.containerPrune(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters:  - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.  - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**Array<ContainersPruneReport>**

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

# **containerRename**
> void containerRename()

Change the name of an existing container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerRenameRequest = {
  // string | Full or partial ID or full name of the container to rename
  name: "name_example",
  // string | New name for the container
  name2: "name_example",
};

apiInstance.containerRename(body).then((data:any) => {
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

# **containerResize**
> any containerResize()

Resize the terminal attached to a container (for use with Attach).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerResizeRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // number | Height to set for the terminal, in characters (optional)
  h: 1,
  // number | Width to set for the terminal, in characters (optional)
  w: 1,
  // boolean | Ignore containers not running errors (optional)
  running: true,
};

apiInstance.containerResize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **h** | [**number**] | Height to set for the terminal, in characters | (optional) defaults to undefined
 **w** | [**number**] | Width to set for the terminal, in characters | (optional) defaults to undefined
 **running** | [**boolean**] | Ignore containers not running errors | (optional) defaults to undefined


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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerRestart**
> void containerRestart()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerRestartRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // number | timeout before sending kill signal to container (optional)
  t: 1,
};

apiInstance.containerRestart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **t** | [**number**] | timeout before sending kill signal to container | (optional) defaults to undefined


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

# **containerStart**
> void containerStart()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerStartRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _. (optional)
  detachKeys: "ctrl-p,ctrl-q",
};

apiInstance.containerStart(body).then((data:any) => {
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

# **containerStats**
> any containerStats()

This returns a live stream of a container’s resource usage statistics.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerStatsRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | Stream the output (optional)
  stream: true,
  // boolean | Provide a one-shot response in which preCPU stats are blank, resulting in a single cycle return. (optional)
  oneShot: false,
};

apiInstance.containerStats(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **stream** | [**boolean**] | Stream the output | (optional) defaults to undefined
 **oneShot** | [**boolean**] | Provide a one-shot response in which preCPU stats are blank, resulting in a single cycle return. | (optional) defaults to undefined


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
**200** | no error |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **containerStop**
> void containerStop()

Stop a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerStopRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // number | number of seconds to wait before killing container (optional)
  t: 1,
};

apiInstance.containerStop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **t** | [**number**] | number of seconds to wait before killing container | (optional) defaults to undefined


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

# **containerTop**
> ContainerTopOKBody containerTop()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerTopRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used. (optional)
  psArgs: "-ef",
};

apiInstance.containerTop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **psArgs** | [**string**] | arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used. | (optional) defaults to '-ef'


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

# **containerUnpause**
> void containerUnpause()

Resume a paused container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerUnpauseRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.containerUnpause(body).then((data:any) => {
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

# **containerWait**
> ContainerWait200Response containerWait()

Block until a container stops or given condition is met.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiContainerWaitRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | wait until container is to a given condition. default is stopped. valid conditions are:   - configured   - created   - exited   - paused   - running   - stopped  (optional)
  condition: "condition_example",
  // string | Time Interval to wait before polling for completion. (optional)
  interval: "250ms",
};

apiInstance.containerWait(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **condition** | [**string**] | wait until container is to a given condition. default is stopped. valid conditions are:   - configured   - created   - exited   - paused   - running   - stopped  | (optional) defaults to undefined
 **interval** | [**string**] | Time Interval to wait before polling for completion. | (optional) defaults to '250ms'


### Return type

**ContainerWait200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Wait container |  -  |
**404** | No such container |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageCommit**
> void imageCommit()

Create a new image from a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiImageCommitRequest = {
  // string | the name or ID of a container (optional)
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
  // string | instructions to apply while committing in Dockerfile format (optional)
  changes: "changes_example",
  // boolean | squash newly built layers into a single new layer (optional)
  squash: true,
};

apiInstance.imageCommit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **container** | [**string**] | the name or ID of a container | (optional) defaults to undefined
 **repo** | [**string**] | the repository name for the created image | (optional) defaults to undefined
 **tag** | [**string**] | tag name for the created image | (optional) defaults to undefined
 **comment** | [**string**] | commit message | (optional) defaults to undefined
 **author** | [**string**] | author of the image | (optional) defaults to undefined
 **pause** | [**boolean**] | pause the container before committing it | (optional) defaults to undefined
 **changes** | [**string**] | instructions to apply while committing in Dockerfile format | (optional) defaults to undefined
 **squash** | [**boolean**] | squash newly built layers into a single new layer | (optional) defaults to undefined


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

# **putContainerArchive**
> void putContainerArchive()

Put a tar archive of files into a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContainersCompatApi(configuration);

let body:.ContainersCompatApiPutContainerArchiveRequest = {
  // string | container name or id
  name: "name_example",
  // string | Path to a directory in the container to extract
  path: "path_example",
  // string | if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa (1 or true) (optional)
  noOverwriteDirNonDir: "noOverwriteDirNonDir_example",
  // string | copy UID/GID maps to the dest file or di (1 or true) (optional)
  copyUIDGID: "copyUIDGID_example",
  // string | tarfile of files to copy into the container (optional)
  request: "request_example",
};

apiInstance.putContainerArchive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **string**| tarfile of files to copy into the container |
 **name** | [**string**] | container name or id | defaults to undefined
 **path** | [**string**] | Path to a directory in the container to extract | defaults to undefined
 **noOverwriteDirNonDir** | [**string**] | if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa (1 or true) | (optional) defaults to undefined
 **copyUIDGID** | [**string**] | copy UID/GID maps to the dest file or di (1 or true) | (optional) defaults to undefined


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


