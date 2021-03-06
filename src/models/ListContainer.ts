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

import type { ContainerSize } from './ContainerSize';
import type { ListContainerNamespaces } from './ListContainerNamespaces';
import type { PortMapping } from './PortMapping';

/**
* ListContainer describes a container suitable for listing
*/
export class ListContainer {
    /**
    * AutoRemove
    */
    'autoRemove'?: boolean;
    /**
    * Container command
    */
    'command'?: Array<string>;
    /**
    * Container creation time
    */
    'created'?: Date;
    /**
    * Human-readable container creation time.
    */
    'createdAt'?: string;
    /**
    * If container has exited, the return code from the command
    */
    'exitCode'?: number;
    /**
    * If container has exited/stopped
    */
    'exited'?: boolean;
    /**
    * Time container exited
    */
    'exitedAt'?: number;
    /**
    * The unique identifier for the container
    */
    'id'?: string;
    /**
    * Container image
    */
    'image'?: string;
    /**
    * Container image ID
    */
    'imageID'?: string;
    /**
    * If this container is a Pod infra container
    */
    'isInfra'?: boolean;
    /**
    * Labels for container
    */
    'labels'?: { [key: string]: string; };
    /**
    * User volume mounts
    */
    'mounts'?: Array<string>;
    /**
    * The names assigned to the container
    */
    'names'?: Array<string>;
    'namespaces'?: ListContainerNamespaces;
    /**
    * The network names assigned to the container
    */
    'networks'?: Array<string>;
    /**
    * The process id of the container
    */
    'pid'?: number;
    /**
    * If the container is part of Pod, the Pod ID. Requires the pod boolean to be set
    */
    'pod'?: string;
    /**
    * If the container is part of Pod, the Pod name. Requires the pod boolean to be set
    */
    'podName'?: string;
    /**
    * Port mappings
    */
    'ports'?: Array<PortMapping>;
    'size'?: ContainerSize;
    /**
    * Time when container started
    */
    'startedAt'?: number;
    /**
    * State of container
    */
    'state'?: string;
    /**
    * Status is a human-readable approximation of a duration for json output
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'autoRemove',
            'baseName': 'AutoRemove',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'command',
            'baseName': 'Command',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'created',
            'baseName': 'Created',
            'type': 'Date',
            'format': 'date-time',
        },
        {
            'name': 'createdAt',
            'baseName': 'CreatedAt',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'exitCode',
            'baseName': 'ExitCode',
            'type': 'number',
            'format': 'int32',
        },
        {
            'name': 'exited',
            'baseName': 'Exited',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'exitedAt',
            'baseName': 'ExitedAt',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'id',
            'baseName': 'Id',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'image',
            'baseName': 'Image',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'imageID',
            'baseName': 'ImageID',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'isInfra',
            'baseName': 'IsInfra',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'labels',
            'baseName': 'Labels',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'mounts',
            'baseName': 'Mounts',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'names',
            'baseName': 'Names',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'namespaces',
            'baseName': 'Namespaces',
            'type': 'ListContainerNamespaces',
            'format': '',
        },
        {
            'name': 'networks',
            'baseName': 'Networks',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'pid',
            'baseName': 'Pid',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'pod',
            'baseName': 'Pod',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'podName',
            'baseName': 'PodName',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'ports',
            'baseName': 'Ports',
            'type': 'Array<PortMapping>',
            'format': '',
        },
        {
            'name': 'size',
            'baseName': 'Size',
            'type': 'ContainerSize',
            'format': '',
        },
        {
            'name': 'startedAt',
            'baseName': 'StartedAt',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'state',
            'baseName': 'State',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'status',
            'baseName': 'Status',
            'type': 'string',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return ListContainer.attributeTypeMap;
    }

    public constructor() {
    }
}

