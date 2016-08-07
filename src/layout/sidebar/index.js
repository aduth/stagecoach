/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import UserInfo from 'components/user-info';

export default function Sidebar() {
	return (
		<nav className="sidebar">
			<UserInfo />
			Sidebar
		</nav>
	);
}
