var quote = [
  {
    quote: "When we are no longer able to change a situation, we are challenged to change ourselves.",
    source: "Viktor E. Frankl",
    citation: "Man's search for meaning",
    year: "1946"
  },
  {
    quote: "The last of human freedoms: to choose one's attitude in any given set of circumstances, to choose one's own way.",
    source: "Viktor E. Frankl",
    citation: "Man's serch for meaning",
    year: "1946"
  },
  {
    quote: "The ultimate measure of a man is not where he stands in time of comfort and convience, but where he stands at times of challenge and controversy.",
    source: "Martin Luther King, jr.",
    citation: "Strength to Love",
    year: "1963"
  },
  {
    quote: "Cowards die many times before their deaths. The valiant never taste of death but once.",
    source: "William Shakespeare",
    citation: "julius Caesar",
    year: "1623"
  },
  {
    quote: "The journey to greatness often begins the moment that challenge and contribution become important than comfort and ease.",
    source: "Brendon Burchard",
    citation: "High Performance Habits",
    year: "2017"
  }

];

function getRandomQuotes (quote){
  let randomNumber = Math.floor(Math.random() * quote.length);
  let getQuotes = quote[randomNumber];
  return getQuotes;
}

function printQuote(arr) {
let quoteRandom = getRandomQuotes(quote);
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
print(printQuote(quote));

document.querySelector('#loadQuote').addEventListener('click', () => {
  print(printQuote(quote));
})
