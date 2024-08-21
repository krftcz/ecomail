<template>
	<div class="product">
		<div class="product__rating">
			{{ product.rating.rate }}/5
		</div>

		<div class="product__image">
			<img :src="`images/${getCategory(product.category)}.jpg`" alt="" />
		</div>

		<div class="product__content">
			<h2 class="product__title">
				{{ props.product.title }}
			</h2>

			<p class="product__perex" v-html="truncatePerex(props.product.description)" />

			<partial-button
				type="primary"
				:to="product.image"
				target="_blank"
				class="product__button"
			>
				Detail produktu
			</partial-button>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		product: {
			type: Object,
			required: true
		}
	});

	const getCategory = (category) => {
		switch (category) {
			case 'women\'s clothing':
				return 'woman-clothes';
			case 'men\'s clothing':
				return 'man-clothes';
			case 'electronics':
				return 'electronics';
			case 'jewelery':
				return 'jewelry';
			default:
				return 'unknown';
		}
	};

	const truncatePerex = (perex) => {
		if (perex.length > 142) {
			return `${perex.substring(0, 142)}&hellip;`;
		}

		return perex;
	};
</script>

<style lang="scss" scoped>
	.product {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		border-radius: $border-radius-default;

		&__rating {
			position: absolute;
			top: spacer(sm);
			right: spacer(sm);
			z-index: 1;
			font-size: rem(13);
			font-weight: $font-weight-black;
			color: $color-white;
		}

		&__image {
			aspect-ratio: 390 / 217;
			background: $color-grey-greenish;

			img {
				display: block;
			}
		}

		&__content {
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: flex-start;
			padding: spacer(md);
			background: linear-gradient(to bottom, $color-white, $color-grey);
		}

		&__title {
			@include typo(d3);
		}

		&__perex {
			@include typo(b2);

			flex: 1;
		}

		&__button {
			margin-top: spacer(lg);
		}
	}
</style>
