const fs = require('fs')

export const load = (filename: string):Promise<[]> => {
	return new Promise((reject, resolve) => {
		fs.readFile(filename, "utf8", (err, data:string) => {
			resolve(data.split('\n'))
		})
	})
	

}