
import { ContactCard } from "./ContactCard";
import "./ContactList.css";



export const ContactList = ({add,setAdd}) => {

    function handleDelete(id) {
        setAdd(add.filter((addition) => addition.id !== id));
    }


  return (
    <section className="contactlist">
      <ul>
        <div className="header">
          <h1>Contact List</h1>
          <button className="trigger">show/hide</button>
        </div>
        { add.map((addition) => (
           <ContactCard key={addition.id} addition={addition} handleDelete={handleDelete} />
        ))}
        
          
        
        
      </ul>
    </section>
  );
}
