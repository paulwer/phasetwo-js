/* tslint:disable */
/* eslint-disable */
/**
 * Phase Two Admin REST API
 * This is a REST API reference for the Phase Two Keycloak custom resources. These are extensions to the standard [Keycloak Admin REST API](https://www.keycloak.org/docs-api/17.0/rest-api/index.html).  ### Base URI format Paths specified in the documentation are relative to the the base URI. - Format: `https://<host>:<port>/auth/realms` - Example: `https://app.phasetwo.io/auth/realms`  ### Authentication Authentication is achieved by using the `Authentication: Bearer <token>` header in all requests. This is either the access token received from a normal authentication, or by a request directly to the OpenID Connect token endpoint.  It is recommended that you use a Keycloak Admin Client, such as [this one for Javascript](https://github.com/keycloak/keycloak-nodejs-admin-client), as they take care of authentication, getting an access token, and refreshing it when it expires.  #### Client credentials grant example ``` POST /auth/realms/test-realm/protocol/openid-connect/token Host: app.phasetwo.io Accept: application/json Content-type: application/x-www-form-urlencoded  grant_type=client_credentials&client_id=admin-cli&client_secret=fd649804-3a74-4d69-acaa-8f065c6b7da1 ```  #### Password grant example ``` POST /auth/realms/test-realm/protocol/openid-connect/token Host: app.phasetwo.io Accept: application/json Content-type: application/x-www-form-urlencoded  grant_type=password&username=uname@foo.com&password=pwd123AZY&client_id=admin-cli ```  ### SDKs Modern API libraries are available for several common languages. These are available as open source at the links below, or you can choose to generate your own using our [OpenAPI spec file](https://raw.githubusercontent.com/p2-inc/phasetwo-docs/master/openapi.yaml).  | Language | Library | | --- | --- | | Java (and other JVM langs) | https://github.com/p2-inc/phasetwo-java | | JavaScript/TypeScript | https://github.com/p2-inc/phasetwo-js | | Python | https://github.com/p2-inc/phasetwo-python | 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IdentityProviderRepresentation
 */
export interface IdentityProviderRepresentation {
    /**
     * 
     * @type {boolean}
     * @memberof IdentityProviderRepresentation
     */
    addReadTokenRoleOnCreate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityProviderRepresentation
     */
    alias?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityProviderRepresentation
     */
    config?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof IdentityProviderRepresentation
     */
    displayName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityProviderRepresentation
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityProviderRepresentation
     */
    firstBrokerLoginFlowAlias?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityProviderRepresentation
     */
    internalId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityProviderRepresentation
     */
    linkOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityProviderRepresentation
     */
    postBrokerLoginFlowAlias?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityProviderRepresentation
     */
    providerId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityProviderRepresentation
     */
    storeToken?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityProviderRepresentation
     */
    trustEmail?: boolean;
}

/**
 * Check if a given object implements the IdentityProviderRepresentation interface.
 */
export function instanceOfIdentityProviderRepresentation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentityProviderRepresentationFromJSON(json: any): IdentityProviderRepresentation {
    return IdentityProviderRepresentationFromJSONTyped(json, false);
}

export function IdentityProviderRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityProviderRepresentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addReadTokenRoleOnCreate': !exists(json, 'addReadTokenRoleOnCreate') ? undefined : json['addReadTokenRoleOnCreate'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'config': !exists(json, 'config') ? undefined : json['config'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'firstBrokerLoginFlowAlias': !exists(json, 'firstBrokerLoginFlowAlias') ? undefined : json['firstBrokerLoginFlowAlias'],
        'internalId': !exists(json, 'internalId') ? undefined : json['internalId'],
        'linkOnly': !exists(json, 'linkOnly') ? undefined : json['linkOnly'],
        'postBrokerLoginFlowAlias': !exists(json, 'postBrokerLoginFlowAlias') ? undefined : json['postBrokerLoginFlowAlias'],
        'providerId': !exists(json, 'providerId') ? undefined : json['providerId'],
        'storeToken': !exists(json, 'storeToken') ? undefined : json['storeToken'],
        'trustEmail': !exists(json, 'trustEmail') ? undefined : json['trustEmail'],
    };
}

export function IdentityProviderRepresentationToJSON(value?: IdentityProviderRepresentation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addReadTokenRoleOnCreate': value.addReadTokenRoleOnCreate,
        'alias': value.alias,
        'config': value.config,
        'displayName': value.displayName,
        'enabled': value.enabled,
        'firstBrokerLoginFlowAlias': value.firstBrokerLoginFlowAlias,
        'internalId': value.internalId,
        'linkOnly': value.linkOnly,
        'postBrokerLoginFlowAlias': value.postBrokerLoginFlowAlias,
        'providerId': value.providerId,
        'storeToken': value.storeToken,
        'trustEmail': value.trustEmail,
    };
}

