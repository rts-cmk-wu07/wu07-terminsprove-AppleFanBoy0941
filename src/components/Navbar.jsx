import { Triangle, Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
	const location = useLocation()
	const navigate = useNavigation()

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className='fixed top-0 left-0 w-full bg-background flex items-center justify-between gap-4 p-6 h-20 z-50'>
			<button
				className='h-8 flex items-center'
				to='/'
				onClick={() => {
					navigate(-1)
				}}
			>
				<motion.div
					className='h-8 w-8'
					animate={{
						rotate: location.pathname === '/' ? 0 : -90,
						scale: location.pathname === '/' ? 1 : 0.5,
						transition: { duration: 0.5 },
					}}
				>
					<Triangle
						className={`${
							location.pathname === '/'
								? 'fill-elevated text-elevated'
								: 'fill-primary text-primary'
						} transition-all h-8 w-8`}
					/>
				</motion.div>
				<AnimatePresence>
					{location.pathname !== '/' && (
						<motion.p
							initial={{ opacity: 0, x: -16 }}
							animate={{
								opacity: 1,
								x: 0,
								scale: 1,
								transition: { ease: 'easeOut', delay: 0.25 },
							}}
							exit={{ opacity: 0, scale: 0.9, transition: { ease: 'easeIn' } }}
							className='text-base text-primary'
						>
							Back
						</motion.p>
					)}
				</AnimatePresence>
			</button>
			<AnimatePresence>
				{location.pathname === '/' && (
					<motion.p
						initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
						animate={{
							opacity: 1,
							scale: 1,
							x: '-50%',
							y: '-50%',
							transition: { ease: 'easeOut' },
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
							x: '-50%',
							y: '-50%',
							transition: { ease: 'easeIn' },
						}}
						className='text-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
					>
						Popular Classes
					</motion.p>
				)}
			</AnimatePresence>
			<button
				className='h-8 w-8 flex justify-center items-center'
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<AnimatePresence>
					{isMenuOpen ? (
						<motion.div
							key={1}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							className='h-8 w-8 absolute'
						>
							<X
								className='fill-elevated text-elevated h-8 w-8'
								strokeWidth={3}
							/>
						</motion.div>
					) : (
						<motion.div
							key={2}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							className='h-8 w-8 absolute'
						>
							<Menu
								className='fill-elevated text-elevated h-8 w-8'
								strokeWidth={3}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</button>
		</nav>
	)
}
