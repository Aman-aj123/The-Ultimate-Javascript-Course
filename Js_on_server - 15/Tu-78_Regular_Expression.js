//------------> Regular expression in javascript is used to search any texts. It is used with strings

const sentence = "Hi friend's my name is Aman kumar and I am a very very good boy with very very awesome work I work very well";


// on the above sentence I want to replace 'very' word with 'amazing'
const changeWord = sentence.replace("very", "amazing");
console.log(changeWord); //--------> In this case only first 'very' word will replace and all words will not replace then we use



//-------------> here we are using '/very/g' so It will change the word globally 
const changeAllWords = sentence.replace(/very/g, "Amazing");
console.log(changeAllWords); //--------> Now in 'sentence' if any word will be with 'very' then It will be changed with 'Amazing'


