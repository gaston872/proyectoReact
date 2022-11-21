import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  
  return (   
<>
    <Navbar/>
    <div className="App">
      <header className="App-header">
      <ItemListContainer/>
      </header>
    </div>
  </>
  );
}

export default App;
