import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Data from './components/Data'
import Footer from './components/Footer'
import Header from './components/Header'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import SoftSkills from './components/SoftSkills'


function App() {


  return (
    <div className="App">
      <div className='header-container'>
        <Header/>
      </div>
            <section className='container-data'>
                  <Data/>  
                  <AboutMe/>
                  <Skills/>
                  <SoftSkills/>
                  <Proyects/>
                  <Contact/>
                  <Footer/>
            </section>
      
    </div>
  )
}

export default App
