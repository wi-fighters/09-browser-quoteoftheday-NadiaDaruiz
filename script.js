(() => {
    const arrayOfQuotes = [
        "Stay Hungry. Stay Foolish. Steve Jobs", "Good Artists Copy, Great Artists Steal. Pablo Picasso",
        "Argue with idiots, and you become an idiot. Paul Graham", "Be yourself; everyone else is already taken. Oscar Wilde",
        "Simplicity is the ultimate sophistication. Leonardo Da Vinci",
        "Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. Albert Einstein",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. Ralph Emerson", "If you tell the truth, you don't have to remember anything. Mark Twain",
        "The way get started is to quit talking and begin doing. Walt Disney", "Do What You Can With All You Have, Wherever You Are. Theodore Roosevelt"
    ];

    const button = document.querySelector('.quote-btn');
    const quoteBox = document.querySelector('.quote__box');


    button.addEventListener('click', random)

    function random() {
        let randomQuote = Math.floor(Math.random() * (arrayOfQuotes.length));
        quoteBox.innerHTML = arrayOfQuotes[randomQuote];

        // console.log(quoteBox.innerHTML);
    }


})()
