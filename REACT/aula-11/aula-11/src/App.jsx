import { use } from 'react'
import './App.css'
import userCounter from './hooks/useCounter'

//Regra 1: Onde usar os hooks
//Regra 2: A ordem dos hooks

function App() {
  const counter = userCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
