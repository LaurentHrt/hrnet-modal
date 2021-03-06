function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Button = _interopDefault(require('@mui/material/Button'));
var material = require('@mui/material');
var red = _interopDefault(require('@mui/material/colors/red'));

function Modal(_ref) {
  var setOpen = _ref.setOpen,
      message = _ref.message,
      buttonText = _ref.buttonText;
  var ColorButton = material.styled(Button)(function (_ref2) {
    var theme = _ref2.theme;
    return {
      color: theme.palette.getContrastText(red[900]),
      backgroundColor: red[900],
      '&:hover': {
        backgroundColor: red[700]
      }
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'fixed'
    },
    onClick: function onClick() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
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
    }
  }, /*#__PURE__*/React.createElement("p", null, message), /*#__PURE__*/React.createElement(ColorButton, {
    onClick: function onClick() {
      return setOpen(false);
    },
    variant: "contained"
  }, buttonText))));
}

module.exports = Modal;
//# sourceMappingURL=index.js.map
