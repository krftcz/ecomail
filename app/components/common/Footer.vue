<template>
	<footer class="footer">
		<div class="row">
			<div class="footer__column column">
				<nuxt-link :to="$routes.path('page.index')">
					Home
				</nuxt-link>
			</div>

			<div class="footer__column column">
				&copy; krftcz
			</div>
		</div>
	</footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.footer {
		padding: spacer(lg) 0;
		margin: 0;
		color: $color-white;
		background: $color-black;

		&__column + &__column {
			text-align: right;
		}
	}
</style>
