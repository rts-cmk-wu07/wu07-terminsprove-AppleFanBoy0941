export default function TrainersCard({ trainer }) {
	return (
		<div className='flex items-center gap-3'>
			<img
				src={trainer.asset.url}
				alt={trainer.trainerName}
				className='rounded-xl w-20 h-20 object-cover'
			/>
			<p className='text-base'>{trainer.trainerName}</p>
		</div>
	)
}
