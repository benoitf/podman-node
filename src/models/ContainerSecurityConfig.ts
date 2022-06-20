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

import type { IDMappingOptions } from './IDMappingOptions';
import type { Namespace } from './Namespace';

/**
* ContainerSecurityConfig is a container's security features, including SELinux, Apparmor, and Seccomp.
*/
export class ContainerSecurityConfig {
    /**
    * ApparmorProfile is the name of the Apparmor profile the container will use. Optional.
    */
    'apparmorProfile'?: string;
    /**
    * CapAdd are capabilities which will be added to the container. Conflicts with Privileged. Optional.
    */
    'capAdd'?: Array<string>;
    /**
    * CapDrop are capabilities which will be removed from the container. Conflicts with Privileged. Optional.
    */
    'capDrop'?: Array<string>;
    /**
    * Groups are a list of supplemental groups the container's user will be granted access to. Optional.
    */
    'groups'?: Array<string>;
    'idmappings'?: IDMappingOptions;
    /**
    * Mask is the path we want to mask in the container. This masks the paths given in addition to the default list. Optional
    */
    'mask'?: Array<string>;
    /**
    * NoNewPrivileges is whether the container will set the no new privileges flag on create, which disables gaining additional privileges (e.g. via setuid) in the container.
    */
    'noNewPrivileges'?: boolean;
    /**
    * Privileged is whether the container is privileged. Privileged does the following: Adds all devices on the system to the container. Adds all capabilities to the container. Disables Seccomp, SELinux, and Apparmor confinement. (Though SELinux can be manually re-enabled). TODO: this conflicts with things. TODO: this does more.
    */
    'privileged'?: boolean;
    /**
    * ProcOpts are the options used for the proc mount.
    */
    'procfsOpts'?: Array<string>;
    /**
    * ReadOnlyFilesystem indicates that everything will be mounted as read-only
    */
    'readOnlyFilesystem'?: boolean;
    /**
    * SeccompPolicy determines which seccomp profile gets applied the container. valid values: empty,default,image
    */
    'seccompPolicy'?: string;
    /**
    * SeccompProfilePath is the path to a JSON file containing the container's Seccomp profile. If not specified, no Seccomp profile will be used. Optional.
    */
    'seccompProfilePath'?: string;
    /**
    * SelinuxProcessLabel is the process label the container will use. If SELinux is enabled and this is not specified, a label will be automatically generated if not specified. Optional.
    */
    'selinuxOpts'?: Array<string>;
    /**
    * Umask is the umask the init process of the container will be run with.
    */
    'umask'?: string;
    /**
    * Unmask is the path we want to unmask in the container. To override all the default paths that are masked, set unmask=ALL.
    */
    'unmask'?: Array<string>;
    /**
    * User is the user the container will be run as. Can be given as a UID or a username; if a username, it will be resolved within the container, using the container's /etc/passwd. If unset, the container will be run as root. Optional.
    */
    'user'?: string;
    'userns'?: Namespace;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'apparmorProfile',
            'baseName': 'apparmor_profile',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'capAdd',
            'baseName': 'cap_add',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'capDrop',
            'baseName': 'cap_drop',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'groups',
            'baseName': 'groups',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'idmappings',
            'baseName': 'idmappings',
            'type': 'IDMappingOptions',
            'format': '',
        },
        {
            'name': 'mask',
            'baseName': 'mask',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'noNewPrivileges',
            'baseName': 'no_new_privileges',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'privileged',
            'baseName': 'privileged',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'procfsOpts',
            'baseName': 'procfs_opts',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'readOnlyFilesystem',
            'baseName': 'read_only_filesystem',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'seccompPolicy',
            'baseName': 'seccomp_policy',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'seccompProfilePath',
            'baseName': 'seccomp_profile_path',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'selinuxOpts',
            'baseName': 'selinux_opts',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'umask',
            'baseName': 'umask',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'unmask',
            'baseName': 'unmask',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'user',
            'baseName': 'user',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'userns',
            'baseName': 'userns',
            'type': 'Namespace',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return ContainerSecurityConfig.attributeTypeMap;
    }

    public constructor() {
    }
}
