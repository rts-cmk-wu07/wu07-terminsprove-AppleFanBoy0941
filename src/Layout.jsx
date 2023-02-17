import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function Layout() {
	const location = useLocation()

	return (
		<div>
			<Navbar />
			<motion.main
				key={location.pathname}
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
				className='pt-20'
			>
				<Outlet />
			</motion.main>
		</div>
	)
}
