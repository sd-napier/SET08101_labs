console.log('JavaScript is working!');

// Select single element by ID
const title = document.getElementById('main-title');

// Select single element by CSS selector
const firstIntro = document.querySelector('.intro');

// Select ALL matching elements
const allIntros = document.querySelectorAll('.intro');

// Log to console to verify
console.log('Title element:', title);
console.log('First intro:', firstIntro);
console.log('All intros:', allIntros);


// Change text content (plain text only)
title.textContent = 'Hello, JavaScript!';

// Change HTML content (can include HTML tags)
firstIntro.innerHTML = 'This has <strong>bold</strong> text now.';

// Direct style manipulation
title.style.color = 'blue';
title.style.fontSize = '3rem';
title.style.textAlign = 'center';

// Counter state
let count = 0;

// DOM elements
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Increment event listener
incrementBtn.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
});


// Decrement
decrementBtn.addEventListener('click', function() {
    count--;
    countDisplay.textContent = count;
});

// Reset
resetBtn.addEventListener('click', function() {
    count = 0;
    countDisplay.textContent = count;
});

//Update the decrement function
decrementBtn.addEventListener('click', function() {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});

//Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('hidden');
});

//Enable dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

//Add keyboard support to escape menu
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        mainNav.classList.add('hidden');
    }
});


//Create image array
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];
let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const imageCounter = document.getElementById('image-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

//Update function fro gallery
function updateGallery() {
    galleryImage.src = images[currentIndex];
    imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
}

//Add navigation event listeners for gallery
nextBtn.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Wrap to start
    }
    updateGallery();
});

prevBtn.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Wrap to end
    }
    updateGallery();
});

//Handle edge cases for gallery. Code above wraps around. Alternatively, disable buttons at the ends
function updateGallery() {
    galleryImage.src = images[currentIndex];
    imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;

    // Disable buttons at boundaries
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}