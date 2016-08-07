/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import route from './route/reducer';
import user from './user/reducer';

export default combineReducers( {
	route,
	user
} );
