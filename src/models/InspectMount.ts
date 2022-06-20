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
* InspectMount provides a record of a single mount in a container. It contains fields for both named and normal volumes. Only user-specified volumes will be included, and tmpfs volumes are not included even if the user specified them.
*/
export class InspectMount {
    /**
    * The destination directory for the volume. Specified as a path within the container, as it would be passed into the OCI runtime.
    */
    'destination'?: string;
    /**
    * The driver used for the named volume. Empty for bind mounts.
    */
    'driver'?: string;
    /**
    * Contains SELinux :z/:Z mount options. Unclear what, if anything, else goes in here.
    */
    'mode'?: string;
    /**
    * The name of the volume. Empty for bind mounts.
    */
    'name'?: string;
    /**
    * All remaining mount options. Additional data, not present in the original output.
    */
    'options'?: Array<string>;
    /**
    * Mount propagation for the mount. Can be empty if not specified, but is always printed - no omitempty.
    */
    'propagation'?: string;
    /**
    * Whether the volume is read-write
    */
    'RW'?: boolean;
    /**
    * The source directory for the volume.
    */
    'source'?: string;
    /**
    * Whether the mount is a volume or bind mount. Allowed values are \"volume\" and \"bind\".
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'destination',
            'baseName': 'Destination',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'driver',
            'baseName': 'Driver',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'mode',
            'baseName': 'Mode',
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
            'name': 'options',
            'baseName': 'Options',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'propagation',
            'baseName': 'Propagation',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'RW',
            'baseName': 'RW',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'source',
            'baseName': 'Source',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'type',
            'baseName': 'Type',
            'type': 'string',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return InspectMount.attributeTypeMap;
    }

    public constructor() {
    }
}

