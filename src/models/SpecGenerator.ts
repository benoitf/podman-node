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
import type { ImageVolume } from './ImageVolume';
import type { LinuxDevice } from './LinuxDevice';
import type { LinuxDeviceCgroup } from './LinuxDeviceCgroup';
import type { LinuxPersonality } from './LinuxPersonality';
import type { LinuxResources } from './LinuxResources';
import type { LinuxThrottleDevice } from './LinuxThrottleDevice';
import type { LinuxWeightDevice } from './LinuxWeightDevice';
import type { LogConfig } from './LogConfig';
import type { Mount } from './Mount';
import type { NamedVolume } from './NamedVolume';
import type { Namespace } from './Namespace';
import type { OverlayVolume } from './OverlayVolume';
import type { POSIXRlimit } from './POSIXRlimit';
import type { PerNetworkOptions } from './PerNetworkOptions';
import type { PortMapping } from './PortMapping';
import type { Schema2HealthConfig } from './Schema2HealthConfig';
import type { Secret } from './Secret';

/**
* SpecGenerator creates an OCI spec and Libpod configuration options to create a container based on the given configuration.
*/
export class SpecGenerator {
    /**
    * Map of networks names or ids that the container should join. You can request additional settings for each network, you can set network aliases, static ips, static mac address  and the network interface name for this container on the specific network. If the map is empty and the bridge network mode is set the container will be joined to the default network.
    */
    'networks'?: { [key: string]: PerNetworkOptions; };
    /**
    * Annotations are key-value options passed into the container runtime that can be used to trigger special behavior. Optional.
    */
    'annotations'?: { [key: string]: string; };
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
    * CgroupParent is the container's Cgroup parent. If not set, the default for the current cgroup driver will be used. Optional.
    */
    'cgroupParent'?: string;
    'cgroupns'?: Namespace;
    /**
    * CgroupsMode sets a policy for how cgroups will be created in the container, including the ability to disable creation entirely.
    */
    'cgroupsMode'?: string;
    /**
    * ChrootDirs is an additional set of directories that need to be treated as root directories. Standard bind mounts will be mounted into paths relative to these directories.
    */
    'chrootDirectories'?: Array<string>;
    /**
    * CNINetworks is a list of CNI networks to join the container to. If this list is empty, the default CNI network will be joined instead. If at least one entry is present, we will not join the default network (unless it is part of this list). Only available if NetNS is set to bridge. Optional. Deprecated: as of podman 4.0 use \"Networks\" instead.
    */
    'cniNetworks'?: Array<string>;
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
    * CPU period of the cpuset, determined by --cpus
    */
    'cpuPeriod'?: number;
    /**
    * CPU quota of the cpuset, determined by --cpus
    */
    'cpuQuota'?: number;
    /**
    * Create the working directory if it doesn't exist. If unset, it doesn't create it. Optional.
    */
    'createWorkingDir'?: boolean;
    /**
    * DependencyContainers is an array of containers this container depends on. Dependency containers must be started before this container. Dependencies can be specified by name or full/partial ID. Optional.
    */
    'dependencyContainers'?: Array<string>;
    /**
    * DeviceCgroupRule are device cgroup rules that allow containers to use additional types of devices.
    */
    'deviceCgroupRule'?: Array<LinuxDeviceCgroup>;
    /**
    * Devices are devices that will be added to the container. Optional.
    */
    'devices'?: Array<LinuxDevice>;
    /**
    * DevicesFrom is a way to ensure your container inherits device specific information from another container
    */
    'devicesFrom'?: Array<string>;
    /**
    * DNSOptions is a set of DNS options that will be used in the container's resolv.conf, replacing the host's DNS options which are used by default. Conflicts with UseImageResolvConf. Optional.
    */
    'dnsOption'?: Array<string>;
    /**
    * DNSSearch is a set of DNS search domains that will be used in the container's resolv.conf, replacing the host's DNS search domains which are used by default. Conflicts with UseImageResolvConf. Optional.
    */
    'dnsSearch'?: Array<string>;
    /**
    * DNSServers is a set of DNS servers that will be used in the container's resolv.conf, replacing the host's DNS Servers which are used by default. Conflicts with UseImageResolvConf. Optional.
    */
    'dnsServer'?: Array<Array<number>>;
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
    * Expose is a number of ports that will be forwarded to the container if PublishExposedPorts is set. Expose is a map of uint16 (port number) to a string representing protocol i.e map[uint16]string. Allowed protocols are \"tcp\", \"udp\", and \"sctp\", or some combination of the three separated by commas. If protocol is set to \"\" we will assume TCP. Only available if NetNS is set to Bridge or Slirp, and PublishExposedPorts is set. Optional.
    */
    'expose'?: any;
    /**
    * Groups are a list of supplemental groups the container's user will be granted access to. Optional.
    */
    'groups'?: Array<string>;
    'healthconfig'?: Schema2HealthConfig;
    /**
    * HostDeviceList is used to recreate the mounted device on inherited containers
    */
    'hostDeviceList'?: Array<LinuxDevice>;
    /**
    * HostAdd is a set of hosts which will be added to the container's etc/hosts file. Conflicts with UseImageHosts. Optional.
    */
    'hostadd'?: Array<string>;
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
    'idmappings'?: IDMappingOptions;
    /**
    * Image is the image the container will be based on. The image will be used as the container's root filesystem, and its environment vars, volumes, and other configuration will be applied to the container. Conflicts with Rootfs. At least one of Image or Rootfs must be specified.
    */
    'image'?: string;
    /**
    * ImageVolumeMode indicates how image volumes will be created. Supported modes are \"ignore\" (do not create), \"tmpfs\" (create as tmpfs), and \"anonymous\" (create as anonymous volumes). The default if unset is anonymous. Optional.
    */
    'imageVolumeMode'?: string;
    /**
    * Image volumes bind-mount a container-image mount into the container. Optional.
    */
    'imageVolumes'?: Array<ImageVolume>;
    /**
    * Init specifies that an init binary will be mounted into the container, and will be used as PID1.
    */
    'init'?: boolean;
    /**
    * InitContainerType describes if this container is an init container and if so, what type: always or once
    */
    'initContainerType'?: string;
    /**
    * InitPath specifies the path to the init binary that will be added if Init is specified above. If not specified, the default set in the Libpod config will be used. Ignored if Init above is not set. Optional.
    */
    'initPath'?: string;
    'ipcns'?: Namespace;
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
    * Mask is the path we want to mask in the container. This masks the paths given in addition to the default list. Optional
    */
    'mask'?: Array<string>;
    /**
    * Mounts are mounts that will be added to the container. These will supersede Image Volumes and VolumesFrom volumes where there are conflicts. Optional.
    */
    'mounts'?: Array<Mount>;
    /**
    * Name is the name the container will be given. If no name is provided, one will be randomly generated. Optional.
    */
    'name'?: string;
    /**
    * Namespace is the libpod namespace the container will be placed in. Optional.
    */
    'namespace'?: string;
    'netns'?: Namespace;
    /**
    * NetworkOptions are additional options for each network Optional.
    */
    'networkOptions'?: { [key: string]: Array<string>; };
    /**
    * NoNewPrivileges is whether the container will set the no new privileges flag on create, which disables gaining additional privileges (e.g. via setuid) in the container.
    */
    'noNewPrivileges'?: boolean;
    /**
    * OCIRuntime is the name of the OCI runtime that will be used to create the container. If not specified, the default will be used. Optional.
    */
    'ociRuntime'?: string;
    /**
    * OOMScoreAdj adjusts the score used by the OOM killer to determine processes to kill for the container's process. Optional.
    */
    'oomScoreAdj'?: number;
    /**
    * Overlay volumes are named volumes that will be added to the container. Optional.
    */
    'overlayVolumes'?: Array<OverlayVolume>;
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
    * PortBindings is a set of ports to map into the container. Only available if NetNS is set to bridge or slirp. Optional.
    */
    'portmappings'?: Array<PortMapping>;
    /**
    * Privileged is whether the container is privileged. Privileged does the following: Adds all devices on the system to the container. Adds all capabilities to the container. Disables Seccomp, SELinux, and Apparmor confinement. (Though SELinux can be manually re-enabled). TODO: this conflicts with things. TODO: this does more.
    */
    'privileged'?: boolean;
    /**
    * ProcOpts are the options used for the proc mount.
    */
    'procfsOpts'?: Array<string>;
    /**
    * PublishExposedPorts will publish ports specified in the image to random unused ports (guaranteed to be above 1024) on the host. This is based on ports set in Expose below, and any ports specified by the Image (if one is given). Only available if NetNS is set to Bridge or Slirp.
    */
    'publishImagePorts'?: boolean;
    /**
    * Rlimits are POSIX rlimits to apply to the container. Optional.
    */
    'rLimits'?: Array<POSIXRlimit>;
    /**
    * RawImageName is the user-specified and unprocessed input referring to a local or a remote image.
    */
    'rawImageName'?: string;
    /**
    * ReadOnlyFilesystem indicates that everything will be mounted as read-only
    */
    'readOnlyFilesystem'?: boolean;
    /**
    * Remove indicates if the container should be removed once it has been started and exits
    */
    'remove'?: boolean;
    'resourceLimits'?: LinuxResources;
    /**
    * RestartPolicy is the container's restart policy - an action which will be taken when the container exits. If not given, the default policy, which does nothing, will be used. Optional.
    */
    'restartPolicy'?: string;
    /**
    * RestartRetries is the number of attempts that will be made to restart the container. Only available when RestartPolicy is set to \"on-failure\". Optional.
    */
    'restartTries'?: number;
    /**
    * Rootfs is the path to a directory that will be used as the container's root filesystem. No modification will be made to the directory, it will be directly mounted into the container as root. Conflicts with Image. At least one of Image or Rootfs must be specified.
    */
    'rootfs'?: string;
    /**
    * RootfsOverlay tells if rootfs is actually an overlay on top of base path
    */
    'rootfsOverlay'?: boolean;
    /**
    * RootfsPropagation is the rootfs propagation mode for the container. If not set, the default of rslave will be used. Optional.
    */
    'rootfsPropagation'?: string;
    /**
    * Determine how to handle the NOTIFY_SOCKET - do we participate or pass it through \"container\" - let the OCI runtime deal with it, advertise conmon's MAINPID \"conmon-only\" - advertise conmon's MAINPID, send READY when started, don't pass to OCI \"ignore\" - unset NOTIFY_SOCKET
    */
    'sdnotifyMode'?: string;
    /**
    * SeccompPolicy determines which seccomp profile gets applied the container. valid values: empty,default,image
    */
    'seccompPolicy'?: string;
    /**
    * SeccompProfilePath is the path to a JSON file containing the container's Seccomp profile. If not specified, no Seccomp profile will be used. Optional.
    */
    'seccompProfilePath'?: string;
    /**
    * EnvSecrets are secrets that will be set as environment variables Optional.
    */
    'secretEnv'?: { [key: string]: string; };
    /**
    * Secrets are the secrets that will be added to the container Optional.
    */
    'secrets'?: Array<Secret>;
    /**
    * SelinuxProcessLabel is the process label the container will use. If SELinux is enabled and this is not specified, a label will be automatically generated if not specified. Optional.
    */
    'selinuxOpts'?: Array<string>;
    /**
    * ShmSize is the size of the tmpfs to mount in at /dev/shm, in bytes. Conflicts with ShmSize if IpcNS is not private. Optional.
    */
    'shmSize'?: number;
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
    * StorageOpts is the container's storage options Optional.
    */
    'storageOpts'?: { [key: string]: string; };
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
    * IO read rate limit per cgroup per device, bytes per second
    */
    'throttleReadBpsDevice'?: { [key: string]: LinuxThrottleDevice; };
    /**
    * IO read rate limit per cgroup per device, IO per second
    */
    'throttleReadIOPSDevice'?: { [key: string]: LinuxThrottleDevice; };
    /**
    * IO write rate limit per cgroup per device, bytes per second
    */
    'throttleWriteBpsDevice'?: { [key: string]: LinuxThrottleDevice; };
    /**
    * IO write rate limit per cgroup per device, IO per second
    */
    'throttleWriteIOPSDevice'?: { [key: string]: LinuxThrottleDevice; };
    /**
    * Timeout is a maximum time in seconds the container will run before main process is sent SIGKILL. If 0 is used, signal will not be sent. Container can run indefinitely Optional.
    */
    'timeout'?: number;
    /**
    * Timezone is the timezone inside the container. Local means it has the same timezone as the host machine Optional.
    */
    'timezone'?: string;
    /**
    * Umask is the umask the init process of the container will be run with.
    */
    'umask'?: string;
    /**
    * CgroupConf are key-value options passed into the container runtime that are used to configure cgroup v2. Optional.
    */
    'unified'?: { [key: string]: string; };
    /**
    * Unmask is the path we want to unmask in the container. To override all the default paths that are masked, set unmask=ALL.
    */
    'unmask'?: Array<string>;
    /**
    * UnsetEnv unsets the specified default environment variables from the image or from buildin or containers.conf Optional.
    */
    'unsetenv'?: Array<string>;
    /**
    * UnsetEnvAll unsetall default environment variables from the image or from buildin or containers.conf UnsetEnvAll unsets all default environment variables from the image or from buildin Optional.
    */
    'unsetenvall'?: boolean;
    /**
    * UseImageHosts indicates that /etc/hosts should not be managed by Podman, and instead sourced from the image. Conflicts with HostAdd. Do not set omitempty here, if this is false it should be set to not get the server default. Ideally this would be a pointer so we could differentiate between an explicitly false/true and unset (containers.conf default). However specgen is stable so we can not change this right now. TODO (5.0): change to pointer
    */
    'useImageHosts'?: boolean;
    /**
    * UseImageResolvConf indicates that resolv.conf should not be managed by Podman, but instead sourced from the image. Conflicts with DNSServer, DNSSearch, DNSOption.
    */
    'useImageResolveConf'?: boolean;
    /**
    * User is the user the container will be run as. Can be given as a UID or a username; if a username, it will be resolved within the container, using the container's /etc/passwd. If unset, the container will be run as root. Optional.
    */
    'user'?: string;
    'userns'?: Namespace;
    'utsns'?: Namespace;
    /**
    * Volatile specifies whether the container storage can be optimized at the cost of not syncing all the dirty files in memory.
    */
    '_volatile'?: boolean;
    /**
    * Volumes are named volumes that will be added to the container. These will supersede Image Volumes and VolumesFrom volumes where there are conflicts. Optional.
    */
    'volumes'?: Array<NamedVolume>;
    /**
    * VolumesFrom is a set of containers whose volumes will be added to this container. The name or ID of the container must be provided, and may optionally be followed by a : and then one or more comma-separated options. Valid options are 'ro', 'rw', and 'z'. Options will be used for all volumes sourced from the container.
    */
    'volumesFrom'?: Array<string>;
    /**
    * Weight per cgroup per device, can override BlkioWeight
    */
    'weightDevice'?: { [key: string]: LinuxWeightDevice; };
    /**
    * WorkDir is the container's working directory. If unset, the default, /, will be used. Optional.
    */
    'workDir'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'networks',
            'baseName': 'Networks',
            'type': '{ [key: string]: PerNetworkOptions; }',
            'format': '',
        },
        {
            'name': 'annotations',
            'baseName': 'annotations',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
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
            'name': 'cgroupParent',
            'baseName': 'cgroup_parent',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'cgroupns',
            'baseName': 'cgroupns',
            'type': 'Namespace',
            'format': '',
        },
        {
            'name': 'cgroupsMode',
            'baseName': 'cgroups_mode',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'chrootDirectories',
            'baseName': 'chroot_directories',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'cniNetworks',
            'baseName': 'cni_networks',
            'type': 'Array<string>',
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
            'name': 'cpuPeriod',
            'baseName': 'cpu_period',
            'type': 'number',
            'format': 'uint64',
        },
        {
            'name': 'cpuQuota',
            'baseName': 'cpu_quota',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'createWorkingDir',
            'baseName': 'create_working_dir',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'dependencyContainers',
            'baseName': 'dependencyContainers',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'deviceCgroupRule',
            'baseName': 'device_cgroup_rule',
            'type': 'Array<LinuxDeviceCgroup>',
            'format': '',
        },
        {
            'name': 'devices',
            'baseName': 'devices',
            'type': 'Array<LinuxDevice>',
            'format': '',
        },
        {
            'name': 'devicesFrom',
            'baseName': 'devices_from',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'dnsOption',
            'baseName': 'dns_option',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'dnsSearch',
            'baseName': 'dns_search',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'dnsServer',
            'baseName': 'dns_server',
            'type': 'Array<Array<number>>',
            'format': 'uint8',
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
            'name': 'expose',
            'baseName': 'expose',
            'type': 'any',
            'format': '',
        },
        {
            'name': 'groups',
            'baseName': 'groups',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'healthconfig',
            'baseName': 'healthconfig',
            'type': 'Schema2HealthConfig',
            'format': '',
        },
        {
            'name': 'hostDeviceList',
            'baseName': 'host_device_list',
            'type': 'Array<LinuxDevice>',
            'format': '',
        },
        {
            'name': 'hostadd',
            'baseName': 'hostadd',
            'type': 'Array<string>',
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
            'name': 'idmappings',
            'baseName': 'idmappings',
            'type': 'IDMappingOptions',
            'format': '',
        },
        {
            'name': 'image',
            'baseName': 'image',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'imageVolumeMode',
            'baseName': 'image_volume_mode',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'imageVolumes',
            'baseName': 'image_volumes',
            'type': 'Array<ImageVolume>',
            'format': '',
        },
        {
            'name': 'init',
            'baseName': 'init',
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
            'name': 'initPath',
            'baseName': 'init_path',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'ipcns',
            'baseName': 'ipcns',
            'type': 'Namespace',
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
            'name': 'mask',
            'baseName': 'mask',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'mounts',
            'baseName': 'mounts',
            'type': 'Array<Mount>',
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
            'name': 'netns',
            'baseName': 'netns',
            'type': 'Namespace',
            'format': '',
        },
        {
            'name': 'networkOptions',
            'baseName': 'network_options',
            'type': '{ [key: string]: Array<string>; }',
            'format': '',
        },
        {
            'name': 'noNewPrivileges',
            'baseName': 'no_new_privileges',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'ociRuntime',
            'baseName': 'oci_runtime',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'oomScoreAdj',
            'baseName': 'oom_score_adj',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'overlayVolumes',
            'baseName': 'overlay_volumes',
            'type': 'Array<OverlayVolume>',
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
            'name': 'portmappings',
            'baseName': 'portmappings',
            'type': 'Array<PortMapping>',
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
            'name': 'publishImagePorts',
            'baseName': 'publish_image_ports',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'rLimits',
            'baseName': 'r_limits',
            'type': 'Array<POSIXRlimit>',
            'format': '',
        },
        {
            'name': 'rawImageName',
            'baseName': 'raw_image_name',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'readOnlyFilesystem',
            'baseName': 'read_only_filesystem',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'remove',
            'baseName': 'remove',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'resourceLimits',
            'baseName': 'resource_limits',
            'type': 'LinuxResources',
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
            'name': 'rootfs',
            'baseName': 'rootfs',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'rootfsOverlay',
            'baseName': 'rootfs_overlay',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'rootfsPropagation',
            'baseName': 'rootfs_propagation',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'sdnotifyMode',
            'baseName': 'sdnotifyMode',
            'type': 'string',
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
            'name': 'secretEnv',
            'baseName': 'secret_env',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'secrets',
            'baseName': 'secrets',
            'type': 'Array<Secret>',
            'format': '',
        },
        {
            'name': 'selinuxOpts',
            'baseName': 'selinux_opts',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'shmSize',
            'baseName': 'shm_size',
            'type': 'number',
            'format': 'int64',
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
            'name': 'storageOpts',
            'baseName': 'storage_opts',
            'type': '{ [key: string]: string; }',
            'format': '',
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
            'name': 'throttleReadBpsDevice',
            'baseName': 'throttleReadBpsDevice',
            'type': '{ [key: string]: LinuxThrottleDevice; }',
            'format': '',
        },
        {
            'name': 'throttleReadIOPSDevice',
            'baseName': 'throttleReadIOPSDevice',
            'type': '{ [key: string]: LinuxThrottleDevice; }',
            'format': '',
        },
        {
            'name': 'throttleWriteBpsDevice',
            'baseName': 'throttleWriteBpsDevice',
            'type': '{ [key: string]: LinuxThrottleDevice; }',
            'format': '',
        },
        {
            'name': 'throttleWriteIOPSDevice',
            'baseName': 'throttleWriteIOPSDevice',
            'type': '{ [key: string]: LinuxThrottleDevice; }',
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
            'name': 'umask',
            'baseName': 'umask',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'unified',
            'baseName': 'unified',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'unmask',
            'baseName': 'unmask',
            'type': 'Array<string>',
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
            'name': 'useImageHosts',
            'baseName': 'use_image_hosts',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'useImageResolveConf',
            'baseName': 'use_image_resolve_conf',
            'type': 'boolean',
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
        },
        {
            'name': 'utsns',
            'baseName': 'utsns',
            'type': 'Namespace',
            'format': '',
        },
        {
            'name': '_volatile',
            'baseName': 'volatile',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'volumes',
            'baseName': 'volumes',
            'type': 'Array<NamedVolume>',
            'format': '',
        },
        {
            'name': 'volumesFrom',
            'baseName': 'volumes_from',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'weightDevice',
            'baseName': 'weightDevice',
            'type': '{ [key: string]: LinuxWeightDevice; }',
            'format': '',
        },
        {
            'name': 'workDir',
            'baseName': 'work_dir',
            'type': 'string',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return SpecGenerator.attributeTypeMap;
    }

    public constructor() {
    }
}

