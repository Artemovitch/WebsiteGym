# ABC Fitness Studio - Website Mockup

## 🏋️‍♂️ Project Overview
A fully responsive, multi-page website mockup designed for a modern fitness center. I built this project to prioritize user experience, clean navigation, and clear calls-to-action. Beyond a standard informational site, this mockup includes a functional UI design for an e-commerce and class-booking storefront.

**Live Demo:** https://artemovitch.github.io/WebsiteGym/

## 📸 Page Previews

### 1. Home Page
Features a clean hero section, our core mission statement, and a breakdown of offered classes (Yoga, Pilates, Kickboxing) with direct calls-to-action.
<img width="1952" height="955" alt="image" src="https://github.com/user-attachments/assets/fd595be6-4d83-4927-81b4-bc6c366d7ad8" />

### 2. About Us & Contact
Details the facility's offerings (Cardio, Free Weights, Personal Training) and features a clean, structured Contact Form for new member inquiries and custom orders.
<img width="1922" height="955" alt="image" src="https://github.com/user-attachments/assets/90edb1c4-7b1b-41dd-8b5f-b82683900948" />

### 3. Class Booking & Merchandise (Gallery)
Designed as an interactive storefront interface. Users can browse Group Classes, Individual Classes, and Gym Merchandise, complete with product cards, pricing mockups, and "Add to Cart" functionality.
<img width="1974" height="916" alt="image" src="https://github.com/user-attachments/assets/bf9a4a76-5362-4a1c-bf32-87d66e6b337d" />

### 4. Customer Reviews
A structured grid layout displaying member testimonials, building social proof through clean typography and card-based UI design.
<img width="1910" height="951" alt="image" src="https://github.com/user-attachments/assets/28601ffa-7a5e-4d7a-aa13-729485a03d50" />

### Mobile View
<img width="585" height="841" alt="image" src="https://github.com/user-attachments/assets/49e821e3-cbb4-477d-ab3c-ea9504577d84" />
<img width="590" height="841" alt="image" src="https://github.com/user-attachments/assets/418b5c92-6837-4ccf-9587-4af9433ea2b0" />
<img width="591" height="830" alt="image" src="https://github.com/user-attachments/assets/ae1a38a3-e0e9-450e-ae56-aebd70963871" />
<img width="562" height="509" alt="image" src="https://github.com/user-attachments/assets/2252f8c8-8e95-41fd-91a3-ea6bb04d0946" />
<img width="597" height="841" alt="image" src="https://github.com/user-attachments/assets/a5d20644-efd0-4d22-b469-6e74b4583b5e" />

### Wireframes
<img width="700" height="573" alt="image" src="https://github.com/user-attachments/assets/3469dd2b-aaa4-4b5b-8741-0882d3dea97f" />
<img width="523" height="789" alt="image" src="https://github.com/user-attachments/assets/8f5eb65c-031c-46db-bfd4-93936fcf84cc" />

### Misc
<img width="615" height="526" alt="image" src="https://github.com/user-attachments/assets/85d20ee9-0755-45d5-8506-6607f4a8f104" />
<img width="592" height="520" alt="image" src="https://github.com/user-attachments/assets/ce6111f2-6139-4bec-ba55-3593acf48b45" />
<img width="625" height="307" alt="image" src="https://github.com/user-attachments/assets/d989bca2-c9b3-4002-941b-19085175834a" />
<img width="612" height="762" alt="image" src="https://github.com/user-attachments/assets/5dae085d-843d-4eb9-a899-fc41f5e87879" />
<img width="534" height="336" alt="image" src="https://github.com/user-attachments/assets/215d8782-263e-48ae-86c0-d6fd5faa06ab" />
<img width="192" height="140" alt="image" src="https://github.com/user-attachments/assets/2578c7f4-9cf4-4e01-a4ad-23eae972b02a" />
<img width="595" height="463" alt="image" src="https://github.com/user-attachments/assets/f75fac79-e093-4f39-985b-3b9035c57143" />




## 🏗️ Site Architecture
This project is built with a standard multi-page architecture to ensure clean routing and semantic structure.
* `index.html` - The landing page featuring the hero section and primary calls to action.
* `about.html` - Details the gym's mission and includes the contact/inquiry form.
* `gallery.html` - The storefront mockup for booking classes and buying merchandise.
* `reviews.html` - A dedicated page for member testimonials and community feedback.

## 💻 Technologies Used
* **HTML5:** Semantic markup for accessibility, structuring product cards, and form inputs.
* **CSS3:** Custom styling, responsive design (Flexbox/Grid), hover states, and maintaining the brand's color palette.
* **JavaScript (ES6+):** Utilized for DOM manipulation, event handling, and client-side storage (`localStorage` and `sessionStorage`) to create a dynamic user experience without needing a backend database.

## ✨ Key Features
* **Dynamic E-Commerce Cart:** The Gallery page features a fully functional front-end cart system. Items are saved using `sessionStorage`, allowing users to add products, view their cart, and process mockup orders without losing their data on page reloads.
* **Form Auto-Save Persistence:** The Contact Form utilizes `localStorage` to save user inputs in real-time as they type. If the user accidentally refreshes or navigates away, their inquiry data remains intact when they return.
* **Accessible Mobile Navigation:** A custom hamburger menu built with JavaScript that dynamically updates `aria-expanded` and `data-visible` attributes for screen readers and responsive layouts.
* **Consistent Branding:** Uses a unified stylesheet to maintain colors, spacing, and typography across all viewports.

## 🚀 Future Enhancements
* **Database Integration (MongoDB):** Transition from client-side storage (`localStorage`/`sessionStorage`) to a full backend database using MongoDB and Node.js. This will allow for permanent storage of shopping cart data, user sessions, and secure logging of contact form submissions.
* **User Authentication:** Implement secure login/registration functionality (e.g., JWT or OAuth) so members can track their class bookings, view order history, and manage their profile.
* **Payment Gateway Mockup:** Integrate the Stripe API (Test Mode) to simulate processing real transactions from the storefront cart to checkout.
