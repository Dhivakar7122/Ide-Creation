import './App.css';
import About from './components/About';
import Client from './components/Client';
import Footer from './components/Footer';
import Home from './components/Home';
import Mynav from './components/Mynav';
import Ourservices from './components/Ourservices';
import Ourworking from './components/Ourworking';
import Project from './components/Project';



function App() {
  return (
    <div className="App">
      <Mynav/>
      <Home/>
      <About/>
      <Ourservices/>
      <Ourworking/>
      <Project/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
