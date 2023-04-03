import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRR0wtgQnCpaPyg5GQ35Y1Gt38tCGlCWg",
  authDomain: "restaurantapp-6a167.firebaseapp.com",
  databaseURL: "https://restaurantapp-6a167-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-6a167",
  storageBucket: "restaurantapp-6a167.appspot.com",
  messagingSenderId: "460585886892",
  appId: "1:460585886892:web:d2e881f8764d1fa731ab09",
  measurementId: "G-QG91VDPS1Y",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
