import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBeOj1rVbpdozOdg-OS-CZ3rmHFQP7kKE8",
    authDomain: "crwn-db-75750.firebaseapp.com",
    projectId: "crwn-db-75750",
    storageBucket: "crwn-db-75750.appspot.com",
    messagingSenderId: "866489575929",
    appId: "1:866489575929:web:4fcdc8889c85631631b528"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
