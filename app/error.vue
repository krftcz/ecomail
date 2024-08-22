<template>
	<nuxt-layout name="default">
		<div class="error section">
			<div class="row">
				<div class="error__icon-wrap column">
					<div class="error__icon svg">
						<svg-icon-sad-face />
					</div>
				</div>

				<div class="error__content column">
					<h1 class="error__title section__title">
						{{ error.title }}
					</h1>

					<p class="error__perex section__perex">
						{{ error.description }}
					</p>

					<partial-button
						v-if="props.error.statusCode === 404"
						:to="$routes.path('page.index')"
						type="primary"
						class="error__button"
					>
						Back to home
					</partial-button>
				</div>
			</div>
		</div>
	</nuxt-layout>
</template>

<script setup>
	const SvgIconSadFace = defineAsyncComponent(() => import('~/assets/icons/sad-face.svg'));

	const props = defineProps({
		error: {
			type: Object,
			required: true
		}
	});

	const error = computed(() => {
		if (props.error.statusCode === 404) {
			return {
				title: 'Page not found',
				description: 'The page you are looking for does not exist.'
			};
		}

		return {
			title: 'An error occurred',
			description: 'Please try again later.'
		};
	});

	onMounted(() => {
		console.error(props.error);
	});

	useHead({
		title: `Error ${props.error.statusCode}`
	});
</script>

<style lang="scss" scoped>
	.error {
		padding: spacer(xl) 0;

		&__description {
			@include typo(b1);
		}

		&__icon-wrap {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&__icon {
			font-size: rem(128);
		}

		&__button {
			margin-top: spacer(lg);
		}
	}
</style>
