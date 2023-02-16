import { Star } from 'lucide-react'

export default function RatingStar({ index, average }) {
	const starFill =
		index - average < 0 ? 1 : index - average > 1 ? 0 : 1 - (index - average)
	console.log(index, average, starFill)
	return (
		<div className='relative w-8 h-8 bg-elevated/25 rounded-sm flex justify-center items-center'>
			<Star className='stroke-elevated/50 absolute' />
			{starFill !== 0 && (
				<Star
					style={{
						clipPath: `polygon(0 0, ${starFill * 100}% 0, ${
							starFill * 100
						}% 100%, 0 100%)`,
					}}
					className='stroke-primary absolute fill-primary'
				/>
			)}
		</div>
	)
}
