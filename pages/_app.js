import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import "../styles/fonts.css";

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>  
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  );
}
