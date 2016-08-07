/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import UserInfo from 'components/user-info';
import FiltersList from 'components/filters-list';

export default function Sidebar() {
	return (
		<nav className="sidebar">
			<UserInfo />
			<FiltersList />
		</nav>
	);
}
