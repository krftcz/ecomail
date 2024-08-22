<template>
	<picture class="img">
		<source
			:srcset="`${props.x1} 1x, ${props.x2} 2x`"
		/>

		<img
			:src="props.x1"
			:alt="props.alt"
		/>
	</picture>
</template>

<script setup>
	const props = defineProps({
		x1: {
			type: String,
			required: true
		},
		x2: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		}
	});
</script>

<style lang="scss" scoped>
	.img,
	.img img {
		display: block;
	}
</style>
