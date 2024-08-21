<template>
	<section class="products section">
		<div class="row">
			<div class="products__filter column">
				<div
					class="products__filter-item"
					:class="{'is-active': productSort === 'best'}"
					@click="changeSort('best')"
				>
					Nejlepší
				</div>

				<div
					class="products__filter-item"
					:class="{'is-active': productSort === 'worst'}"
					@click="changeSort('worst')"
				>
					Nejhorší
				</div>
			</div>
		</div>

		<div class="products__content row">
			<div
				v-for="product in products"
				:key="product.id"
				class="products__item column"
			>
				<partial-product :product="product" />
			</div>
		</div>

		<div class="products__more row">
			<div class="column">
				<partial-button
					v-if="hasMore"
					type="secondary"
					:disabled="isFetching"
					@click="loadMore()"
				>
					Načíst další
				</partial-button>

				<p v-else class="products__more-done">
					Více toho tady nemáme.
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
	const products = reactive([]);
	const perPage = 6;
	const page = ref(1);
	const hasMore = ref(true);
	const productSort = ref('best');
	const isFetching = ref(false);

	const {data, error} = await useAsyncData(
		'products',
		async () => {
			isFetching.value = true;

			const response = await $fetch('/api/products', {
				params: {
					page: page.value,
					limit: perPage,
					sort: productSort.value
				}
			});

			isFetching.value = false;

			return response;
		},
		{
			watch: [page, productSort]
		}
	);

	if (error.value) {
		throw createError({
			statusCode: error.value.statusCode || 500,
			message: 'Failed to load products'
		});
	}

	products.push(...data.value.body.products);
	hasMore.value = data.value.body.hasMore;

	watch(data, () => {
		if (page.value === 1) {
			products.length = 0;
		}

		hasMore.value = data.value.body.hasMore;
		products.push(...data.value.body.products);
	});

	const changeSort = (sortValue) => {
		productSort.value = sortValue;
		page.value = 1;
	};

	const loadMore = () => {
		if (hasMore.value && !isFetching.value) {
			page.value++;
		}
	};
</script>

<style lang="scss" scoped>
	.products {
		padding: 0 0 spacer(xxl);
		margin: 0;

		&__filter {
			display: flex;
			gap: spacer(xxs);

			&-item {
				display: flex;
				align-items: center;
				height: rem(40);
				padding: 0 spacer(xxs);
				font-weight: $font-weight-bold;
				cursor: pointer;
				border-radius: $border-radius-small;

				&.is-active {
					color: $color-white;
					background: $color-green-dim;
				}
			}
		}

		&__content {
			gap: spacer(sm) 0;
			margin-top: spacer(xl);
		}

		&__item {
			@include flex-column(4);
		}

		&__more {
			margin-top: spacer(xxl);
			text-align: center;

			&-done {
				@include typo(b1);
			}
		}
	}
</style>
