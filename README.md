# hrnet-modal

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/hrnet-modal.svg)](https://www.npmjs.com/package/hrnet-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @laurenthrt/hrnet-modal
```

## Usage

```jsx
import React, { Component } from 'react'
import Modal from '@laurenthrt/hrnet-modal'

function Example() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Modal
      setOpen={setModalIsOpen}
      message='Employee created'
      buttonText='Close'
    />
  )
}
```

## License

MIT © [LaurentHrt](https://github.com/LaurentHrt)
