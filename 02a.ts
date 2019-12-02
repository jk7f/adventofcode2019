import {load} from './loader'


(async () => {
  const data:string = await load('02a.txt');
	const dataSplit:number[] = data.split(',').map((char:string) => parseInt(char,10));
	let hasEncountered99 = false;
	dataSplit[1] = 12;
	dataSplit[2] = 2;

	for (let index = 0; index < dataSplit.length; index+=4) {
		const INSTRUCTION = dataSplit[index];
		const INPUT1 = dataSplit[dataSplit[index +1]];
		const INPUT2 = dataSplit[dataSplit[index +2]];
		const TARGET = dataSplit[index + 3]
		if (INSTRUCTION === 99) {
			console.log('halting...');
			hasEncountered99 = true;
		} else if (!hasEncountered99) {
			if (INSTRUCTION === 1) {
				dataSplit[TARGET] = INPUT1 + INPUT2
			} else {
				dataSplit[TARGET] = INPUT1 * INPUT2
			}
		}
	}
	console.log(dataSplit[0]);
})();
