import routes from '~/config/routes';

export default defineNuxtPlugin((nuxtApp) => {
	const get = (name) => name.split('.').reduce((o, i) => o[i], routes);

	const path = (
		name,
		{
			params = {},
			query = {}
		} = {}
	) => {
		let finalPath = get(name).path;

		// set params
		Object.entries(params).forEach(([param, value]) => {
			finalPath = finalPath.replace(`[[${param}]]`, value);
		});

		// set query params
		const queryStrings = Object.entries(query).map(([queryParam, value]) => `${queryParam }=${value}`);
		if (queryStrings.length) {
			finalPath += `?${queryStrings.join('&')}`;
		}

		if (finalPath.includes('[[')) {
			console.warn(`Required params not set for route: ${name}, path: ${get(name).path}`);
		}

		return finalPath;
	};

	nuxtApp.provide('routes', {
		get,
		path
	});
});
