import Head from "next/head";
import { Header } from "src/components/Header";

const About = (props) => {
  return (
    <div>
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
