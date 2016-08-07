/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import QueryUser from 'components/query-user';
import { getUser } from 'state/user/selectors';

function UserInfo( { user } ) {
	return (
		<div className="user-info">
			<QueryUser />
			{ user ? user.login : null }
		</div>
	);
}

export default connect( ( state ) => {
	return {
		user: getUser( state )
	};
} )( UserInfo );
