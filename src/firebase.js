// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9xUKEP9zqx4AKUu4lHvkn4HUVzIz4Bxs",
  authDomain: "edu-power-42a52.firebaseapp.com",
  projectId: "edu-power-42a52",
  storageBucket: "edu-power-42a52.firebasestorage.app",
  messagingSenderId: "974825259526",
  appId: "1:974825259526:web:c80e083f782b08372c7987",
  measurementId: "G-BWGD7D5YW6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const isFirebaseConfigured =
  typeof firebaseConfig === "object" &&
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain;

if (!isFirebaseConfigured) {
  console.error("Firebase configuration is missing or invalid. auth/configuration-not-found.");
}

console.log("Firebase authDomain:", app?.options?.authDomain);
