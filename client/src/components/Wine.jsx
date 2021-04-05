import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Wine.css';


const Wine = (props) => {
    return (
        <>
            <Link className="wine" to={`/wine/${props.id}`}>
                <img className="wine-image" src={props.imgURL} alt={props.name} />
                <div className="wine-name">{props.name}</div>
            </Link>
        </>
    )
}

export default Wine