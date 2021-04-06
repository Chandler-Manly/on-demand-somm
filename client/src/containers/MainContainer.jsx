import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Tastings from "../screens/Tastings";
import Wines from "../screens/Wines";
import WineCreate from "../screens/WineCreate";
import WineEdit from "../screens/WineEdit";
import WineDetails from "../screens/WineDetails";
import WinesOfMine from "../screens/WinesOfMine";



import { getAllTastings } from "../services/tastings";
import { getAllWines } from "../services/wines";
import { destroyWine } from "../services/wines";
import { postWine } from "../services/wines";
import { putWine } from "../services/wines";

import AboutUs from "../assets/AboutUs";

export default function MainContainer(props) {
  const [tastings, setTastings] = useState([]);
  const [wines, setWines] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

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
    }
    fetchWines();
  }, [])

  const handleCreate = async (wineData) => {
    const newWine = await postWine(wineData);
    setWines(prevState => [...prevState, newWine]);
    history.push('/wines');
  }

  const handleUpdate = async (id, wineData) => {
    const updatedWine = await putWine(id, wineData);
    setWines(prevState => prevState.map(wine => {
      return wine.id === Number(id) ? updatedWine : wine
    })) 
    history.push('/wines');
  }

  const handleDelete = async (id) => {
    await destroyWine(id);
    setWines(prevState => prevState.filter(wine => wine.id !== id))
  }

  return (
    <Switch>
        <Route path='/about-us'>
        <AboutUs/>
        </Route>
      <Route path='/wines/new'>
        <WineCreate
          handleCreate={handleCreate}
          user={props.currentUser}
        />
      </Route>
      <Route path="/wines/:id/edit">
        <WineEdit
          wines={wines}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path="/wines/:id">
        <WineDetails
          tastings={tastings}
          wines={wines}
          currentUser={currentUser}
        />
      </Route>
      <Route path="/wines">
        <Wines
          wines={wines}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
        {/* <Route path='/tastings'>
          <Tastings
            tastings={tastings}
          />
      </Route> */}
      <Route path="/users/:id">
        <WinesOfMine
        currentUser={currentUser}
        />
        </Route>
    </Switch>
  );
}
