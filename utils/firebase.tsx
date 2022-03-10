import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

export const firebaseConfig = initializeApp({
  apiKey: process.env.CHAT_APP_API_KEY,
  authDomain: process.env.CHAT_APP_AUTH_DOMAIN,
  projectId: process.env.CHAT_APP_PROJECT_ID,
  storageBucket: process.env.CHAT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.CHAT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.CHAT_APP_APP_ID,
  measurementId: process.env.CHAT_APP_MEASUREMENT_ID,
});

export const db = getFirestore(firebaseConfig);

export const docSnap = async (db:any) => {
  const docRef = collection(db, 'room');
  return docRef;
}

export default docSnap(db);