import InlineLoader from './loaders/InlineLoader'

export default function SubmitButton({ label, loading, ...props }) {
	return (
		<button
			{...props}
			className='py-3 text-base bg-primary w-full flex justify-center items-center rounded-xl text-background h-16 gap-2'
			disabled={loading}
		>
			{loading ? <InlineLoader /> : label}
		</button>
	)
}
