import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navebar from './component/Navebar/Navebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navebar></Navebar>
      <h1 className='text-7xl text-purple-500'>Hello From Tailwind</h1>
       
    </div>
  )
}

export default App