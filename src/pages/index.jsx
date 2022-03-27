import Head from 'next/head'
import { useCallback } from 'react';
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main'
import styles from 'src/styles/Home.module.css'

// const handleClick = (e, foo) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo)
// };

export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <div style={{ textAlign: "center" }}>
        <a
          href='/about'
          onClick={handleClick}
        >
          ボタン
        </a>
      </div>
      <Main page="index" />

      <Footer />
    </div>
  );
}
