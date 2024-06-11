
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import AddEmp from './component/AddEmp';
import Navbar from './component/Navbar';
import Home from './component/Home';
import EditEmp from './component/EditEmp';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addEmp' element={<AddEmp/>} />
        <Route path='/editEmp/:id' element={<EditEmp/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
