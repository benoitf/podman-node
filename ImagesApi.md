# .ImagesApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageBuildLibpod**](ImagesApi.md#imageBuildLibpod) | **POST** /libpod/build | Create image
[**imageChangesLibpod**](ImagesApi.md#imageChangesLibpod) | **GET** /libpod/images/{name}/changes | Report on changes to images&#39;s filesystem; adds, deletes or modifications.
[**imageDeleteAllLibpod**](ImagesApi.md#imageDeleteAllLibpod) | **DELETE** /libpod/images/remove | Remove one or more images from the storage.
[**imageDeleteLibpod**](ImagesApi.md#imageDeleteLibpod) | **DELETE** /libpod/images/{name} | Remove an image from the local storage.
[**imageExistsLibpod**](ImagesApi.md#imageExistsLibpod) | **GET** /libpod/images/{name}/exists | Image exists
[**imageExportLibpod**](ImagesApi.md#imageExportLibpod) | **GET** /libpod/images/export | Export multiple images
[**imageGetLibpod**](ImagesApi.md#imageGetLibpod) | **GET** /libpod/images/{name}/get | Export an image
[**imageHistoryLibpod**](ImagesApi.md#imageHistoryLibpod) | **GET** /libpod/images/{name}/history | History of an image
[**imageImportLibpod**](ImagesApi.md#imageImportLibpod) | **POST** /libpod/images/import | Import image
[**imageInspectLibpod**](ImagesApi.md#imageInspectLibpod) | **GET** /libpod/images/{name}/json | Inspect an image
[**imageListLibpod**](ImagesApi.md#imageListLibpod) | **GET** /libpod/images/json | List Images
[**imageLoadLibpod**](ImagesApi.md#imageLoadLibpod) | **POST** /libpod/images/load | Load image
[**imagePruneLibpod**](ImagesApi.md#imagePruneLibpod) | **POST** /libpod/images/prune | Prune unused images
[**imagePullLibpod**](ImagesApi.md#imagePullLibpod) | **POST** /libpod/images/pull | Pull images
[**imagePushLibpod**](ImagesApi.md#imagePushLibpod) | **POST** /libpod/images/{name}/push | Push Image
[**imageSearchLibpod**](ImagesApi.md#imageSearchLibpod) | **GET** /libpod/images/search | Search images
[**imageTagLibpod**](ImagesApi.md#imageTagLibpod) | **POST** /libpod/images/{name}/tag | Tag an image
[**imageTreeLibpod**](ImagesApi.md#imageTreeLibpod) | **GET** /libpod/images/{name}/tree | Image tree
[**imageUntagLibpod**](ImagesApi.md#imageUntagLibpod) | **POST** /libpod/images/{name}/untag | Untag an image


# **imageBuildLibpod**
> ImageBuildLibpod200Response imageBuildLibpod()

Build an image from the given Dockerfile(s)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageBuildLibpodRequest = {
  // string | Path within the build context to the `Dockerfile`. This is ignored if remote is specified and points to an external `Dockerfile`.  (optional)
  dockerfile: "Dockerfile",
  // string | A name and optional tag to apply to the image in the `name:tag` format.  If you omit the tag the default latest value is assumed. You can provide several t parameters. (optional)
  t: "latest",
  // boolean | Instead of building for a set of platforms specified using the platform option, inspect the build's base images, and build for all of the platforms that are available.  Stages that use *scratch* as a starting point can not be inspected, so at least one non-*scratch* stage must be present for detection to work usefully.  (optional)
  allplatforms: false,
  // string | TBD Extra hosts to add to /etc/hosts (As of version 1.xx)  (optional)
  extrahosts: "extrahosts_example",
  // string | A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called Dockerfile and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path inside the tarball. (As of version 1.xx)  (optional)
  remote: "remote_example",
  // boolean | Suppress verbose build output  (optional)
  q: false,
  // boolean | Do not use the cache when building the image (As of version 1.xx)  (optional)
  nocache: false,
  // string | JSON array of images used to build cache resolution (As of version 1.xx)  (optional)
  cachefrom: "cachefrom_example",
  // boolean | Attempt to pull the image even if an older image exists locally (As of version 1.xx)  (optional)
  pull: false,
  // boolean | Remove intermediate containers after a successful build (As of version 1.xx)  (optional)
  rm: true,
  // boolean | Always remove intermediate containers, even upon failure (As of version 1.xx)  (optional)
  forcerm: false,
  // number | Memory is the upper limit (in bytes) on how much memory running containers can use (As of version 1.xx)  (optional)
  memory: 1,
  // number | MemorySwap limits the amount of memory and swap together (As of version 1.xx)  (optional)
  memswap: 1,
  // number | CPUShares (relative weight (As of version 1.xx)  (optional)
  cpushares: 1,
  // string | CPUSetCPUs in which to allow execution (0-3, 0,1) (As of version 1.xx)  (optional)
  cpusetcpus: "cpusetcpus_example",
  // number | CPUPeriod limits the CPU CFS (Completely Fair Scheduler) period (As of version 1.xx)  (optional)
  cpuperiod: 1,
  // number | CPUQuota limits the CPU CFS (Completely Fair Scheduler) quota (As of version 1.xx)  (optional)
  cpuquota: 1,
  // string | JSON map of string pairs denoting build-time variables. For example, the build argument `Foo` with the value of `bar` would be encoded in JSON as `[\"Foo\":\"bar\"]`.  For example, buildargs={\"Foo\":\"bar\"}.  Note(s): * This should not be used to pass secrets. * The value of buildargs should be URI component encoded before being passed to the API.  (As of version 1.xx)  (optional)
  buildargs: "buildargs_example",
  // number | ShmSize is the \"size\" value to use when mounting an shmfs on the container's /dev/shm directory. Default is 64MB (As of version 1.xx)  (optional)
  shmsize: 67108864,
  // boolean | Silently ignored. Squash the resulting images layers into a single layer (As of version 1.xx)  (optional)
  squash: false,
  // string | JSON map of key, value pairs to set as labels on the new image (As of version 1.xx)  (optional)
  labels: "labels_example",
  // boolean | Cache intermediate layers during build. (As of version 1.xx)  (optional)
  layers: true,
  // string | Sets the networking mode for the run commands during build. Supported standard values are:   * `bridge` limited to containers within a single host, port mapping required for external access   * `host` no isolation between host and containers on this network   * `none` disable all networking for this container   * container:<nameOrID> share networking with given container   ---All other values are assumed to be a custom network's name (As of version 1.xx)  (optional)
  networkmode: "bridge",
  // string | Platform format os[/arch[/variant]] (As of version 1.xx)  (optional)
  platform: "platform_example",
  // string | Target build stage (As of version 1.xx)  (optional)
  target: "target_example",
  // string | output configuration TBD (As of version 1.xx)  (optional)
  outputs: "outputs_example",
  // boolean | Inject http proxy environment variables into container (As of version 2.0.0)  (optional)
  httpproxy: true,
  // Array<string> | Unset environment variables from the final image. (optional)
  unsetenv: [
    "unsetenv_example",
  ],
};

apiInstance.imageBuildLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerfile** | [**string**] | Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if remote is specified and points to an external &#x60;Dockerfile&#x60;.  | (optional) defaults to 'Dockerfile'
 **t** | [**string**] | A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format.  If you omit the tag the default latest value is assumed. You can provide several t parameters. | (optional) defaults to 'latest'
 **allplatforms** | [**boolean**] | Instead of building for a set of platforms specified using the platform option, inspect the build&#39;s base images, and build for all of the platforms that are available.  Stages that use *scratch* as a starting point can not be inspected, so at least one non-*scratch* stage must be present for detection to work usefully.  | (optional) defaults to undefined
 **extrahosts** | [**string**] | TBD Extra hosts to add to /etc/hosts (As of version 1.xx)  | (optional) defaults to undefined
 **remote** | [**string**] | A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called Dockerfile and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path inside the tarball. (As of version 1.xx)  | (optional) defaults to undefined
 **q** | [**boolean**] | Suppress verbose build output  | (optional) defaults to undefined
 **nocache** | [**boolean**] | Do not use the cache when building the image (As of version 1.xx)  | (optional) defaults to undefined
 **cachefrom** | [**string**] | JSON array of images used to build cache resolution (As of version 1.xx)  | (optional) defaults to undefined
 **pull** | [**boolean**] | Attempt to pull the image even if an older image exists locally (As of version 1.xx)  | (optional) defaults to undefined
 **rm** | [**boolean**] | Remove intermediate containers after a successful build (As of version 1.xx)  | (optional) defaults to undefined
 **forcerm** | [**boolean**] | Always remove intermediate containers, even upon failure (As of version 1.xx)  | (optional) defaults to undefined
 **memory** | [**number**] | Memory is the upper limit (in bytes) on how much memory running containers can use (As of version 1.xx)  | (optional) defaults to undefined
 **memswap** | [**number**] | MemorySwap limits the amount of memory and swap together (As of version 1.xx)  | (optional) defaults to undefined
 **cpushares** | [**number**] | CPUShares (relative weight (As of version 1.xx)  | (optional) defaults to undefined
 **cpusetcpus** | [**string**] | CPUSetCPUs in which to allow execution (0-3, 0,1) (As of version 1.xx)  | (optional) defaults to undefined
 **cpuperiod** | [**number**] | CPUPeriod limits the CPU CFS (Completely Fair Scheduler) period (As of version 1.xx)  | (optional) defaults to undefined
 **cpuquota** | [**number**] | CPUQuota limits the CPU CFS (Completely Fair Scheduler) quota (As of version 1.xx)  | (optional) defaults to undefined
 **buildargs** | [**string**] | JSON map of string pairs denoting build-time variables. For example, the build argument &#x60;Foo&#x60; with the value of &#x60;bar&#x60; would be encoded in JSON as &#x60;[\&quot;Foo\&quot;:\&quot;bar\&quot;]&#x60;.  For example, buildargs&#x3D;{\&quot;Foo\&quot;:\&quot;bar\&quot;}.  Note(s): * This should not be used to pass secrets. * The value of buildargs should be URI component encoded before being passed to the API.  (As of version 1.xx)  | (optional) defaults to undefined
 **shmsize** | [**number**] | ShmSize is the \&quot;size\&quot; value to use when mounting an shmfs on the container&#39;s /dev/shm directory. Default is 64MB (As of version 1.xx)  | (optional) defaults to 67108864
 **squash** | [**boolean**] | Silently ignored. Squash the resulting images layers into a single layer (As of version 1.xx)  | (optional) defaults to undefined
 **labels** | [**string**] | JSON map of key, value pairs to set as labels on the new image (As of version 1.xx)  | (optional) defaults to undefined
 **layers** | [**boolean**] | Cache intermediate layers during build. (As of version 1.xx)  | (optional) defaults to undefined
 **networkmode** | [**string**] | Sets the networking mode for the run commands during build. Supported standard values are:   * &#x60;bridge&#x60; limited to containers within a single host, port mapping required for external access   * &#x60;host&#x60; no isolation between host and containers on this network   * &#x60;none&#x60; disable all networking for this container   * container:&lt;nameOrID&gt; share networking with given container   ---All other values are assumed to be a custom network&#39;s name (As of version 1.xx)  | (optional) defaults to 'bridge'
 **platform** | [**string**] | Platform format os[/arch[/variant]] (As of version 1.xx)  | (optional) defaults to undefined
 **target** | [**string**] | Target build stage (As of version 1.xx)  | (optional) defaults to undefined
 **outputs** | [**string**] | output configuration TBD (As of version 1.xx)  | (optional) defaults to undefined
 **httpproxy** | [**boolean**] | Inject http proxy environment variables into container (As of version 2.0.0)  | (optional) defaults to undefined
 **unsetenv** | **Array&lt;string&gt;** | Unset environment variables from the final image. | (optional) defaults to undefined


### Return type

**ImageBuildLibpod200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK (As of version 1.xx) |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageChangesLibpod**
> void imageChangesLibpod()

Returns which files in a images's filesystem have been added, deleted, or modified. The Kind of modification can be one of:  0: Modified 1: Added 2: Deleted 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageChangesLibpodRequest = {
  // string | the name or id of the image
  name: "name_example",
  // string | specify a second layer which is used to compare against it instead of the parent layer (optional)
  parent: "parent_example",
  // 'all' | 'container' | 'image' | select what you want to match, default is all (optional)
  diffType: "all",
};

apiInstance.imageChangesLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or id of the image | defaults to undefined
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

# **imageDeleteAllLibpod**
> LibpodImagesRemoveReport imageDeleteAllLibpod()

Remove one or more images from the storage.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageDeleteAllLibpodRequest = {
  // Array<string> | Images IDs or names to remove. (optional)
  images: [
    "images_example",
  ],
  // boolean | Remove all images. (optional)
  all: true,
  // boolean | Force image removal (including containers using the images). (optional)
  force: true,
  // boolean | Ignore if a specified image does not exist and do not throw an error. (optional)
  ignore: true,
};

apiInstance.imageDeleteAllLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **images** | **Array&lt;string&gt;** | Images IDs or names to remove. | (optional) defaults to undefined
 **all** | [**boolean**] | Remove all images. | (optional) defaults to undefined
 **force** | [**boolean**] | Force image removal (including containers using the images). | (optional) defaults to undefined
 **ignore** | [**boolean**] | Ignore if a specified image does not exist and do not throw an error. | (optional) defaults to undefined


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
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageDeleteLibpod**
> LibpodImagesRemoveReport imageDeleteLibpod()

Remove an image from the local storage.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageDeleteLibpodRequest = {
  // string | name or ID of image to remove
  name: "name_example",
  // boolean | remove the image even if used by containers or has other tags (optional)
  force: true,
};

apiInstance.imageDeleteLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name or ID of image to remove | defaults to undefined
 **force** | [**boolean**] | remove the image even if used by containers or has other tags | (optional) defaults to undefined


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
**400** | Bad parameter in request |  -  |
**404** | No such image |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageExistsLibpod**
> void imageExistsLibpod()

Check if image exists in local store

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageExistsLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.imageExistsLibpod(body).then((data:any) => {
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
**204** | image exists |  -  |
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageExportLibpod**
> HttpFile imageExportLibpod()

Export multiple images into a single object. Only `docker-archive` is currently supported.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageExportLibpodRequest = {
  // string | format for exported image (only docker-archive is supported) (optional)
  format: "format_example",
  // Array<string> | references to images to export (optional)
  references: [
    "references_example",
  ],
  // boolean | use compression on image (optional)
  compress: true,
  // boolean | accept uncompressed layers when copying OCI images (optional)
  ociAcceptUncompressedLayers: true,
};

apiInstance.imageExportLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**string**] | format for exported image (only docker-archive is supported) | (optional) defaults to undefined
 **references** | **Array&lt;string&gt;** | references to images to export | (optional) defaults to undefined
 **compress** | [**boolean**] | use compression on image | (optional) defaults to undefined
 **ociAcceptUncompressedLayers** | [**boolean**] | accept uncompressed layers when copying OCI images | (optional) defaults to undefined


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
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageGetLibpod**
> HttpFile imageGetLibpod()

Export an image

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageGetLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | format for exported image (optional)
  format: "format_example",
  // boolean | use compression on image (optional)
  compress: true,
};

apiInstance.imageGetLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **format** | [**string**] | format for exported image | (optional) defaults to undefined
 **compress** | [**boolean**] | use compression on image | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-tar


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageHistoryLibpod**
> HistoryResponse imageHistoryLibpod()

Return parent layers of an image.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageHistoryLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.imageHistoryLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**HistoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image History |  -  |
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageImportLibpod**
> ImageImportReport imageImportLibpod(upload)

Import a previously exported tarball as an image.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageImportLibpodRequest = {
  // HttpFile | tarball for imported image
  upload: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // 'application/x-tar' (optional)
  contentType: "application/x-tar",
  // Array<string> | Apply the following possible instructions to the created image: CMD | ENTRYPOINT | ENV | EXPOSE | LABEL | STOPSIGNAL | USER | VOLUME | WORKDIR.  JSON encoded string (optional)
  changes: [
    "changes_example",
  ],
  // string | Set commit message for imported image (optional)
  message: "message_example",
  // string | Optional Name[:TAG] for the image (optional)
  reference: "reference_example",
  // string | Load image from the specified URL (optional)
  url: "url_example",
};

apiInstance.imageImportLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload** | **HttpFile**| tarball for imported image |
 **contentType** | [**&#39;application/x-tar&#39;**]**Array<&#39;application/x-tar&#39;>** |  | (optional) defaults to 'application/x-tar'
 **changes** | **Array&lt;string&gt;** | Apply the following possible instructions to the created image: CMD | ENTRYPOINT | ENV | EXPOSE | LABEL | STOPSIGNAL | USER | VOLUME | WORKDIR.  JSON encoded string | (optional) defaults to undefined
 **message** | [**string**] | Set commit message for imported image | (optional) defaults to undefined
 **reference** | [**string**] | Optional Name[:TAG] for the image | (optional) defaults to undefined
 **url** | [**string**] | Load image from the specified URL | (optional) defaults to undefined


### Return type

**ImageImportReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Import |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageInspectLibpod**
> ImageData imageInspectLibpod()

Obtain low-level information about an image

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageInspectLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.imageInspectLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**ImageData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inspect Image |  -  |
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageListLibpod**
> Array<LibpodImageSummary> imageListLibpod()

Returns a list of images on the server

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageListLibpodRequest = {
  // boolean | Show all images. Only images from a final layer (no children) are shown by default. (optional)
  all: false,
  // string | A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters: - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `dangling=true` - `label=key` or `label=\"key=value\"` of an image label - `reference`=(`<image-name>[:<tag>]`) - `id`=(`<image-id>`) - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)  (optional)
  filters: "filters_example",
};

apiInstance.imageListLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] | Show all images. Only images from a final layer (no children) are shown by default. | (optional) defaults to undefined
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;id&#x60;&#x3D;(&#x60;&lt;image-id&gt;&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;)  | (optional) defaults to undefined


### Return type

**Array<LibpodImageSummary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image summary for libpod API |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageLoadLibpod**
> ImageLoadReport imageLoadLibpod(upload)

Load an image (oci-archive or docker-archive) stream.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageLoadLibpodRequest = {
  // string | tarball of container image
  upload: "upload_example",
};

apiInstance.imageLoadLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload** | **string**| tarball of container image |


### Return type

**ImageLoadReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Load |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagePruneLibpod**
> Array<PruneReport> imagePruneLibpod()

Remove images that are not being used by a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImagePruneLibpodRequest = {
  // boolean | Remove all images not in use by containers, not just dangling ones  (optional)
  all: false,
  // boolean | Remove images even when they are used by external containers (e.g, by build containers)  (optional)
  external: false,
  // string | filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - `dangling=<boolean>` When set to `true` (or `1`), prune only      unused *and* untagged images. When set to `false`      (or `0`), all unused images are pruned.   - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.   - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

apiInstance.imagePruneLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] | Remove all images not in use by containers, not just dangling ones  | (optional) defaults to undefined
 **external** | [**boolean**] | Remove images even when they are used by external containers (e.g, by build containers)  | (optional) defaults to undefined
 **filters** | [**string**] | filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only      unused *and* untagged images. When set to &#x60;false&#x60;      (or &#x60;0&#x60;), all unused images are pruned.   - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**Array<PruneReport>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Prune |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagePullLibpod**
> LibpodImagesPullReport imagePullLibpod()

Pull one or more images from a container registry.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImagePullLibpodRequest = {
  // string | Mandatory reference to the image (e.g., quay.io/image/name:tag) (optional)
  reference: "reference_example",
  // boolean | silences extra stream data on pull (optional)
  quiet: false,
  // string | username:password for the registry (optional)
  credentials: "credentials_example",
  // string | Pull image for the specified architecture. (optional)
  arch: "Arch_example",
  // string | Pull image for the specified operating system. (optional)
  OS: "OS_example",
  // string | Pull image for the specified variant. (optional)
  variant: "Variant_example",
  // string | Pull policy, \"always\" (default), \"missing\", \"newer\", \"never\". (optional)
  policy: "policy_example",
  // boolean | Require TLS verification. (optional)
  tlsVerify: true,
  // boolean | Pull all tagged images in the repository. (optional)
  allTags: true,
  // string | base-64 encoded auth config. Must include the following four values: username, password, email and server address OR simply just an identity token. (optional)
  xRegistryAuth: "X-Registry-Auth_example",
};

apiInstance.imagePullLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | [**string**] | Mandatory reference to the image (e.g., quay.io/image/name:tag) | (optional) defaults to undefined
 **quiet** | [**boolean**] | silences extra stream data on pull | (optional) defaults to undefined
 **credentials** | [**string**] | username:password for the registry | (optional) defaults to undefined
 **arch** | [**string**] | Pull image for the specified architecture. | (optional) defaults to undefined
 **OS** | [**string**] | Pull image for the specified operating system. | (optional) defaults to undefined
 **variant** | [**string**] | Pull image for the specified variant. | (optional) defaults to undefined
 **policy** | [**string**] | Pull policy, \&quot;always\&quot; (default), \&quot;missing\&quot;, \&quot;newer\&quot;, \&quot;never\&quot;. | (optional) defaults to undefined
 **tlsVerify** | [**boolean**] | Require TLS verification. | (optional) defaults to undefined
 **allTags** | [**boolean**] | Pull all tagged images in the repository. | (optional) defaults to undefined
 **xRegistryAuth** | [**string**] | base-64 encoded auth config. Must include the following four values: username, password, email and server address OR simply just an identity token. | (optional) defaults to undefined


### Return type

**LibpodImagesPullReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Pull |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagePushLibpod**
> HttpFile imagePushLibpod()

Push an image to a container registry

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImagePushLibpodRequest = {
  // string | Name of image to push.
  name: "name_example",
  // string | Allows for pushing the image to a different destination than the image refers to. (optional)
  destination: "destination_example",
  // boolean | Require TLS verification. (optional)
  tlsVerify: true,
  // string | A base64-encoded auth configuration. (optional)
  xRegistryAuth: "X-Registry-Auth_example",
};

apiInstance.imagePushLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of image to push. | defaults to undefined
 **destination** | [**string**] | Allows for pushing the image to a different destination than the image refers to. | (optional) defaults to undefined
 **tlsVerify** | [**boolean**] | Require TLS verification. | (optional) defaults to undefined
 **xRegistryAuth** | [**string**] | A base64-encoded auth configuration. | (optional) defaults to undefined


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
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageSearchLibpod**
> ImageSearch200Response imageSearchLibpod()

Search registries for images

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageSearchLibpodRequest = {
  // string | term to search (optional)
  term: "term_example",
  // number | maximum number of results (optional)
  limit: 25,
  // string | A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters: - `is-automated=(true|false)` - `is-official=(true|false)` - `stars=<number>` Matches images that has at least 'number' stars.  (optional)
  filters: "filters_example",
  // boolean | skip TLS verification for registries (optional)
  tlsVerify: false,
  // boolean | list the available tags in the repository (optional)
  listTags: false,
};

apiInstance.imageSearchLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | [**string**] | term to search | (optional) defaults to undefined
 **limit** | [**number**] | maximum number of results | (optional) defaults to 25
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;is-automated&#x3D;(true|false)&#x60; - &#x60;is-official&#x3D;(true|false)&#x60; - &#x60;stars&#x3D;&lt;number&gt;&#x60; Matches images that has at least &#39;number&#39; stars.  | (optional) defaults to undefined
 **tlsVerify** | [**boolean**] | skip TLS verification for registries | (optional) defaults to undefined
 **listTags** | [**boolean**] | list the available tags in the repository | (optional) defaults to undefined


### Return type

**ImageSearch200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Registry Search |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageTagLibpod**
> void imageTagLibpod()

Tag an image so that it becomes part of a repository.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageTagLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | the repository to tag in (optional)
  repo: "repo_example",
  // string | the name of the new tag (optional)
  tag: "tag_example",
};

apiInstance.imageTagLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **repo** | [**string**] | the repository to tag in | (optional) defaults to undefined
 **tag** | [**string**] | the name of the new tag | (optional) defaults to undefined


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
**400** | Bad parameter in request |  -  |
**404** | No such image |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageTreeLibpod**
> ImageTreeReport imageTreeLibpod()

Retrieve the image tree for the provided image name or ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageTreeLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // boolean | show all child images and layers of the specified image (optional)
  whatrequires: true,
};

apiInstance.imageTreeLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **whatrequires** | [**boolean**] | show all child images and layers of the specified image | (optional) defaults to undefined


### Return type

**ImageTreeReport**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Tree |  -  |
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageUntagLibpod**
> void imageUntagLibpod()

Untag an image. If not repo and tag are specified, all tags are removed from the image.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesApi(configuration);

let body:.ImagesApiImageUntagLibpodRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | the repository to untag (optional)
  repo: "repo_example",
  // string | the name of the tag to untag (optional)
  tag: "tag_example",
};

apiInstance.imageUntagLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined
 **repo** | [**string**] | the repository to untag | (optional) defaults to undefined
 **tag** | [**string**] | the name of the tag to untag | (optional) defaults to undefined


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
**400** | Bad parameter in request |  -  |
**404** | No such image |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


