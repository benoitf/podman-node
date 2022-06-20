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

import type { NetOptions } from './NetOptions';

/**
* The JSON tags below are made to match the respective field in ContainerCreateOptions for the purpose of mapping.
*/
export class PodCreateOptions {
    'cgroupParent'?: string;
    'containerCommand'?: string;
    'containerConmonPidfile'?: string;
    'containerName'?: string;
    'cpus'?: number;
    'cpusetCpus'?: string;
    'createCommand'?: Array<string>;
    'deviceReadBps'?: Array<string>;
    'devices'?: Array<string>;
    'hostname'?: string;
    'infra'?: boolean;
    'infraImage'?: string;
    'labels'?: { [key: string]: string; };
    'name'?: string;
    'net'?: NetOptions;
    'pid'?: string;
    'securityOpt'?: Array<string>;
    'share'?: Array<string>;
    'shareParent'?: boolean;
    'sysctl'?: Array<string>;
    'volume'?: Array<string>;
    'volumesFrom'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'cgroupParent',
            'baseName': 'cgroup_parent',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'containerCommand',
            'baseName': 'container_command',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'containerConmonPidfile',
            'baseName': 'container_conmon_pidfile',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'containerName',
            'baseName': 'container_name',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'cpus',
            'baseName': 'cpus',
            'type': 'number',
            'format': 'double',
        },
        {
            'name': 'cpusetCpus',
            'baseName': 'cpuset_cpus',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'createCommand',
            'baseName': 'create_command',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'deviceReadBps',
            'baseName': 'device_read_bps',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'devices',
            'baseName': 'devices',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'hostname',
            'baseName': 'hostname',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'infra',
            'baseName': 'infra',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'infraImage',
            'baseName': 'infra_image',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'labels',
            'baseName': 'labels',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'name',
            'baseName': 'name',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'net',
            'baseName': 'net',
            'type': 'NetOptions',
            'format': '',
        },
        {
            'name': 'pid',
            'baseName': 'pid',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'securityOpt',
            'baseName': 'security_opt',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'share',
            'baseName': 'share',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'shareParent',
            'baseName': 'share_parent',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'sysctl',
            'baseName': 'sysctl',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'volume',
            'baseName': 'volume',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'volumesFrom',
            'baseName': 'volumes_from',
            'type': 'Array<string>',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return PodCreateOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

