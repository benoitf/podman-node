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

import type { Address } from './Address';

/**
* InspectAdditionalNetwork holds information about non-default CNI networks the container has been connected to. As with InspectNetworkSettings, many fields are unused and maintained only for compatibility with Docker.
*/
export class InspectAdditionalNetwork {
    /**
    * AdditionalMacAddresses is a set of additional MAC Addresses beyond the first. CNI may configure more than one interface for a single network, which can cause this.
    */
    'additionalMACAddresses'?: Array<string>;
    /**
    * Aliases are any network aliases the container has in this network.
    */
    'aliases'?: Array<string>;
    /**
    * DriverOpts is presently unused and maintained exclusively for compatibility.
    */
    'driverOpts'?: { [key: string]: string; };
    /**
    * EndpointID is unused, maintained exclusively for compatibility.
    */
    'endpointID'?: string;
    /**
    * Gateway is the IP address of the gateway this network will use.
    */
    'gateway'?: string;
    /**
    * GlobalIPv6Address is the global-scope IPv6 Address for this network.
    */
    'globalIPv6Address'?: string;
    /**
    * GlobalIPv6PrefixLen is the length of the subnet mask of this network.
    */
    'globalIPv6PrefixLen'?: number;
    /**
    * IPAMConfig is presently unused and maintained exclusively for compatibility.
    */
    'iPAMConfig'?: { [key: string]: string; };
    /**
    * IPAddress is the IP address for this network.
    */
    'iPAddress'?: string;
    /**
    * IPPrefixLen is the length of the subnet mask of this network.
    */
    'iPPrefixLen'?: number;
    /**
    * IPv6Gateway is the IPv6 gateway this network will use.
    */
    'iPv6Gateway'?: string;
    /**
    * Links is presently unused and maintained exclusively for compatibility.
    */
    'links'?: Array<string>;
    /**
    * MacAddress is the MAC address for the interface in this network.
    */
    'macAddress'?: string;
    /**
    * Name of the network we're connecting to.
    */
    'networkID'?: string;
    /**
    * SecondaryIPAddresses is a list of extra IP Addresses that the container has been assigned in this network.
    */
    'secondaryIPAddresses'?: Array<Address>;
    /**
    * SecondaryIPv6Addresses is a list of extra IPv6 Addresses that the container has been assigned in this network.
    */
    'secondaryIPv6Addresses'?: Array<Address>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            'name': 'additionalMACAddresses',
            'baseName': 'AdditionalMACAddresses',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'aliases',
            'baseName': 'Aliases',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'driverOpts',
            'baseName': 'DriverOpts',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'endpointID',
            'baseName': 'EndpointID',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'gateway',
            'baseName': 'Gateway',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'globalIPv6Address',
            'baseName': 'GlobalIPv6Address',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'globalIPv6PrefixLen',
            'baseName': 'GlobalIPv6PrefixLen',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'iPAMConfig',
            'baseName': 'IPAMConfig',
            'type': '{ [key: string]: string; }',
            'format': '',
        },
        {
            'name': 'iPAddress',
            'baseName': 'IPAddress',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'iPPrefixLen',
            'baseName': 'IPPrefixLen',
            'type': 'number',
            'format': 'int64',
        },
        {
            'name': 'iPv6Gateway',
            'baseName': 'IPv6Gateway',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'links',
            'baseName': 'Links',
            'type': 'Array<string>',
            'format': '',
        },
        {
            'name': 'macAddress',
            'baseName': 'MacAddress',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'networkID',
            'baseName': 'NetworkID',
            'type': 'string',
            'format': '',
        },
        {
            'name': 'secondaryIPAddresses',
            'baseName': 'SecondaryIPAddresses',
            'type': 'Array<Address>',
            'format': '',
        },
        {
            'name': 'secondaryIPv6Addresses',
            'baseName': 'SecondaryIPv6Addresses',
            'type': 'Array<Address>',
            'format': '',
        }    ];

    static getAttributeTypeMap() {
        return InspectAdditionalNetwork.attributeTypeMap;
    }

    public constructor() {
    }
}
