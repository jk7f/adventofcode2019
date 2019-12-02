import {load} from './loader'


const getFuel = (prev: number, input: string):number => {
	return prev + (Math.floor(parseInt(input,10) / 3) -2)
}

(async () => {
  const data:string = await load('01a.txt');
	const dataSplit:string[] = data.split('\n');
	const result =  dataSplit.reduce(getFuel, 0);
	console.log(result);


})();
