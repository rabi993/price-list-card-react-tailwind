import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navebar from './component/Navebar/Navebar'
import PriceList from './component/PriceList/PriceList'
import Dashboard from './component/Dashboard/Dashboard'
import PhoneBar from './component/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navebar></Navebar>
      <h1 className='text-7xl text-center text-purple-500'>Hello From Tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
       
    </div>
  )
}

export default App
