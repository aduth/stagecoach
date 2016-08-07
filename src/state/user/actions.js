/**
 * Internal dependencies
 */
import { requestWithToken } from 'lib/github-request';
import {
	USER_RECEIVE,
	USER_REQUEST,
	USER_REQUEST_FAILURE,
	USER_REQUEST_SUCCESS,
	USER_TOKEN_SET
} from 'state/action-types';

export function setUserToken( token ) {
	return {
		type: USER_TOKEN_SET,
		token
	};
}

export function receiveUser( user ) {
	return {
		type: USER_RECEIVE,
		user
	};
}

export function requestUser( token ) {
	return async ( dispatch ) => {
		dispatch( {
			type: USER_REQUEST
		} );

		try {
			const response = await requestWithToken( '/user', token );
			const user = await response.json();
			dispatch( receiveUser( user ) );
			dispatch( { type: USER_REQUEST_SUCCESS } );
		} catch ( error ) {
			dispatch( {
				type: USER_REQUEST_FAILURE,
				error
			} );
		}
	};
}
