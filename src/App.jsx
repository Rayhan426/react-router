import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Home></Home>
  <h1 className='text-4xl'>Welcome to first react component</h1>
    </>
  )
}

export default App
