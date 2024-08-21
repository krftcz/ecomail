import svgLoader from 'vite-svg-loader';

console.info(`Building for: \`${process.env.ENV_NAME || process.env.NODE_ENV}\``);

const nuxtConfig = {
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1'
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		}
	},

	runtimeConfig: {
		public: {
			appDebug: process.env.APP_DEBUG === 'true',
			siteName: process.env.NUXT_SITE_NAME
		}
	},

	modules: [
		'@nuxtjs/stylelint-module',
		'@nuxtjs/eslint-module',
		'@nuxtjs/device',
		'@vueuse/nuxt',
		'@nuxtjs/google-fonts'
	],

	device: {
		refreshOnResize: true
	},

	stylelint: {
		lintOnStart: false,
		include: ['**/*.vue', '**/*.scss'],
		exclude: ['dist/**/*', 'node_modules/**/*']
	},

	eslint: {
		lintOnStart: false
	},

	css: [
		'normalize.css',
		`~/assets/scss/common.scss`
	],

	googleFonts: {
		families: {
			Inter: {
				wght: [400, 500, 700, 900]
			}
		},
		subsets: ['latin', 'latin-ext']
	},

	nitro: {
		baseURL: process.env.NUXT_APP_BASE_URL
	},

	vite: {
		plugins: [
			svgLoader({
				svgo: false
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use 'sass:math';
						@use 'sass:string';
						@use 'sass:list';
						@use 'sass:map';
						@use 'sass:color';
						$isDev: ${process.env.APP_DEBUG === 'true'};
						@import '~/assets/scss/definitions.scss';
					`
				}
			}
		}
	}
};

if (process.env.WEBLOCK_ENABLED === 'true') {
	nuxtConfig.modules.push('nuxt-weblock');

	nuxtConfig.webLock = {
		password: process.env.WEBLOCK_PASSWORD,
		isEnabled: true
	};
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(nuxtConfig);
