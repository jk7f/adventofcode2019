import {load} from './loader'
const KEY = 19690720;

const loop = (arr: number[], noun: number, verb: number):void => {
	arr[1] = noun;
	arr[2] = verb;
	let hasEncountered99 = false; //exit code

	for (let index = 0; index < arr.length; index+=4) {
		const INSTRUCTION = arr[index];
		const INPUT1 = arr[arr[index +1]];
		const INPUT2 = arr[arr[index +2]];
		const TARGET = arr[index + 3]
		if (INSTRUCTION === 99) {
			// console.log('halting...');
			hasEncountered99 = true;
		} else if (!hasEncountered99) {
			if (INSTRUCTION === 1) {
				arr[TARGET] = INPUT1 + INPUT2
			} else {
				arr[TARGET] = INPUT1 * INPUT2
			}
		}
	}

	if (arr[0] === KEY) {
		console.log(100 * noun + verb);
	}
}

(async () => {
  const data:string = await load('02a.txt');
	const dataSplit:number[] = data.split(',').map((char:string) => parseInt(char,10));

	for (let noun = 0; noun < 100; noun++) {
		for (let verb = 0; verb < 100; verb++) {
			loop(JSON.parse(JSON.stringify(dataSplit)), noun, verb)
		}
	}
})();
