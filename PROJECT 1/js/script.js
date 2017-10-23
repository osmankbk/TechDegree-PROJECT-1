let timerOut;

function getRandomQuotes (quotes){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let getQuotes = quotes[randomNumber];
  return getQuotes;
}
window.clearInterval(timerOut);
timerOut = window.setInterval(printQuote, 10000);

function printQuote(arr) {
let quoteRandom = getRandomQuotes(quotes);
  let quoteToPrint = '<p class="quote">' + quoteRandom.quote + '</p>';
  quoteToPrint += '<p Class="source">' + quoteRandom.source;
  quoteToPrint += '<span class="citation">' + quoteRandom.citation + '</span>';
  quoteToPrint += '<span class="year">' + quoteRandom.year + '</span>' + '</p>';
  document.body.style.backgroundColor = rgbColor(128, 55, 45);
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
  printQuote(quotes);
})
