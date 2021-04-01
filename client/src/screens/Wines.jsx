import React from 'react'

export default function Wines(props) {
  const { wines } = props;
  return (
    <div>
      <h3>Wine Test</h3>
      {
        wines.map(wine => (
          <p>{wine.name}</p>
        ))
      }
    </div>
  )
}
