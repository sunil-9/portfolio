import { Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import getGithubRepos from "../constant/getGithubRepos";
import GithubSection from "../section/GithubSection";
import styles from "../styles/Home.module.css";

const Github = ({ repos }) => {
  console.log({ repos });

  return (
    <div className={styles.container}>
      <Head>
        <title>Sunil | Github</title>
        <meta
          name="description"
          content="Sunil | Mobile Application Developer"
        />
        <link rel="icon" href="/profile_picture.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <GithubSection repos={repos} />
        </Container>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const repos = await getGithubRepos({ username: process.env.GITHUB_USERNAME });

  return {
    props: {
      repos: repos || null,
    },
  };
}

export default Github;
