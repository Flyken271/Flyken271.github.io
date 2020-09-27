import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home(repos) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jared Collins - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my{" "}
          <a href="https://github.com/Flyken271/Flyken271.github.io">
            portfolio!
          </a>
        </h1>

        <p className={styles.description}>
          I'm fluent in{" "}
          <code className={styles.code}>
            Node.JS, React, CSS, HTML, Javascript, Strapi and Next.JS
          </code>
        </p>

        <div className={styles.grid}>
          {repos.repos.map((repo, index) => {
            return (
              <a key={index} href={repo.html_url} className={styles.card}>
                <h3>{repo.name} &rarr;</h3>
                <p>{repo.description}</p>
                <h5>{repo.full_name}</h5>
              </a>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Jared Collins - Flyken | Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://api.github.com/users/Flyken271/repos"
  );
  var repos = response.data;

  return {
    props: {
      repos,
    },
  };
}
