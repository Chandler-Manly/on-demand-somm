import React, { Component } from 'react';
import WineCard from './WineCard';
import { getAllWines } from '../services/wines';
import '../assets/WineCards.css';


class WineCards extends Component {
  constructor() {
    super()
    this.state = {
      wines: []
    }
  }

  async componentDidMount() {
    const wines = await getAllWines()
    this.setState({ wines })
  }

  render() {

    const CARDS = this.state.wines.reverse().map((wine, index) =>
      index < 8 ? <WineCard _id={wine._id} name={wine.name} imgURL={wine.imgURL} key={index} /> : null
    )

    return (
      <div className="wine-cards">
        <div className="latest">LATEST</div>
        <div className="cards">
          {CARDS}
        </div>
      </div>
    )
  }
}

export default WineCards