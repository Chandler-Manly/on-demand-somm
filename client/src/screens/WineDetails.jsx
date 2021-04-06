import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addTasting } from '../services/tastings';
import { getOneWine } from '../services/wines';

import "../assets/WineDetails.css";

export default function WineDetails(props) {
  const [wineItem, setWineItem] = useState(null);
  const [selectedTasting, setSelectedTasting] = useState('');
  const { id } = useParams();
  const { tastings } = props;

  useEffect(() => {
    const fetchWineItem = async () => {
      const wineData = await getOneWine(id);
      setWineItem(wineData);
    }
    fetchWineItem()
  }, [id])

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedTasting(value)
  }

  const handleSubmit = async () => {
    const wineData = await addTasting(id, selectedTasting);
    setWineItem(wineData);
  }

  return (
    <div className="wine-details-container">
      
        <h1>Wine Details Page</h1>
      <h3>{wineItem?.name}</h3>
      <h4>{wineItem?.producer}</h4>
      <h5>{wineItem?.varietal}</h5>

      {wineItem?.tastings.map(tasting => (
        <p key={tasting.id}>
          <h1>{tasting.name}</h1>
          <h3>Appearance</h3>
          Clarity: {tasting.clarity}<br/>
          Intensity: {tasting.intensity_aromatics}<br/>
          Color: {tasting.color}<br/>
          Other observations: {tasting.observations}<br/>          
          
          <h3>Nose</h3>
          Condition: {tasting.condition} <br/>
          Intensity: {tasting.intensity_palate}<br/>  
          Aromas Primary: {tasting.aromas_primary} <br/>
          Aromas Secondary: {tasting.aromas_secondary}<br/>
          Aromas Tertiary: {tasting.aromas_tertiary} <br/>
          Development: {tasting.development}
          
          <h3>Palate</h3>
          Alcohol: {tasting.alcohol} <br/>
          Sweetness: {tasting.sweetness} <br/>
          Acidity: {tasting.acidity} <br/>
          Tannin: {tasting.tannin} <br/>
          Body: {tasting.body} <br/>
          Mousse: {tasting.mousse} <br/>
          Intensity: {tasting.intensity_flavor}<br/> 
          Flavors Primary: {tasting.flavor_characteristics_primary}<br/>
          Flavors Secondary: {tasting.flavor_characteristics_secondary}<br/>
          Flavors Tertiary: {tasting.flavor_characteristics_tertiary}<br/>
          Finish: {tasting.finish}

          <h3>Conclusions</h3>
          Quality Level: {tasting.quality_level}<br/>
          Ageing Potential: {tasting.ageing_potential}
        
        </p>
      ))}
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <select onChange={handleChange} defaultValue='default'>
          <option value='default' disabled>-- Select a Type --</option>
          {tastings.map(tasting => (
            <option value={tasting.id}>{tasting.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
      </div>
  )
}