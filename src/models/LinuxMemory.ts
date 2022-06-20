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
* LinuxMemory for Linux cgroup 'memory' resource management
*/
export class LinuxMemory {
    /**
    * DisableOOMKiller disables the OOM killer for out of memory conditions
    */
    'disableOOMKiller'?: boolean;
    /**
    * Kernel memory limit (in bytes).
    */
    'kernel'?: number;
    /**
    * Kernel memory limit for tcp (in bytes)
    */
    'kernelTCP'?: number;
    /**
    * Memory limit (in bytes).
    */
    'limit'?: number;
    /**
    * Memory reservation or soft_limit (in bytes).
    */
    'reservation'?: number;
    /**
    * Total memory limit (memory + swap).
    */
    'swap'?: number;
    /**
    * How aggressive the kernel will swap memory pages.
    */
    'swappiness'?: number;
    /**
    * Enables hierarchical memory accounting
    */
    'useHierarchy'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'disableOOMKiller',
            'baseName': 'disableOOMKiller',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'kernel',
            'baseName': 'kernel',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'kernelTCP',
            'baseName': 'kernelTCP',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'limit',
            'baseName': 'limit',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'reservation',
            'baseName': 'reservation',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'swap',
            'baseName': 'swap',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'swappiness',
            'baseName': 'swappiness',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'useHierarchy',
            'baseName': 'useHierarchy',
            'type': 'boolean',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return LinuxMemory.attributeTypeMap;
    }

    public constructor() {
    }
}
