/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import { USER_TOKEN_SET } from 'state/action-types';

export function token( state = null, action ) {
	switch ( action.type ) {
		case USER_TOKEN_SET:
			return action.token;
	}

	return state;
}

export default combineReducers( {
	token
} );
