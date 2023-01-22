import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
