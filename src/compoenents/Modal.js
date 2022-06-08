import React from 'react'
import './Modal.css'

const Modal = ({ setShowModal }) => {
  return (
      <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='titleCloseBtn'>
            <button onClick={() => setShowModal(false)}> X </button>
          </div>
          <div className='title'>
            <h1>Are You Sure You Want To Continue?</h1>
          </div>
          <div className='body'>
            <p>The next page is awesome! You should move forward, you will enjoy it.</p>
          </div>
          <div className='footer'>
            <button id='cancelBtn' onClick={() => setShowModal(false)}>Cancel</button>
            <button>Continue</button>
          </div>
        </div>
      </div>
  )
}

export default Modal