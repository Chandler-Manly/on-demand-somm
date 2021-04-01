import React from 'react'

export default function Tastings(props) {
  const { tastings } = props;
  return (
    <div>
      <h3>Tasting Notes</h3>
      {
        tastings.map(tasting => (
          <p>{tasting.name}</p>
        ))  
      }
    </div>
  )
}
