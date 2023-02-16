import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'

export default function Button({
	children,
	xSize = 'lg',
	negativeTopMargin,
	fontSize = 'lg',
	...props
}) {
	return (
		<motion.button
			variants={slideIn('right', null, 0.5)}
			initial='hidden'
			animate='show'
			whileTap={{ opacity: 0.8, transition: { duration: 0.1, type: 'spring' } }}
			{...props}
			className={`bg-white ${
				fontSize === 'base' ? 'text-base' : 'text-lg'
			} w-fit py-4 ${xSize === 'sm' ? 'px-6' : 'px-16'} rounded-l-2xl ${
				negativeTopMargin && '-mt-4'
			} ml-auto shrink-0 whitespace-nowrap`}
		>
			{children}
		</motion.button>
	)
}
