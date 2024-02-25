const path = require("path");
const fs = require("fs");

const currentDirectory = __dirname;

/* 
// #1.------> It allows to create a file 
fs.writeFileSync(`${currentDirectory}/test.txt`, '');

// #2.------> It allows to write something in file

fs.writeFileSync(`${currentDirectory}/test.txt`, "Hey! I am writting your content using nodejs"); // here it takes two argument first the 'file name' and second what do you want to write..

fs.appendFileSync(`${currentDirectory}/test.txt`, "\n\nHellow! I am appending here...");



// #3.-------> It allows we to read any file
const readFile = fs.readFileSync(`${currentDirectory}/test.txt`);
console.log(readFile.toString());


// #4.--------> It allows to give the current path of our file
console.log(__dirname);


// #5.----------> It allows to join something with the path
const joinPath = path.join("fileOne", "fileTwo", "fileSecond");
console.log(joinPath);


// #6.---------> It allows to delete any file 
const deleteFile = fs.unlinkSync(`${currentDirectory}/faltu.txt`); */


const fileExtension = ".mp3";
const fileName = "Music";

// console.log(fileDirectory)
// fs.readdir(`${fileDirectory}`, (error, data) => {
//      data.forEach((itm) => {
//           const currentFiles = path.join(fileDirectory, itm);
//           fs.renameSync(currentFiles, "nice");

//      })
// })

// const readFiles = fs.readdirSync('files');
// console.log(readFiles)





fs.readdirSync('./files')