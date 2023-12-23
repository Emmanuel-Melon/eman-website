/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
			  'custom-gradient': 'linear-gradient(135deg, hsla(180, 50%, 60%, 1) 0%, hsla(0, 100%, 80%, 1) 100%)',
			},
		  },
	},
	daisyui: {
		themes: ['lofi']
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};
