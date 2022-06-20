# .NetworksCompatApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**networkConnect**](NetworksCompatApi.md#networkConnect) | **POST** /networks/{name}/connect | Connect container to network
[**networkCreate**](NetworksCompatApi.md#networkCreate) | **POST** /networks/create | Create network
[**networkDelete**](NetworksCompatApi.md#networkDelete) | **DELETE** /networks/{name} | Remove a network
[**networkDisconnect**](NetworksCompatApi.md#networkDisconnect) | **POST** /networks/{name}/disconnect | Disconnect container from network
[**networkInspect**](NetworksCompatApi.md#networkInspect) | **GET** /networks/{name} | Inspect a network
[**networkList**](NetworksCompatApi.md#networkList) | **GET** /networks | List networks
[**networkPrune**](NetworksCompatApi.md#networkPrune) | **POST** /networks/prune | Delete unused networks


# **networkConnect**
> void networkConnect()

Connect a container to a network.  This endpoint is current a no-op

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksCompatApi(configuration);

let body:.NetworksCompatApiNetworkConnectRequest = {
  // string | the name of the network
  name: "name_example",
  // NetworkConnect | attributes for connecting a container to a network (optional)
  create: {
    container: "container_example",
    endpointConfig: {
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
};

apiInstance.networkConnect(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create** | **NetworkConnect**| attributes for connecting a container to a network |
 **name** | [**string**] | the name of the network | defaults to undefined


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
**200** | OK |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkCreate**
> NetworkCreate201Response networkCreate()

Create a network configuration

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksCompatApi(configuration);

let body:.NetworksCompatApiNetworkCreateRequest = {
  // NetworkCreateRequest | attributes for creating a network (optional)
  create: {
    attachable: true,
    checkDuplicate: true,
    configFrom: {
      network: "network_example",
    },
    configOnly: true,
    driver: "driver_example",
    enableIPv6: true,
    IPAM: {
      config: [
        {
          auxiliaryAddresses: {
            "key": "key_example",
          },
          gateway: "gateway_example",
          iPRange: "iPRange_example",
          subnet: "subnet_example",
        },
      ],
      driver: "driver_example",
      options: {
        "key": "key_example",
      },
    },
    ingress: true,
    internal: true,
    labels: {
      "key": "key_example",
    },
    name: "name_example",
    options: {
      "key": "key_example",
    },
    scope: "scope_example",
  },
};

apiInstance.networkCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create** | **NetworkCreateRequest**| attributes for creating a network |


### Return type

**NetworkCreate201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | network created |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkDelete**
> void networkDelete()

Remove a network

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksCompatApi(configuration);

let body:.NetworksCompatApiNetworkDeleteRequest = {
  // string | the name of the network
  name: "name_example",
};

apiInstance.networkDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name of the network | defaults to undefined


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
**404** | No such network |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkDisconnect**
> void networkDisconnect()

Disconnect a container from a network.  This endpoint is current a no-op

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksCompatApi(configuration);

let body:.NetworksCompatApiNetworkDisconnectRequest = {
  // string | the name of the network
  name: "name_example",
  // NetworkDisconnect | attributes for disconnecting a container from a network (optional)
  create: {
    container: "container_example",
    force: true,
  },
};

apiInstance.networkDisconnect(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create** | **NetworkDisconnect**| attributes for disconnecting a container from a network |
 **name** | [**string**] | the name of the network | defaults to undefined


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
**200** | OK |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkInspect**
> NetworkResource networkInspect()

Display low level configuration network

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksCompatApi(configuration);

let body:.NetworksCompatApiNetworkInspectRequest = {
  // string | the name of the network
  name: "name_example",
  // boolean | Detailed inspect output for troubleshooting (optional)
  verbose: true,
  // string | Filter the network by scope (swarm, global, or local) (optional)
  scope: "scope_example",
};

apiInstance.networkInspect(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name of the network | defaults to undefined
 **verbose** | [**boolean**] | Detailed inspect output for troubleshooting | (optional) defaults to undefined
 **scope** | [**string**] | Filter the network by scope (swarm, global, or local) | (optional) defaults to undefined


### Return type

**NetworkResource**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network inspect |  -  |
**404** | No such network |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkList**
> Array<NetworkResource> networkList()

Display summary of network configurations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksCompatApi(configuration);

let body:.NetworksCompatApiNetworkListRequest = {
  // string | JSON encoded value of the filters (a `map[string][]string`) to process on the network list. Currently available filters:   - `name=[name]` Matches network name (accepts regex).   - `id=[id]` Matches for full or partial ID.   - `driver=[driver]` Only bridge is supported.   - `label=[key]` or `label=[key=value]` Matches networks based on the presence of a label alone or a label and a value.  (optional)
  filters: "filters_example",
};

apiInstance.networkList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the network list. Currently available filters:   - &#x60;name&#x3D;[name]&#x60; Matches network name (accepts regex).   - &#x60;id&#x3D;[id]&#x60; Matches for full or partial ID.   - &#x60;driver&#x3D;[driver]&#x60; Only bridge is supported.   - &#x60;label&#x3D;[key]&#x60; or &#x60;label&#x3D;[key&#x3D;value]&#x60; Matches networks based on the presence of a label alone or a label and a value.  | (optional) defaults to undefined


### Return type

**Array<NetworkResource>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network list |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkPrune**
> NetworkPrune200Response networkPrune()

Remove CNI networks that do not have containers

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksCompatApi(configuration);

let body:.NetworksCompatApiNetworkPruneRequest = {
  // string | Filters to process on the prune list, encoded as JSON (a map[string][]string). Available filters:   - `until=<timestamp>` Prune networks created before this timestamp. The <timestamp> can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.   - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

apiInstance.networkPrune(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the prune list, encoded as JSON (a map[string][]string). Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &lt;timestamp&gt; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**NetworkPrune200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


