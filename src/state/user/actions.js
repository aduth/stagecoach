/**
 * Internal dependencies
 */
import { USER_TOKEN_SET } from 'state/action-types';

export function setUserToken( token ) {
	return {
		type: USER_TOKEN_SET,
		token
	};
}
