import Navbar from './components/navigation/navbar';

import Home from './components/sections/home';
import About from './components/sections/about';
import Dashboard from './components/sections/dashboard';
import Services from './components/sections/services';
import Contact from './components/sections/contact';
import Footer from './components/navigation/footer';
import './styles/main.css';
import './styles/scroll/scroll.js';
import './styles/App.css';
 

function App() {
  return (
    <>
      <img
        className="background-image"
        src="culture.jpg"
        alt="Background Image"
      />
      <Navbar />
      <main>
        <br></br>
        <Home />
        <About />
        <Dashboard />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
