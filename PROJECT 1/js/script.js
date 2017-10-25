//Title: Treehouse Project 1
//Project: Random Quote Generator
//Goal: exceed expectation

//The comments below are in order of how i proceeded throug the Project
//Create the quots array in a different file(quotes.js) to keep things organized

 /*create a function(getRandomQuotes) to retrieve a random quotes from the array
 *create a function(printQuote) that calls the getRandomQuotes() function and stores the returned quote object in a variable
 *construct a string in the printQuote() function containing different properties of the quote object and prints out the final html to the page using the innerHTML on the 'quote-box' div
 *call the printQuote() to display random quotes on the webpage
 *select the button using querySelector and give an action when click
 *create a variable (timerOut) that holds the setInterval() methods and give it the printQuote() and 10000 millseconds for parameters
 *create a function(rgbColor) that returns a random color and added it to the printQuote function
 *create a variable(usedQuotes) to hold an empty array that stores quotes thats been projected
 *wrap the printQuote() function in the button's function with a console.log to display quotes projected when click
 *push the already projected quotes to the empty array(usedQuotes[])
 *create a splice method that removes a quote from the quotes array each time it returns
 *add an if statement that checks the quotes[] array if its empty and replennishes it is-
 - By setting the quotesarray[] equal to the variable holding the usedQuotes(), then usedQuotes back to an empty array[](keeping them in a loop)
*/
let timerOut;
let usedQuotes = [];


function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let getQuotes = quotes[randomNumber];
  usedQuotes.push(getQuotes);
  quotes.splice(randomNumber, 1);

  if(quotes.length === 0){
    quotes = usedQuotes;
    usedQuotes = [];
  }
  return getQuotes;
}

timerOut = window.setInterval(printQuote, 10000);
function printQuote() {
let quoteRandom = getRandomQuote();
  let quoteToPrint = '<p class="quote">' + quoteRandom.quote + '</p>';
  quoteToPrint += '<p Class="source">' + quoteRandom.source;
  quoteToPrint += '<span class="citation">' + quoteRandom.citation + '</span>';
  quoteToPrint += '<span class="year">' + quoteRandom.year + '</span>';
  quoteToPrint += '<span class="tag">, Category: ' + quoteRandom.tag + '</span>';
  quoteToPrint += '</p>';

  document.body.style.backgroundColor = rgbColor();
return document.querySelector('#quote-box').innerHTML = quoteToPrint;
}

function rgbColor() {
  let color = 'rgb(';
color += Math.floor(Math.random () * 130 + 1) + ',';
color += Math.floor(Math.random () * 130 + 1) + ',';
color += Math.floor(Math.random () * 130 + 1);
color += ')';
return color;
}
printQuote();

document.querySelector('#loadQuote').addEventListener('click', () => {
console.log(printQuote());
})
