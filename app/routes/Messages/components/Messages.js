import React from 'react'
import DropzoneUpload from '../../../utils/DropzoneUpload.js'

class Messages extends React.Component {

  render() {
    return (
      <div>
        <h2>Messages</h2>
        <DropzoneUpload />
      </div>
    )
  }

}

module.exports = Messages

