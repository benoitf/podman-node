# .SecretsApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secretCreateLibpod**](SecretsApi.md#secretCreateLibpod) | **POST** /libpod/secrets/create | Create a secret
[**secretDeleteLibpod**](SecretsApi.md#secretDeleteLibpod) | **DELETE** /libpod/secrets/{name} | Remove secret
[**secretInspectLibpod**](SecretsApi.md#secretInspectLibpod) | **GET** /libpod/secrets/{name}/json | Inspect secret
[**secretListLibpod**](SecretsApi.md#secretListLibpod) | **GET** /libpod/secrets/json | List secrets


# **secretCreateLibpod**
> SecretCreateLibpod201Response secretCreateLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:.SecretsApiSecretCreateLibpodRequest = {
  // string | User-defined name of the secret.
  name: "name_example",
  // string | Secret driver (optional)
  driver: "file",
  // string | Secret (optional)
  request: "request_example",
};

apiInstance.secretCreateLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **string**| Secret |
 **name** | [**string**] | User-defined name of the secret. | defaults to undefined
 **driver** | [**string**] | Secret driver | (optional) defaults to 'file'


### Return type

**SecretCreateLibpod201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Secret create response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **secretDeleteLibpod**
> void secretDeleteLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:.SecretsApiSecretDeleteLibpodRequest = {
  // string | the name or ID of the secret
  name: "name_example",
  // boolean | Remove all secrets (optional)
  all: false,
};

apiInstance.secretDeleteLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the secret | defaults to undefined
 **all** | [**boolean**] | Remove all secrets | (optional) defaults to undefined


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
**404** | No such secret |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **secretInspectLibpod**
> SecretInfoReport secretInspectLibpod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:.SecretsApiSecretInspectLibpodRequest = {
  // string | the name or ID of the secret
  name: "name_example",
};

apiInstance.secretInspectLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the secret | defaults to undefined


### Return type

**SecretInfoReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Secret inspect response |  -  |
**404** | No such secret |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **secretListLibpod**
> Array<SecretInfoReport> secretListLibpod()

Returns a list of secrets

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:any = {};

apiInstance.secretListLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SecretInfoReport>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Secret list response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


