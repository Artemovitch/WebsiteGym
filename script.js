'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed. Running script.js');

  // Hamburger Menu (mobile)
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.querySelector('#mobile-navigation');

  if (mobileNavToggle && mobileNav) {
    mobileNavToggle.addEventListener('click', () => {
      const isVisible = mobileNav.getAttribute('data-visible') === 'true';

      if (isVisible) {
        mobileNav.setAttribute('data-visible', 'false');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileNav.setAttribute('data-visible', 'true');
        mobileNavToggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // --- gallery.html ---

  // cart elements
  const cartButton = document.querySelector('.cart-button');
  const cartView = document.querySelector('#cart-view');
  const cartCloseBtn = document.querySelector('#cart-close-btn');
  const cartItemsList = document.querySelector('#cart-items-list');
  const cartClearBtn = document.querySelector('#cart-clear-btn');
  const cartProcessBtn = document.querySelector('#cart-process-btn');
  const addToCartButtons = document.querySelectorAll(
    '.gallery-item button[data-name]'
  );

  // This array will hold all cart items
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // verification check that all elements exist
  if (
    cartButton &&
    cartView &&
    cartCloseBtn &&
    cartItemsList &&
    cartClearBtn &&
    cartProcessBtn
  ) {
    // Open Cart
    const openCartView = () => {
      cartView.classList.add('visible');
    };

    // Close Cart
    const closeCartView = () => {
      cartView.classList.remove('visible');
    };

    // Event listeners for opening and closing the cart
    cartButton.addEventListener('click', openCartView);
    cartCloseBtn.addEventListener('click', closeCartView);

    // Close if clicking outside the box
    const cartOverlay = cartView.querySelector('.cart-overlay');
    if (cartOverlay) {
      cartOverlay.addEventListener('click', closeCartView);
    }

    // --- Function to render cart items
    const renderCartItems = () => {
      // Clear the current list
      cartItemsList.innerHTML = '';

      if (cart.length === 0) {
        cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
        return;
      }

      // Create a new <ul>
      const listElement = document.createElement('ul');

      // Loop through each item in the cart array
      cart.forEach((item) => {
        // Create an <li> for each item
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listElement.appendChild(listItem); // Append item to list
      });

      // Add the new <ul> to the cart
      cartItemsList.appendChild(listElement);
    };

    // --- Function to update everything about the cart ---
    const updateCart = () => {
      // Save the cart to sessionStorage
      sessionStorage.setItem('cart', JSON.stringify(cart));
      // Update the "View Cart (0)" button
      cartButton.textContent = `View Cart (${cart.length})`;

      renderCartItems();
    };

    // --- Add click listeners to all "Add to Cart" buttons ---
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Get the item details from the data- attributes
        const name = button.dataset.name;

        cart.push(name);

        updateCart();

        button.textContent = 'Added!';
        setTimeout(() => {
          button.textContent = 'Add to Cart';
        }, 1000); // Reset text after 1 second
      });
    });

    // --- Add click listener for "Clear Cart" button ---
    cartClearBtn.addEventListener('click', () => {
      cart = []; //Clear the cart and render it
      updateCart();
    });

    // --- Add click listener for "Process Order" button ---
    cartProcessBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty. Please add some items first.');
        return;
      }

      console.log('Processing order:', cart);

      alert('Order processed successfully!');
      cart = [];
      updateCart(); // Clear the cart
      closeCartView();
    });

    updateCart();
  }

  // --- about.html ---
  const contactForm = document.querySelector('#contact-form');

  // about.html page
  if (contactForm) {
    // Input fields variables
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const inquiryInput = document.querySelector('#inquiry');
    const customOrderInput = document.querySelector('#custom-order');

    const formInputs = [
      nameInput,
      emailInput,
      phoneInput,
      inquiryInput,
      customOrderInput,
    ];

    // Function to load saved data from localStorage
    const loadFormData = () => {
      console.log('localStorage Contents:');
      nameInput.value = localStorage.getItem('contactFormName') || '';
      emailInput.value = localStorage.getItem('contactFormEmail') || '';
      phoneInput.value = localStorage.getItem('contactFormPhone') || '';
      inquiryInput.value = localStorage.getItem('contactFormInquiry') || '';
      customOrderInput.value =
        localStorage.getItem('contactFormCustomOrder') || '';
    };

    // Function to save data to localStorage
    const saveFormData = (inputElement) => {
      // Use the input's 'id' to create a unique localStorage key
      const key = `contactForm${
        inputElement.id.charAt(0).toUpperCase() + inputElement.id.slice(1)
      }`;
      localStorage.setItem(key, inputElement.value);
      console.log(`Saved ${key}: ${inputElement.value}`);
    };

    // Function to clear all saved form data
    const clearFormData = () => {
      console.log('Clearing saved form data from localStorage.');
      formInputs.forEach((input) => {
        const key = `contactForm${
          input.id.charAt(0).toUpperCase() + input.id.slice(1)
        }`;
        localStorage.removeItem(key);
      });
    };

    // event listener for form submission
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop the page from reloading

      const formData = new FormData(contactForm);
      console.log('Submitted Contact Form Data:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      alert('Thank you for contacting us! We will get back to you soon!');

      clearFormData(); // Clear data from localStorage
      contactForm.reset(); // Clear form fields
    });

    // event listeners to save data as the user types
    formInputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        // When the user types in any box, save just that box's data
        saveFormData(e.target);
      });
    });

    // Load any saved data when the page first loads
    loadFormData();
  }

  // --- footer (subscription) ---
  const subscribeForm = document.querySelector('.subscribe-form');
  // if the subscribe form exists on this page (all pages)
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      // Stop the form from reloading the page
      e.preventDefault();

      // Find the email input field inside this specific form
      const emailInput = subscribeForm.querySelector("input[type='email']");
      const email = emailInput.value;

      if (email) {
        // If the email field isn't empty:
        console.log(`Email submitted for subscription: ${email}`);
        alert('Thank you for subscribing!');
        subscribeForm.reset(); // Clear the form
      } else {
        // If the email field is empty:
        alert('Please enter a valid email address.');
      }
    });
  }
});
