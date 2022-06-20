# .ManifestsApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**manifestAddLibpod**](ManifestsApi.md#manifestAddLibpod) | **POST** /libpod/manifests/{name}/add | Add image
[**manifestCreateLibpod**](ManifestsApi.md#manifestCreateLibpod) | **POST** /libpod/manifests | Create
[**manifestDeleteLibpod**](ManifestsApi.md#manifestDeleteLibpod) | **DELETE** /libpod/manifests/{name} | Delete manifest list
[**manifestExistsLibpod**](ManifestsApi.md#manifestExistsLibpod) | **GET** /libpod/manifests/{name}/exists | Exists
[**manifestInspectLibpod**](ManifestsApi.md#manifestInspectLibpod) | **GET** /libpod/manifests/{name}/json | Inspect
[**manifestModifyLibpod**](ManifestsApi.md#manifestModifyLibpod) | **PUT** /libpod/manifests/{name} | Modify manifest list
[**manifestPushLibpod**](ManifestsApi.md#manifestPushLibpod) | **POST** /libpod/manifests/{name}/registry/{destination} | Push manifest list to registry
[**manifestPushV3Libpod**](ManifestsApi.md#manifestPushV3Libpod) | **POST** /libpod/manifests/{name}/push | Push manifest to registry


# **manifestAddLibpod**
> IdResponse manifestAddLibpod()

Add an image to a manifest list  Deprecated: As of 4.0.0 use ManifestModifyLibpod instead 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManifestsApi(configuration);

let body:.ManifestsApiManifestAddLibpodRequest = {
  // string | the name or ID of the manifest
  name: "name_example",
  // ManifestAddOptions | options for creating a manifest (optional)
  options: {
    all: true,
    annotation: [
      "annotation_example",
    ],
    arch: "arch_example",
    features: [
      "features_example",
    ],
    images: [
      "images_example",
    ],
    os: "os_example",
    osFeatures: [
      "osFeatures_example",
    ],
    osVersion: "osVersion_example",
    variant: "variant_example",
  },
};

apiInstance.manifestAddLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **ManifestAddOptions**| options for creating a manifest |
 **name** | [**string**] | the name or ID of the manifest | defaults to undefined


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
**200** |  |  -  |
**404** | No such manifest |  -  |
**409** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manifestCreateLibpod**
> IdResponse manifestCreateLibpod()

Create a manifest list

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManifestsApi(configuration);

let body:.ManifestsApiManifestCreateLibpodRequest = {
  // string | manifest list or index name to create
  name: "name_example",
  // string | One or more names of an image or a manifest list. Repeat parameter as needed.  Support for multiple images, as of version 4.0.0 Alias of `image` is support for compatibility with < 4.0.0 Response status code is 200 with < 4.0.0 for compatibility 
  images: "images_example",
  // boolean | add all contents if given list (optional)
  all: true,
  // ManifestModifyOptions | options for new manifest (optional)
  options: {
    all: true,
    annotation: [
      "annotation_example",
    ],
    arch: "arch_example",
    features: [
      "features_example",
    ],
    images: [
      "images_example",
    ],
    operation: "operation_example",
    os: "os_example",
    osFeatures: [
      "osFeatures_example",
    ],
    osVersion: "osVersion_example",
    variant: "variant_example",
  },
};

apiInstance.manifestCreateLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **ManifestModifyOptions**| options for new manifest |
 **name** | [**string**] | manifest list or index name to create | defaults to undefined
 **images** | [**string**] | One or more names of an image or a manifest list. Repeat parameter as needed.  Support for multiple images, as of version 4.0.0 Alias of &#x60;image&#x60; is support for compatibility with &lt; 4.0.0 Response status code is 200 with &lt; 4.0.0 for compatibility  | defaults to undefined
 **all** | [**boolean**] | add all contents if given list | (optional) defaults to undefined


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
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manifestDeleteLibpod**
> LibpodImagesRemoveReport manifestDeleteLibpod()

Delete named manifest list  As of v4.0.0 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManifestsApi(configuration);

let body:.ManifestsApiManifestDeleteLibpodRequest = {
  // string | The name or ID of the  list to be deleted
  name: "name_example",
};

apiInstance.manifestDeleteLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name or ID of the  list to be deleted | defaults to undefined


### Return type

**LibpodImagesRemoveReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Remove |  -  |
**404** | No such manifest |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manifestExistsLibpod**
> void manifestExistsLibpod()

Check if manifest list exists  Note: There is no contract that the manifest list will exist for a follow-on operation 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManifestsApi(configuration);

let body:.ManifestsApiManifestExistsLibpodRequest = {
  // string | the name or ID of the manifest list
  name: "name_example",
};

apiInstance.manifestExistsLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the manifest list | defaults to undefined


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
**204** | manifest list exists |  -  |
**404** | No such manifest |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manifestInspectLibpod**
> Schema2List manifestInspectLibpod()

Display attributes of given manifest list

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManifestsApi(configuration);

let body:.ManifestsApiManifestInspectLibpodRequest = {
  // string | the name or ID of the manifest list
  name: "name_example",
};

apiInstance.manifestInspectLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the manifest list | defaults to undefined


### Return type

**Schema2List**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inspect Manifest |  -  |
**404** | No such manifest |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manifestModifyLibpod**
> ManifestModifyReport manifestModifyLibpod(options)

Add/Remove an image(s) to a manifest list  Note: operations are not atomic when multiple Images are provided.  As of v4.0.0 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManifestsApi(configuration);

let body:.ManifestsApiManifestModifyLibpodRequest = {
  // string | the name or ID of the manifest
  name: "name_example",
  // ManifestModifyOptions | options for mutating a manifest
  options: {
    all: true,
    annotation: [
      "annotation_example",
    ],
    arch: "arch_example",
    features: [
      "features_example",
    ],
    images: [
      "images_example",
    ],
    operation: "operation_example",
    os: "os_example",
    osFeatures: [
      "osFeatures_example",
    ],
    osVersion: "osVersion_example",
    variant: "variant_example",
  },
  // boolean | skip TLS verification for registries (optional)
  tlsVerify: false,
};

apiInstance.manifestModifyLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **ManifestModifyOptions**| options for mutating a manifest |
 **name** | [**string**] | the name or ID of the manifest | defaults to undefined
 **tlsVerify** | [**boolean**] | skip TLS verification for registries | (optional) defaults to undefined


### Return type

**ManifestModifyReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such manifest |  -  |
**409** | Operation had partial success, both Images and Errors may have members |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manifestPushLibpod**
> IdResponse manifestPushLibpod()

Push a manifest list or image index to the named registry  As of v4.0.0 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManifestsApi(configuration);

let body:.ManifestsApiManifestPushLibpodRequest = {
  // string | the name or ID of the manifest list
  name: "name_example",
  // string | the registry for the manifest list
  destination: "destination_example",
  // boolean | push all images (optional)
  all: false,
  // boolean | skip TLS verification for registries (optional)
  tlsVerify: false,
};

apiInstance.manifestPushLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the manifest list | defaults to undefined
 **destination** | [**string**] | the registry for the manifest list | defaults to undefined
 **all** | [**boolean**] | push all images | (optional) defaults to undefined
 **tlsVerify** | [**boolean**] | skip TLS verification for registries | (optional) defaults to undefined


### Return type

**IdResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such manifest |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manifestPushV3Libpod**
> IdResponse manifestPushV3Libpod()

Push a manifest list or image index to a registry  Deprecated: As of 4.0.0 use ManifestPushLibpod instead 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManifestsApi(configuration);

let body:.ManifestsApiManifestPushV3LibpodRequest = {
  // string | the name or ID of the manifest
  name: "name_example",
  // string | the destination for the manifest
  destination: "destination_example",
  // boolean | push all images (optional)
  all: true,
};

apiInstance.manifestPushV3Libpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the manifest | defaults to undefined
 **destination** | [**string**] | the destination for the manifest | defaults to undefined
 **all** | [**boolean**] | push all images | (optional) defaults to undefined


### Return type

**IdResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad parameter in request |  -  |
**404** | No such manifest |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


