import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'
import Input from '../components/Input'
import axios from 'axios'
import { setCookie } from 'react-use-cookie'
import SubmitButton from '../components/SubmitButton'

export default function SignInOut({ isOpen, setIsOpen, initialType }) {
	const [type, setType] = useState(initialType || 'signIn')
	const [loading, setLoading] = useState(false)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [usernameError, setUsernameError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	async function signIn() {
		setPasswordError('')
		setUsernameError('')

		setLoading(true)

		if (!username) {
			setUsernameError('Username is required')
			setLoading(false)
			return
		}

		if (!password) {
			setPasswordError('Password is required')
			setLoading(false)
			return
		}

		console.log(import.meta.env.VITE_AUTH_URL + 'token')
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_AUTH_URL}token`,
				{
					username,
					password,
				}
			)

			setCookie('token', JSON.stringify(response.data), {
				days:
					Math.round(
						((response.data.validUntil - Date.now()) / (1000 * 60 * 60 * 24)) *
							100
					) / 100,
			})

			setLoading(false)
			setIsOpen(false)
		} catch (error) {
			setLoading(false)

			if (error.response.status === 401) {
				setPasswordError('Username or password is incorrect')
			}

			if (error.response.status === 500) {
				setPasswordError('Something went wrong, please try again later')
			}

			console.log(error)
		}
	}

	async function signUp() {
		setPasswordError('')
		setUsernameError('')

		setLoading(true)

		if (!username) {
			setUsernameError('Username is required')
			setLoading(false)
			return
		}

		if (!password) {
			setPasswordError('Password is required')
			setLoading(false)
			return
		}

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}users`,
				{
					username,
					password,
				}
			)

			const tokenResponse = await axios.post(
				`${import.meta.env.VITE_AUTH_URL}token`,
				{
					username,
					password,
				}
			)

			console.log(tokenResponse)

			setCookie('token', JSON.stringify(tokenResponse.data), {
				days:
					Math.round(
						((tokenResponse.data.validUntil - Date.now()) /
							(1000 * 60 * 60 * 24)) *
							100
					) / 100,
			})

			setLoading(false)
			setIsOpen(false)
		} catch (error) {
			setLoading(false)

			if (error.response.status === 500) {
				setPasswordError('Something went wrong, please try again later')
			} else {
				setPasswordError('An error occured, please try again later')
			}

			console.log(error)
		}
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key='signIn'
					className='dontclose fixed inset-0 flex flex-col pt-32 px-6 z-50'
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
					{type === 'signIn' ? (
						<motion.div
							className=''
							initial={{ opacity: 0, y: 32 }}
							animate={{ opacity: 1, y: 0 }}
						>
							<h1 className='text-xl'>Sign In</h1>
							<Input
								placeholder='Username'
								value={username}
								onChange={e => setUsername(e.target.value)}
								errorMessage={usernameError}
							/>
							<Input
								placeholder='Password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								type='password'
								errorMessage={passwordError}
							/>
							<SubmitButton
								loading={loading}
								onClick={signIn}
								label='Sign in'
							/>
							<p className='text-base mt-12'>
								Don't have an account?{' '}
								<span
									className='text-primary cursor-pointer'
									onClick={() => setType('signUp')}
								>
									Sign Up
								</span>
							</p>
						</motion.div>
					) : (
						<motion.div
							key='signUp'
							className=''
							initial={{ opacity: 0, y: 32 }}
							animate={{ opacity: 1, y: 0 }}
						>
							<h1 className='text-xl'>Sign Up</h1>
							<Input
								placeholder='Username'
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
							<Input
								placeholder='Password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								type='password'
							/>
							<SubmitButton
								loading={loading}
								onClick={signUp}
								label='Sign up'
							/>
							<p className='text-base'>
								Already have an account?{' '}
								<span
									className='text-primary cursor-pointer'
									onClick={() => setType('signIn')}
								>
									Sign In
								</span>
							</p>
						</motion.div>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	)
}
