import { useState } from 'react'
import './App.css'
import Modal from './compoenents/Modal'

const App = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className='App'>
      <h1>Hey, click on the button to open the modal.</h1>
      <button className='openModalBtn' onClick={() => setShowModal(true)}>Open</button>
      {showModal &&  <Modal setShowModal={setShowModal} />}
    </div>
  )
}

export default App
