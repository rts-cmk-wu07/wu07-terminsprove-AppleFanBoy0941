import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<div>
			This it the header
			<Outlet />
		</div>
	)
}
