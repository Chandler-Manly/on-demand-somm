import React, { useState, useEffect } from "react";
import "../assets/Wines.css";
import { Link } from "react-router-dom";

import { AZ, ZA } from "../utils/sort";
import { getAllWines } from "../services/wines";

import Wine from "../components/Wine";
import Modal from "../components/Modal";
import Sort from "../components/Sort";
import Search from "../components/Search";


export default function Wines(props) {

  const { wines, handleDelete, currentUser } = props;
  const [open, handleOpen] = useState(false);
  const [allWines, setAllWines] = useState([]);
  const [queriedWines, setQueriedWines] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const serveWines = async () => {
      const wines = await getAllWines();
      setAllWines(wines);
      setQueriedWines(wines);
    };
    serveWines();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedWines(AZ(queriedWines));
        break;
      case "name-descending":
        setQueriedWines(ZA(queriedWines));
        break;
      default: (setQueriedWines(AZ(queriedWines)))
    }
  };

  const handleSearch = (event) => {
    const newQueriedWines = allWines.filter((wine) =>
      wine.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedWines(newQueriedWines, () => handleSort(sortType));
  };

  const handleSubmit = (event) => event.preventDefault();

  const winesJSX = queriedWines.map((wine, index) => (
    <Wine
      _id={wine._id}
      name={wine.name}
      key={index}
    />
  ));

  return (
    <div>
      <div className="our-wine-list-header">Our Wine List</div>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div className="wines">
        {winesJSX}
      </div>
      <h2>Our Wine Collection</h2>
        {wines.map((wine) => (
          <React.Fragment key={wine.id}>
            <Link to={`/wines/${wine.id}`}>
              <p>{wine.name}</p>
            </Link>
            {currentUser?.id === wine.user_id && (
              <>
                <Link to={`/wines/${wine.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleOpen(wine.id)}>Delete</button>
              </>
            )}
          </React.Fragment>
        ))}
        <br />

        <Link to="/wines/new">
          <button>Create</button>
        </Link>
        {open && (
          <Modal
            open={open}
            handleOpen={handleOpen}
            handleDelete={handleDelete}
          />
        )}
      </div>
  );
}
