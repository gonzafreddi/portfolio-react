import Header from './components/Header'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import ContactSection from './components/ContactForm'
function App() {


  return (
    <>
<div className=' overflow-x-hidden'>
<Header/>
    <About/>
    <Skills/>
    <Proyects/>
    <ContactSection/>
</div>
    </>
  )
}

export default App
