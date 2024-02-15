import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W3WEF7VKMS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W3WEF7VKMS');
            `,
          }}
        />
        {/* Fin Google Analytics */}

        <meta name="description" content="Full-stack web developer with a strong proficiency in Next.js, React.js, JavaScript, TypeScript, and Node.js. As the creative force behind the Negiupp brand, I specialize in developing digital products with exceptional quality standards. Explore my comprehensive range of services, diverse portfolio of projects, and insightful articles to discover how I can enhance your digital experience." />
          <meta property="og:image" content="https://my-page-negiupp.s3.amazonaws.com/1702394288820.jpeg" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="200" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
