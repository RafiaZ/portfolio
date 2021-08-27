import Navbar from './components/header/Navbar';
import './App.css';
import Header from './components/header/Header';
import About from './components/About-me/About';
import Popup from './components/header/Popup';



function App(props) {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Popup/>
    </div>
  );
}

export default App;
