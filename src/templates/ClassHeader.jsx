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
import Ratings from './Ratings'

export default function ClassHeader({
	classData,
	inClass,
	setInClass,
	loading,
	leaveClass,
	setLeaveSheetOpen,
	userData,
	userLoading,
	getUserData,
	postUserData,
}) {
	const [isSignUpSheetOpen, setIsSignUpSheetOpen] = useState(false)
	const [isSignInOpen, setIsSignInOpen] = useState(false)
	const [isWarningOpen, setIsWarningOpen] = useState(false)

	const { token } = useContext(TokenContext)

	// const { data, postData, deleteData, getData } = useAxios(
	// 	`users/${token.userId}`
	// )

	function signUp() {
		if (token.userId === '') {
			setIsSignUpSheetOpen(true)
		} else {
			subscribe()
		}
	}

	async function subscribe() {
		await getUserData() // update user data before checking if user has class this day

		const hasClassThisDay = userData.classes?.some(
			// check if user has class this day
			classItem => classItem.classDay === classData.classDay
		)

		if (hasClassThisDay) return setIsWarningOpen(true)

		await postUserData(null, `/classes/${classData.id}`)

		await getUserData() // update user data

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
			<div className='absolute inset-0 bg-gradient-to-t from-text/75 to-text/10 flex flex-col gap-2 justify-end py-6 pl-4'>
				<h1 className='text-background text-xl leading-none pr-6'>
					{classData?.className}
				</h1>
				<div className='flex justify-between items-center w-full'>
					<div className='h-[74px] items-center flex'>
						<Ratings classData={classData} canRate />
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
						) : (
							<motion.div
								animate={{ opacity: 1, x: '0%' }}
								exit={{ opacity: 0, x: '100%' }}
							>
								<Button xSize='sm' onClick={() => setLeaveSheetOpen(true)}>
									Leave
								</Button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
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
						You need an account
					</motion.h1>
					<motion.p variants={textvariants} className='text-base'>
						To sign up for this class you need to create an account. Log in or
						create a free account.
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
							label='Log in'
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
			<Sheet isOpen={isWarningOpen} setIsOpen={() => setIsWarningOpen(false)}>
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
						You already have a class this day
					</motion.h1>
					<motion.p variants={textvariants} className='text-base'>
						You can only sign up for one class per day. If you want to sign up
						for this class you need to leave your current class.
					</motion.p>
				</motion.div>
			</Sheet>
		</div>
	)
}
