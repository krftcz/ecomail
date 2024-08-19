/* eslint-disable consistent-return */
export default {
	scrollBehavior: (to, from, savedPosition) => {
		const nuxtApp = useNuxtApp();

		if (savedPosition) {
			nuxtApp.hook('page:transition:finish', () => {
				window.scrollTo(savedPosition);
			});

			return;
		}

		// smooth scroll to anchor
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			};
		}

		// if link is to the same page, scroll to top with smooth behavior
		if (to === from) {
			return {
				left: 0,
				top: 0,
				behavior: 'smooth',
			};
		}

		nuxtApp.hook('page:transition:finish', () => {
			window.scrollTo(0, 0);
		});
	}
};
