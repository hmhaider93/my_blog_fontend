import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Saad Hasan + Haider</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is the Start of A great Blog website. Just wait and watch. 
        </p>
      </div>
      <p className="read-the-docs">
        Brought to you by Saad Hasan and Haider. 
      </p>
    </>
  )
}

export default App
