import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import {composeWithDevTools} from "redux-devtools-extension";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyAgzqi2CLflCRlLsHib6V6eeV1iHQ7d3iE",
    authDomain: "student-base-876a3.firebaseapp.com",
    projectId: "student-base-876a3",
    storageBucket: "student-base-876a3.appspot.com",
    messagingSenderId: "252071080507",
    appId: "1:252071080507:web:575e82526a0ecbdc40e21e",
    measurementId: "G-5ELK92WBJ7"
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
}

export default store;