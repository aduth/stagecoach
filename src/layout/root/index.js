/**
 * External dependencies
 */
import { h } from 'preact';
import { Provider } from 'preact-redux';

/**
 * Internal dependencies
 */
import App from 'layout/app';

export default function Root( { Route, store } ) {
	return (
		<Provider store={ store }>
			<App><Route /></App>
		</Provider>
	);
}
