// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX-biPQullJve__X-WHwwzw6oxsiA7tMk",
  authDomain: "ezyupload-da972.firebaseapp.com",
  projectId: "ezyupload-da972",
  storageBucket: "ezyupload-da972.appspot.com",
  messagingSenderId: "563462109953",
  appId: "1:563462109953:web:038176fad3659884a0f900",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get reference to the login and register forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Add event listener for login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get user input
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    // Sign in user with email and password
    signInWithEmailAndPassword(getAuth(app), email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('User signed in:', user);
            // Redirect user to the congratulations page
            window.location.href = 'NextPage.html';
        })
        .catch((error) => {
            // Handle errors
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);
            // Display error message to the user
            const errorMessageElement = document.querySelector('.message');
            errorMessageElement.textContent = errorMessage;
        });
});

// Add event listener for register form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get user input
    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;

    // Register user with email and password
    createUserWithEmailAndPassword(getAuth(app), email, password)
        .then((userCredential) => {
            // Registered successfully
            const user = userCredential.user;
            console.log('User registered:', user);
            // Redirect user to the login page
            window.location.href = 'LoginPage.html';
        })
        .catch((error) => {
            // Handle errors
            const errorMessage = error.message;
            console.error('Registration error:', errorMessage);
            // Display error message to the user
            const registerMessageElement = document.querySelector('.register-message');
            registerMessageElement.textContent = errorMessage;
        });
});

// Function to toggle between login and register forms
function showRegisterForm() {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
}

// Function to sign out the user
function signOutUser() {
    signOut(getAuth(app))
        .then(() => {
            // Sign-out successful.
            console.log('User signed out successfully');
            // Redirect user to the login page or homepage
            window.location.href = 'sign.html'; // Change to the appropriate page
        })
        .catch((error) => {
            // Handle sign-out errors
            console.error('Sign-out error:', error);
        });
}
