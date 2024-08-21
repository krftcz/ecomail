export default defineEventHandler(async (event) => {
	const {page = 1, limit = 6, sort = 'best'} = getQuery(event);

	const pageNumber = parseInt(page, 10);
	const pageSize = parseInt(limit, 10);

	try {
		const response = await fetch('https://fakestoreapi.com/products');

		if (!response.ok) {
			throw new Error('Failed to fetch data from external API');
		}

		const allProducts = await response.json();

		const sortedProducts = allProducts.sort((a, b) => {
			if (sort === 'worst') {
				return a.rating.rate - b.rating.rate;
			}
			return b.rating.rate - a.rating.rate;
		});

		const offset = (pageNumber - 1) * pageSize;
		const paginatedProducts = sortedProducts.slice(offset, offset + pageSize);
		const hasMore = paginatedProducts.length === pageSize && sortedProducts.length > offset + pageSize;

		return {
			statusCode: 200,
			body: {
				products: paginatedProducts,
				hasMore
			}
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: {
				error: 'Failed to fetch products from external API'
			}
		};
	}
});
