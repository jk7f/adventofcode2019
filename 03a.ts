import {load} from './loader'
const setupGrid = (size:number) => {
	const row:number[] = new Array(size).fill(0);;
	const grid = [];
	let i = size;
	while (i--) {
		grid.push(JSON.parse(JSON.stringify(row)))
	}
	return grid
}
const SIZE = 20000;
const grid = setupGrid(SIZE);
let closest = null;
const moveTo = (currPos:number[], dirX:number, dirY:number, marker:number) => {
	const newPosition = [currPos[0] + dirX,currPos[1] + dirY];
	const newPositonInGrid = grid[newPosition[0]][newPosition[1]];
	if (newPositonInGrid === 0) {
		grid[newPosition[0]][newPosition[1]] = marker;
	} else if (newPositonInGrid !== 0 && newPositonInGrid !== marker) {
		const distance = Math.abs(newPosition[0] - SIZE/2) + Math.abs(newPosition[1] - SIZE/2)
		if (!closest || distance < closest) {
			closest = distance
		}
		grid[newPosition[0]][newPosition[1]] = 3;
	} else {
		//crossing self
	}
	return newPosition;

}

const walk = (commandsArr:string[], start:number, marker:number) => {
	let position = [start, start]
	commandsArr.forEach((command:string) => {
		const direction = command[0];
		const distance = parseInt(command.substr(1), 10);

		for (let step = 0; step < distance; step++) {
			switch (direction) {
				case 'U':
					position = moveTo(position, 0, -1, marker);
					break;
				case 'D':
					position = moveTo(position, 0, 1, marker);
					break;
				case 'L':
					position = moveTo(position, -1, 0, marker);
					break;
				default: // R
					position = moveTo(position, 1, 0, marker);
					break;
			}
		}
	})
}



(async () => {
  const data:string = await load('03a.txt');
	const [wire1String, wire2String]:string[] = data.split('\n');
	const wire1Commands = wire1String.split(',');
	const wire2Commands = wire2String.split(',');
	// const wire1Commands = 'R75,D30,R83,U83,L12,D49,R71,U7,L72'.split(',');
	// const wire2Commands = 'U62,R66,U55,R34,D71,R55,D58,R83'.split(',');

	walk(wire1Commands, SIZE/2, 1);
	walk(wire2Commands, SIZE/2, 2);
	// console.table(grid);
	console.log(closest);
})();
