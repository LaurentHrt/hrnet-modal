import React from 'react';
import Button from '@mui/material/Button';

function Modal({
  setOpen,
  message
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute'
    },
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '250px',
      height: '200px',
      background: 'white',
      zIndex: '9999',
      borderRadius: '16px',
      boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
      textAlign: 'center',
      padding: '10px'
    }
  }, /*#__PURE__*/React.createElement("h1", null, message), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setOpen(false),
    variant: "contained"
  }, "Ok"))));
}

export default Modal;
//# sourceMappingURL=index.modern.js.map
