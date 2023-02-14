import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function Input({ search, errorMessage, ...props }) {
	const [focus, setFocus] = useState(false)

	return (
		<label className='flex flex-col my-4'>
			<div
				className={`flex items-center gap-4 border border-elevated bg-elevated/25 rounded-xl ${
					search ? 'pl-3 pr-6' : 'px-6'
				} py-3 h-16 ${focus && 'border-primary'} transition-colors`}
			>
				{search && (
					<Search
						className={`h-6 w-6 text-elevated ${
							focus && 'text-primary'
						} transition-all`}
					/>
				)}
				<input
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className=' text-base w-full bg-transparent outline-none focus:outline-none placeholder:text-text/25'
					{...props}
				/>
			</div>
			<AnimatePresence>
				{errorMessage && (
					<motion.p
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: 'fit-content',
							opacity: 1,
							transition: { delay: 0.1 },
						}}
						exit={{ height: 0, opacity: 0 }}
						className='text-base text-primary'
					>
						{errorMessage}
					</motion.p>
				)}
			</AnimatePresence>
		</label>
	)
}
