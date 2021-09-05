import Navbar from './components/header/Navbar';
import './App.css';
import Header from './components/header/Header';
import About from './components/About-me/About';
import MySkills from './components/Skills/MySkills'
import Resume from './components/My-Resume/Resume'




function App(props) {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
     <MySkills/>
     <Resume/>
    </div>
  );
}

export default App;
