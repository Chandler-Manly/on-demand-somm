import { useState, useEffect } from "react";
import Wine from "../components/Wine";
import { getAllWines } from "../services/wines";
import { AZ, ZA } from "../utils/sort";


import Sort from "../components/Sort";
import Search from "../components/Search";
import '../assets/WineCards.css';


const WinesofMine = (props) => {
  const [allMyWines, setAllMyWines] = useState([]);
  const [queriedWines, setQueriedWines] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const pourMyWines = async () => {
      const wines = await getAllWines();
      setAllMyWines(wines);
    };
    pourMyWines();
  }, []);

  if (!allMyWines || !props.currentUser) {
    return <div>One moment please...Relax pour a glass of wine!</div>;
  }

  const userWines = allMyWines.filter(
    (wine) => props.currentUser.id === wine.user_id
  );

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
    const newQueriedWines = allMyWines.filter((wine) =>
      wine.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedWines(newQueriedWines, () => handleSort(sortType));
  };

  const handleSubmit = (event) => event.preventDefault();

  const winesJSX = queriedWines.map((wine, index) => (
    <Wine
      id={wine.id}
      name={wine.name}
      key={index}
    />
  ));

  return (
    // <Layout user={props.currentUser}>
<div>
    <div className="our-wine-list-header">Our Wine List</div>
    <Search onSubmit={handleSubmit} onChange={handleSearch} />
    <Sort onSubmit={handleSubmit} onChange={handleSort} />
    <div className="wines">
      {winesJSX}
    </div>
      <div className="user-wine-container">
        <div className="user-wines-text">
          <div className="user-wines-heading"> My Tasted Wines </div>
        </div>
        <div className="user-wines">
          {userWines.map((wine, index) => (
            <Wine
              id={wine.id}
              name={wine.name}
              userId={wine.user_id}
              key={index}
            />
          ))}
        </div>
      </div>
      </div>
  );
};

export default WinesofMine;
