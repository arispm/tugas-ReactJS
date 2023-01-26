import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Portofolio from './components/portofolio/Portofolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
