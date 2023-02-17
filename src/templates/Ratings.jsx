import RatingStar from '../components/RatingStar'
import useAxios from '../hooks/useAxios'
import { useState } from 'react'
import InlineLoader from '../components/loaders/InlineLoader'
import Sheet from '../components/Sheet'
import TokenContext from '../contexts/TokenContext'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import ClassicButton from '../components/ClassicButton'

export default function Ratings({
	classData,
	canRate = false,
	showAverage = true,
	size,
}) {
	const { token } = useContext(TokenContext)
	const [ratingIsOpen, setRatingIsOpen] = useState(false)
	const [highlightedStar, setHighlightedStar] = useState(0)
	const { data, loading, error, patchData, getData, postData } = useAxios(
		`classes/${classData.id}/ratings`,
		true
	)

	const [selectedStars, setSelectedStars] = useState()
	const { data: userData, getData: getUserData } = useAxios(
		`users/${token.userId}`
	)

	function average() {
		if (!data || Object.keys(data).length < 0) return
		const sum = data?.reduce((acc, rating) => {
			return acc + rating.rating
		}, 0)

		return sum / data.length
	}

	const stars = [1, 2, 3, 4, 5]

	if (loading) return <InlineLoader />

	const averageRating = isNaN(average()) ? null : average()

	const userRating = data.find(rating => rating.userId === token.userId)

	function calculateSection(e) {
		const rect = e.target.getBoundingClientRect()
		const x = e.clientX - rect.left
		const section = Math.floor((x / rect.width) * 5) + 1
		return section > 5 ? 5 : section
	}

	async function submitRating() {
		// check if user has already rated
		if (userRating) {
			await patchData(
				{
					rating: selectedStars,
				},
				`/${token.userId}`
			)
		} else {
			await postData({
				userId: token.userId,
				rating: selectedStars,
			})
		}

		await getData()

		setRatingIsOpen(false)
	}

	return (
		<div
			onClick={async () => {
				if (canRate) {
					if (ratingIsOpen) return
					if (!token) return

					await getUserData()

					if (!userData.classes.find(c => c.id === classData.id)) return
					setRatingIsOpen(true)
					setSelectedStars(userRating?.rating || 0)
				}
			}}
			className='flex items-center gap-2'
		>
			<div
				className={`flex items-center ${
					size === 'sm' ? 'gap-px' : 'gap-1'
				} rounded-lg overflow-hidden`}
			>
				{stars.map(star => (
					<RatingStar
						key={star}
						index={star}
						average={averageRating}
						userRating={userRating?.rating}
						size={size}
					/>
				))}
			</div>
			{showAverage && (
				<p className='text-base text-elevated/50'>
					{isNaN(average()) ? null : average().toFixed(1)}
				</p>
			)}
			{canRate && (
				<Sheet
					isOpen={ratingIsOpen}
					setIsOpen={setRatingIsOpen}
					clickOutsideCloses={false}
				>
					<motion.div
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.1, delayChildren: 0.3 },
							},
						}}
						initial='hidden'
						animate='visible'
						className='flex flex-col gap-4'
					>
						<motion.h2
							variants={{
								hidden: { opacity: 0, y: 24 },
								visible: { opacity: 1, y: 0 },
							}}
							className='text-xl leading-none'
						>
							Rate this class
						</motion.h2>
						<motion.p
							variants={{
								hidden: { opacity: 0, y: 24 },
								visible: { opacity: 1, y: 0 },
							}}
							className='text-base'
						>
							Help others find the best classes by rating this class. You can
							change your rating at any time.
						</motion.p>
						<div className='relative flex items-center gap-4 justify-center my-6 p-2'>
							{stars.map(star => (
								<motion.div
									key={star}
									variants={{
										hidden: { opacity: 0, y: 24 },
										visible: { opacity: 1, y: 0 },
									}}
									animate={{
										scale: highlightedStar >= star ? 1.3 : 1,
										transition: { type: 'spring', stiffness: 500, damping: 15 },
									}}
								>
									<Star
										size={48}
										className={`${
											selectedStars < star
												? 'stroke-elevated fill-elevated/0'
												: 'stroke-primary fill-primary'
										} transition-all`}
									/>
								</motion.div>
							))}
							<motion.div
								drag='x'
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0}
								onDrag={e => setHighlightedStar(calculateSection(e))}
								onDragEnd={e => {
									setHighlightedStar(0)
									setSelectedStars(calculateSection(e))
								}}
								onClick={e => setSelectedStars(calculateSection(e))}
								className='absolute bg-transparent h-full w-full'
							/>
						</div>
						<ClassicButton
							label='Submit rating'
							color='elevated'
							onClick={submitRating}
							className='self-center'
						/>
					</motion.div>
				</Sheet>
			)}
		</div>
	)
}
