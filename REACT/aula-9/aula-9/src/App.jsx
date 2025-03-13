import StatusText from "./assets/components/StatusText"
import { Subtitle } from "./assets/components/Subtitle"
import Title from "./assets/components/Title"
import styles from "./App.module.css"

function sun(a, b) {
  return a + b
}

export default function App() {
  
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}