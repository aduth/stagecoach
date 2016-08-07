/**
 * External dependencies
 */
import { applyMiddleware, createStore, compose } from 'redux';
import { createMiddleware, History } from 'redux-routing';
import thunk from 'redux-thunk';
import { identity } from 'lodash';

/**
 * Internal dependencies
 */
import reducer from './reducer';

function bootstrap() {
	return {
		user: {
			token: localStorage.userToken
		}
	};
}

export default function configureStore() {
	const initialState = bootstrap();

	return createStore( reducer, initialState, compose(
		applyMiddleware( createMiddleware( History ), thunk ),
		window.devToolsExtension ? window.devToolsExtension() : identity
	) );
}
