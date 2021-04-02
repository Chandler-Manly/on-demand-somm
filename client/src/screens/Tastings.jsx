import React from 'react'
import Layout from '../layouts/Layout';

export default function Tastings(props) {
  const { tastings } = props;
  return (
    <Layout>
    <div>
      <h3>Tasting Notes</h3>
      {
        tastings.map(tasting => (
          <p key={tasting.id}>{tasting.name}</p>
        ))  
      }
      </div>
      </Layout>
  )
}
