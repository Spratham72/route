import './App.css';
import {Routes,Route} from "react-router-dom";
import {Home} from './component/Home';
import { Product } from './component/Products';
import {Detail} from './component/ProductDetails'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Product/>}> </Route>
      <Route path='/products/:id' element={<Detail/>}> </Route>
      </Routes> 
    </div>
  );
}

export default App;
