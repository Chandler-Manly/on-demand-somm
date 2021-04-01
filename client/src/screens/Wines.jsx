import React from 'react'
import Modal from '../components/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Wines(props) {
  const { wines, handleDelete, currentUser } = props;
  const [open, handleOpen] = useState(false)
  
  return (
    <div>
      <h3>Wine Test</h3>
      {
        wines.map(wine => (
          <React.Fragment key={wine.id}>
            <Link to={`/wines/${wine.id}`}><p>{wine.name}</p></Link>
            {
              currentUser?.id === wine.user_id &&
                <>
                <Link to={`/wines/${wine.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => handleOpen(wine.id)}>Delete</button>
                </>
            }
      </React.Fragment>
        ))
      }
      <br />
      
      <Link to='/wines/new'><button>Create</button></Link>
      {
        open && (
          <Modal
            open={open}
            handleOpen={handleOpen}
            handleDelete={handleDelete} />
        )}
    </div>
  )
}
