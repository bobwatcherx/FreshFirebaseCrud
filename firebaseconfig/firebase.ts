import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import * as fs from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""

};

const app = initializeApp(firebaseConfig)
export const db = fs.getFirestore(app)
export const q = fs.query(fs.collection(db, "users"))

// GET DATA BY ID
export async function getbyid(id){
  const docRef = fs.doc(db, "users", id);
const docSnap = await fs.getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data()
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  return "no document"
}

}



