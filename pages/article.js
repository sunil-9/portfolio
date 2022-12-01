import { Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import getMediumArticles from "../constant/getMediumArticles";
import MediumSection from "../section/MediumSection";
import styles from "../styles/Home.module.css";

const Article = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sunil | Articles</title>

        <link rel="icon" href="/sunil.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <MediumSection articles={articles} />
        </Container>
      </main>
    </div>
  );
};

export default Article;

export async function getStaticProps() {
  const articles = await getMediumArticles({
    username: process.env.MEDIUM_USERNAME,
  });

  return {
    props: {
      articles: articles || null,
    },
  };
}
