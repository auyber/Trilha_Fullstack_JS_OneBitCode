import StatusText from "./assets/components/StatusText"
import { Subtitle } from "./assets/components/Subtitle"
import Title from "./assets/components/Title"

function sun(a, b) {
  return a + b
}

export default function App() {
  
  return (
    <div>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}