import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import "../styles/fonts.css";
import Head from "next/head";

import LoadingScreen from "@/components/LoadingOverlay";

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Suponiendo que quieres hacer una comprobación o simplemente esperar a que todo se cargue
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Espera 3 segundos antes de establecer la carga a false

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);




  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }


  if (loading) {
    return <LoadingScreen />;
  }


  return (
    <>  
    <SessionProvider session={session}>
    <Head>
      {/* 
          <meta name="description" content="Full-stack web developer specialized in Next.js, React.js, JavaScript, and TypeScript. Creator of digital products with high-quality standards under the Negiupp brand. Explore my services, projects, and the 'print on demand' process in my ecommerce with Shopify and Printify." />
          <meta property="og:image" content="https://my-page-negiupp.s3.amazonaws.com/1702394288820.jpeg" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="200" />
          */}
        </Head>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  );
}
