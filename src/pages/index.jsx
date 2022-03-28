import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main'
import { useEffect } from 'react';
import { useState } from 'react';


export default function Home() {
  const [count, setCount] = useState(1)

  const handleClick = (e) => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';

    return () => {
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
        <h1>{count}</h1>
        <button onClick={handleClick} >
          ボタン
        </button>
      </div>
      <Main page="index" />

      <Footer />
    </div>
  );
}
