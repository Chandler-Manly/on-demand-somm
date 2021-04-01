import React from 'react'

export default function Modal(props) {
  const { open, handleOpen, handleDelete } = props;
  return (
    <div className='modal-container' onClick={(e) => handleOpen(false)}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <p>Are you sure?</p>
        <button onClick={() => handleOpen(false)}>no</button>
        <button onClick={() => {
          handleDelete(open)
          handleOpen(false)
        }}>yes</button>
      </div>
    </div>
  )
}