import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JsonPlaceholderのAPIを叩いてみる</p>
    </div>
  );
};

export default About;
