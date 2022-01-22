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
                skyblue: '97D1E1',
				blue: '#2ab5f1'
			},
			backgroundImage: {
				'under-construction': "url('/under-construction.jpg')",
			},
		},
        fontFamily: {
            'bai-jamjuree': ['"Bai Jamjuree"', 'sans-serif'],
            'belgrano': ['"Belgrano"', 'sans-serif']
        }
	},
	plugins: [],
}
