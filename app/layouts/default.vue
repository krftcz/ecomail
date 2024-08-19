<template>
	<div class="layout">
		<dev-grid v-if="config.public.appDebug" />

		<common-header />

		<div class="layout__content">
			<slot />
		</div>

		<common-footer />
	</div>
</template>

<script setup>
	const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		&__content {
			flex: 1;
		}
	}
</style>
