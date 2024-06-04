// utils/firebaseConfig.js
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(process.env.firebaseConfig);

export default app;
