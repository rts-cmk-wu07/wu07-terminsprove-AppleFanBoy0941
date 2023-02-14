import { motion } from 'framer-motion'

export default function InlineLoader() {
	return (
		<div className='flex items-center gap-2'>
			<motion.div
				animate={{
					opacity: [0, 1, 0],
					scale: [0.75, 1, 0.75],
					transition: {
						duration: 1.5,
						repeat: Infinity,
					},
				}}
				className='h-3 w-3 rounded-full bg-background'
			/>
			<motion.div
				animate={{
					opacity: [0, 1, 0],
					scale: [0.75, 1, 0.75],
					transition: {
						duration: 1.5,
						repeat: Infinity,
						delay: 0.1,
					},
				}}
				className='h-3 w-3 rounded-full bg-background'
			/>
			<motion.div
				animate={{
					opacity: [0, 1, 0],
					scale: [0.75, 1, 0.75],
					transition: {
						duration: 1.5,
						repeat: Infinity,
						delay: 0.2,
					},
				}}
				className='h-3 w-3 rounded-full bg-background'
			/>
		</div>
	)
}
