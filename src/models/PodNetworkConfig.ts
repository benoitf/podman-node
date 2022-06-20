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

import type { Namespace } from './Namespace';
import type { PerNetworkOptions } from './PerNetworkOptions';
import type { PortMapping } from './PortMapping';

export class PodNetworkConfig {
    /**
    * Map of networks names to ids the container should join to. You can request additional settings for each network, you can set network aliases, static ips, static mac address  and the network interface name for this container on the specific network. If the map is empty and the bridge network mode is set the container will be joined to the default network.
    */
    'networks'?: { [key: string]: PerNetworkOptions; };
    /**
    * CNINetworks is a list of CNI networks to join the container to. If this list is empty, the default CNI network will be joined instead. If at least one entry is present, we will not join the default network (unless it is part of this list). Only available if NetNS is set to bridge. Optional. Deprecated: as of podman 4.0 use \"Networks\" instead.
    */
    'cniNetworks'?: Array<string>;
    /**
    * DNSOption is a set of DNS options that will be used in the infra container's resolv.conf, which will, by default, be shared with all containers in the pod. Conflicts with NoInfra=true. Optional.
    */
    'dnsOption'?: Array<string>;
    /**
    * DNSSearch is a set of DNS search domains that will be used in the infra container's resolv.conf, which will, by default, be shared with all containers in the pod. If not provided, DNS search domains from the host's resolv.conf will be used. Conflicts with NoInfra=true. Optional.
    */
    'dnsSearch'?: Array<string>;
    /**
    * DNSServer is a set of DNS servers that will be used in the infra container's resolv.conf, which will, by default, be shared with all containers in the pod. If not provided, the host's DNS servers will be used, unless the only server set is a localhost address. As the container cannot connect to the host's localhost, a default server will instead be set. Conflicts with NoInfra=true. Optional.
    */
    'dnsServer'?: Array<Array<number>>;
    /**
    * HostAdd is a set of hosts that will be added to the infra container's etc/hosts that will, by default, be shared with all containers in the pod. Conflicts with NoInfra=true and NoManageHosts. Optional.
    */
    'hostadd'?: Array<string>;
    'netns'?: Namespace;
    /**
    * NetworkOptions are additional options for each network Optional.
    */
    'networkOptions'?: { [key: string]: Array<string>; };
    /**
    * NoManageHosts indicates that /etc/hosts should not be managed by the pod. Instead, each container will create a separate /etc/hosts as they would if not in a pod. Conflicts with HostAdd.
    */
    'noManageHosts'?: boolean;
    /**
    * NoManageResolvConf indicates that /etc/resolv.conf should not be managed by the pod. Instead, each container will create and manage a separate resolv.conf as if they had not joined a pod. Conflicts with NoInfra=true and DNSServer, DNSSearch, DNSOption. Optional.
    */
    'noManageResolvConf'?: boolean;
    /**
    * PortMappings is a set of ports to map into the infra container. As, by default, containers share their network with the infra container, this will forward the ports to the entire pod. Only available if NetNS is set to Bridge or Slirp. Optional.
    */
    'portmappings'?: Array<PortMapping>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'networks',
            'baseName': 'Networks',
            'type': '{ [key: string]: PerNetworkOptions; }',
            'format': '',
        },
        {
            'name': 'cniNetworks',
            'baseName': 'cni_networks',
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
            'name': 'hostadd',
            'baseName': 'hostadd',
            'type': 'Array<string>',
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
            'name': 'noManageHosts',
            'baseName': 'no_manage_hosts',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'noManageResolvConf',
            'baseName': 'no_manage_resolv_conf',
            'type': 'boolean',
            'format': '',
        },
        {
            'name': 'portmappings',
            'baseName': 'portmappings',
            'type': 'Array<PortMapping>',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return PodNetworkConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

