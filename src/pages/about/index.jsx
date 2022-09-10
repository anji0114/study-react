import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'


const About = (props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <div style={{ textAlign: "center" }}>
        {props.isShow ? <h1>{props.doubleCount}</h1> : null}
        <button onClick={props.handleClick}>ボタン</button><br />
        <button onClick={props.handleDisplay}>
          {props.isShow ? "非表示" : "表示"}
        </button><hr size="1" color='#fff' />
        <input type="text" value={props.text} onChange={props.handleChange} /><br />
        <button onClick={props.handleAdd}>要素を追加</button>
        <ol>
          {props.array.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ol>
      </div>
      <Main page="about" />

      <Footer />
    </div>
  )
}

export default About