import { useState } from "react";

export default function WineCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { name } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleCreate(formData)
    }}>
      <h3>Create Wine</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
      </form>
  );
}
