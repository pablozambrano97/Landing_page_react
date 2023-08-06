import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main';

function App() {
  const [count, setCount] = useState(0)
  let title="Adopta un perrito."



  return (
    <>
    <Header title={title}/>
    <div className='main'>
    <Main/>
    </div>

    <Footer/>
    </>
  )
}

export default App
