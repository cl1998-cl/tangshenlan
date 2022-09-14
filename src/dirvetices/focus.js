import Vue from 'vue'

function handleArr(arr) {
	if(!Array.isArray(arr) || arr.length === 0 ) return
	return arr.map(i => {
		return{
			name: i.name,
			foods: i.foods.filter(j => j.checked).map(k => k.name)
		}
	})
}
