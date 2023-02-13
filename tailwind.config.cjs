/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		fontFamily: {
			sans: ['Arial', 'Inter', 'Helvetica', 'sans-serif'],
		},
		extend: {
			fontSize: {
				base: '22px',
				lg: '28px',
				xl: '50px',
				'2xl': '62px',
			},
			colors: {
				primary: '#F4A88E',
				background: '#FFFFFF',
				text: '#000000',
				elevated: '#E4E4E4',
			},
			aspectRatio: {
				card: '3 / 4',
			},
		},
	},
	plugins: [],
}
