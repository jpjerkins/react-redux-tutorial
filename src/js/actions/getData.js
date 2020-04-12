
export function getData(url) {
	return { type: 'DATA_REQUESTED', payload: { url } };
};
