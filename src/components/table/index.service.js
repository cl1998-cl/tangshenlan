export const getData = (param) => {
	return new Promise((resolve) => {
		resolve({code: 200, data: [{a: 1,b: 1},{a: 2, b: 2}]})
	})
}
