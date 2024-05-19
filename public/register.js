import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwQYWat91ZdoE7SSZrVwnbNR70xiUov-Q",
  authDomain: "geolocation-7a2f6.firebaseapp.com",
  databaseURL: "https://geolocation-7a2f6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "geolocation-7a2f6",
  storageBucket: "geolocation-7a2f6.appspot.com",
  messagingSenderId: "832765482300",
  appId: "1:832765482300:web:4398b3133e4a32c573fa39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signup-btn').addEventListener('click', () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  if (password === confirmPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signup successful:', user);
        alert('Signup successful!');
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        alert('Error during signup: ' + error.message);
      });
  } else {
    alert('Passwords do not match');
  }
});

document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Login successful:', user);
      alert('Login successful!');
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch((error) => {
      console.error('Error during login:', error);
      alert('Error during login: ' + error.message);
    });
});