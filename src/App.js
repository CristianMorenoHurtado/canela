import Nav from './components/Nav';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
