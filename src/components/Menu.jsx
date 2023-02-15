import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import SignInOut from '../templates/SignInOut'
import { useState } from 'react'
import { getCookie, setCookie } from 'react-use-cookie'

export default function Menu({ isOpen, setIsOpen }) {
	const [signUpIsOpen, setSignUpIsOpen] = useState(false)
	const [type, setType] = useState('signIn')

	const token = getCookie('token')

	const links = [
		{
			name: 'Home',
			to: '/',
		},
		{
			name: 'Search',
			to: '/search',
		},
	]

	async function signOut() {
		setCookie('token', '', { days: -1 })
		setIsOpen(false)
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className='fixed inset-0 bg-opacity-50'
					onClick={e => {
						if (!e.target.classList.contains('dontclose') && !signUpIsOpen)
							setIsOpen(false)
					}}
					initial={{
						background: '#ffffff00',
						backdropFilter: 'blur(0px)',
						// opacity: 0,
					}}
					animate={{
						background: '#ffffffff',
						backdropFilter: 'blur(4px)',
						opacity: 1,
						transition: { duration: 0.4 },
					}}
					exit={{
						// background: '#ffffff00',
						backdropFilter: 'blur(0px)',
						opacity: 0,
					}}
				>
					<motion.button
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
						onClick={() => setIsOpen(false)}
						className='top-6 right-6 h-8 w-8 absolute'
					>
						<X className='h-8 w-8 text-elevated' strokeWidth={3} />
					</motion.button>
					<motion.ul
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.1, delayChildren: 0.2 },
							},
						}}
						initial='hidden'
						animate='visible'
						className='flex flex-col items-center relative top-32 gap-8'
					>
						{links.map(link => {
							return (
								<motion.li
									key={link.name}
									variants={{
										hidden: { y: 16, opacity: 0 },
										visible: { y: 0, opacity: 1 },
									}}
								>
									<Link className='inline-block text-lg px-4 py-2' to={link.to}>
										{link.name}
									</Link>
								</motion.li>
							)
						})}
						{token ? (
							<>
								<motion.li
									variants={{
										hidden: { y: 16, opacity: 0 },
										visible: { y: 0, opacity: 1 },
									}}
								>
									<Link
										className='dontclose inline-block text-lg px-4 py-2'
										to='/schedule'
									>
										My Schedule
									</Link>
								</motion.li>
								<motion.li
									variants={{
										hidden: { y: 16, opacity: 0 },
										visible: { y: 0, opacity: 1 },
									}}
								>
									<button
										onClick={signOut}
										className='dontclose inline-block text-lg px-4 py-2'
									>
										Sign out
									</button>
								</motion.li>
							</>
						) : (
							<motion.li
								variants={{
									hidden: { y: 16, opacity: 0 },
									visible: { y: 0, opacity: 1 },
								}}
							>
								<button
									className='dontclose inline-block text-lg px-4 py-2'
									onClick={() => {
										setSignUpIsOpen(true)
										setType('signIn')
									}}
								>
									Sign in
								</button>
							</motion.li>
						)}
					</motion.ul>
					<SignInOut
						isOpen={signUpIsOpen}
						setIsOpen={setSignUpIsOpen}
						initialType={type}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
