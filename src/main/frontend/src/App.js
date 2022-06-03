import './App.css';
import Navbar from './components/Navbar';
import Form from "./components/Form";
import { useState } from 'react';
import StickyNotes from './components/StickyNotes';

function App() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <Navbar setShowForm={setShowForm} formSwitch={showForm}/>
      {showForm && <Form />}
      <StickyNotes />
    </div>
  );
}

export default App;
