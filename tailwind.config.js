module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				cream: '#FDDCD3',
				orange: '#F1662A',
				brown: '#534748',
			},
			backgroundImage: {
				'under-construction': "url('/under-construction.jpg')",
			},
		},
	},
	plugins: [],
}
