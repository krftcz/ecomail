<template>
	<div class="home page">
		<section-hero />

		<section-products />
	</div>
</template>

<script setup>
	const config = useRuntimeConfig();

	const title = 'Home | Ecomail Front-End developer task';
	const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, voluptatibus.';

	useSeoMeta({
		title,
		description,
		ogTitle: title,
		ogDescription: description,
		ogImage: `${config.public.siteUrl}/share-image.png`
	});
</script>
