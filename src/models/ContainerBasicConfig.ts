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

import type { LinuxPersonality } from './LinuxPersonality';
import type { LogConfig } from './LogConfig';
import type { Namespace } from './Namespace';

export class ContainerBasicConfig {
    /**
    * Annotations are key-value options passed into the container runtime that can be used to trigger special behavior. Optional.
    */
    'annotations'?: { [key: string]: string; };
    /**
    * Command is the container's command. If not given and Image is specified, this will be populated by the image's configuration. Optional.
    */
    'command'?: Array<string>;
    /**
    * ConmonPidFile is a path at which a PID file for Conmon will be placed. If not given, a default location will be used. Optional.
    */
    'conmonPidFile'?: string;
    /**
    * ContainerCreateCommand is the command that was used to create this container. This will be shown in the output of Inspect() on the container, and may also be used by some tools that wish to recreate the container (e.g. `podman generate systemd --new`). Optional.
    */
    'containerCreateCommand'?: Array<string>;
    /**
    * DependencyContainers is an array of containers this container depends on. Dependency containers must be started before this container. Dependencies can be specified by name or full/partial ID. Optional.
    */
    'dependencyContainers'?: Array<string>;
    /**
    * Entrypoint is the container's entrypoint. If not given and Image is specified, this will be populated by the image's configuration. Optional.
    */
    'entrypoint'?: Array<string>;
    /**
    * Env is a set of environment variables that will be set in the container. Optional.
    */
    'env'?: { [key: string]: string; };
    /**
    * EnvHost indicates that the host environment should be added to container Optional.
    */
    'envHost'?: boolean;
    /**
    * Hostname is the container's hostname. If not set, the hostname will not be modified (if UtsNS is not private) or will be set to the container ID (if UtsNS is private). Conflicts with UtsNS if UtsNS is not set to private. Optional.
    */
    'hostname'?: string;
    /**
    * HostUses is a list of host usernames or UIDs to add to the container etc/passwd file
    */
    'hostusers'?: Array<string>;
    /**
    * EnvHTTPProxy indicates that the http host proxy environment variables should be added to container Optional.
    */
    'httpproxy'?: boolean;
    /**
    * InitContainerType describes if this container is an init container and if so, what type: always or once
    */
    'initContainerType'?: string;
    /**
    * Labels are key-value pairs that are used to add metadata to containers. Optional.
    */
    'labels'?: { [key: string]: string; };
    'logConfiguration'?: LogConfig;
    /**
    * Passwd is a container run option that determines if we are validating users/groups before running the container
    */
    'managePassword'?: boolean;
    /**
    * Name is the name the container will be given. If no name is provided, one will be randomly generated. Optional.
    */
    'name'?: string;
    /**
    * Namespace is the libpod namespace the container will be placed in. Optional.
    */
    'namespace'?: string;
    /**
    * OCIRuntime is the name of the OCI runtime that will be used to create the container. If not specified, the default will be used. Optional.
    */
    'ociRuntime'?: string;
    /**
    * PasswdEntry specifies arbitrary data to append to a file.
    */
    'passwdEntry'?: string;
    'personality'?: LinuxPersonality;
    'pidns'?: Namespace;
    /**
    * Pod is the ID of the pod the container will join. Optional.
    */
    'pod'?: string;
    /**
    * RawImageName is the user-specified and unprocessed input referring to a local or a remote image.
    */
    'rawImageName'?: string;
    /**
    * Remove indicates if the container should be removed once it has been started and exits
    */
    'remove'?: boolean;
    /**
    * RestartPolicy is the container's restart policy - an action which will be taken when the container exits. If not given, the default policy, which does nothing, will be used. Optional.
    */
    'restartPolicy'?: string;
    /**
    * RestartRetries is the number of attempts that will be made to restart the container. Only available when RestartPolicy is set to \"on-failure\". Optional.
    */
    'restartTries'?: number;
    /**
    * Determine how to handle the NOTIFY_SOCKET - do we participate or pass it through \"container\" - let the OCI runtime deal with it, advertise conmon's MAINPID \"conmon-only\" - advertise conmon's MAINPID, send READY when started, don't pass to OCI \"ignore\" - unset NOTIFY_SOCKET
    */
    'sdnotifyMode'?: string;
    /**
    * EnvSecrets are secrets that will be set as environment variables Optional.
    */
    'secretEnv'?: { [key: string]: string; };
    /**
    * Stdin is whether the container will keep its STDIN open.
    */
    'stdin'?: boolean;
    /**
    * It implements the os.Signal interface.
    */
    'stopSignal'?: number;
    /**
    * StopTimeout is a timeout between the container's stop signal being sent and SIGKILL being sent. If not provided, the default will be used. If 0 is used, stop signal will not be sent, and SIGKILL will be sent instead. Optional.
    */
    'stopTimeout'?: number;
    /**
    * Sysctl sets kernel parameters for the container
    */
    'sysctl'?: { [key: string]: string; };
    /**
    * Systemd is whether the container will be started in systemd mode. Valid options are \"true\", \"false\", and \"always\". \"true\" enables this mode only if the binary run in the container is sbin/init or systemd. \"always\" unconditionally enables systemd mode. \"false\" unconditionally disables systemd mode. If enabled, mounts and stop signal will be modified. If set to \"always\" or set to \"true\" and conditionally triggered, conflicts with StopSignal. If not specified, \"false\" will be assumed. Optional.
    */
    'systemd'?: string;
    /**
    * Terminal is whether the container will create a PTY. Optional.
    */
    'terminal'?: boolean;
    /**
    * Timeout is a maximum time in seconds the container will run before main process is sent SIGKILL. If 0 is used, signal will not be sent. Container can run indefinitely Optional.
    */
    'timeout'?: number;
    /**
    * Timezone is the timezone inside the container. Local means it has the same timezone as the host machine Optional.
    */
    'timezone'?: string;
    /**
    * UnsetEnv unsets the specified default environment variables from the image or from buildin or containers.conf Optional.
    */
    'unsetenv'?: Array<string>;
    /**
    * UnsetEnvAll unsetall default environment variables from the image or from buildin or containers.conf UnsetEnvAll unsets all default environment variables from the image or from buildin Optional.
    */
    'unsetenvall'?: boolean;
    'utsns'?: Namespace;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'annotations',
            'baseName': 'annotations',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'command',
            'baseName': 'command',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'conmonPidFile',
            'baseName': 'conmon_pid_file',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'containerCreateCommand',
            'baseName': 'containerCreateCommand',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'dependencyContainers',
            'baseName': 'dependencyContainers',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'entrypoint',
            'baseName': 'entrypoint',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'env',
            'baseName': 'env',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'envHost',
            'baseName': 'env_host',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'hostname',
            'baseName': 'hostname',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'hostusers',
            'baseName': 'hostusers',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'httpproxy',
            'baseName': 'httpproxy',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'initContainerType',
            'baseName': 'init_container_type',
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
            'name': 'logConfiguration',
            'baseName': 'log_configuration',
            'type': 'LogConfig',
            'format': '',
        },
        {
            'name': 'managePassword',
            'baseName': 'manage_password',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'name',
            'baseName': 'name',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'namespace',
            'baseName': 'namespace',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'ociRuntime',
            'baseName': 'oci_runtime',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'passwdEntry',
            'baseName': 'passwd_entry',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'personality',
            'baseName': 'personality',
            'type': 'LinuxPersonality',
            'format': '',
        },
        {
            'name': 'pidns',
            'baseName': 'pidns',
            'type': 'Namespace',
            'format': '',
        },
        {
            'name': 'pod',
            'baseName': 'pod',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'rawImageName',
            'baseName': 'raw_image_name',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'remove',
            'baseName': 'remove',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'restartPolicy',
            'baseName': 'restart_policy',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'restartTries',
            'baseName': 'restart_tries',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'sdnotifyMode',
            'baseName': 'sdnotifyMode',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'secretEnv',
            'baseName': 'secret_env',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'stdin',
            'baseName': 'stdin',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'stopSignal',
            'baseName': 'stop_signal',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'stopTimeout',
            'baseName': 'stop_timeout',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'sysctl',
            'baseName': 'sysctl',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'systemd',
            'baseName': 'systemd',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'terminal',
            'baseName': 'terminal',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'timeout',
            'baseName': 'timeout',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'timezone',
            'baseName': 'timezone',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'unsetenv',
            'baseName': 'unsetenv',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'unsetenvall',
            'baseName': 'unsetenvall',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'utsns',
            'baseName': 'utsns',
            'type': 'Namespace',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return ContainerBasicConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
