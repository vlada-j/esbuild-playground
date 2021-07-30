import { filesList, exist } from './fs';

exist('server.js')
	.then(isExist => console.log('Is server.js exist?', isExist) )

filesList('./')
	.then(list => {
		list
			.map(file => '- ' + file)
			.forEach(text => console.log(text) )
	})