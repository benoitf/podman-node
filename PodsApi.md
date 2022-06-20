# .PodsApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateKubeLibpod**](PodsApi.md#generateKubeLibpod) | **GET** /libpod/generate/kube | Generate a Kubernetes YAML file.
[**generateSystemdLibpod**](PodsApi.md#generateSystemdLibpod) | **GET** /libpod/generate/{name}/systemd | Generate Systemd Units
[**playKubeDownLibpod**](PodsApi.md#playKubeDownLibpod) | **DELETE** /libpod/play/kube | Remove pods from play kube
[**playKubeLibpod**](PodsApi.md#playKubeLibpod) | **POST** /libpod/play/kube | Play a Kubernetes YAML file.
[**podCreateLibpod**](PodsApi.md#podCreateLibpod) | **POST** /libpod/pods/create | Create a pod
[**podDeleteLibpod**](PodsApi.md#podDeleteLibpod) | **DELETE** /libpod/pods/{name} | Remove pod
[**podExistsLibpod**](PodsApi.md#podExistsLibpod) | **GET** /libpod/pods/{name}/exists | Pod exists
[**podInspectLibpod**](PodsApi.md#podInspectLibpod) | **GET** /libpod/pods/{name}/json | Inspect pod
[**podKillLibpod**](PodsApi.md#podKillLibpod) | **POST** /libpod/pods/{name}/kill | Kill a pod
[**podListLibpod**](PodsApi.md#podListLibpod) | **GET** /libpod/pods/json | List pods
[**podPauseLibpod**](PodsApi.md#podPauseLibpod) | **POST** /libpod/pods/{name}/pause | Pause a pod
[**podPruneLibpod**](PodsApi.md#podPruneLibpod) | **POST** /libpod/pods/prune | Prune unused pods
[**podRestartLibpod**](PodsApi.md#podRestartLibpod) | **POST** /libpod/pods/{name}/restart | Restart a pod
[**podStartLibpod**](PodsApi.md#podStartLibpod) | **POST** /libpod/pods/{name}/start | Start a pod
[**podStatsAllLibpod**](PodsApi.md#podStatsAllLibpod) | **GET** /libpod/pods/stats | Statistics for one or more pods
[**podStopLibpod**](PodsApi.md#podStopLibpod) | **POST** /libpod/pods/{name}/stop | Stop a pod
[**podTopLibpod**](PodsApi.md#podTopLibpod) | **GET** /libpod/pods/{name}/top | List processes
[**podUnpauseLibpod**](PodsApi.md#podUnpauseLibpod) | **POST** /libpod/pods/{name}/unpause | Unpause a pod


# **generateKubeLibpod**
> HttpFile generateKubeLibpod()

Generate Kubernetes YAML based on a pod or container.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiGenerateKubeLibpodRequest = {
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
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiGenerateSystemdLibpodRequest = {
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

# **playKubeDownLibpod**
> PlayKubeReport playKubeDownLibpod()

Tears down pods defined in a YAML file

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

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
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPlayKubeLibpodRequest = {
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

# **podCreateLibpod**
> IdResponse podCreateLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodCreateLibpodRequest = {
  // PodSpecGenerator | attributes for creating a pod (optional)
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
    cgroupParent: "cgroupParent_example",
    cniNetworks: [
      "cniNetworks_example",
    ],
    cpuPeriod: 1,
    cpuQuota: 1,
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
    hostadd: [
      "hostadd_example",
    ],
    hostname: "hostname_example",
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
    imageVolumes: [
      {
        destination: "destination_example",
        readWrite: true,
        source: "source_example",
      },
    ],
    infraCommand: [
      "infraCommand_example",
    ],
    infraConmonPidFile: "infraConmonPidFile_example",
    infraImage: "infraImage_example",
    infraName: "infraName_example",
    labels: {
      "key": "key_example",
    },
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
    netns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
    networkOptions: {
      "key": [
        "key_example",
      ],
    },
    noInfra: true,
    noManageHosts: true,
    noManageResolvConf: true,
    overlayVolumes: [
      {
        destination: "destination_example",
        options: [
          "options_example",
        ],
        source: "source_example",
      },
    ],
    pidns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
    podCreateCommand: [
      "podCreateCommand_example",
    ],
    podDevices: [
      "podDevices_example",
    ],
    portmappings: [
      {
        containerPort: 1,
        hostIp: "hostIp_example",
        hostPort: 1,
        protocol: "protocol_example",
        range: 1,
      },
    ],
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
    securityOpt: [
      "securityOpt_example",
    ],
    shareParent: true,
    sharedNamespaces: [
      "sharedNamespaces_example",
    ],
    sysctl: {
      "key": "key_example",
    },
    throttleReadBpsDevice: {
      "key": {
        major: 1,
        minor: 1,
        rate: 1,
      },
    },
    userns: {
      nsmode: "nsmode_example",
      value: "value_example",
    },
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
  },
};

apiInstance.podCreateLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create** | **PodSpecGenerator**| attributes for creating a pod |


### Return type

**IdResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**400** | Bad parameter in request |  -  |
**409** | status conflict |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podDeleteLibpod**
> PodRmReport podDeleteLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodDeleteLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
  // boolean | force removal of a running pod by first stopping all containers, then removing all containers in the pod (optional)
  force: true,
};

apiInstance.podDeleteLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined
 **force** | [**boolean**] | force removal of a running pod by first stopping all containers, then removing all containers in the pod | (optional) defaults to undefined


### Return type

**PodRmReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rm pod |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podExistsLibpod**
> void podExistsLibpod()

Check if a pod exists by name or ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodExistsLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
};

apiInstance.podExistsLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined


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
**204** | pod exists |  -  |
**404** | No such pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podInspectLibpod**
> InspectPodData podInspectLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodInspectLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
};

apiInstance.podInspectLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined


### Return type

**InspectPodData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inspect pod |  -  |
**404** | No such pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podKillLibpod**
> PodKillReport podKillLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodKillLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
  // string | signal to be sent to pod (optional)
  signal: "SIGKILL",
};

apiInstance.podKillLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined
 **signal** | [**string**] | signal to be sent to pod | (optional) defaults to 'SIGKILL'


### Return type

**PodKillReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Kill Pod |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such pod |  -  |
**409** | Kill Pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podListLibpod**
> Array<ListPodsReport> podListLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodListLibpodRequest = {
  // string | JSON encoded value of the filters (a map[string][]string) to process on the pods list. Available filters:   - `id=<pod-id>` Matches all of pod id.   - `label=<key>` or `label=<key>:<value>` Matches pods based on the presence of a label alone or a label and a value.   - `name=<pod-name>` Matches all of pod name.   - `until=<timestamp>` List pods created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.   - `status=<pod-status>` Pod's status: `stopped`, `running`, `paused`, `exited`, `dead`, `created`, `degraded`.   - `network=<pod-network>` Name or full ID of network.   - `ctr-names=<pod-ctr-names>` Container name within the pod.   - `ctr-ids=<pod-ctr-ids>` Container ID within the pod.   - `ctr-status=<pod-ctr-status>` Container status within the pod.   - `ctr-number=<pod-ctr-number>` Number of containers in the pod.  (optional)
  filters: "filters_example",
};

apiInstance.podListLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | JSON encoded value of the filters (a map[string][]string) to process on the pods list. Available filters:   - &#x60;id&#x3D;&lt;pod-id&gt;&#x60; Matches all of pod id.   - &#x60;label&#x3D;&lt;key&gt;&#x60; or &#x60;label&#x3D;&lt;key&gt;:&lt;value&gt;&#x60; Matches pods based on the presence of a label alone or a label and a value.   - &#x60;name&#x3D;&lt;pod-name&gt;&#x60; Matches all of pod name.   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; List pods created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;status&#x3D;&lt;pod-status&gt;&#x60; Pod&#39;s status: &#x60;stopped&#x60;, &#x60;running&#x60;, &#x60;paused&#x60;, &#x60;exited&#x60;, &#x60;dead&#x60;, &#x60;created&#x60;, &#x60;degraded&#x60;.   - &#x60;network&#x3D;&lt;pod-network&gt;&#x60; Name or full ID of network.   - &#x60;ctr-names&#x3D;&lt;pod-ctr-names&gt;&#x60; Container name within the pod.   - &#x60;ctr-ids&#x3D;&lt;pod-ctr-ids&gt;&#x60; Container ID within the pod.   - &#x60;ctr-status&#x3D;&lt;pod-ctr-status&gt;&#x60; Container status within the pod.   - &#x60;ctr-number&#x3D;&lt;pod-ctr-number&gt;&#x60; Number of containers in the pod.  | (optional) defaults to undefined


### Return type

**Array<ListPodsReport>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List pods |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podPauseLibpod**
> PodPauseReport podPauseLibpod()

Pause a pod

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodPauseLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
};

apiInstance.podPauseLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined


### Return type

**PodPauseReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pause pod |  -  |
**404** | No such pod |  -  |
**409** | Pause pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podPruneLibpod**
> PodPruneReport podPruneLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:any = {};

apiInstance.podPruneLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PodPruneReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Prune pod |  -  |
**400** | Bad parameter in request |  -  |
**409** | pod already exists |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podRestartLibpod**
> PodRestartReport podRestartLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodRestartLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
};

apiInstance.podRestartLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined


### Return type

**PodRestartReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Restart pod |  -  |
**404** | No such pod |  -  |
**409** | Restart pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podStartLibpod**
> PodStartReport podStartLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodStartLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
};

apiInstance.podStartLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined


### Return type

**PodStartReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Start pod |  -  |
**304** | Pod already started |  -  |
**404** | No such pod |  -  |
**409** | Start pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podStatsAllLibpod**
> Array<PodStatsReport> podStatsAllLibpod()

Display a live stream of resource usage statistics for the containers in one or more pods

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodStatsAllLibpodRequest = {
  // boolean | Provide statistics for all running pods. (optional)
  all: true,
  // Array<string> | Names or IDs of pods. (optional)
  namesOrIDs: [
    "namesOrIDs_example",
  ],
};

apiInstance.podStatsAllLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] | Provide statistics for all running pods. | (optional) defaults to undefined
 **namesOrIDs** | **Array&lt;string&gt;** | Names or IDs of pods. | (optional) defaults to undefined


### Return type

**Array<PodStatsReport>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pod Statistics |  -  |
**404** | No such pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podStopLibpod**
> PodStopReport podStopLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodStopLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
  // number | timeout (optional)
  t: 1,
};

apiInstance.podStopLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined
 **t** | [**number**] | timeout | (optional) defaults to undefined


### Return type

**PodStopReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stop pod |  -  |
**304** | Pod already stopped |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such pod |  -  |
**409** | Stop pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podTopLibpod**
> PodTopOKBody podTopLibpod()

List processes running inside a pod

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodTopLibpodRequest = {
  // string | Name of pod to query for processes
  name: "name_example",
  // boolean | when true, repeatedly stream the latest output (As of version 4.0) (optional)
  stream: true,
  // number | if streaming, delay in seconds between updates. Must be >1. (As of version 4.0) (optional)
  delay: 5,
  // string | arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used.  (optional)
  psArgs: "-ef",
};

apiInstance.podTopLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of pod to query for processes | defaults to undefined
 **stream** | [**boolean**] | when true, repeatedly stream the latest output (As of version 4.0) | (optional) defaults to undefined
 **delay** | [**number**] | if streaming, delay in seconds between updates. Must be &gt;1. (As of version 4.0) | (optional) defaults to 5
 **psArgs** | [**string**] | arguments to pass to ps such as aux. Requires ps(1) to be installed in the container if no ps(1) compatible AIX descriptors are used.  | (optional) defaults to '-ef'


### Return type

**PodTopOKBody**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List processes in pod |  -  |
**404** | No such pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **podUnpauseLibpod**
> PodUnpauseReport podUnpauseLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PodsApi(configuration);

let body:.PodsApiPodUnpauseLibpodRequest = {
  // string | the name or ID of the pod
  name: "name_example",
};

apiInstance.podUnpauseLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the pod | defaults to undefined


### Return type

**PodUnpauseReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unpause pod |  -  |
**404** | No such pod |  -  |
**409** | Unpause pod |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


