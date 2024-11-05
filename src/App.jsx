import { useState } from 'react'
import Header from './component/HeaderComponent.jsx'
import Footer from './component/FooterComponent.jsx'
import Food from './component/Food.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Food />
    <Footer />
    </>
  )
}

export default App
