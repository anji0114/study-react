import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main'

// function home
const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head><title>Index Page</title></Head>

      <Header />
      test
    </div>
  );
}

export default Home;