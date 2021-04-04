import { useState, useEffect } from "react";
import Wine from "../components/Wine";
import Layout from "../layouts/Layout";
import { getAllWines } from "../services/wines";

const WinesofMine = (props) => {
  const [allMyWines, setAllMyWines] = useState([]);

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
  
  const userWines = allMyWines.filter((wine) => props.currentUser.id === wine.user_id);
  console.log(userWines)
  return (
    // <Layout user={props.user}>
      <div className="user-wine-container">
        <div className="user-wines-text">
          <div className="user-wines-heading"> My Tasted Wines </div>
        </div>
        <div className="user-wines">
          {allMyWines.map((wine, index) => (
            <Wine
              id={wine.id}
              name={wine.name}
              userId={wine.user_id}
              key={index}
            />
          ))}
        </div>
      </div>
    // </Layout>
  );
};

export default WinesofMine;
