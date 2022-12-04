import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos!" />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/categoria/:catID" element={<ItemListContainer greeting="Bienvenidos!" />}/>
        <Route path="*" element={<h1 className="greeting">404: Recurso no encontrado</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
