import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import AboutMe from './components/HomePage/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Blog from './components/Blog/Blog';
import MyProject from './components/MyProject/MyProject';
import Footer from './components/Footer/Footer';
// ..
AOS.init();

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/contactMe' element={<ContactMe></ContactMe>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myProject' element={<MyProject></MyProject>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
