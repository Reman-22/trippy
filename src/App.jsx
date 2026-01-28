
import './App.css'
import {Route ,Routes} from "react-router-dom"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Service from './Pages/Service.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Root from './Pages/Root.jsx'




function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Root/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/service' element={<Service/> }/>
    </Route>

    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
  </Routes>
      
    </>
  )
}

export default App
