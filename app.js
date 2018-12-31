'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 500; count++) {
	fs.appendFile(fileNameSuync, 'あ', 'utf8');
	fs.appendFile(fileNameSuync, 'い', 'utf8');
	fs.appendFile(fileNameSuync, 'う', 'utf8');
	fs.appendFile(fileNameSuync, 'え', 'utf8');
	fs.appendFile(fileNameSuync, 'お', 'utf8');
	fs.appendFile(fileNameSuync, '\n', 'utf8');
}
