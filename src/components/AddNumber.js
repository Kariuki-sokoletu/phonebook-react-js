import { useState } from "react";
import "./AddNumber.css";

export const AddNumber = ({ add, setAdd }) => {
  const [contact, setContact] = useState("");
  const [ contactValid,setcontactValid] = useState(true);

  const handleChange = (e) => {
    //console.log(e.target.value);
    setContact(e.target.value.trim());
  };

  const handleReset = () => {
    setContact("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(contact.trim() === ''){
      setcontactValid(false)
      return;
    }
    setcontactValid(true)

    //const regexp = /^~!@#$%&*()[]{}'";.,<>?/
    //if (!regexp.test(contact)){
    //  return;
   // }
  
    const addition = {
      id: Math.floor(Math.random() * 10000),
      name: contact,
    };
    console.log(addition);
    setAdd([...add, addition]);
    handleReset();
  };

  return (
    <section className="addnumber">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="addition"
          id="addition"
          placeholder="Add name and Phone number"
          autoComplete="off"
          value={contact}
        />
        {!contactValid && <div className="warning-text"><p>Name and Phone number is required</p></div>}
        <button type="submit">Add Contact</button>
      </form>
    </section>
  );
};
