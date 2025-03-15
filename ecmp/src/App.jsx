import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <div>
        <h1>home
        </h1>
      </div>
    </>
  )
}

export default App
