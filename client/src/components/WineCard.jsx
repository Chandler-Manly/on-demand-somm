import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/WineCard.css';


const WineCard = (props) => {
    return (
        <div className="wine-card">
            <Link className="card" to={`/wines/${props.id}`}>
                <div>View</div>
            </Link>
        </div>
    )
}

export default WineCard