import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function WineEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    producer: '',
    varietal:''
  });
  const { name, producer, varietal } = formData;
  const { id } = useParams();
  const { wines, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const wineItem = wines.find(wine => wine.id === Number(id));
      setFormData({
        name: wineItem.name,
        producer: wineItem.producer,
        varietal: wineItem.varietal
      })
    }
    if (wines.length){
      prefillFormData()
    }
  }, [wines, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Wine</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Producer:
        <input
          type='text'
          name='producer'
          value={producer}
          onChange={handleChange}
        />
      </label>
      <label>
        Varietal:
        <input
          type='text'
          name='varietal'
          value={varietal}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
