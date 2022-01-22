module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				cream: '#FDDCD3',
				orange: '#F1662A',
				brown: '#534748',
                skyblue: '97D1E1'
			},
		},
        fontFamily: {
            'bai-jamjuree': ['"Bai Jamjuree"', 'sans-serif'],
            'belgrano': ['"Belgrano"', 'sans-serif']
        }
	},
	plugins: [],
}
