import {initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3HAtQH0J2CfF-5N2UONNAXtek5DctxyE",
    authDomain: "prime-clothing-db.firebaseapp.com",
    projectId: "prime-clothing-db",
    storageBucket: "prime-clothing-db.appspot.com",
    messagingSenderId: "106209800432",
    appId: "1:106209800432:web:1d95808db4ef72b3b15235"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();
  provider.setCustomParameters(
    {
        prompt : "select_account"
    }
  );

  export const auth = getAuth();
  export const signInWithGooglePopup =() => signInWithPopup(auth , provider);
    
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) =>
  {
    const userDocRef = doc(db, 'users' , userAuth.uid);
   

    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists())
    {
        const { displayName , email}= userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef , {
                displayName,
                email,
                createdAt
            });

        }catch(error)
        {
            console.log("Error msg", error.message);
        }
    }
    return userDocRef;
};