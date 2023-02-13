import centerImage from '../assets/welcome_center.jpg'
import { slideIn } from '../utils/motion'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import useLocalStorage from '../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { textVariant, staggerContainer } from '../utils/motion'

export default function Welcome() {
	const [welcomeScreen, setWelcomeScreen] = useLocalStorage(
		'welcomeScreen',
		true
	)

	const navigate = useNavigate()

	return (
		<div
			className='flex flex-col gap-12 justify-end h-screen bg-[url("./welcome-background.jpg")] bg-cover pb-12'
			style={{
				backgroundPosition: '60% center',
			}}
		>
			<div className='flex flex-col gap-4'>
				<motion.h1
					variants={textVariant(0.2)}
					initial='hidden'
					animate='show'
					className='text-2xl text-white leading-none pl-12 drop-shadow-2xl'
				>
					Believe Yourself
				</motion.h1>
				<div className='flex items-center gap-4'>
					<div className='h-[3px] w-12 bg-white'></div>
					<motion.p
						variants={textVariant(0.5)}
						initial='hidden'
						animate='show'
						className='text-base text-white drop-shadow-xl'
					>
						Train like a pro
					</motion.p>
				</div>
			</div>
			<div className='flex flex-col items-end'>
				<img src={centerImage} alt='Welcome' className='h-80 object-cover' />
				<Button
					xSize='lg'
					onClick={() => {
						setWelcomeScreen(false)
						navigate(0)
					}}
				>
					Start training
				</Button>
			</div>
		</div>
	)
}
