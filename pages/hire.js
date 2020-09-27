import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Highlight = styled.span`
  color: #346eeb;
`;

export default function Hire(repos) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Jared Collins - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Would you like to contact or hire me?{" "}
          </h1>
          <br />
          <h1 className={styles.titleSub}>
            <Link href="/">
              <a>Back</a>
            </Link>
          </h1>

          <p className={styles.description}>
            If you'd like to <Highlight>contact</Highlight> me about anything or
            inquiry about <Highlight>hiring</Highlight> me, please fill out the{" "}
            <Highlight>form</Highlight> below.
          </p>

          <div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScuCi-LfQvmxzYQFpreI3L9-0reQNwtbhrYkE16MzZcMVc4Hg/viewform?embedded=true"
              width="640"
              height="1000"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
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
    </>
  );
}
