<template>
	<section class="hero section">
		<div class="row">
			<div class="hero__content column">
				<p class="hero__eyebrow">
					Eyebrow ipsum
				</p>

				<h1 class="hero__title">
					Lorem
					<br v-if="!device.isDesktop" />
					ipsum
				</h1>

				<p v-if="device.isDesktop" class="hero__perex">
					{{ perexContent }}
				</p>
			</div>

			<div class="hero__image column">
				<partial-image
					:x1="`images/hero.jpg`"
					:x2="`images/hero@2x.jpg`"
					alt="Lorem ipsum"
				/>
			</div>
		</div>

		<div class="row">
			<div class="column">
				<p v-if="!device.isDesktop" class="hero__perex">
					{{ perexContent }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
	const {device} = useWebpage();

	const perexContent = `Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore
		et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`;
</script>

<style lang="scss" scoped>
	.hero {
		background: linear-gradient(to bottom, $color-yellow 0%, rgba($color-yellow, 0) 100%);

		&__eyebrow {
			@include typo(d2);

			color: $color-green-dim;
		}

		&__content {
			@include flex-column(12);

			padding-top: spacer(lg);
			text-align: center;

			@include breakpoint(sm up) {
				@include flex-column(auto);

				padding-top: spacer(xxl);
				text-align: left;
			}

			@include breakpoint(md up) {
				padding-top: spacer(xxxl);
				padding-bottom: spacer(xxl);
			}
		}

		&__title {
			@include typo(d1);

			margin-top: spacer(xs);
		}

		&__perex {
			@include typo(b1);

			margin: spacer(lg) auto 0;
			text-align: center;

			@include breakpoint(sm up) {
				max-width: rem(550);
				margin-top: spacer(xl);
			}

			@include breakpoint(md up) {
				max-width: rem(502);
				margin: spacer(md) 0 0;
				text-align: left;
			}
		}

		&__image {
			@include flex-column(12);

			display: flex;
			justify-content: center;
			padding-top: spacer(lg);
			text-align: center;

			@include breakpoint(sm up) {
				@include flex-column(auto);

				justify-content: flex-end;
				padding-top: spacer(xl);
			}

			@include breakpoint(md up) {
				padding-top: spacer(xxl);
			}
		}
	}
</style>
