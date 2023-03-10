import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import SignInOut from '../templates/SignInOut'
import { useState } from 'react'
import { getCookie, setCookie } from 'react-use-cookie'
import Sheet from './Sheet'

export default function Menu({ isOpen, setIsOpen }) {
	const [signUpIsOpen, setSignUpIsOpen] = useState(false)
	const [type, setType] = useState('signIn')

	const token = getCookie('token')

	const navigate = useNavigate()

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
		setCookie('token', null, { days: -1 })

		navigate(0)
		setIsOpen(false)
	}

	return (
		<Sheet
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			clickOutsideCloses={!signUpIsOpen}
		>
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
				className='flex flex-col items-center gap-8'
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
							<Link className='inline-block text-lg px-4 py-2' to='/schedule'>
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
								Log out
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
							Log in
						</button>
					</motion.li>
				)}
			</motion.ul>
			<SignInOut
				isOpen={signUpIsOpen}
				setIsOpen={setSignUpIsOpen}
				initialType={type}
			/>
		</Sheet>
	)
}
