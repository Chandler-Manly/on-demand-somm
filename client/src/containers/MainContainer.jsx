import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Tastings from "../screens/Tastings";
import Wines from "../screens/Wines";
import WineCreate from "../screens/WineCreate";

import { getAllTastings } from "../services/tastings";
import { getAllWines } from "../services/wines";
import { destroyWine } from "../services/wines";
import { postWine } from "../services/wines";


export default function MainContainer() {
  const [tastings, setTastings] = useState([]);
  const [wines, setWines] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchTastings = async () => {
      const tastingData = await getAllTastings();
      setTastings(tastingData);
    };
    fetchTastings();
  }, []);

  useEffect(() => {
    const fetchWines = async () => {
      const wineData = await getAllWines();
      setWines(wineData);
    };
    fetchWines();
  }, []);

  const handleCreate = async (wineData) => {
    const newWine = await postWine(wineData);
    setWines(prevState => [...prevState, newWine]);
    history.push('/wines');
  }

  const handleDelete = async (id) => {
    await destroyWine(id);
    setWines((prevState) => prevState.filter((wine) => wine.id !== id));
  };

  return (
    <Switch>
      <Route path="/tastings">
        <Tastings tastings={tastings} />
      </Route>
      <Route path="/wines">
        <Wines wines={wines} handleDelete={handleDelete} />
      </Route>
      <Route path="/wines/new">
        <WineCreate handleCreate={handleCreate} />
      </Route>
    </Switch>
  );
}
