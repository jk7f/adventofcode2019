import {load} from './loader'


const getFuelForMass = (input: number):number => {
	return Math.floor(input / 3) -2
}

const getFuelIterator = (prev: number, input: string):number => {
	const initialFuel = getFuelForMass(parseInt(input, 10));
	if (initialFuel <= 0) {
		return prev;
	}
	let fuelForIteration = initialFuel
	let fuelIterator = initialFuel;
	let lastAdded: null | number = null
	while(lastAdded === null || lastAdded > 0) {
		const result  = getFuelForMass(fuelIterator);
		lastAdded = result;
		fuelIterator = result;
		if (result > 0) {
			fuelForIteration += result;
		}
	}

	return prev + fuelForIteration;
}

(async () => {
  const data:string = await load('01a.txt');
	const dataSplit:string[] = data.split('\n');
	const result =  dataSplit.reduce(getFuelIterator, 0);
	// console.log(getFuelIterator(0, '100756'));
	console.log(result);


})();
