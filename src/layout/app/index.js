/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import Sidebar from 'layout/sidebar';
import Inbox from 'layout/inbox';
import Detail from 'layout/detail';

export default function App() {
	return (
		<main className="app">
			<Sidebar />
			<Inbox />
			<Detail />
		</main>
	);
}
