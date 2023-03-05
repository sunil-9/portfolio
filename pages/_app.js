import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        canonical="https://sapkotasunil.com.np/"
        openGraph={{
          url: "https://sapkotasunil.com.np/",
          images: [
            {
              url: "https://sapkotasunil.com.np/sunil.jpg",
            },
          ],
          siteName: "Sunil Sapkota",
        }}
        twitter={{
          handle: "@sunilsapkota",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <title>
          Sunil Sapkota | Full Stack Developer | Devops Engineer | Nepal
        </title>
        <link rel="icon" href="/favicon.ico" />
		<meta property="fb:admins" content="104280557787678" />
		<meta property="fb:page_id" content="104280557787678" />
		<meta property="fb:app_id" content="104280557787678" />
        <meta
          name="description"
          content="Sunil Sapkota is a Full Stack Developer and Devops Engineer from Nepal. He is a passionate developer who loves to build things for the web."
        />

        <meta property="og:url" content="https://sapkotasunil.com.np" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sunil Sapkota | Full Stack Developer | Devops Engineer | Nepal"
        />
        <meta
          property="og:description"
          content="Sunil Sapkota is a Full Stack Developer and Devops Engineer from Nepal. He is a passionate developer who loves to build things for the web."
        />
        <meta
          property="og:image"
          content="https://sapkotasunil.com.np/sunil.jpg"
        />
        <meta property="twitter:domain" content="sapkotasunil.com.np" />
        <meta property="twitter:url" content="https://sapkotasunil.com.np" />
        <meta
          name="twitter:title"
          content="Sunil Sapkota | Full Stack Developer | Devops Engineer | Nepal"
        />
        <meta
          name="twitter:description"
          content="Sunil Sapkota is a Full Stack Developer and Devops Engineer from Nepal. He is a passionate developer who loves to build things for the web."
        />
        <meta
          name="twitter:image"
          content="https://sapkotasunil.com.np/sunil.jpg"
        />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
