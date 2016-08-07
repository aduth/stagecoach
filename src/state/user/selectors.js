export function isRequestingUser( state ) {
	return state.user.requesting;
}

export function getUserToken( state ) {
	return state.user.token;
}
