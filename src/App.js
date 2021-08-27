import Navbar from './components/header/Navbar';
import './App.css';
import Header from './components/header/Header';
import About from './components/About-me/About';




function App(props) {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
 
    </div>
  );
}

export default App;
