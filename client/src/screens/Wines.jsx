import React from 'react'
import Modal from '../components/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`/wines/${wine.id}/edit`}><button>Edit</button></Link>
            <button onClick={()=>handleOpen(wine.id)}>Delete</button>
          </>
        ))
      }
      <Link to='/wines/new'><button>Create</button></Link>
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
