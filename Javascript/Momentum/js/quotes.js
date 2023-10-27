const quotes = [
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",
    },
    {
        quote: "The future depends on what we do in the present.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "I can't go back to yesterday because I was a different person then.",
        author: "Lewis Carroll",
    },
    {
        quote: "Energy and persistence conquer all things.",
        author: "Benjamin Franklin",
    },
    {
        quote: "All our dreams can come true if we have the courage to purseu them.",
        author: "Walt Disney",
    },
    {
        quote: "Never, Never, Never, Never give up.",
        author: "Winston Churchill",
    },
    {
        quote: "Nothing ever goes away until it teaches us what we need to know.",
        author: "Pema Chodron",
    },
    {
        quote: "If you can't yet do great things, do small things in a great way.",
        author: "Napoleon Hill",
    },
    {
        quote: "I'd rather regret the things I've done than regret the things I haven't done.",
        author: "Lucille Ball",
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")
const lengthOfArray = quotes.length;

const todaysQuote = quotes[Math.floor(Math.random()*lengthOfArray)];

quote.innerText = todaysQuote.quote;
author.innerText = "\n" + todaysQuote.author;
