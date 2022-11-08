import { createContext } from "react";
import { useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const AuthContext = createContext(null);

export default function AuthContextWrapper({ children }) {
  const firebaseConfig = {
    apiKey: "AIzaSyBYL4oHMowKx6DbXJm5HdtYXpvTNALdW_8",
    authDomain: "rumble-7979a.firebaseapp.com",
    projectId: "rumble-7979a",
    storageBucket: "rumble-7979a.appspot.com",
    messagingSenderId: "136303657784",
    appId: "1:136303657784:web:2a30f524ba619e200d77cd",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //     const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  //   const [signOut] = useSignOut(auth);

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
}

export { AuthContext };
