// src/firebaseAPIConfig.js
// -------------------------------------------------------------
// Part of the COMP1800 Project 1 Course (BCIT).
// Starter code provided for students to use and adapt.
// Handles Firebase initialization and exports the Auth instance.
// This file initializes Firebase and exports the "auth" object.
// The configuration values are loaded securely from Vite
// environment variables (.env file in project root).
// ---------------------------------------------------------

// Import Firebase SDK modules (using Firebase v9 modular syntax)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ---------------------------------------------------------
// Read Firebase configuration from Vite environment variables.
// These are defined in your .env file as:
//
// VITE_FIREBASE_API_KEY="AIzaSyDyw5hGMubxZk8jHemvdxEHxCjBAdFHcao",
// VITE_FIREBASE_AUTH_DOMAIN="demo07-e5831.firebaseapp.com";
// VITE_FIREBASE_PROJECT_ID="demo07-e5831";
// VITE_FIREBASE_APP_ID="1:492528413383:web:60006972d4b390a10cace2",
//
// ⚠️ Note: Vite only exposes environment variables that start with "VITE_"
// ---------------------------------------------------------
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// ---------------------------------------------------------
// Initialize the Firebase app instance.
// This sets up the Firebase connection for your web app.
// ---------------------------------------------------------
const app = initializeApp(firebaseConfig);

// ---------------------------------------------------------
// Create and export the Firebase Authentication service.
// You can import "auth" anywhere to perform login, signup,
// or signout operations (that's why we export it).
// ---------------------------------------------------------
export const auth = getAuth(app);
export const db = getFirestore(app);
