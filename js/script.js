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

//Handles a character counter for the HTML div class "message-input"
const messageInput = document.getElementById('message');
const charCount = document.getElementById('char-count');

messageInput.addEventListener('input', function() {
    const length = messageInput.value.length;
    charCount.textContent = length;

    // Change colour when approaching limit
    if (length > 180) {
        charCount.style.color = 'red';
    } else if (length > 150) {
        charCount.style.color = 'orange';
    } else {
        charCount.style.color = 'inherit';
    }
});

//Lab 5 preventing default form submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting

    if (validateForm()) {
        alert('Form is valid! In Block 7, this will submit to PHP.');
        // form.submit(); // Would actually submit when PHP is ready
    }
});

//Lab 5 validation function
function validateForm() {
    let isValid = true;
    clearErrors();

    // Name validation
    const name = document.getElementById('name');
    if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters');
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Phone validation (optional field)
    const phone = document.getElementById('phone');
    if (phone.value && !/^[0-9]{11}$/.test(phone.value)) {
        showError(phone, 'Phone must be 11 digits');
        isValid = false;
    }

    // Message validation
    const message = document.getElementById('message');
    if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

//Lab 5 helper functions
function showError(input, message) {
    const errorSpan = input.parentElement.querySelector('.error-message');
    errorSpan.textContent = message;
    errorSpan.classList.add('visible');
    input.classList.add('invalid');
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(span => {
        span.textContent = '';
        span.classList.remove('visible');
    });
    document.querySelectorAll('.invalid').forEach(input => {
        input.classList.remove('invalid');
    });
}

//Lab 5 real-time email validation for forms
document.getElementById('email').addEventListener('input', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorSpan = this.parentElement.querySelector('.error-message');

    if (this.value && !emailPattern.test(this.value)) {
        showError(this, 'Please enter a valid email address');
    } else {
        errorSpan.textContent = '';
        errorSpan.classList.remove('visible');
        this.classList.remove('invalid');
    }
});

//Lab 5 real-time phone validation for forms
document.getElementById('phone').addEventListener('input', function() {
    const phone = /^[0-9]{11}$/;
    const errorSpan = this.parentElement.querySelector('.error-message');

    if (this.value && phone.test(this.value)) {
        showError(this, 'Please enter a valid phone number');
    } else {
        errorSpan.textContent = '';
        errorSpan.classList.remove('visible');
        this.classList.remove('invalid');
    }
});

//Lab 5 real-time name validation for forms
document.getElementById('name').addEventListener('input', function() {
    const name = (name.value.trim().length < 2);
    const errorSpan = this.parentElement.querySelector('.error-message');

    if (this.value && !name.test(this.value)) {
        showError(this, 'Please enter a valid name');
    } else {
        errorSpan.textContent = '';
        errorSpan.classList.remove('visible');
        this.classList.remove('invalid');
    }
});

//Lab 5 password strength checker
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.querySelector('#strength-text span');

    let strength = 0;

    // Check criteria
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Update display
    strengthBar.className = '';
    switch (strength) {
        case 0:
            strengthText.textContent = 'None';
            break;
        case 1:
            strengthBar.classList.add('weak');
            strengthText.textContent = 'Weak';
            break;
        case 2:
            strengthBar.classList.add('fair');
            strengthText.textContent = 'Fair';
            break;
        case 3:
            strengthBar.classList.add('good');
            strengthText.textContent = 'Good';
            break;
        case 4:
            strengthBar.classList.add('strong');
            strengthText.textContent = 'Strong';
            break;
    }
});

//Lab 5 fetch function
const fetchBtn = document.getElementById('fetch-btn');
const loading = document.getElementById('loading');
const dataContainer = document.getElementById('data-container');
const errorContainer = document.getElementById('error-container');

fetchBtn.addEventListener('click', async function() {
    // Show loading state
    loading.classList.remove('hidden');
    dataContainer.innerHTML = '';
    errorContainer.classList.add('hidden');

    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayData(data);

    } catch (error) {
        errorContainer.textContent = 'Failed to load data: ' + error.message;
        errorContainer.classList.remove('hidden');

    } finally {
        loading.classList.add('hidden');
    }
});

//Lab 5 display function
function displayData(posts) {
    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'post-card';
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        dataContainer.appendChild(article);
    });
}