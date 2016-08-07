export function isRequestingUser( state ) {
	return state.user.requesting;
}

export function getUserToken( state ) {
	return state.user.token;
}

export function getUser( state ) {
	return state.user.user;
}
