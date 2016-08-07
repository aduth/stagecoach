/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import Sidebar from 'layout/sidebar';
import Inbox from 'layout/inbox';

export default function App() {
	return (
		<main className="app">
			<Sidebar />
			<Inbox />
			App
		</main>
	);
}
