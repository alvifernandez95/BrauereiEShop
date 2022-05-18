import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className='App-body'>
        <ItemListContainer color='white' greeting='¡Vaya, tu carrito de compras está vacío!' background='#EBAD17' className='List'/>
      </body>
    </div>
  );
}

export default App;
