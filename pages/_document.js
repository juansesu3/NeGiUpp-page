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
        {/* 
        <meta name="description" content="Full-stack web developer specialized in Next.js, React.js, JavaScript, and TypeScript. Creator of digital products with high-quality standards under the Negiupp brand. Explore my services, projects, and the 'print on demand' process in my ecommerce with Shopify and Printify." />
          <meta property="og:image" content="https://my-page-negiupp.s3.amazonaws.com/1702394288820.jpeg" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="200" />
          */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
