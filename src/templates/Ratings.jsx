import RatingStar from '../components/RatingStar'
import useAxios from '../hooks/useAxios'
import { useState } from 'react'
import InlineLoader from '../components/loaders/InlineLoader'

export default function Ratings({ classId }) {
	const { data, loading, error } = useAxios(`classes/${classId}/ratings`, true)
	console.log(data)

	function average() {
		if (!data || Object.keys(data).length < 0) return
		const sum = data.reduce((acc, rating) => {
			return acc + rating.rating
		}, 0)

		return sum / data.length
	}

	const stars = [1, 2, 3, 4, 5]

	if (loading) return <InlineLoader />

	console.log(isNaN(average()))

	const averageRating = isNaN(average()) ? null : average()

	return (
		<div className='flex items-center gap-2'>
			<div className='flex items-center gap-1 rounded-lg overflow-hidden'>
				{stars.map(star => (
					<RatingStar key={star} index={star} average={averageRating} />
				))}
			</div>
			<p className='text-base text-elevated/50'>
				{isNaN(average()) ? null : average().toFixed(1)}
			</p>
		</div>
	)
}
