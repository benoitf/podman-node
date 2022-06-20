# .SystemApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemDataUsageLibpod**](SystemApi.md#systemDataUsageLibpod) | **GET** /libpod/system/df | Show disk usage
[**systemEventsLibpod**](SystemApi.md#systemEventsLibpod) | **GET** /libpod/events | Get events
[**systemInfoLibpod**](SystemApi.md#systemInfoLibpod) | **GET** /libpod/info | Get info
[**systemPing**](SystemApi.md#systemPing) | **GET** /libpod/_ping | Ping service
[**systemPruneLibpod**](SystemApi.md#systemPruneLibpod) | **POST** /libpod/system/prune | Prune unused data
[**systemVersionLibpod**](SystemApi.md#systemVersionLibpod) | **GET** /libpod/version | Component Version information


# **systemDataUsageLibpod**
> SystemDfReport systemDataUsageLibpod()

Return information about disk usage for containers, images, and volumes

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.systemDataUsageLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SystemDfReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Disk usage |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemEventsLibpod**
> void systemEventsLibpod()

Returns events filtered on query parameters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:.SystemApiSystemEventsLibpodRequest = {
  // string | start streaming events from this time (optional)
  since: "since_example",
  // string | stop streaming events later than this (optional)
  until: "until_example",
  // string | JSON encoded map[string][]string of constraints (optional)
  filters: "filters_example",
  // boolean | when false, do not follow events (optional)
  stream: true,
};

apiInstance.systemEventsLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | [**string**] | start streaming events from this time | (optional) defaults to undefined
 **until** | [**string**] | stop streaming events later than this | (optional) defaults to undefined
 **filters** | [**string**] | JSON encoded map[string][]string of constraints | (optional) defaults to undefined
 **stream** | [**boolean**] | when false, do not follow events | (optional) defaults to undefined


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
**200** | returns a string of json data describing an event |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemInfoLibpod**
> Info systemInfoLibpod()

Returns information on the system and libpod configuration

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.systemInfoLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Info**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Info |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemPing**
> string systemPing()

Return protocol information in response headers. `HEAD /libpod/_ping` is also supported. `/_ping` is available for compatibility with other engines. The '_ping' endpoints are not versioned. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.systemPing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Docker-Experimental - If the server is running with experimental mode enabled, always true <br>  * Cache-Control - always no-cache <br>  * Libpod-Buildah-Version - Default version of libpod image builder.   Available if service is backed by Podman, therefore may be used to   determine if talking to Podman engine or another engine  <br>  * Libpod-API-Version - Max Podman API Version the server supports. Available if service is backed by Podman, therefore may be used to determine if talking to Podman engine or another engine  <br>  * BuildKit-Version - Default version of docker image builder <br>  * Pragma - always no-cache <br>  * API-Version - Max compatibility API Version the server supports <br>  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemPruneLibpod**
> SystemPruneReport systemPruneLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.systemPruneLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SystemPruneReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | System Prune results |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **systemVersionLibpod**
> ComponentVersion systemVersionLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.systemVersionLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ComponentVersion**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Version |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


