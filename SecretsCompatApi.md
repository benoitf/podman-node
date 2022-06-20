# .SecretsCompatApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secretCreate**](SecretsCompatApi.md#secretCreate) | **POST** /secrets/create | Create a secret
[**secretDelete**](SecretsCompatApi.md#secretDelete) | **DELETE** /secrets/{name} | Remove secret
[**secretInspect**](SecretsCompatApi.md#secretInspect) | **GET** /secrets/{name} | Inspect secret
[**secretList**](SecretsCompatApi.md#secretList) | **GET** /secrets | List secrets


# **secretCreate**
> SecretCreateLibpod201Response secretCreate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsCompatApi(configuration);

let body:.SecretsCompatApiSecretCreateRequest = {
  // SecretCreate | attributes for creating a secret  (optional)
  create: {
    data: "data_example",
    driver: {
      name: "name_example",
      options: {
        "key": "key_example",
      },
    },
    name: "name_example",
  },
};

apiInstance.secretCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create** | **SecretCreate**| attributes for creating a secret  |


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
**409** | Secret in use |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **secretDelete**
> void secretDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsCompatApi(configuration);

let body:.SecretsCompatApiSecretDeleteRequest = {
  // string | the name or ID of the secret
  name: "name_example",
};

apiInstance.secretDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the secret | defaults to undefined


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

# **secretInspect**
> SecretInfoReportCompat secretInspect()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsCompatApi(configuration);

let body:.SecretsCompatApiSecretInspectRequest = {
  // string | the name or ID of the secret
  name: "name_example",
};

apiInstance.secretInspect(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the secret | defaults to undefined


### Return type

**SecretInfoReportCompat**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Secret inspect compat |  -  |
**404** | No such secret |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **secretList**
> Array<SecretInfoReportCompat> secretList()

Returns a list of secrets

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsCompatApi(configuration);

let body:any = {};

apiInstance.secretList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SecretInfoReportCompat>**

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


