import config from '~/config';

const getQueryByLayout = (layoutGroup) => config.groupedBreakpoints.find((breakpoint) => breakpoint.layoutGroup === layoutGroup)?.query;

const getCurrentLayout = (screenWidth) => config.breakpoints.find((breakpoint) => breakpoint.from < screenWidth && screenWidth <= breakpoint.to)?.layout;

const getCurrentLayoutGroup = (screenWidth) => config.groupedBreakpoints.find((breakpoint) => breakpoint.from < screenWidth && screenWidth <= breakpoint.to)?.layoutGroup;

export default () => {
	const nuxtApp = useNuxtApp();

	const device = reactive({
		isDesktop: nuxtApp.$device.isDesktop,
		isTablet: nuxtApp.$device.isTablet,
		isMobile: nuxtApp.$device.isMobile,
		isRetina: false, // no way to detect on server side
		isIos: nuxtApp.$device.isIos,
		hasNativeLazyload: false,
		width: 0,
		layout: nuxtApp.$device.isDesktop ? 'desktop' : 'phone',
		layoutGroup: nuxtApp.$device.isDesktop ? 'desktop' : 'phone',
	});

	const togglePageScrolling = (unlock) => {
		const html = document.querySelector('html');
		if (!unlock) {
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.paddingRight = `${scrollbarWidth}px`;

			html.classList.add('no-scroll');
		} else {
			document.body.style.paddingRight = '0px';

			html.classList.remove('no-scroll');
		}
	};

	onMounted(() => {
		device.isDesktop = useMediaQuery(getQueryByLayout('desktop'));
		device.isTablet = useMediaQuery(getQueryByLayout('tablet'));
		device.isMobile = useMediaQuery(getQueryByLayout('phone'));
		device.isRetina = useMediaQuery('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)').value;
		device.isIos = nuxtApp.$device.isIos;
		device.hasNativeLazyload = 'loading' in document.createElement('img');
		device.width = useWindowSize().width;
		device.layout = getCurrentLayout(device.width);
		device.layoutGroup = getCurrentLayoutGroup(device.width);
	});

	watch(
		() => device.width,
		(newValue) => {
			device.layout = getCurrentLayout(newValue);
			device.layoutGroup = getCurrentLayoutGroup(newValue);
		},
	);

	// maybe unnecessary
	onUnmounted(() => {
		device.isDesktop = nuxtApp.$device.isDesktop;
		device.isTablet = nuxtApp.$device.isTablet;
		device.isMobile = nuxtApp.$device.isMobile;
		device.isRetina = false;
		device.isIos = nuxtApp.$device.isIos;
		device.hasNativeLazyload = false;
		device.width = 0;
		device.layout = nuxtApp.$device.isDesktop ? 'desktop' : 'phone';
		device.layoutGroup = nuxtApp.$device.isDesktop ? 'desktop' : 'phone';
	});

	return {
		device,
		togglePageScrolling,
		getQueryByLayout
	};
};
