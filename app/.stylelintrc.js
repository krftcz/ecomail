module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue/scss',
		'stylelint-config-recess-order'
	],
	plugins: ['stylelint-scss'],
	rules: {
		'color-hex-length': 'long',
		'max-nesting-depth': [4, {ignoreAtRules: ['each', 'media', 'supports', 'include']}],
		'no-descending-specificity': null
	}
};
