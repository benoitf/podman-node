# .NetworksApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**networkConnectLibpod**](NetworksApi.md#networkConnectLibpod) | **POST** /libpod/networks/{name}/connect | Connect container to network
[**networkCreateLibpod**](NetworksApi.md#networkCreateLibpod) | **POST** /libpod/networks/create | Create network
[**networkDeleteLibpod**](NetworksApi.md#networkDeleteLibpod) | **DELETE** /libpod/networks/{name} | Remove a network
[**networkDisconnectLibpod**](NetworksApi.md#networkDisconnectLibpod) | **POST** /libpod/networks/{name}/disconnect | Disconnect container from network
[**networkExistsLibpod**](NetworksApi.md#networkExistsLibpod) | **GET** /libpod/networks/{name}/exists | Network exists
[**networkInspectLibpod**](NetworksApi.md#networkInspectLibpod) | **GET** /libpod/networks/{name}/json | Inspect a network
[**networkListLibpod**](NetworksApi.md#networkListLibpod) | **GET** /libpod/networks/json | List networks
[**networkPruneLibpod**](NetworksApi.md#networkPruneLibpod) | **POST** /libpod/networks/prune | Delete unused networks


# **networkConnectLibpod**
> void networkConnectLibpod()

Connect a container to a network.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkConnectLibpodRequest = {
  // string | the name of the network
  name: "name_example",
  // NetworkConnectOptions | attributes for connecting a container to a network (optional)
  create: {
    aliases: [
      "aliases_example",
    ],
    container: "container_example",
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
};

apiInstance.networkConnectLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create** | **NetworkConnectOptions**| attributes for connecting a container to a network |
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
**404** | No such network |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkCreateLibpod**
> Network networkCreateLibpod()

Create a new network configuration

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkCreateLibpodRequest = {
  // NetworkCreateLibpod | attributes for creating a network (optional)
  create: {
    created: new Date('1970-01-01T00:00:00.00Z'),
    dnsEnabled: true,
    driver: "driver_example",
    id: "id_example",
    internal: true,
    ipamOptions: {
      "key": "key_example",
    },
    ipv6Enabled: true,
    labels: {
      "key": "key_example",
    },
    name: "name_example",
    networkInterface: "networkInterface_example",
    options: {
      "key": "key_example",
    },
    subnets: [
      {
        gateway: "gateway_example",
        leaseRange: {
          endIp: "endIp_example",
          startIp: "startIp_example",
        },
        subnet: "subnet_example",
      },
    ],
  },
};

apiInstance.networkCreateLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create** | **NetworkCreateLibpod**| attributes for creating a network |


### Return type

**Network**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network create |  -  |
**400** | Bad parameter in request |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkDeleteLibpod**
> Array<NetworkRmReport> networkDeleteLibpod()

Remove a CNI configured network

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkDeleteLibpodRequest = {
  // string | the name of the network
  name: "name_example",
  // boolean | remove containers associated with network (optional)
  force: true,
};

apiInstance.networkDeleteLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name of the network | defaults to undefined
 **force** | [**boolean**] | remove containers associated with network | (optional) defaults to undefined


### Return type

**Array<NetworkRmReport>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network Delete |  -  |
**404** | No such network |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkDisconnectLibpod**
> void networkDisconnectLibpod()

Disconnect a container from a network.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkDisconnectLibpodRequest = {
  // string | the name of the network
  name: "name_example",
  // NetworkDisconnect | attributes for disconnecting a container from a network (optional)
  create: {
    container: "container_example",
    force: true,
  },
};

apiInstance.networkDisconnectLibpod(body).then((data:any) => {
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
**404** | No such network |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkExistsLibpod**
> void networkExistsLibpod()

Check if network exists

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkExistsLibpodRequest = {
  // string | the name or ID of the network
  name: "name_example",
};

apiInstance.networkExistsLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the network | defaults to undefined


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
**204** | network exists |  -  |
**404** | No such network |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkInspectLibpod**
> Network networkInspectLibpod()

Display low level configuration for a CNI network.   - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkInspectLibpodRequest = {
  // string | the name of the network
  name: "name_example",
};

apiInstance.networkInspectLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name of the network | defaults to undefined


### Return type

**Network**

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

# **networkListLibpod**
> Array<Network> networkListLibpod()

Display summary of network configurations.   - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkListLibpodRequest = {
  // string | JSON encoded value of the filters (a `map[string][]string`) to process on the network list. Available filters:   - `name=[name]` Matches network name (accepts regex).   - `id=[id]` Matches for full or partial ID.   - `driver=[driver]` Only bridge is supported.   - `label=[key]` or `label=[key=value]` Matches networks based on the presence of a label alone or a label and a value.   - `until=[timestamp]` Matches all networks that were create before the given timestamp.  (optional)
  filters: "filters_example",
};

apiInstance.networkListLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the network list. Available filters:   - &#x60;name&#x3D;[name]&#x60; Matches network name (accepts regex).   - &#x60;id&#x3D;[id]&#x60; Matches for full or partial ID.   - &#x60;driver&#x3D;[driver]&#x60; Only bridge is supported.   - &#x60;label&#x3D;[key]&#x60; or &#x60;label&#x3D;[key&#x3D;value]&#x60; Matches networks based on the presence of a label alone or a label and a value.   - &#x60;until&#x3D;[timestamp]&#x60; Matches all networks that were create before the given timestamp.  | (optional) defaults to undefined


### Return type

**Array<Network>**

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

# **networkPruneLibpod**
> Array<NetworkPruneReport> networkPruneLibpod()

Remove CNI networks that do not have containers

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkPruneLibpodRequest = {
  // string | Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:   - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.   - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

apiInstance.networkPruneLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;). Available filters:   - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune networks created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune networks with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**Array<NetworkPruneReport>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network prune |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


