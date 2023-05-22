/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ['halloween']
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};
