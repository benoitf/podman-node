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
* AuthConfig contains authorization information for connecting to a Registry
*/
export class AuthConfig {
    'auth'?: string;
    /**
    * Email is an optional value associated with the username. This field is deprecated and will be removed in a later version of docker.
    */
    'email'?: string;
    /**
    * IdentityToken is used to authenticate the user and get an access token for the registry.
    */
    'identitytoken'?: string;
    'password'?: string;
    /**
    * RegistryToken is a bearer token to be sent to a registry
    */
    'registrytoken'?: string;
    'serveraddress'?: string;
    'username'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'auth',
            'baseName': 'auth',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'email',
            'baseName': 'email',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'identitytoken',
            'baseName': 'identitytoken',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'password',
            'baseName': 'password',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'registrytoken',
            'baseName': 'registrytoken',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'serveraddress',
            'baseName': 'serveraddress',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'username',
            'baseName': 'username',
            'type': 'string',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return AuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

