import React from 'react'
import Modal from '../components/Modal';
import { useState } from 'react';

export default function Wines(props) {
  const { wines, handleDelete } = props;
  const [open, handleOpen] = useState(false)
  
  return (
    <div>
      <h3>Wine Test</h3>
      {
        wines.map(wine => (
          <>
            <p key={wine.id}>{wine.name}</p>
            <button onClick={()=>handleOpen(wine.id)}>Delete</button>
          </>
        ))
      }
      {
        open && (
          <Modal
            open={open}
            handleOpen={handleOpen}
            handleDelete={handleDelete} />
        )
      }
    </div>
  )
}
