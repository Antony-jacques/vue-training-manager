import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyANIXHiDAUl7reJ_58X43LoGbuhX-_f8UY",
  authDomain: "vue-training-manager.firebaseapp.com",
  projectId: "vue-training-manager",
  storageBucket: "vue-training-manager.appspot.com",
  messagingSenderId: "114845002843",
  appId: "1:114845002843:web:6498baab42ae4e3fc1e37e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projecFirestore= firebase.firestore()

export { projecFirestore }