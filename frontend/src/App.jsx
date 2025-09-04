import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import Education from './Education';


function App() {
  return (
    <>
    <div className="container min-h-screen font-sans bg-gray-50 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"> 
      <Header />
      <Home />
      <About />
      <Education />
      <Work />
      <Contact />
      <Footer />
    </div>

      
    </>
  )
}

export default App;
