/**
 * External dependencies
 */
import { Component } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import { isRequestingUser, getUserToken } from 'state/user/selectors';
import { requestUser } from 'state/user/actions';

class QueryUser extends Component {
	componentWillMount() {
		this.request( this.props );
	}

	componentWillReceiveProps( nextProps ) {
		if ( this.props.userToken !== nextProps.userToken ) {
			this.request( nextProps );
		}
	}

	request( props ) {
		if ( ! props.isRequesting ) {
			props.requestUser( props.userToken );
		}
	}
}

export default connect(
	( state ) => {
		return {
			userToken: getUserToken( state ),
			isRequesting: isRequestingUser( state )
		};
	},
	{ requestUser }
)( QueryUser );
