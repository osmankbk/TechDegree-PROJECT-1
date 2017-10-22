

function getRandomQuotes (quotes){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let getQuotes = quotes[randomNumber];
  return getQuotes;
}

function printQuote(arr) {
let quoteRandom = getRandomQuotes(quotes);
  let quoteToPrint = '<p class="quote">' + quoteRandom.quote + '</p>';
  quoteToPrint += '<p Class="source">' + quoteRandom.source;
  quoteToPrint += '<span class="citation">' + quoteRandom.citation + '</span>';
  quoteToPrint += '<span class="year">' + quoteRandom.year + '</span>' + '</p>';
return quoteToPrint;
}

function print (func){
  let final = document.querySelector('#quote-box');
  final.innerHTML = func;
}
print(printQuote(quotes));

document.querySelector('#loadQuote').addEventListener('click', () => {
  print(printQuote(quotes));
})
