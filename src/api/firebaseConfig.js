import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCoIfY5b1QaXcNNnXpDnrveE67RCVeDvfE",
  authDomain: "booksandmovies-cf479.firebaseapp.com",
  projectId: "booksandmovies-cf479",
  storageBucket: "booksandmovies-cf479.appspot.com",
  messagingSenderId: "217235507047",
  appId: "1:217235507047:web:4b2481b09cc087455a91c2",
  measurementId: "G-5C74RFHPR5"
};
const app = initializeApp(firebaseConfig);
// const analytics = app.analytics();
export default app;