# .ExecApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerExecLibpod**](ExecApi.md#containerExecLibpod) | **POST** /libpod/containers/{name}/exec | Create an exec instance
[**execInspectLibpod**](ExecApi.md#execInspectLibpod) | **GET** /libpod/exec/{id}/json | Inspect an exec instance
[**execResizeLibpod**](ExecApi.md#execResizeLibpod) | **POST** /libpod/exec/{id}/resize | Resize an exec instance
[**execStartLibpod**](ExecApi.md#execStartLibpod) | **POST** /libpod/exec/{id}/start | Start an exec instance


# **containerExecLibpod**
> void containerExecLibpod()

Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExecApi(configuration);

let body:.ExecApiContainerExecLibpodRequest = {
  // string | name of container
  name: "name_example",
  // ContainerExecRequest | Attributes for create (optional)
  control: {
    attachStderr: true,
    attachStdin: true,
    attachStdout: true,
    cmd: [
      "cmd_example",
    ],
    detachKeys: "detachKeys_example",
    env: [
      "env_example",
    ],
    privileged: false,
    tty: true,
    user: "user_example",
    workingDir: "workingDir_example",
  },
};

apiInstance.containerExecLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **control** | **ContainerExecRequest**| Attributes for create |
 **name** | [**string**] | name of container | defaults to undefined


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
**201** | no error |  -  |
**404** | No such container |  -  |
**409** | container is paused |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **execInspectLibpod**
> void execInspectLibpod()

Return low-level information about an exec instance.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExecApi(configuration);

let body:.ExecApiExecInspectLibpodRequest = {
  // string | Exec instance ID
  id: "id_example",
};

apiInstance.execInspectLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Exec instance ID | defaults to undefined


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
**200** | no error |  -  |
**404** | No such exec instance |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **execResizeLibpod**
> void execResizeLibpod()

Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExecApi(configuration);

let body:.ExecApiExecResizeLibpodRequest = {
  // string | Exec instance ID
  id: "id_example",
  // number | Height of the TTY session in characters (optional)
  h: 1,
  // number | Width of the TTY session in characters (optional)
  w: 1,
};

apiInstance.execResizeLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Exec instance ID | defaults to undefined
 **h** | [**number**] | Height of the TTY session in characters | (optional) defaults to undefined
 **w** | [**number**] | Width of the TTY session in characters | (optional) defaults to undefined


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
**404** | No such exec instance |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **execStartLibpod**
> void execStartLibpod()

Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExecApi(configuration);

let body:.ExecApiExecStartLibpodRequest = {
  // string | Exec instance ID
  id: "id_example",
  // ExecStartLibpodRequest | Attributes for start (optional)
  control: {
    detach: true,
    tty: true,
    h: 1,
    w: 1,
  },
};

apiInstance.execStartLibpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **control** | **ExecStartLibpodRequest**| Attributes for start |
 **id** | [**string**] | Exec instance ID | defaults to undefined


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
**404** | No such exec instance |  -  |
**409** | container is not running. |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


