import useAxios from '../hooks/useAxios'
import Button from '../components/Button'
import TokenContext from '../contexts/TokenContext'
import { useContext, useEffect, useState } from 'react'
import Sheet from '../components/Sheet'
import { AnimatePresence, motion } from 'framer-motion'
import ClassicButton from '../components/ClassicButton'
import SignInOut from './SignInOut'
import { useNavigate } from 'react-router-dom'
import isInClass from '../utils/isInClass'

export default function ClassHeader({ classData, inClass, setInClass }) {
	const [isSignUpSheetOpen, setIsSignUpSheetOpen] = useState(false) // if user is not signed in
	const [isSignInOpen, setIsSignInOpen] = useState(false) // if user is not signed in and opens sign in sheet

	const { token } = useContext(TokenContext)
	const navigate = useNavigate()

	const { data, loading, error, deleteData, postData } = useAxios(
		`users/${token.userId}`
	)

	function signUp() {
		if (token.userId === '') {
			setIsSignUpSheetOpen(true)
		} else {
			subscribe()
		}
	}

	async function subscribe() {
		console.log('subscribe')
		await postData(null, `/classes/${classData.id}`)

		setIsSignUpSheetOpen(false)

		setInClass(true)
	}

	const textvariants = {
		hidden: {
			opacity: 0,
			y: 16,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	}

	return (
		<div className='-mt-20 aspect-card relative overflow-hidden'>
			<img
				className='h-full w-full object-cover'
				src={classData?.asset?.url}
				alt={classData?.className}
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-text/75 to-text/10 flex justify-between items-end py-6 pl-4 gap-2'>
				<div>
					<h1 className='text-background text-xl leading-none'>
						{classData?.className}
					</h1>
					{/* // TODO: ratings here */}
					{/* // ? Ville det være bedre at rykke title op over button, så ratings og button er på en linje, vil give mere plads til title */}
				</div>
				<AnimatePresence>
					{!inClass ? (
						<motion.div
							animate={{ opacity: 1, x: '0%' }}
							exit={{ opacity: 0, x: '100%' }}
						>
							<Button onClick={signUp} xSize='sm'>
								Sign up
							</Button>
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
			<Sheet
				isOpen={isSignUpSheetOpen}
				setIsOpen={() => setIsSignUpSheetOpen(false)}
				clickOutsideCloses={false}
			>
				<motion.div
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.1, delayChildren: 0.2 },
						},
					}}
					initial='hidden'
					animate='visible'
				>
					<motion.h1
						variants={textvariants}
						className='text-xl leading-none mb-4'
					>
						You have to be signed in
					</motion.h1>
					<motion.p variants={textvariants} className='text-base'>
						Sign in or create a free account today!
					</motion.p>
					<motion.div
						variants={textvariants}
						className='flex flex-col gap-4 mt-8'
					>
						<ClassicButton
							label='Create free account'
							onClick={() => setIsSignInOpen(true)}
							color='primary'
						/>
						<ClassicButton
							label='Sign in'
							onClick={() => setIsSignInOpen(true)}
							color='elevated'
						/>
					</motion.div>
					<SignInOut
						isOpen={isSignInOpen}
						setIsOpen={setIsSignInOpen}
						additionalCallback={subscribe}
					/>
				</motion.div>
			</Sheet>
		</div>
	)
}
