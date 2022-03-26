import { Links } from './Links'
import { Headline } from './Headline'
import styles from '../styles/Home.module.css'

export function Main(props) {
  return (
      <main className={styles.main}>
        <Headline
          page={props.page}
        >
          <code className={styles.code}>pages/{props.page}.jsx</code>
        </Headline>
        <Links />
      </main>
  );
}