/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import NotificationsList from 'components/notifications-list';

export default function Inbox() {
	return (
		<div className="inbox">
			<NotificationsList />
		</div>
	);
}
