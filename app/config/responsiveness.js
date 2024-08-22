// breakpoints need to be synchronized with `$breakpoints` in `variables.scss`
const breakpoints = [
	{layout: 'xxs',	from: 0,	to: 459,	layoutGroup: 'phone'},
	{layout: 'xs',	from: 460,	to: 639,	layoutGroup: 'phone'},
	{layout: 'sm',	from: 640,	to: 939,	layoutGroup: 'tablet'},
	{layout: 'md',	from: 940,	to: 1279,	layoutGroup: 'desktop'},
	{layout: 'lg',	from: 1280,	to: 1599,	layoutGroup: 'desktop'},
	{layout: 'xl',	from: 1600,	to: 1919,	layoutGroup: 'desktop'},
	{layout: 'xxl',	from: 1920,	to: 99999,	layoutGroup: 'desktop'}
];

// TODO: replace with https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group when better supported
const groupBy = (items, key) => items.reduce(
	(result, item) => ({
		...result,
		[item[key]]: [
			...(result[item[key]] || []),
			item,
		],
	}),
	{},
);

const groupedBreakpoints = Object.values(groupBy(breakpoints, 'layoutGroup')).map((group) => {
	const first = group[0];
	const last = group[group.length - 1];

	return {
		from: first.from,
		to: last.to,
		layoutGroup: first.layoutGroup
	};
});

const remapBreakpoint = (breakpoint) => ({
	...breakpoint,
	query: `(min-width: ${breakpoint.from / 16}em) and (max-width: ${(breakpoint.to + 1) / 16}em)`,
	queryPre: `(max-width: ${(breakpoint.from - 1) / 16}em)`,
	queryMin: `(min-width: ${breakpoint.from / 16}em)`,
	queryMax: `(max-width: ${(breakpoint.to + 1) / 16}em)`,
	queryPost: `(min-width: ${breakpoint.from / 16}em)`
});

export default {
	breakpoints: breakpoints.map((breakpoint) => remapBreakpoint(breakpoint)),
	groupedBreakpoints: groupedBreakpoints.map((breakpoint) => remapBreakpoint(breakpoint))
};
