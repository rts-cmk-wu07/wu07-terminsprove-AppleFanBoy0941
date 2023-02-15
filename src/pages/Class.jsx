import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'
import ClassHeader from '../templates/ClassHeader'
import ClassDetails from '../templates/ClassDetails'
import TokenContext from '../contexts/TokenContext'
import { useContext, useEffect, useState } from 'react'
import isInClass from '../utils/isInClass'
import ClassicButton from '../components/ClassicButton'
import Sheet from '../components/Sheet'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Class() {
	const [isLeaveOpen, setIsLeaveOpen] = useState(false)
	const [inClass, setInClass] = useState(false)
	console.log('inClass', inClass)
	const { id } = useParams()
	const { data, loading, error } = useAxios(`classes/${id}`, true)

	const { token } = useContext(TokenContext)
	const navigate = useNavigate()

	const {
		data: userData,
		loading: userLoading,
		error: userError,
		deleteData: deleteUser,
	} = useAxios(`users/${token.userId}`)

	useEffect(() => {
		console.log('useEffect')
		if (!data) return

		setInClass(isInClass(userData, data.id) ? true : false)
	}, [data, userData])

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

	async function leaveClass() {
		await deleteUser(`/classes/${data.id}`)

		setIsLeaveOpen(false)
	}

	return (
		<div>
			<ClassHeader classData={data} inClass={inClass} setInClass={setInClass} />
			<ClassDetails classData={data} />

			{inClass && (
				<div className='px-6 mt-12'>
					<ClassicButton
						label='Leave class'
						color='elevated'
						onClick={() => setIsLeaveOpen(true)}
					/>
				</div>
			)}
			<Sheet
				isOpen={isLeaveOpen}
				setIsOpen={setIsLeaveOpen}
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
						You are signed up to this class
					</motion.h1>
					<motion.p variants={textvariants} className='text-base'>
						Do you want to unsubscribe to this class?
					</motion.p>
					<motion.div
						className='flex flex-col gap-4 my-6'
						variants={textvariants}
					>
						<ClassicButton
							label='Unsubscribe'
							onClick={leaveClass}
							loading={loading}
						/>
					</motion.div>
				</motion.div>
			</Sheet>
		</div>
	)
}
