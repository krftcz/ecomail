<template>
	<section class="hero section">
		<div class="row">
			<div class="hero__content column">
				<p class="hero__eyebrow">
					Eyebrow ipsum
				</p>

				<h1 class="hero__title">
					Lorem ipsum
				</h1>

				<p class="hero__perex">
					Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
				</p>
			</div>

			<div class="hero__image column">
				<img src="/images/hero.jpg" alt="" />
			</div>
		</div>
	</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.hero {
		background: linear-gradient(to bottom, $color-yellow 0%, rgba($color-yellow, 0) 100%);

		&__eyebrow {
			@include typo(d2);

			color: $color-green-dim;
		}

		&__content {
			padding-top: spacer(xxxl);
			padding-bottom: spacer(xxl);
		}

		&__title {
			@include typo(d1);

			margin-top: spacer(xs);
		}

		&__perex {
			@include typo(b1);

			max-width: rem(502);
			margin-top: spacer(md);
		}

		&__image {
			padding-top: spacer(xxl);
			text-align: right;

			img {
				vertical-align: middle;
			}
		}
	}
</style>
