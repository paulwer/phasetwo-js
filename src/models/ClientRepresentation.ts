/* tslint:disable */
/* eslint-disable */
/**
 * Keycloak Account API
 * Derived from the code at https://github.com/keycloak/keycloak/blob/main/services/src/main/java/org/keycloak/services/resources/account/AccountRestService.java 
 *
 * The version of the OpenAPI document: 20.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConsentRepresentation } from './ConsentRepresentation';
import {
    ConsentRepresentationFromJSON,
    ConsentRepresentationFromJSONTyped,
    ConsentRepresentationToJSON,
} from './ConsentRepresentation';

/**
 * 
 * @export
 * @interface ClientRepresentation
 */
export interface ClientRepresentation {
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    clientName?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    userConsetRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    inUse?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientRepresentation
     */
    offlineAccess?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    rootUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    baseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    effectiveUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    lgogUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    policyUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRepresentation
     */
    tosUri?: string;
    /**
     * 
     * @type {ConsentRepresentation}
     * @memberof ClientRepresentation
     */
    consent?: ConsentRepresentation;
}

/**
 * Check if a given object implements the ClientRepresentation interface.
 */
export function instanceOfClientRepresentation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClientRepresentationFromJSON(json: any): ClientRepresentation {
    return ClientRepresentationFromJSONTyped(json, false);
}

export function ClientRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientRepresentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'clientName': !exists(json, 'clientName') ? undefined : json['clientName'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'userConsetRequired': !exists(json, 'userConsetRequired') ? undefined : json['userConsetRequired'],
        'inUse': !exists(json, 'inUse') ? undefined : json['inUse'],
        'offlineAccess': !exists(json, 'offlineAccess') ? undefined : json['offlineAccess'],
        'rootUrl': !exists(json, 'rootUrl') ? undefined : json['rootUrl'],
        'baseUrl': !exists(json, 'baseUrl') ? undefined : json['baseUrl'],
        'effectiveUrl': !exists(json, 'effectiveUrl') ? undefined : json['effectiveUrl'],
        'lgogUri': !exists(json, 'lgogUri') ? undefined : json['lgogUri'],
        'policyUri': !exists(json, 'policyUri') ? undefined : json['policyUri'],
        'tosUri': !exists(json, 'tosUri') ? undefined : json['tosUri'],
        'consent': !exists(json, 'consent') ? undefined : ConsentRepresentationFromJSON(json['consent']),
    };
}

export function ClientRepresentationToJSON(value?: ClientRepresentation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientId': value.clientId,
        'clientName': value.clientName,
        'description': value.description,
        'userConsetRequired': value.userConsetRequired,
        'inUse': value.inUse,
        'offlineAccess': value.offlineAccess,
        'rootUrl': value.rootUrl,
        'baseUrl': value.baseUrl,
        'effectiveUrl': value.effectiveUrl,
        'lgogUri': value.lgogUri,
        'policyUri': value.policyUri,
        'tosUri': value.tosUri,
        'consent': ConsentRepresentationToJSON(value.consent),
    };
}
