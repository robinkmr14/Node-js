

const fs = require('fs');

/**

* ! Creating a folder
* * fs.mkdir('Robin'

* ! reating a file
* * fs.writeFileSync('read.txt', "My new File")

* ! add data in file
* * fs.appendFileSync('read.txt', "Append file")

* ! read file in the form of string-(default print in buffer)
* * const data = fs.readFileSync('read.txt').toString();
* * console.log(data);
* * console.log(fs.readFileSync('read.txt', "utf8"));

* ! rename the file name
* * fs.renameSync('read.txt', 'Bio.txt')

* ! delete the file
* * fs.rmSync('bio.txt');
* * fs.unlinkSync('bio.txt');

* ! Delete dir
* * fs.rmdirSync("robin");

**/
