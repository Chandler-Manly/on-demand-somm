import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Wine.css';


const Wine = (props) => {
    return (
        <>
            <Link className="wine" to={`/wine/${props.id}`}>
                <div className="wine-name">{props.name}</div>
            </Link>
        </>
    )
}

export default Wine