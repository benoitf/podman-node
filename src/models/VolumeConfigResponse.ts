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


export class VolumeConfigResponse {
    /**
    * Anonymous indicates that the volume was created as an anonymous volume for a specific container, and will be be removed when any container using it is removed.
    */
    'anonymous'?: boolean;
    /**
    * CreatedAt is the date and time the volume was created at. This is not stored for older Libpod volumes; if so, it will be omitted.
    */
    'createdAt'?: Date;
    /**
    * Driver is the driver used to create the volume. If set to \"local\" or \"\", the Local driver (Podman built-in code) is used to service the volume; otherwise, a volume plugin with the given name is used to mount and manage the volume.
    */
    'driver'?: string;
    /**
    * GID is the GID that the volume was created with.
    */
    'GID'?: number;
    /**
    * Labels includes the volume's configured labels, key:value pairs that can be passed during volume creation to provide information for third party tools.
    */
    'labels'?: { [key: string]: string; };
    /**
    * MountCount is the number of times this volume has been mounted.
    */
    'mountCount'?: number;
    /**
    * Mountpoint is the path on the host where the volume is mounted.
    */
    'mountpoint'?: string;
    /**
    * Name is the name of the volume.
    */
    'name'?: string;
    /**
    * NeedsChown indicates that the next time the volume is mounted into a container, the container will chown the volume to the container process UID/GID.
    */
    'needsChown'?: boolean;
    /**
    * NeedsCopyUp indicates that the next time the volume is mounted into
    */
    'needsCopyUp'?: boolean;
    /**
    * Options is a set of options that were used when creating the volume. For the Local driver, these are mount options that will be used to determine how a local filesystem is mounted; they are handled as parameters to Mount in a manner described in the volume create manpage. For non-local drivers, these are passed as-is to the volume plugin.
    */
    'options'?: { [key: string]: string; };
    /**
    * Scope is unused and provided solely for Docker compatibility. It is unconditionally set to \"local\".
    */
    'scope'?: string;
    /**
    * Status is used to return information on the volume's current state, if the volume was created using a volume plugin (uses a Driver that is not the local driver). Status is provided to us by an external program, so no guarantees are made about its format or contents. Further, it is an optional field, so it may not be set even in cases where a volume plugin is in use.
    */
    'status'?: { [key: string]: any; };
    /**
    * UID is the UID that the volume was created with.
    */
    'UID'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'anonymous',
            'baseName': 'Anonymous',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'createdAt',
            'baseName': 'CreatedAt',
            'type': 'Date',
            'format': 'date-time',
        },
        {
            'name': 'driver',
            'baseName': 'Driver',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'GID',
            'baseName': 'GID',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'labels',
            'baseName': 'Labels',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'mountCount',
            'baseName': 'MountCount',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'mountpoint',
            'baseName': 'Mountpoint',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'name',
            'baseName': 'Name',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'needsChown',
            'baseName': 'NeedsChown',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'needsCopyUp',
            'baseName': 'NeedsCopyUp',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'options',
            'baseName': 'Options',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'scope',
            'baseName': 'Scope',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'status',
            'baseName': 'Status',
            'type': '{ [key: string]: any; }',
            'format': '',
        },
        {
            'name': 'UID',
            'baseName': 'UID',
            'type': 'number',
            'format': 'int64',
        }    ];

    static getAttributeTypeMap() {
        return VolumeConfigResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

