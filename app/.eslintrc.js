module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [],
	extends: [
		'plugin:nuxt/recommended',
		'airbnb-base',
		'@nuxtjs',
		'plugin:vue/recommended'
	],
	// add your custom rules here
	rules: {
		'import/no-extraneous-dependencies': 'off',
		// nuxt
		'nuxt/no-cjs-in-config': 'off',
		semi: ['warn', 'always'],

		// own for ES6
		'template-curly-spacing': 'off',
		'comma-dangle': 'off',
		quotes: [
			'warn',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'no-undef': 'off',
		'no-console': 'off',
		'no-case-declarations': 'off',
		'no-unused-vars': 'off',
		'semi-style': 'off',
		'no-tabs': 'off',
		'no-underscore-dangle': 'off',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['TemplateLiteral'],
			},
		],
		'spaced-comment': 'off',
		'object-curly-newline': 'off',
		'object-curly-spacing': ['warn', 'never'],
		'no-multi-assign': 'off',
		'no-plusplus': 'off',
		'no-param-reassign': 'off',
		'no-use-before-define': 'off',
		'implicit-arrow-linebreak': 'off',
		'class-methods-use-this': 'off',
		'no-nested-ternary': 'off',
		'arrow-parens': ['warn', 'always'],
		'max-len': 'off',
		'no-prototype-builtins': 'off',
		'linebreak-style': 'off',
		'operator-linebreak': ['warn', 'before'],
		'no-unmodified-loop-condition': 'off',
		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'func-names': 0,
		'no-useless-catch': 'off',
		'no-promise-executor-return': 'off',

		// *.vue files
		// allow v-html, we need it for proper SSR
		'vue/no-v-html': 'off',
		// base indent at <script> tag
		'vue/script-indent': [
			'warn',
			'tab',
			{
				baseIndent: 1,
				switchCase: 1,
			},
		],
		// attributes per line indent setting
		'vue/html-indent': [
			'warn',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		// freedom, becouse sometime we want (need) attributes in single line (design attributes or analytics, ...)
		'vue/max-attributes-per-line': [
			'warn',
			{
				singleline: 99,
				multiline: {
					max: 1,
				},
			},
		],
		'vue/singleline-html-element-content-newline': [
			'error',
			{
				ignoreWhenNoAttributes: true,
				ignoreWhenEmpty: true,
				ignores: ['pre'],
			},
		],
		'vue/html-self-closing': [
			'warn',
			{
				html: {
					void: 'always',
				},
			},
		],
		'vue/multi-word-component-names': 'off',
		'import/extensions': ['error', 'never', { svg: 'always', jpg: 'always' }],
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off',
			}
		}
	]
};
