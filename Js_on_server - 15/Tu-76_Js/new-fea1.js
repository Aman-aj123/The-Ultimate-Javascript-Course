// --------> We can simply import all the functions from "Es-7.js" file

//--------> here the 'defaultFunction' is created with the 'export default' keyword in 'Es-7.js' file so, we can remove it from destructuring..  
import defaultFunction, { animal, person, product } from "./Es-7.js";

animal("Monkey");
person("developerAman");
product("laptop");

// here we are calling directly defaultFunction
defaultFunction();