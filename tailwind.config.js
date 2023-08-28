/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			alef: ['alef'],
			aboreto: ['aboreto']
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			colors: {
				red: '#BC3343',
				orange: '#EE9521',
				yellow: '#F9B71C',
				green: '#69A84F',
				blue: '#02B4CB',
				indigo: '#0F5F8E',
				violet: '#814B72'
			},
			maxWidth: {
				'1/2': '50%'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
