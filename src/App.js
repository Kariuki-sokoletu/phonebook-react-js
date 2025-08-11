import { Header } from './components/Header';
import { AddNumber } from './components/AddNumber';
import { ContactList } from './components/ContactList';

import { Footer } from './components/Footer';
import './App.css';
import { useState } from 'react';



function App() {

  const [add, setAdd] = useState([]);


  return (
    <div className="App">
      <Header />
      
        <AddNumber add={add} setAdd={setAdd} />
        <ContactList add={add} setAdd={setAdd} />
        
      <Footer />
    </div>
  );
}

export default App;
