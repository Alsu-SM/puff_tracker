export function getRandomNumberString(length: number): string {
	let result = '';
	const characters = '0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

export function getRandomString(length: number): string {
	let result = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

export function getRandomArrayOfStrings(
	arrLength: number,
	strLength: number,
): string[] {
	const arr = [];

	for (let i = 0; i < arrLength; i++) {
		const str = getRandomString(strLength);
		arr.push(str);
	}

	return arr;
}

export function getRandomArrayOfNumbers(
	arrLength: number,
	strLength: number,
): string[] {
	const arr = [];

	for (let i = 0; i < arrLength; i++) {
		const str = getRandomNumberString(strLength);
		arr.push(str);
	}

	return arr;
}

export function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomBoolean(): boolean {
	return Math.random() < 0.5;
}

export function getRandomArrayValue<T>(arr: T[]): T {
	return arr[getRandomInt(0, arr.length - 1)];
}

export function getRandomArrayValues<T>(arr: T[], num: number): T[] {
	const MAX_ATTEMPTS = 1000;

	const newArr: T[] = [];
	if (arr.length === num) {
		return arr.slice();
	}
	let attemptsCount = 0;
	while (newArr.length !== num) {
		if (attemptsCount >= MAX_ATTEMPTS) {
			return newArr.length > 0 ? newArr.slice() : [arr[0]];
		}
		const val = arr[getRandomInt(0, arr.length - 1)];
		attemptsCount++;
		if (!newArr.includes(val)) {
			newArr.push(val);
			attemptsCount = 0;
		}
	}

	return newArr.slice();
}
