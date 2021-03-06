/**
 * supports a RESTful API for the Libpod library
 * This documentation describes the Podman v2.x+ RESTful API. It consists of a Docker-compatible API and a Libpod API providing support for Podman’s unique features such as pods.  To start the service and keep it running for 5,000 seconds (-t 0 runs forever):  podman system service -t 5000 &  You can then use cURL on the socket using requests documented below.  NOTE: if you install the package podman-docker, it will create a symbolic link for /run/docker.sock to /run/podman/podman.sock  NOTE: Some fields in the API response JSON are encoded as omitempty, which means that if said field has a zero value, they will not be encoded in the API response. This is a feature to help reduce the size of the JSON responses returned via the API.  NOTE: Due to the limitations of [go-swagger](https://github.com/go-swagger/go-swagger), some field values that have a complex type show up as null in the docs as well as in the API responses. This is because the zero value for the field type is null. The field description in the docs will state what type the field is expected to be for such cases.  See podman-service(1) for more information.  Quick Examples:  'podman info'  curl --unix-socket /run/podman/podman.sock http://d/v4.0.0/libpod/info  'podman pull quay.io/containers/podman'  curl -XPOST --unix-socket /run/podman/podman.sock -v 'http://d/v4.0.0/images/create?fromImage=quay.io%2Fcontainers%2Fpodman'  'podman list images'  curl --unix-socket /run/podman/podman.sock -v 'http://d/v4.0.0/libpod/images/json' | jq
 *
 * OpenAPI spec version: 4.0.0
 * Contact: podman@lists.podman.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { CPUUsage } from './CPUUsage';
import type { ConmonInfo } from './ConmonInfo';
import type { DistributionInfo } from './DistributionInfo';
import type { IDMappings } from './IDMappings';
import type { OCIRuntimeInfo } from './OCIRuntimeInfo';
import type { RemoteSocket } from './RemoteSocket';
import type { SecurityInfo } from './SecurityInfo';
import type { SlirpInfo } from './SlirpInfo';

/**
* HostInfo describes the libpod host
*/
export class HostInfo {
    'arch'?: string;
    'buildahVersion'?: string;
    'cgroupControllers'?: Array<string>;
    'cgroupManager'?: string;
    'cgroupVersion'?: string;
    'conmon'?: ConmonInfo;
    'cpuUtilization'?: CPUUsage;
    'cpus'?: number;
    'distribution'?: DistributionInfo;
    'eventLogger'?: string;
    'hostname'?: string;
    'idMappings'?: IDMappings;
    'kernel'?: string;
    'linkmode'?: string;
    'logDriver'?: string;
    'memFree'?: number;
    'memTotal'?: number;
    'networkBackend'?: string;
    'ociRuntime'?: OCIRuntimeInfo;
    'os'?: string;
    'remoteSocket'?: RemoteSocket;
    'runtimeInfo'?: { [key: string]: any; };
    'security'?: SecurityInfo;
    /**
    * ServiceIsRemote is true when the podman/libpod service is remote to the client
    */
    'serviceIsRemote'?: boolean;
    'slirp4netns'?: SlirpInfo;
    'swapFree'?: number;
    'swapTotal'?: number;
    'uptime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'arch',
            'baseName': 'arch',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'buildahVersion',
            'baseName': 'buildahVersion',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'cgroupControllers',
            'baseName': 'cgroupControllers',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'cgroupManager',
            'baseName': 'cgroupManager',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'cgroupVersion',
            'baseName': 'cgroupVersion',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'conmon',
            'baseName': 'conmon',
            'type': 'ConmonInfo',
            'format': '',
        },
        {
            'name': 'cpuUtilization',
            'baseName': 'cpuUtilization',
            'type': 'CPUUsage',
            'format': '',
        },
        {
            'name': 'cpus',
            'baseName': 'cpus',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'distribution',
            'baseName': 'distribution',
            'type': 'DistributionInfo',
            'format': '',
        },
        {
            'name': 'eventLogger',
            'baseName': 'eventLogger',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'hostname',
            'baseName': 'hostname',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'idMappings',
            'baseName': 'idMappings',
            'type': 'IDMappings',
            'format': '',
        },
        {
            'name': 'kernel',
            'baseName': 'kernel',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'linkmode',
            'baseName': 'linkmode',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'logDriver',
            'baseName': 'logDriver',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'memFree',
            'baseName': 'memFree',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'memTotal',
            'baseName': 'memTotal',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'networkBackend',
            'baseName': 'networkBackend',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'ociRuntime',
            'baseName': 'ociRuntime',
            'type': 'OCIRuntimeInfo',
            'format': '',
        },
        {
            'name': 'os',
            'baseName': 'os',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'remoteSocket',
            'baseName': 'remoteSocket',
            'type': 'RemoteSocket',
            'format': '',
        },
        {
            'name': 'runtimeInfo',
            'baseName': 'runtimeInfo',
            'type': '{ [key: string]: any; }',
            'format': '',
        },
        {
            'name': 'security',
            'baseName': 'security',
            'type': 'SecurityInfo',
            'format': '',
        },
        {
            'name': 'serviceIsRemote',
            'baseName': 'serviceIsRemote',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'slirp4netns',
            'baseName': 'slirp4netns',
            'type': 'SlirpInfo',
            'format': '',
        },
        {
            'name': 'swapFree',
            'baseName': 'swapFree',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'swapTotal',
            'baseName': 'swapTotal',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'uptime',
            'baseName': 'uptime',
            'type': 'string',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return HostInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

