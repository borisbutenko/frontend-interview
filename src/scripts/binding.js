function sayName () {
	console.log(this.name || 'Unnamed')
}

const aliceSayName = sayName.bind({ name: 'Alice' })
const johnSayName = aliceSayName.bind({ name: 'John' })

aliceSayName() // --- ?
johnSayName() // --- ?
