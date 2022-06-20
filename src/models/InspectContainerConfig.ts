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

import type { InspectSecret } from './InspectSecret';
import type { Schema2HealthConfig } from './Schema2HealthConfig';

/**
* InspectContainerConfig holds further data about how a container was initially configured.
*/
export class InspectContainerConfig {
    /**
    * Container annotations
    */
    'annotations'?: { [key: string]: string; };
    /**
    * Unused, at present
    */
    'attachStderr'?: boolean;
    /**
    * Unused, at present
    */
    'attachStdin'?: boolean;
    /**
    * Unused, at present
    */
    'attachStdout'?: boolean;
    /**
    * ChrootDirs is an additional set of directories that need to be treated as root directories. Standard bind mounts will be mounted into paths relative to these directories.
    */
    'chrootDirs'?: Array<string>;
    /**
    * Container command
    */
    'cmd'?: Array<string>;
    /**
    * CreateCommand is the full command plus arguments of the process the container has been created with.
    */
    'createCommand'?: Array<string>;
    /**
    * Container domain name - unused at present
    */
    'domainname'?: string;
    /**
    * Container entrypoint
    */
    'entrypoint'?: string;
    /**
    * Container environment variables
    */
    'env'?: Array<string>;
    'healthcheck'?: Schema2HealthConfig;
    /**
    * Container hostname
    */
    'hostname'?: string;
    /**
    * Container image
    */
    'image'?: string;
    /**
    * Container labels
    */
    'labels'?: { [key: string]: string; };
    /**
    * On-build arguments - presently unused. More of Buildah's domain.
    */
    'onBuild'?: string;
    /**
    * Whether the container leaves STDIN open
    */
    'openStdin'?: boolean;
    /**
    * Passwd determines whether or not podman can add entries to /etc/passwd and /etc/group
    */
    'passwd'?: boolean;
    /**
    * Secrets are the secrets mounted in the container
    */
    'secrets'?: Array<InspectSecret>;
    /**
    * Whether STDIN is only left open once. Presently not supported by Podman, unused.
    */
    'stdinOnce'?: boolean;
    /**
    * Container stop signal
    */
    'stopSignal'?: number;
    /**
    * StopTimeout is time before container is stopped when calling stop
    */
    'stopTimeout'?: number;
    /**
    * SystemdMode is whether the container is running in systemd mode. In systemd mode, the container configuration is customized to optimize running systemd in the container.
    */
    'systemdMode'?: boolean;
    /**
    * Timeout is time before container is killed by conmon
    */
    'timeout'?: number;
    /**
    * Timezone is the timezone inside the container. Local means it has the same timezone as the host machine
    */
    'timezone'?: string;
    /**
    * Whether the container creates a TTY
    */
    'tty'?: boolean;
    /**
    * Umask is the umask inside the container.
    */
    'umask'?: string;
    /**
    * User the container was launched with
    */
    'user'?: string;
    /**
    * Unused, at present. I've never seen this field populated.
    */
    'volumes'?: { [key: string]: any; };
    /**
    * Container working directory
    */
    'workingDir'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'annotations',
            'baseName': 'Annotations',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'attachStderr',
            'baseName': 'AttachStderr',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'attachStdin',
            'baseName': 'AttachStdin',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'attachStdout',
            'baseName': 'AttachStdout',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'chrootDirs',
            'baseName': 'ChrootDirs',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'cmd',
            'baseName': 'Cmd',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'createCommand',
            'baseName': 'CreateCommand',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'domainname',
            'baseName': 'Domainname',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'entrypoint',
            'baseName': 'Entrypoint',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'env',
            'baseName': 'Env',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'healthcheck',
            'baseName': 'Healthcheck',
            'type': 'Schema2HealthConfig',
            'format': '',
        },
        {
            'name': 'hostname',
            'baseName': 'Hostname',
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
            'name': 'labels',
            'baseName': 'Labels',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'onBuild',
            'baseName': 'OnBuild',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'openStdin',
            'baseName': 'OpenStdin',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'passwd',
            'baseName': 'Passwd',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'secrets',
            'baseName': 'Secrets',
            'type': 'Array<InspectSecret>',
            'format': '',
        },
        {
            'name': 'stdinOnce',
            'baseName': 'StdinOnce',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'stopSignal',
            'baseName': 'StopSignal',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'stopTimeout',
            'baseName': 'StopTimeout',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'systemdMode',
            'baseName': 'SystemdMode',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'timeout',
            'baseName': 'Timeout',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'timezone',
            'baseName': 'Timezone',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'tty',
            'baseName': 'Tty',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'umask',
            'baseName': 'Umask',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'user',
            'baseName': 'User',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'volumes',
            'baseName': 'Volumes',
            'type': '{ [key: string]: any; }',
            'format': '',
        },
        {
            'name': 'workingDir',
            'baseName': 'WorkingDir',
            'type': 'string',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return InspectContainerConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

