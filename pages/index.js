import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import axios from "axios";

const BgTheme = styled.body`
  background: ${({ active }) => (active ? "#121212" : "#dedede")};
  color: ${({ active }) => (active ? "#adadad" : "#1c1c1c")};
  transition: color, background 0.9s ease;
`;
const Codeblock = styled.code`
  background: ${({ active }) => (active ? "#1d1d1d" : "#c4c4c4")};
  transition: background 0.9s ease;
`;

export default function Home(repos) {
  const [active, setActive] = useState(false);

  return (
    <>
      <BgTheme active={active}>
        <label className={styles.themetoggle + " switch"}>
          <input
            type="checkbox"
            onClick={() => setActive((active) => !active)}
          />
          <span className="slider round"></span>
        </label>

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
            <br />
            <h1 className={styles.titleSub}>
              <Link href="/about/">
                <a>About me</a>
              </Link>
            </h1>

            <p className={styles.description}>
              I'm fluent in{" "}
              <Codeblock active={active}>
                <code className={styles.code}>
                  Node.JS, React, CSS, HTML, Javascript, Strapi and Next.JS
                </code>
              </Codeblock>
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

            <br />

            <h1 className={styles.titleSub}>
              <a href="mailto:jaredcollins99@gmail.com">Hire Me</a>
            </h1>
          </main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created by Jared Collins - Flyken | Powered by{" "}
              <img
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.logo}
              />
            </a>
          </footer>
        </div>
      </BgTheme>
    </>
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
