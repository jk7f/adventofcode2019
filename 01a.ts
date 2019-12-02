import {load} from './loader'


const getFuel = (prev: number, input: number):number => {
	return prev + (Math.floor(input / 3) -2)
}

(async () => {
  const data:[] = await load('01a.txt');
	const result =  data.reduce(getFuel, 0);
	console.log(result);
	
	
})();
