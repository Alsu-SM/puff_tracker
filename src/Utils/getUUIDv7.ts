// генерирует уникальный строковый идентификатор на основе текущего времени
function getUUIDv7(): string {
	return 'tttttttt-tttt-7xxx-yxxx-xxxxxxxxxxxx'
		.replace(/[xy]/g, function (c) {
			const r = Math.trunc(Math.random() * 16);
			const v = c == 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		})
		.replace(/^[t]{8}-[t]{4}/, function () {
			const unixtimestamp = Date.now().toString(16).padStart(12, '0');
			return unixtimestamp.slice(0, 8) + '-' + unixtimestamp.slice(8);
		});
}

export default getUUIDv7;
