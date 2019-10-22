function sum (a, b) {
	return a + b
}

const anotherSum = sum.bind(null, 2)
console.log(anotherSum(2) === sum(2, 2,)) // --- ?
