//--------> Here we are creating a function with the name of 'printMessage' in 'Tu-76_Modules.js' file,  We can also use this function inside another file.

//---------> If we do any change in our this file then It will be automatically changed in every file where we have used this function

const printMessage = (message) => {
     console.log(`Printing-message: ${message}`);
};

// We can also write more functions and use it in another file like printMessage --> Example: 
const advanceMessage = (advanceMsg) => {
     console.log(`Advance: ${advanceMsg}`);
};

const teacherMessage = (teacherMsg) => {
     console.log(`Teacher: ${teacherMsg}`);
};

// here we are exporting the functions by which we can use it in another file.
module.exports = { printMessage, advanceMessage, teacherMessage };