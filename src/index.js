import React from 'react'
// import styles from './styles.module.css'
import Button from '@mui/material/Button'

export default function Modal({ setOpen, message }) {
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
        position: 'absolute'
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
          <h1>{message}</h1>
          <Button onClick={() => setOpen(false)} variant='contained'>
            Ok
          </Button>
        </div>
      </div>
    </div>
  )
}
