import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'rgba(255, 255, 255, 0.1)',
				input: 'rgba(255, 255, 255, 0.1)',
				ring: 'rgba(255, 255, 255, 0.1)',
				background: '#000000',
				foreground: '#ffffff',
				primary: {
					DEFAULT: '#6107e0',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#f3cf7a',
					foreground: '#000000'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: 'rgba(255, 255, 255, 0.05)',
					foreground: 'rgba(255, 255, 255, 0.5)'
				},
				accent: {
					DEFAULT: '#6107e0',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: '#000000',
					foreground: '#ffffff'
				},
				card: {
					DEFAULT: 'rgba(255, 255, 255, 0.03)',
					foreground: '#ffffff'
				},
			},
			borderRadius: {
				lg: '1rem',
				md: '0.75rem',
				sm: '0.5rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
