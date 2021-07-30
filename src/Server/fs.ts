import fs from 'fs';

export function filesList(path) {
	return new Promise((resolve, reject) => {
		fs.readdir(path, (err, files) => {
			if (err) reject(err)
			else resolve(files)
		})
	})
}

export function exist(path) {
	return new Promise((resolve, reject) => {
		fs.access(path, fs.F_OK, (err) => {
			if (err) resolve(false)
			else resolve(true)
		})
	})
}