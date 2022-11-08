import React from "react";
import AuthContextWrapper from "../context/authContext";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextWrapper>
      <Component {...pageProps} />
    </AuthContextWrapper>
  );
}
