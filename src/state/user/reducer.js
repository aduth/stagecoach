/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import {
	USER_RECEIVE,
	USER_REQUEST,
	USER_REQUEST_FAILURE,
	USER_REQUEST_SUCCESS,
	USER_TOKEN_SET
} from 'state/action-types';

export function requesting( state = false, action ) {
	switch ( action.type ) {
		case USER_REQUEST:
		case USER_REQUEST_FAILURE:
		case USER_REQUEST_SUCCESS:
			return USER_REQUEST === action.type;
	}

	return state;
}

export function user( state = null, action ) {
	switch ( action.type ) {
		case USER_RECEIVE:
			return action.user;
	}

	return state;
}

export function token( state = null, action ) {
	switch ( action.type ) {
		case USER_TOKEN_SET:
			return action.token;
	}

	return state;
}

export default combineReducers( {
	requesting,
	user,
	token
} );
