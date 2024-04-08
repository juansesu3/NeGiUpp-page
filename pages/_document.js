import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    // Load Drift after component mounts
    !function() {
      var t = window.driftt = window.drift = window.driftt || [];
      if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
        t.factory = function(e) {
          return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
          };
        }, t.methods.forEach(function(e) {
          t[e] = t.factory(e);
        }), t.load = function(t) {
          var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
          o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(o, i);
        };
      }
    }();
    window.drift.SNIPPET_VERSION = '0.3.1';
    window.drift.load('wi3ftibgxswt');
  }, []);

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
        {/* End Google Analytics */}
        
        {/* Meta tags */}
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
