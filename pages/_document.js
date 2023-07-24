import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script type="application/ld+json">
          {`
@context: https://schema.org/,
  @type: Person,
  name: Sunil Sapkota,
  url: https://sapkotasunil.com.np,
  image: http://localhost:3000/sunil.jpg,
  sameAs: [
    https://www.facebook.com/sunil.sapkota.09,
    https://twitter.com/sunilsapkota09,
    https://github.com/sunil-9,
  ],
  jobTitle: Professor , Backend Developer , DevOps Engineer,
  worksFor: {
    @type: Organization,
    name: GaintPlay LLC
  }  `}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
