import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/WineCard.css';


const WineCard = (props) => {
    return (
        <div className="wine-card">
            <Link className="card" to={`/wines/${props.id}`}>
                {/* <img className="wine-card-image" src={props.imgURL} alt={props.name} /> */}
                <div>View</div>
            </Link>
        </div>
    )
}

export default WineCard