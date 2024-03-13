const quoteCon = document.getElementById('qoute-container');

const quoteText = document.getElementById('qoute');

const authorName = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');
const newQouteBtn = document.getElementById('new-qoute');
const loader = document.getElementById('loader')

// ("https://type.fit/api/quotes")

let apiQoute = [];

// show loading

function loading() {
    loader.hidden = false;
    quoteCon.hidden = true;
}
// Hide loading

function complete() {
    quoteCon.hidden = false;
    loader.hidden = true;
}

function newQoute() {

    loading()

    const quote = apiQoute[Math.floor(Math.random() * apiQoute.length)];
    console.log(quote);

    if(!quote.author) {
        authorName.textContent = 'Unknown'
    }else{
        authorName.textContent = quote.author;
    }


    // check quote lenght to determine styling
    if(quote.text.length > 50) {
        quoteText.classList.add('long-qoute');
    }else {
        quoteText.classList.remove('long-qoute');
    }

    authorName.textContent = quote.author;
    quoteText.textContent = quote.text;

complete()

}

async function getQoutes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
         apiQoute = await response.json()

        console.log(apiQoute)

    newQoute()

    } catch (error) {
        console.log(error)
    }
}

function tweetQoute () {
    const twiterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorName.textContent}`
    window.open(twiterUrl, "_blank");
  
}

// Even Listeners
newQouteBtn.addEventListener('click', newQoute);
twitterBtn.addEventListener('click', tweetQoute)

getQoutes();
// tweetQoute()