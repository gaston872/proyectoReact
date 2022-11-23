import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  
  return (   
<>
    <Navbar/>
    <div className="App">
      <header className="App-header">
      <ItemListContainer greeting="Bienvenidos!"/>
      </header>
    </div>
  </>
  );
}

export default App;
