import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { LiveProjectSection } from "../section/LiveProjectSection";
import styles from "../styles/Home.module.css";
// import useSWR from 'swr';

export default function Home() {
  // const fetcher = (url) => fetch(url).then((r) => r.json());
  // console.log({data});

  return (
    <div className={styles.container}>
      <Head>
        <title> Sunil | Live Project</title>
        <meta
          property="og:title"
          content="Sunil | Android Developer | Node.Js developer | DevOps engineer"
        ></meta>
        <meta
          name="description"
          content="Sunil | Android Developer | Node.Js developer | DevOps engineer"
        />
        <link rel="icon" href="/sunil.jpg" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <LiveProjectSection />
        </Container>
      </main>
    </div>
  );
}
