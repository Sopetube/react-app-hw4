import './App.css';
import style from "./components/all.module.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import Home from "./pages/home";
import ContactsPage from "./pages/contacts";
import Blog from "./pages/blog";
import Gallery from "./pages/gallery";

function App() {
  return (
    <BrowserRouter>
    <div className={style.wrapper}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contacts'>Contacts</Link>
        <Link to='/gallery'>Gallery</Link>
        
      </nav>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path='gallery' element={<Gallery/>} />
          <Route path='contacts' element={<ContactsPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
