// quotes
const quotes = [`However beautiful the strategy, you should occasionally look at the results." - Winston Churchill`,
    `“Be the change that you wish to see in the world.” ― Mahatma Gandhi`,
    `“Without music, life would be a mistake.” ― Friedrich Nietzsche, Twilight of the Idols`,
    `“We accept the love we think we deserve.”― Stephen Chbosky, The Perks of Being a Wallflower`,
    `“The only impossible journey is the one you never begin." -Tony Robbins`,
    `“We are all in the gutter, but some of us are looking at the stars.” ― Oscar Wilde, Lady Windermere's Fan`,
    `“Never let your memories be bigger than your dreams." ― Jyte`,
    `“The way to get started is to quit talking and begin doing." -Walt Disney`,
    `“I have not failed. I've just found 10,000 ways that won't work.” ― Thomas A. Edison`, 
    `“Life is what happens when you're busy making other plans." -John Lennon`,
    `“Only a life lived for others is a life worthwhile." -Albert Einstein`,
    `“The purpose of our lives is to be happy." -Dalai Lama`,
    `“It is never too late to be what you might have been.” ― George Eliot`
];

// selectors
const quote = document.querySelector('#quote-text');
const button = document.querySelector('#button');

// event listeners
button.addEventListener('click', function (e) {
    const randomQuote = getRandomQuote();
    document.getElementById('quote-text').innerText = quotes[randomQuote];
    quotes.textContent = quotes[randomQuote];
});

// functions
function getRandomQuote() {
    return Math.floor(Math.random() * quotes.length);
}
