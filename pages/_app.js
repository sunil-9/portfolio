import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Sunil Sapkota | Full Stack Developer | Devops Engineer | Nepal"
        description="Sunil Sapkota is a Full Stack Developer and Devops Engineer from Nepal. He is a passionate developer who loves to build things for the web."
        canonical="https://sapkotasunil.com.np/"
        openGraph={{
          url: "https://sapkotasunil.com.np/",
          title:
            "Sunil Sapkota | Full Stack Developer | Devops Engineer | Nepal",
          description:
            "Sunil Sapkota is a Full Stack Developer and Devops Engineer from Nepal. He is a passionate developer who loves to build things for the web.",
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
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
