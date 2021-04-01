import { useState } from "react";

export default function WineCreate() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form>
      <h3>Create Wine</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
