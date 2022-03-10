import { getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID
};

const app = getApps();
const firebaseApp = !app.length ? initializeApp(firebaseConfig) : app[0];
const firebaseAuth = getAuth(firebaseApp)

const getCurrentUser = () => new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(firebaseAuth, user => {
        unsub()
        resolve(user)
    }, reject)
});
export { firebaseApp, firebaseAuth, getCurrentUser }