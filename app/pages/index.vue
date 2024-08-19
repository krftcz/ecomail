<template>
	<div class="home page">
		<section class="section">
			<div class="row">
				<div class="column">
					<h1 class="home__title section__title">
						Nuxt 3 Template
					</h1>

					<div class="home__perex section__perex">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="section">
			<div class="row">
				<div class="home__column column">
					<h2 class="section__title section__title--small">
						VueUse
					</h2>

					<div class="section__perex section__perex--small">
						<p>
							Collection of Vue composition utilities,
							<br />
							see more in
							<a href="https://vueuse.org/">
								VueUse documentation
							</a>
						</p>
					</div>

					<pre :style="{whiteSpace: 'pre-line'}">
						Mouse position: {{ x }}, {{ y }}
					</pre>
				</div>

				<div class="home__column column">
					<h2 class="section__title section__title--small">
						Other examples
					</h2>

					<div class="section__perex section__perex--small">
						<p>Webpage composable gives you a reactive way to detect device type.</p>
					</div>

					<pre :style="{whiteSpace: 'normal'}">
						{{ webpage }}
					</pre>

					<div class="section__perex section__perex--small">
						<p>And this is a button.</p>
					</div>

					<partials-button :to="$routes.path('page.contact')" type="primary">
						click
					</partials-button>

					<div class="section__perex section__perex--small">
						<p>
							That button uses routes plugin. You should use it too. Define routes in ~/config/routes.js
							and get them by using $routes.path('page.path.to.object')
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	const webpage = useWebpage();
	const {x, y} = useMouse();
	const {$meta} = useNuxtApp();

	const data = reactive({
		accordions: [
			{
				title: 'Random title for accordion',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum.'
			},
			{
				title: 'And yet another title',
				text: 'Dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultrices ipsum.'
			}
		]
	});
</script>

<style lang="scss" scoped>
	.home {
		$this: &;

		&__row {
			& + #{$this}__row {
				margin-top: spacer(lg);

				@include breakpoint(sm up) {
					margin-top: spacer(xl);
				}
			}
		}

		&__column {
			@include flex-column(12);

			@include breakpoint(sm up) {
				@include flex-column(6);
			}

			& + #{$this}__column {
				margin-top: spacer(lg);

				@include breakpoint(sm up) {
					margin-top: 0;
				}
			}
		}

		&__accordion {
			margin-top: spacer(lg);
		}

		pre {
			tab-size: 4;
		}
	}
</style>
