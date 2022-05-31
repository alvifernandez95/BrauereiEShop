import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <body className='App-body'>
            <Routes>
              <Route path='/' element={<ItemListContainer color='white' greeting='Todos los productos' background='#EBAD17' className='List'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            </Routes>
        </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
