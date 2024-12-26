const translateDictionary = new Map([['homePageTitle', 'Главная']]);

function getTranslation(key: string): string {
	return translateDictionary.get(key) || key;
}

export default getTranslation;
