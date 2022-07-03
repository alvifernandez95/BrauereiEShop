import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NotificationProvider>
          <BrowserRouter>
            <header className="App-header">
              <NavBar />
            </header>
            <div className='App-body'>
                <Routes>
                  <Route path='/' element={<ItemListContainer color='white' greeting='Todos los productos' background='#EBAD17' className='List'/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
                  <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                  <Route path='/cart' element={<Cart />} />
                </Routes>
            </div>
          </BrowserRouter>
        </NotificationProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
