let timerOut;
let usedQuotes = [];


function getRandomQuotes (quotes){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let getQuotes = quotes[randomNumber];
  usedQuotes.push(getQuotes);
  quotes.splice(usedQuotes, 1)[0];
  console.log(quotes.length)

  if(quotes.length === 0){
    quotes = usedQuotes;
    usedQuotes = [];
  }
  return getQuotes;
}

timerOut = window.setInterval(printQuote, 10000);
function printQuote(arr) {
let quoteRandom = getRandomQuotes(quotes);
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
printQuote(quotes);

document.querySelector('#loadQuote').addEventListener('click', () => {
console.log(printQuote(quotes));
})
