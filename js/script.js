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