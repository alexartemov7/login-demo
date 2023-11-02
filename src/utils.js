import { initializeApp } from 'firebase/app' //importing initapp to connect to project
import { getAuth } from 'firebase/auth' //importing get auth to connect to authorization of the project
const firebaseConfig = {
    apiKey: "AIzaSyCqJ9v13RNkL8UElZDzQ51UtV67dGpUfX0",
    authDomain: "fir-auth-aa.firebaseapp.com",
    projectId: "fir-auth-aa",
    storageBucket: "fir-auth-aa.appspot.com",
    messagingSenderId: "481145578262",
    appId: "1:481145578262:web:0d0e3abb4faec65ffca637"
  };

  const app = initializeApp(firebaseConfig)  //connecting to the project

  export const auth = getAuth(app)  //connecting to the auth of the project and exporting it