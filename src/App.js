import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import BusDetails from './components/BusDetails';
import ViewAllBus from './components/ViewAllBus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route   path='/' element={<AddBus/>}/>
      <Route   path='/bus' element={<BusDetails/>}/>
      <Route   path='/Viewall' element={<ViewAllBus/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
