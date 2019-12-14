const INPUT = '165432-707912';
// two after eachother
// decreasing number
const START = parseInt(INPUT.split('-')[0],10);
const END = parseInt(INPUT.split('-')[1],10);
let count = 0;

const loop = (input:number) => {
	const inputStr = ''+input;
	let decreases = false;
	let hasDoubles = false;
	for (let index = 1; index <= inputStr.length; index++) {
		const letter = inputStr[index];

		if (parseInt(letter,10) < parseInt(inputStr[index-1],10) ) {
			decreases = true
		}
		if (parseInt(letter,10) === parseInt(inputStr[index-1],10)) {
			hasDoubles = true
		}

	}
	if (!decreases && hasDoubles) {
			count++
	}
}

for (let input = START; input < END; input++) {
	loop(input);
}
console.log(count);
