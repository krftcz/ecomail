export default defineNuxtPlugin((nuxtApp) => {
	// shuffles an array in-place
	const shuffle = (array) => {
		let counter = array.length;
		while (counter > 0) {
			const index = Math.floor(Math.random() * counter--);
			const temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}
		return array;
	};

	// gets correct word form for the specific amount
	const wordsByCount = (count, words) => {
		switch (count) {
			case 1:
				return words[0];
			case 2:
			case 3:
			case 4:
				return words[1];
			case 0:
			default:
				return words[2];
		}
	};

	// returns if value is empty
	const isEmpty = (value) =>
		typeof value === 'undefined'
			|| value === ''
			|| value === null
			|| value === []
			|| (typeof value === 'object' && !Object.keys(value).length);

	const addNbsp = (string) => {
		const list = [
			'a',
			'i',
			'o',
			'u',
			'k',
			's',
			'v',
			'z',
			'A',
			'I',
			'O',
			'U',
			'K',
			'S',
			'V',
			'Z',
			'by',
			'co',
			'či',
			'do',
			'je',
			'ke',
			'ku',
			'na',
			'no',
			'od',
			'po',
			'se',
			'ta',
			'to',
			've',
			'za',
			'ze',
			'že',
			'aby',
			'byl',
			'což',
			'jen',
			'když',
			'kde',
			'kdy',
			'který',
			'která',
			'které',
			'nad',
			'pod',
			'pro',
			'před',
			'při',
			'tak',
			'Co',
			'Či',
			'Do',
			'Je',
			'Ke',
			'Ku',
			'Na',
			'No',
			'Od',
			'Po',
			'Se',
			'Ta',
			'To',
			'Ve',
			'Za',
			'Ze',
			'Že',
			'Aby',
			'Byl',
			'Což',
			'Jen',
			'Když',
			'Kde',
			'Kdy',
			'Který',
			'Která',
			'Které',
			'Nad',
			'Pod',
			'Pro',
			'Před',
			'Při',
			'Tak'
		];

		// Add &nbsp; after each part of the date separated by periods
		string = string.replace(/(\d+)\.\s*(\d+)\.\s*(\d+)/g, (match, day, month, year) => `${day}.&nbsp;${month}.&nbsp;${year}`);

		// Replace spaces within numbers with &nbsp;
		string = string.replace(/(\d+\s*\d*)/g, (match) => match.replace(/\s/g, '&nbsp;'));

		// Add &nbsp; after the number if units follows
		string = string.replace(/(\d+)\s?(Kč|m|cm|mm|kg|g|ks|%|x|X)/g, (match, number, suffix) => `${number}&nbsp;${suffix}`);

		list.forEach((item) => {
			string = string.replaceAll(` ${item} `, ` ${item}&nbsp;`);
		});

		return string;
	};

	nuxtApp.provide('helpers', {
		shuffle,
		wordsByCount,
		isEmpty,
		addNbsp
	});
});
