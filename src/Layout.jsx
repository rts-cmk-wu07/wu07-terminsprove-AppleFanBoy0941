import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function Layout() {
	return (
		<div>
			<Navbar />
			<main className='pt-20'>
				<Outlet />
			</main>
		</div>
	)
}
