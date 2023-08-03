import { useEffect, useState } from "react";
import "../styles/fonts.css";

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);
if (!isMounted) {
return null;
}
  return ( 
    <> 
      <Component {...pageProps} />
    </>
  );
}
