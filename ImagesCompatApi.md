# .ImagesCompatApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageBuild**](ImagesCompatApi.md#imageBuild) | **POST** /build | Create image
[**imageCreate**](ImagesCompatApi.md#imageCreate) | **POST** /images/create | Create an image
[**imageDelete**](ImagesCompatApi.md#imageDelete) | **DELETE** /images/{name} | Remove Image
[**imageGet**](ImagesCompatApi.md#imageGet) | **GET** /images/{name}/get | Export an image
[**imageGetAll**](ImagesCompatApi.md#imageGetAll) | **GET** /images/get | Export several images
[**imageHistory**](ImagesCompatApi.md#imageHistory) | **GET** /images/{name}/history | History of an image
[**imageInspect**](ImagesCompatApi.md#imageInspect) | **GET** /images/{name}/json | Inspect an image
[**imageList**](ImagesCompatApi.md#imageList) | **GET** /images/json | List Images
[**imageLoad**](ImagesCompatApi.md#imageLoad) | **POST** /images/load | Import image
[**imagePrune**](ImagesCompatApi.md#imagePrune) | **POST** /images/prune | Prune unused images
[**imagePush**](ImagesCompatApi.md#imagePush) | **POST** /images/{name}/push | Push Image
[**imageSearch**](ImagesCompatApi.md#imageSearch) | **GET** /images/search | Search images
[**imageTag**](ImagesCompatApi.md#imageTag) | **POST** /images/{name}/tag | Tag an image


# **imageBuild**
> ImageBuild200Response imageBuild()

Build an image from the given Dockerfile(s)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageBuildRequest = {
  // 'application/x-tar' (optional)
  contentType: "application/x-tar",
  // string (optional)
  xRegistryConfig: "X-Registry-Config_example",
  // string | Path within the build context to the `Dockerfile`. This is ignored if remote is specified and points to an external `Dockerfile`.  (optional)
  dockerfile: "Dockerfile",
  // string | A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default latest value is assumed. You can provide several t parameters. (optional)
  t: "latest",
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
  // string | Sets the networking mode for the run commands during build. Supported standard values are:   * `bridge` limited to containers within a single host, port mapping required for external access   * `host` no isolation between host and containers on this network   * `none` disable all networking for this container   * container:<nameOrID> share networking with given container   ---All other values are assumed to be a custom network's name (As of version 1.xx)  (optional)
  networkmode: "bridge",
  // string | Platform format os[/arch[/variant]] (As of version 1.xx)  (optional)
  platform: "platform_example",
  // string | Target build stage (As of version 1.xx)  (optional)
  target: "target_example",
  // string | output configuration TBD (As of version 1.xx)  (optional)
  outputs: "outputs_example",
  // HttpFile | A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.  (optional)
  inputStream: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.imageBuild(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputStream** | **HttpFile**| A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.  |
 **contentType** | [**&#39;application/x-tar&#39;**]**Array<&#39;application/x-tar&#39;>** |  | (optional) defaults to 'application/x-tar'
 **xRegistryConfig** | [**string**] |  | (optional) defaults to undefined
 **dockerfile** | [**string**] | Path within the build context to the &#x60;Dockerfile&#x60;. This is ignored if remote is specified and points to an external &#x60;Dockerfile&#x60;.  | (optional) defaults to 'Dockerfile'
 **t** | [**string**] | A name and optional tag to apply to the image in the &#x60;name:tag&#x60; format. If you omit the tag the default latest value is assumed. You can provide several t parameters. | (optional) defaults to 'latest'
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
 **networkmode** | [**string**] | Sets the networking mode for the run commands during build. Supported standard values are:   * &#x60;bridge&#x60; limited to containers within a single host, port mapping required for external access   * &#x60;host&#x60; no isolation between host and containers on this network   * &#x60;none&#x60; disable all networking for this container   * container:&lt;nameOrID&gt; share networking with given container   ---All other values are assumed to be a custom network&#39;s name (As of version 1.xx)  | (optional) defaults to 'bridge'
 **platform** | [**string**] | Platform format os[/arch[/variant]] (As of version 1.xx)  | (optional) defaults to undefined
 **target** | [**string**] | Target build stage (As of version 1.xx)  | (optional) defaults to undefined
 **outputs** | [**string**] | output configuration TBD (As of version 1.xx)  | (optional) defaults to undefined


### Return type

**ImageBuild200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK (As of version 1.xx) |  -  |
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageCreate**
> HttpFile imageCreate()

Create an image by either pulling it from a registry or importing it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageCreateRequest = {
  // string | A base64-encoded auth configuration. (optional)
  xRegistryAuth: "X-Registry-Auth_example",
  // string | Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed. (optional)
  fromImage: "fromImage_example",
  // string | Source to import. The value may be a URL from which the image can be retrieved or - to read the image from the request body. This parameter may only be used when importing an image (optional)
  fromSrc: "fromSrc_example",
  // string | Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image. (optional)
  repo: "repo_example",
  // string | Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled. (optional)
  tag: "tag_example",
  // string | Set commit message for imported image. (optional)
  message: "message_example",
  // string | Platform in the format os[/arch[/variant]] (optional)
  platform: "platform_example",
  // HttpFile | Image content if fromSrc parameter was used (optional)
  inputImage: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.imageCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputImage** | **HttpFile**| Image content if fromSrc parameter was used |
 **xRegistryAuth** | [**string**] | A base64-encoded auth configuration. | (optional) defaults to undefined
 **fromImage** | [**string**] | Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed. | (optional) defaults to undefined
 **fromSrc** | [**string**] | Source to import. The value may be a URL from which the image can be retrieved or - to read the image from the request body. This parameter may only be used when importing an image | (optional) defaults to undefined
 **repo** | [**string**] | Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image. | (optional) defaults to undefined
 **tag** | [**string**] | Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled. | (optional) defaults to undefined
 **message** | [**string**] | Set commit message for imported image. | (optional) defaults to undefined
 **platform** | [**string**] | Platform in the format os[/arch[/variant]] | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain, application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageDelete**
> Array<ImageDelete200ResponseInner> imageDelete()

Delete an image from local storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageDeleteRequest = {
  // string | name or ID of image to delete
  name: "name_example",
  // boolean | remove the image even if used by containers or has other tags (optional)
  force: true,
  // boolean | not supported. will be logged as an invalid parameter if enabled (optional)
  noprune: true,
};

apiInstance.imageDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name or ID of image to delete | defaults to undefined
 **force** | [**boolean**] | remove the image even if used by containers or has other tags | (optional) defaults to undefined
 **noprune** | [**boolean**] | not supported. will be logged as an invalid parameter if enabled | (optional) defaults to undefined


### Return type

**Array<ImageDelete200ResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Delete |  -  |
**404** | No such image |  -  |
**409** | Conflict error in operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageGet**
> HttpFile imageGet()

Export an image in tarball format

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageGetRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.imageGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageGetAll**
> HttpFile imageGetAll()

Get a tarball containing all images and metadata for several image repositories

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageGetAllRequest = {
  // string | one or more image names or IDs comma separated
  names: "names_example",
};

apiInstance.imageGetAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **names** | [**string**] | one or more image names or IDs comma separated | defaults to undefined


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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageHistory**
> HistoryResponse imageHistory()

Return parent layers of an image.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageHistoryRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.imageHistory(body).then((data:any) => {
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

# **imageInspect**
> ImageInspect imageInspect()

Return low-level information about an image.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageInspectRequest = {
  // string | the name or ID of the container
  name: "name_example",
};

apiInstance.imageInspect(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | the name or ID of the container | defaults to undefined


### Return type

**ImageInspect**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Inspect |  -  |
**404** | No such image |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageList**
> Array<ImageSummary> imageList()

Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageListRequest = {
  // boolean | Show all images. Only images from a final layer (no children) are shown by default. (optional)
  all: false,
  // string | A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters: - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `dangling=true` - `label=key` or `label=\"key=value\"` of an image label - `reference`=(`<image-name>[:<tag>]`) - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)  (optional)
  filters: "filters_example",
  // boolean | Not supported (optional)
  digests: false,
};

apiInstance.imageList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] | Show all images. Only images from a final layer (no children) are shown by default. | (optional) defaults to undefined
 **filters** | [**string**] | A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the images list. Available filters: - &#x60;before&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;dangling&#x3D;true&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of an image label - &#x60;reference&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;,  &#x60;&lt;image id&gt;&#x60; or &#x60;&lt;image@digest&gt;&#x60;)  | (optional) defaults to undefined
 **digests** | [**boolean**] | Not supported | (optional) defaults to undefined


### Return type

**Array<ImageSummary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image summary for compat API |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageLoad**
> void imageLoad()

Load a set of images and tags into a repository.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageLoadRequest = {
  // boolean | not supported (optional)
  quiet: true,
  // string | tarball of container image (optional)
  request: "request_example",
};

apiInstance.imageLoad(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **string**| tarball of container image |
 **quiet** | [**boolean**] | not supported | (optional) defaults to undefined


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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagePrune**
> Array<ImageDelete200ResponseInner> imagePrune()

Remove images from local storage that are not being used by a container

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImagePruneRequest = {
  // string | filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - `dangling=<boolean>` When set to `true` (or `1`), prune only      unused *and* untagged images. When set to `false`      (or `0`), all unused images are pruned.   - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.   - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.  (optional)
  filters: "filters_example",
};

apiInstance.imagePrune(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | [**string**] | filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:   - &#x60;dangling&#x3D;&lt;boolean&gt;&#x60; When set to &#x60;true&#x60; (or &#x60;1&#x60;), prune only      unused *and* untagged images. When set to &#x60;false&#x60;      (or &#x60;0&#x60;), all unused images are pruned.   - &#x60;until&#x3D;&lt;string&gt;&#x60; Prune images created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time.   - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune images with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | (optional) defaults to undefined


### Return type

**Array<ImageDelete200ResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Delete |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagePush**
> HttpFile imagePush()

Push an image to a container registry

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImagePushRequest = {
  // string | Name of image to push.
  name: "name_example",
  // string | The tag to associate with the image on the registry. (optional)
  tag: "tag_example",
  // boolean | All indicates whether to push all images related to the image list (optional)
  all: true,
  // boolean | use compression on image (optional)
  compress: true,
  // string | destination name for the image being pushed (optional)
  destination: "destination_example",
  // string | A base64-encoded auth configuration. (optional)
  xRegistryAuth: "X-Registry-Auth_example",
};

apiInstance.imagePush(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of image to push. | defaults to undefined
 **tag** | [**string**] | The tag to associate with the image on the registry. | (optional) defaults to undefined
 **all** | [**boolean**] | All indicates whether to push all images related to the image list | (optional) defaults to undefined
 **compress** | [**boolean**] | use compression on image | (optional) defaults to undefined
 **destination** | [**string**] | destination name for the image being pushed | (optional) defaults to undefined
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

# **imageSearch**
> ImageSearch200Response imageSearch()

Search registries for an image

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageSearchRequest = {
  // string | term to search (optional)
  term: "term_example",
  // number | maximum number of results (optional)
  limit: 25,
  // string | A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters: - `is-automated=(true|false)` - `is-official=(true|false)` - `stars=<number>` Matches images that has at least 'number' stars.  (optional)
  filters: "filters_example",
  // boolean | skip TLS verification for registries (optional)
  tlsVerify: false,
  // boolean | list the available tags in the repository (optional)
  listTags: true,
};

apiInstance.imageSearch(body).then((data:any) => {
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
**400** | Bad parameter in request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageTag**
> void imageTag()

Tag an image so that it becomes part of a repository.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImagesCompatApi(configuration);

let body:.ImagesCompatApiImageTagRequest = {
  // string | the name or ID of the container
  name: "name_example",
  // string | the repository to tag in (optional)
  repo: "repo_example",
  // string | the name of the new tag (optional)
  tag: "tag_example",
};

apiInstance.imageTag(body).then((data:any) => {
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


