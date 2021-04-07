// import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';

// export default function TastingEdit(props) {
//   const [formData, setFormData] = useState({
//     tastingData: {
//       name:"",
//       clarity: "",
//       intensity_aromatics: "",
//       color: "",
//       observations: "",
//       condition: "",
//       intensity_palate: "",
//       aromas_primary: "",
//       aromas_secondary: "",
//       aromas_tertiary: "",
//       development: "",
//       alcohol: "",
//       sweetness: "",
//       acidity: "",
//       tannin: "",
//       body: "",
//       mousse: "",
//       intensity_flavor: "",
//       flavor_characteristics_primary: "",
//       flavor_characteristics_secondary: "",
//       flavor_characteristics_tertiary: "",
//       finish: "",
//       quality_level: "",
//       ageing_potential: "",
//     }
//   });
  

//   const {
//     name,
//     clarity,
//     intensity_aromatics,
//     color,
//     observations,
//     condition
//     intensity_palate,
//     aromas_primary,
//     aromas_secondary,
//     aromas_tertiary,
//     development,
//     alcohol,
//     sweetness,
//     acidity,
//     tannin,
//     body,
//     mousse,
//     intensity_flavor,
//     flavor_characteristics_primary,
//     flavor_characteristics_secondary,
//     flavor_characteristics_tertiary,
//     finish,
//     quality_level,
//     ageing_potential
//   } = formData;
//   const { id } = useParams();
//   const { tastings, handleUpdate } = props;

//   useEffect(() => {
//     const prefillFormData = () => {
//       const tastingItem = tastings.find(tasting => tasting.id === Number(id));
//       setFormData({
//         name: tastingItem.name,
//         clarity: tastingItem.clarity,
//         intensity_aromatics: tastingItem.intensity_aromatics,
//         color: tastingItem.color,
//         observations: tastingItem.observations,
//         condition: tastingItem.condition,
//         intensity_palate: tastingItem.intensity_palate,
//         aromas_primary: tastingItem.aromas_primary,
//         aromas_secondary: tastingItem.aromas_secondary,
//         aromas_tertiary: tastingItem.aromas_tertiary,
//         development: tastingItem.development,
//         alcohol: tastingItem.alcohol,
//         sweetness: tastingItem.sweetness,
//         acidity: tastingItem.acidity,
//         tannin: tastingItem.tannin,
//         body: tastingItem.body,
//         mousse: tastingItem.mousse,
//         intensity_flavor: tastingItem.intensity_flavor,
//         flavor_characteristics_primary: tastingItem.flavor_characteristics_primary,
//         flavor_characteristics_secondary: tastingItem.flavor_characteristics_secondary,
//         flavor_characteristics_tertiary: tastingItem.flavor_characteristics_tertiary,
//         finish: tastingItem.finish,
//         quality_level: tastingItem.quality_level,
//         ageing_potential: tastingItem.ageing_potential
//       })
//     }
//     if (tastings.length){
//       prefillFormData()
//     }
//   }, [tastings, id])

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

  

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       handleUpdate(id, formData);
//     }}>
//       <h3>Edit Tasting Card</h3>
//       <label>
//         Name:
//         <input
//           type='text'
//           name='name'
//           value={tastings.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//       clarity:
//         <input
//           type='text'
//           name='clarity'
//           value={tastings.clarity}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Intensity Aromatics:
//         <input
//           type='text'
//           name='intensity_aromatics'
//           value={intensity_aromatics}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Color:
//         <input
//           type='text'
//           name='color'
//           value={color}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//       Observations:
//         <input
//           type='text'
//           name='observations'
//           value={observations}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Condition:
//         <input
//           type='text'
//           name='condition'
//           value={condition}
//           onChange={handleChange}
//         />
//       </label>
//       <button>Submit</button>
//     </form>
//   )
// }
