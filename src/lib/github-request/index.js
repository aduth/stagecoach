/**
 * Internal dependencies
 */
import { GITHUB_API_ROOT } from 'constant';

export function requestWithToken( path, token ) {
	return fetch( `${ GITHUB_API_ROOT }${ path }`, {
		headers: new Headers( {
			Authorization: `TOKEN ${ token }`
		} )
	} );
}
