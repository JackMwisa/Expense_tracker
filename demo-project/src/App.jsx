import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu.jsx'
 

function App() {
  const [count, setCount] = useState(0)

  return (
  
    
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
