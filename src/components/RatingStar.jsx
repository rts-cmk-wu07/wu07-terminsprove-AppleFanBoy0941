import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function RatingStar({ index, average, userRating, size }) {
	const backgroundFill =
		index - average < 0 ? 1 : index - average > 1 ? 0 : 1 - (index - average)

	const isFilled = index - userRating - 1 < 0

	return (
		<div
			className={`relative ${
				size === 'sm' ? 'h-6 w-6' : 'w-8 h-8'
			} bg-elevated/25 rounded-sm flex justify-center items-center`}
		>
			<motion.div
				initial={{ width: '0%' }}
				animate={{
					width: `${backgroundFill * 100}%`,
					transition: {
						delay: index * 0.29 + 0.2,
						duration: 0.3 * (backgroundFill < 1 ? backgroundFill * 1.1 : 1),
						ease: backgroundFill < 1 ? 'easeOut' : 'linear',
					},
				}}
				className={`absolute top-0 left-0 h-full ${
					size === 'sm' ? 'bg-primary/25' : 'bg-primary/25'
				}`}
			/>
			<motion.div
				initial={{ opacity: 0, scale: isFilled ? 0 : 0 }}
				animate={{
					opacity: 1,
					scale: 1,
					transition: {
						delay: index * 0.1 + 0.7,
						type: 'spring',
						stiffness: 500,
						damping: 20,
					},
				}}
				className='absolute h-full w-full flex justify-center items-center'
			>
				<Star
					className={`${
						isFilled ? 'text-primary fill-primary' : 'text-elevated/50'
					}
					${size === 'sm' ? 'h-4 w-4' : 'h-6 w-6'}
					`}
				/>
			</motion.div>
		</div>
	)
}
