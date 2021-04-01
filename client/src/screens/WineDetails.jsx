import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addTasting } from '../services/tastings';
import { getOneWine } from '../services/wines';

export default function WineDetails(props) {
  const [wineItem, setWineItem] = useState(null);
  const [selectedTasting, setSelectedTasting] = useState('');
  const { id } = useParams();
  const { tastings } = props;

  useEffect(() => {
    const fetchWineItem = async () => {
      const wineData = await getOneWine(id);
      setWineItem(wineData);
      console.log(wineData);
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
    <div>
      <h3>{wineItem?.name}</h3>
      {wineItem?.tastings.map(tasting => (
        <p key={tasting.id}>{tasting.name}</p>
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