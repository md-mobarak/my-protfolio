import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import AboutMe from './components/HomePage/AboutMe';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
