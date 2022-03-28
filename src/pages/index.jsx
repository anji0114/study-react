import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main'
import { useCallback } from 'react';
import { useEffect } from 'react';


export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
  }, []);

  useEffect(() => {
    console.log("マウント時")
    document.body.style.backgroundColor = 'lightblue';

    return () => {
      console.log("アンマウント時")
      document.body.style.backgroundColor = '';
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <div style={{ textAlign: "center" }}>
        <button onClick={handleClick} >
          ボタン
        </button>
      </div>
      <Main page="index" />

      <Footer />
    </div>
  );
}
