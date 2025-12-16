import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import Education from './Education';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="container min-h-screen font-sans bg-gray-50 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>

      
    </>
  )
}

export default App;
