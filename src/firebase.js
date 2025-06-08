// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC_acZxWWtGDDFPdxBaa2TR6JkQcw0k0Fk',
  authDomain: 'afp-site-c1bd9.firebaseapp.com',
  projectId: 'afp-site-c1bd9',
  storageBucket: 'afp-site-c1bd9.firebasestorage.app',
  messagingSenderId: '533749269819',
  appId: '1:533749269819:web:47c5dbe921ef3aae83e31e',
  measurementId: 'G-W9TQ1EE3PB',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
