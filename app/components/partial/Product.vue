<template>
	<div class="product">
		<div class="product__rating">
			{{ productRating() }}
		</div>

		<div class="product__image">
			<partial-image
				:x1="`images/${categoryImage()}.jpg`"
				:x2="`images/${categoryImage()}@2x.jpg`"
				:alt="product.title"
			/>
		</div>

		<div class="product__content">
			<h2
				class="product__title"
				:title="props.product.title.length > 60 ? props.product.title : null"
				v-html="truncatedTitle()"
			/>

			<p
				class="product__perex"
				:title="props.product.description.length > 142 ? props.product.description : null"
				v-html="truncatedPerex()"
			/>

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

	const truncateString = (string, chars) => (string.length > chars ? `${string.substring(0, chars)}&hellip;` : string);

	const truncatedTitle = () => truncateString(props.product.title, 60);

	const truncatedPerex = () => truncateString(props.product.description, 142);

	const productRating = () => `${props.product.rating.rate.toString().replace('.', ',')}/5`;

	const categoryImage = () => {
		switch (props.product.category) {
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
</script>

<style lang="scss" scoped>
	.product {
		position: relative;
		display: flex;
		flex-direction: column;
		max-width: rem(392);
		height: 100%;
		margin: 0 auto;
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
			padding: spacer(sm);
			background: linear-gradient(to bottom, $color-white, $color-grey);
		}

		&__title {
			@include typo(d3);

			max-width: 100%;
			word-break: break-word;
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
