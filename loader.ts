const fs = require('fs')

export const load = (filename: string):Promise<string> => {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, "utf8", (err, data:string) => {
			resolve(data)
		})
	})


}
