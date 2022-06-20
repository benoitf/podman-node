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
* SystemDfImageReport describes an image for use with df
*/
export class SystemDfImageReport {
    'containers'?: number;
    'created'?: Date;
    'imageID'?: string;
    'repository'?: string;
    'sharedSize'?: number;
    'size'?: number;
    'tag'?: string;
    'uniqueSize'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'containers',
            'baseName': 'Containers',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'created',
            'baseName': 'Created',
            'type': 'Date',
            'format': 'date-time',
        },
        {
            'name': 'imageID',
            'baseName': 'ImageID',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'repository',
            'baseName': 'Repository',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'sharedSize',
            'baseName': 'SharedSize',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'size',
            'baseName': 'Size',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'tag',
            'baseName': 'Tag',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'uniqueSize',
            'baseName': 'UniqueSize',
            'type': 'number',
            'format': 'int64',
        }    ];

    static getAttributeTypeMap() {
        return SystemDfImageReport.attributeTypeMap;
    }

    public constructor() {
    }
}

