import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Wine.css';


export default function Wine (props) {
    return (
        <>
            <Link className="wine" to={`/wines/${props.id}`}>
                <div className="wine-name">{props.name}</div>
            </Link>
        </>
    )
}

