// Here we are using the 'printMessage' function inside 'file1.js' And the printMessage function is created  inside 'Tu-76_Modules.js' file

/* const printSomething = require("./Tu-76_Modules"); // here we write the file what we want



// here we are using the functions which exists in 'Tu-76_Modules.js' file.
printSomething.printMessage("This is a simple message..");
printSomething.teacherMessage("This is a teacher message..");
printSomething.advanceMessage("This is a advance message..");  */


// ---------> We can also apply destructuring here like this:
const { printMessage, teacherMessage, advanceMessage } = require("./Tu-76_Modules.js");

// These all will give the same output as top : 
printMessage("This is a a Printing mesage by file1.js");
teacherMessage("This is a teacher message by file1.js");
advanceMessage("This is a advance message by file1.js");
