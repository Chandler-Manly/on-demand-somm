import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Tastings from '../screens/Tastings';
import Wines from '../screens/Wines';

import { getAllTastings } from '../services/tastings';
import { getAllWines } from '../services/wines';


export default function MainContainer() {
  const [tastings, setTastings] = useState([])
  const [wines, setWines] = useState([])

  useEffect(() => {
    const fetchTastings = async () => {
      const tastingData = await getAllTastings();
      setTastings(tastingData);
    }
    fetchTastings();
  }, [])

  useEffect(() => {
    const fetchWines = async () => {
      const wineData = await getAllWines();
      setWines(wineData);
    }
    fetchWines();
  }, [])

  return (
    <Switch>
      <Route path='/tastings'>
        <Tastings tastings={tastings}/>
      </Route>
      <Route path='/wines'>
        <Wines wines={wines} />
      </Route>
    </Switch>
  )
}
