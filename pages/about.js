import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Cheatsheet from "./Cheatsheet";

const Highlight = styled.span`
  color: #346eeb;
`;

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
        <br />
        <h1 className={styles.titleSub}>
          <Link href="/">
            <a>Back</a>
          </Link>
        </h1>

        <p className={styles.description}>
          My programming life started when I was just{" "}
          <Highlight>twelve</Highlight> years old, where I started with{" "}
          <Highlight>Visual Basic</Highlight> and{" "}
          <Highlight>Visual Studio</Highlight>. Programming simple things like
          <Highlight>file converters</Highlight> and attempting a{" "}
          <Highlight>chat program</Highlight>, I moved on to try my hand at{" "}
          <Highlight>Java</Highlight> and{" "}
          <Highlight>minecraft server plugins</Highlight> for my friends server
          network. Becoming tired of Minecraft I then shined my light upon{" "}
          <Highlight>Web Development</Highlight>, it had appealed to me in a way
          that no other type of programming has before. Web Development had{" "}
          <Highlight>cloaked</Highlight> me in <Highlight>warmth</Highlight> and
          <Highlight>comfort</Highlight> for it was a new idea and journey
          adding to my past.
        </p>
		<hr />
		<Cheatsheet />
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
