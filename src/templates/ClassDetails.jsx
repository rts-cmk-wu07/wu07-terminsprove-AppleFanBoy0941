export default function ClassDetails({ classData }) {
	return (
		<div className=' pt-4 flex flex-col gap-4'>
			<div>
				<h3 className='text-lg leading-tight'>Schedule</h3>
				<div className='flex items-center justify-between'>
					<p className='text-base'>{classData?.classDay}</p>
					<p className='text-base'>{classData?.classTime}</p>
				</div>
			</div>
			<p className='text-base'>{classData?.classDescription}</p>
		</div>
	)
}
