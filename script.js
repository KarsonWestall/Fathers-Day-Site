const jokes = [
    "Why do fathers take an extra pair of pants when they go golfing? In case they get a hole in one.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "I'm reading a book on anti-gravity. I just can't put it down!",
    "What time did the man go to the dentist? Tooth-hurt-y.",
    "How many tickles does it take to make an octopus laugh? Ten-tickles."
];

const jokeBtn = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke-text');

jokeBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeText.innerText = jokes[randomIndex];
});