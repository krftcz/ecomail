<template>
	<div v-if="isGridVisible" class="sample-grid">
		<div class="sample-grid__full-hd-marker" />

		<div class="sample-grid__columns">
			<div class="row">
				<div v-for="i in 12" :key="i" class="column" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const isGridVisible = ref(false);

	onKeyStroke('g', () => {
		isGridVisible.value = !isGridVisible.value;
	}, {target: document});
</script>

<style scoped lang="scss">
	.sample-grid {
		&__full-hd-marker {
			@include position(fixed, 0 null 0 calc(50% - 960px));

			z-index: 9999;
			width: rem(1920);
			pointer-events: none;
			outline: 1px solid red;
		}

		&__columns {
			@include position(fixed, 0);

			z-index: 9999;
			pointer-events: none;
		}

		.column {
			background: rgb(0 0 0 / 20%);

			&::after {
				display: block;
				width: 100%;
				height: 100vh;
				content: '';
				border-right: 1px solid rgb(68 254 255 / 75%);
				border-left: 1px solid rgb(68 254 255 / 75%);
			}

			&:nth-child(odd) {
				background: rgb(175 175 175 / 25%);
			}
		}
	}
</style>
