import { Links } from '../Links'
import { Headline } from '../Headline'
import classes from './Main.module.css'

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline
        page={props.page}
      >
        <code className={classes.code}>pages/{props.page}.jsx</code>
      </Headline>
      <Links />
    </main>
  );
}