// Here we are using again the same function  in 'file2.js'
const againMessage = require("./Tu-76_Modules.js");

// We are also using all the functions which existsin "Tu-76_Module.js" file
againMessage.advanceMessage("This is file2 message..");
againMessage.teacherMessage("This is teacher message by file2.js");
againMessage.printMessage("This is a simple message sended by file2.js");

