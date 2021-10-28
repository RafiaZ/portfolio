import Navbar from './components/header/Navbar';
import './App.css';
import Header from './components/header/Header';
import About from './components/About-me/About';
import MySkills from './components/Skills/MySkills'
import Resume from './components/My-Resume/Resume'
import Recents from './components/Recent-work/Recents';
import ContactMe from './components/contact-me/ContactMe';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup'
import Practice from './components/practice-component/Practice';




function App(props) {
  return (
    <div>
      <Popup/>
      <Navbar/>
      <Header/>
      <About/>
     <MySkills/>
     <Resume/>
     <Recents/>
     <ContactMe/>
     <Footer/>

     {/* <Practice/> */}
    </div>
  );
}

export default App;
