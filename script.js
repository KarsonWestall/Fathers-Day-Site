// 1. Dad Joke Bank Array and Button Handler
const jokes = [
    "Why do fathers take an extra pair of pants when they go golfing? In case they get a hole in one.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "I'm reading a book on anti-gravity. I just can't put it down!",
    "What time did the man go to the dentist? Tooth-hurt-y.",
    "How many tickles does it take to make an octopus laugh? Ten-tickles.",
    "Why don't scientists trust atoms? Because they make up everything!"
];

const jokeBtn = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke-text');

jokeBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeText.innerText = jokes[randomIndex];
});


// 2. High-Performance Intersection Observer for Scroll Reveals
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.08, 
    rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach(element => {
    scrollObserver.observe(element);
});


// 3. Lightweight Cherry Blossom Petal Animation Engine (HTML5 Canvas)
const canvas = document.getElementById('blossom-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const petalsArray = [];
const maxPetals = 45; 

class Petal {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 8 + 6; 
        this.speedY = Math.random() * 1.2 + 0.8; 
        this.speedX = Math.random() * 1.0 - 0.5; 
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 1.5 - 0.75;
        this.opacity = Math.random() * 0.4 + 0.5; 
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height) {
            this.y = -20;
            this.x = Math.random() * canvas.width;
            this.speedY = Math.random() * 1.2 + 0.8;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size / 1.6, 0, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 183, 197, ${this.opacity})`; 
        ctx.fill();
        
        ctx.restore();
    }
}

function initPetals() {
    for (let i = 0; i < maxPetals; i++) {
        petalsArray.push(new Petal());
    }
}

function animatePetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < petalsArray.length; i++) {
        petalsArray[i].update();
        petalsArray[i].draw();
    }
    requestAnimationFrame(animatePetals);
}

initPetals();
animatePetals();


// --- NEW 4. FULL IMAGE MODAL VIEWER COMPONENT ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.modal-close');
const galleryImages = document.querySelectorAll('.animated-frame img');

// Open modal and pull exact image source path when frame is pressed
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

// Hide modal view window when clicking cross symbol
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Hide modal view window when clicking outside the core photo bounds
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});