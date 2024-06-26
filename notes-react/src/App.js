import Navbar from "./components/Navbar";
import Home from './components/Home';
import { Routes , Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from './components/NotFound';
import Protectedroute from './components/ProtectedRoute';




function App() {


  


  return (
  <>
    <Navbar/>
   <Routes>
    <Route path="/" element={ <Protectedroute><Home/></Protectedroute>} />
    <Route path="/home" element={ <Protectedroute><Home/></Protectedroute> } />
    <Route path="/login" element={ <Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="*" element={<NotFound/>} />
   </Routes>
   <p className="developer">Made with <i className="fas fa-heart"></i> by <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/eslam-elsebaey-ab9564163/">Eslam Elsebaey</a></p>
  
   
 
  

  
  </>
  );
}

export default App;
