import React from 'react'

export default function Modal({ setOpen, message, buttonText }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'fixed'
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div
          style={{
            width: '250px',
            height: '200px',
            background: 'white',
            zIndex: '9999',
            borderRadius: '16px',
            boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
            textAlign: 'center',
            padding: '10px'
          }}
        >
          <p>{message}</p>
          <button onClick={() => setOpen(false)}>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}
