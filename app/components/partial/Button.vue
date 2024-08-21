<template>
	<component
		:is="btnComponent"
		v-bind="btnProps"
		class="btn"
		:class="getCssClass"
	>
		<span v-if="$slots.iconLeft" class="btn__icon btn__icon--left svg">
			<slot name="iconLeft" />
		</span>

		<slot />

		<span v-if="$slots.iconRight" class="btn__icon btn__icon--right svg">
			<slot name="iconRight" />
		</span>
	</component>
</template>

<script setup>
	const attrs = useAttrs();
	const slots = useSlots();

	const props = defineProps({
		type: {
			type: [String, Array],
			required: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		targetBlank: {
			type: Boolean,
			default: false
		},
	});

	const getCssClass = computed(() => {
		const type = !Array.isArray(props.type) ? [props.type] : props.type;

		if (slots.iconLeft) {
			type.push('icon-left');
		}

		if (slots.iconRight) {
			type.push('icon-right');
		}

		return [
			...type.map((item) => (`btn--${item}`)),
			props.disabled ? 'is-disabled' : ''
		];
	});

	const btnComponent = computed(() => {
		if (attrs.to) {
			return resolveComponent('NuxtLink');
		}
		return (attrs.href) ? 'a' : 'button';
	});

	const btnProps = computed(() => {
		const propsObj = {};

		if (attrs.to) {
			propsObj.to = attrs.to;
		}

		if (props.disabled && !(attrs.to || attrs.href)) {
			propsObj.disabled = true;
		}

		if (props.targetBlank) {
			propsObj.target = '_blank';
			propsObj.rel = 'noopener';
		}

		return propsObj;
	});
</script>

<style lang="scss" scoped>
	.btn {
		$this: &;

		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: rem(135);
		height: rem(56);
		padding: 0 rem(22);
		font-size: rem(16);
		font-weight: $font-weight-bold;
		text-decoration: none;
		cursor: pointer;
		background: none;
		border: 0;
		border-radius: rem(6);
		transition: $transition-default;

		&__icon {
			&--right {
				margin-left: rem(5);
			}

			&--left {
				margin-right: rem(5);
			}
		}

		&--primary {
			color: $color-white;
			background-color: $color-green-light;

			@include btn-states {
				background-color: color.adjust($color-green-light, $lightness: -5%);
			}
		}

		&--secondary {
			color: $color-green;
			background-color: $color-green-dim-light;

			@include btn-states {
				background-color: color.adjust($color-green-dim-light, $lightness: -5%);
			}
		}
	}
</style>
