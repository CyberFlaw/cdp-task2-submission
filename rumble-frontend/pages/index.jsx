import { useContext, useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { AuthContext } from "../context/authContext";
import Hero from "../components/home/hero.jsx";
import Chat from "../components/chat/chat";

export default function Home() {
  const { auth } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [user]);

  return (
    // make a spinner
    <div className="h-screen w-full bg-black">
      {user ? <Chat user={user} /> : <Hero signIn={signInWithGoogle} />}
    </div>
  );
}
