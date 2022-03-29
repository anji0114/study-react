import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'


export default function About(props) {
  const {
    doubleCount,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <div style={{ textAlign: "center" }}>
        {isShow ? <h1>{doubleCount}</h1> : null}
        <button onClick={handleClick}>ボタン</button><br />
        <button onClick={handleDisplay}>
          {isShow ? "非表示" : "表示"}
        </button><hr size="1" color='#fff' />
        <input type="text" value={text} onChange={handleChange} /><br />
        <button onClick={handleAdd}>要素を追加</button>
        <ol>
          {array.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ol>
      </div>
      <Main page="about" />

      <Footer />
    </div>
  )
}
