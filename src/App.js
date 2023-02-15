import './App.css';
import NavbarElement from './components/NavbarElement';
import CreateProfile from './components/CreateProfile';
import Hero from './components/Hero';
import PopularTrip from './components/PopularTrip';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarElement />
      <Hero />
      <CreateProfile />
      <PopularTrip />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
