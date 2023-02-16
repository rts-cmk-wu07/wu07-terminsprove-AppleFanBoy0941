import { motion } from 'framer-motion'

export default function ScheduleLoader() {
	return (
		<motion.div
			animate={{
				opacity: [0, 1, 0],
				transition: { repeat: Infinity, duration: 1 },
			}}
			className='h-[100px] bg-elevated rounded-lg'
		/>
	)
}
