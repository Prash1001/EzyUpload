// Import the necessary Firebase modules
// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

// Your JavaScript code here


// Replace this with your Firebase project configuration
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

// Get reference to the login form
const loginForm = document.getElementById('login-form');

// Wait for the DOM content to be loaded before executing JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  // Get reference to the login form
  const loginForm = document.getElementById('login-form');

  // Add login event listener
  loginForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the default form submission

      // Get user input
      const email = loginForm['email'].value;
      const password = loginForm['password'].value;

      // Sign in user with email and password
      firebase.auth().signInWithEmailAndPassword(email, password)
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
});



function showRegisterForm() {
    var registerForm = document.getElementById("register-form");
    var loginForm = document.getElementById("login-form");
    registerForm.style.display = "block";
    loginForm.style.display = "none";
}
