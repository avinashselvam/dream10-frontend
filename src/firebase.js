import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBpbjFWkLhy46LJJUwXqlRN_ymVuA9sy4Q",
    authDomain: "dream10-d18b3.firebaseapp.com",
    databaseURL: "https://dream10-d18b3.firebaseio.com",
    projectId: "dream10-d18b3",
    storageBucket: "dream10-d18b3.appspot.com",
    messagingSenderId: "759822761985",
    appId: "1:759822761985:web:369a0a0679adf41153c000",
    measurementId: "G-5D2W0B6J5B"
}

firebase.initializeApp(firebaseConfig)

export default firebase