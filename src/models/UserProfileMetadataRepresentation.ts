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
import type { UserProfileMetadataAttributeRepresentation } from './UserProfileMetadataAttributeRepresentation';
import {
    UserProfileMetadataAttributeRepresentationFromJSON,
    UserProfileMetadataAttributeRepresentationFromJSONTyped,
    UserProfileMetadataAttributeRepresentationToJSON,
} from './UserProfileMetadataAttributeRepresentation';

/**
 * 
 * @export
 * @interface UserProfileMetadataRepresentation
 */
export interface UserProfileMetadataRepresentation {
    /**
     * 
     * @type {Array<UserProfileMetadataAttributeRepresentation>}
     * @memberof UserProfileMetadataRepresentation
     */
    attributes?: Array<UserProfileMetadataAttributeRepresentation>;
}

/**
 * Check if a given object implements the UserProfileMetadataRepresentation interface.
 */
export function instanceOfUserProfileMetadataRepresentation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserProfileMetadataRepresentationFromJSON(json: any): UserProfileMetadataRepresentation {
    return UserProfileMetadataRepresentationFromJSONTyped(json, false);
}

export function UserProfileMetadataRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfileMetadataRepresentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(UserProfileMetadataAttributeRepresentationFromJSON)),
    };
}

export function UserProfileMetadataRepresentationToJSON(value?: UserProfileMetadataRepresentation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(UserProfileMetadataAttributeRepresentationToJSON)),
    };
}

