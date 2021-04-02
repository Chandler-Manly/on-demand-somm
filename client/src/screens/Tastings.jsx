import React from 'react'

export default function Tastings(props) {
  const { tastings } = props;
  return (
    <div>
      <h3>Types</h3>
      {
        tastings.map(tasting => (
          <p key={tasting.id}>{tasting.name}</p>
        ))  
      }
      </div>
  )
}
