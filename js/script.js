import {
	getData, editComplData
} from "./http.js"
import {
	createBlock
} from "./ui.js"

let boxes = document.querySelectorAll('.box')
let mainCont = document.querySelector('.container')

let today = []
let tommorow = []
let later = []

getData("/6203a480-806c-4f54-8961-a73b876fe8a0")
	.then(data => {
		for (let item of data) {
			let y = item.left

			if (y === 0) {
				today.push(item)
			} else if (y === 1 ) {
				tommorow.push(item)
			} else {
				later.push(item)
			}
		}

		createBlock(today, mainCont, "FOR TODAY")
		createBlock(tommorow, mainCont, "TOMORROW")
		createBlock(later, mainCont, "LATER")
	})