import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Cheatsheet(repos) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cheatsheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  <embed src="CSS Selector Cheat Sheet - Dark.pdf" />
    </div>
  );
}
