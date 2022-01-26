import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'
import red from '@mui/material/colors/red'

export default function Modal({ setOpen, message, buttonText }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[900]),
    backgroundColor: red[900],
    '&:hover': {
      backgroundColor: red[700]
    }
  }))

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
            width: '200px',
            height: '200px',
            background: 'white',
            zIndex: '9999',
            borderRadius: '16px',
            boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
            textAlign: 'center',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <p>{message}</p>
          <ColorButton onClick={() => setOpen(false)} variant='contained'>
            {buttonText}
          </ColorButton>
        </div>
      </div>
    </div>
  )
}
