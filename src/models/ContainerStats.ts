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


/**
* ContainerStats contains the statistics information for a running container
*/
export class ContainerStats {
    'avgCPU'?: number;
    'blockInput'?: number;
    'blockOutput'?: number;
    'CPU'?: number;
    'cPUNano'?: number;
    'cPUSystemNano'?: number;
    'containerID'?: string;
    'duration'?: number;
    'memLimit'?: number;
    'memPerc'?: number;
    'memUsage'?: number;
    'name'?: string;
    'netInput'?: number;
    'netOutput'?: number;
    'pIDs'?: number;
    'perCPU'?: Array<number>;
    'systemNano'?: number;
    /**
    * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
    */
    'upTime'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'avgCPU',
            'baseName': 'AvgCPU',
            'type': 'number',
            'format': 'double',
        },
        {
            'name': 'blockInput',
            'baseName': 'BlockInput',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'blockOutput',
            'baseName': 'BlockOutput',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'CPU',
            'baseName': 'CPU',
            'type': 'number',
            'format': 'double',
        },
        {
            'name': 'cPUNano',
            'baseName': 'CPUNano',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'cPUSystemNano',
            'baseName': 'CPUSystemNano',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'containerID',
            'baseName': 'ContainerID',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'duration',
            'baseName': 'Duration',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'memLimit',
            'baseName': 'MemLimit',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'memPerc',
            'baseName': 'MemPerc',
            'type': 'number',
            'format': 'double',
        },
        {
            'name': 'memUsage',
            'baseName': 'MemUsage',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'name',
            'baseName': 'Name',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'netInput',
            'baseName': 'NetInput',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'netOutput',
            'baseName': 'NetOutput',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'pIDs',
            'baseName': 'PIDs',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'perCPU',
            'baseName': 'PerCPU',
            'type': 'Array<number>',
            'format': 'uint64',
        },
        {
            'name': 'systemNano',
            'baseName': 'SystemNano',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'upTime',
            'baseName': 'UpTime',
            'type': 'number',
            'format': 'int64',
        }    ];

    static getAttributeTypeMap() {
        return ContainerStats.attributeTypeMap;
    }

    public constructor() {
    }
}

