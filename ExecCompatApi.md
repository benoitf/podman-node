# .ExecCompatApi

All URIs are relative to *http://podman.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerExec**](ExecCompatApi.md#containerExec) | **POST** /containers/{name}/exec | Create an exec instance
[**execInspect**](ExecCompatApi.md#execInspect) | **GET** /exec/{id}/json | Inspect an exec instance
[**execResize**](ExecCompatApi.md#execResize) | **POST** /exec/{id}/resize | Resize an exec instance
[**execStart**](ExecCompatApi.md#execStart) | **POST** /exec/{id}/start | Start an exec instance


# **containerExec**
> void containerExec()

Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExecCompatApi(configuration);

let body:.ExecCompatApiContainerExecRequest = {
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

apiInstance.containerExec(body).then((data:any) => {
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

# **execInspect**
> InspectExecSession execInspect()

Return low-level information about an exec instance.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExecCompatApi(configuration);

let body:.ExecCompatApiExecInspectRequest = {
  // string | Exec instance ID
  id: "id_example",
};

apiInstance.execInspect(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Exec instance ID | defaults to undefined


### Return type

**InspectExecSession**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Exec Session Inspect |  -  |
**404** | No such exec instance |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **execResize**
> void execResize()

Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExecCompatApi(configuration);

let body:.ExecCompatApiExecResizeRequest = {
  // string | Exec instance ID
  id: "id_example",
  // number | Height of the TTY session in characters (optional)
  h: 1,
  // number | Width of the TTY session in characters (optional)
  w: 1,
  // boolean | Ignore containers not running errors (optional)
  running: true,
};

apiInstance.execResize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Exec instance ID | defaults to undefined
 **h** | [**number**] | Height of the TTY session in characters | (optional) defaults to undefined
 **w** | [**number**] | Width of the TTY session in characters | (optional) defaults to undefined
 **running** | [**boolean**] | Ignore containers not running errors | (optional) defaults to undefined


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

# **execStart**
> void execStart()

Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExecCompatApi(configuration);

let body:.ExecCompatApiExecStartRequest = {
  // string | Exec instance ID
  id: "id_example",
  // ExecStartRequest | Attributes for start (optional)
  control: {
    detach: true,
    tty: true,
  },
};

apiInstance.execStart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **control** | **ExecStartRequest**| Attributes for start |
 **id** | [**string**] | Exec instance ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-tar
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | no error |  -  |
**404** | No such exec instance |  -  |
**409** | container is not running |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


