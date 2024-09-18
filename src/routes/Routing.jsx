import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NariHome from '../pages/NariHome'
import Register  from '../pages/Register';
import Login from '../pages/Login';
import AdminNari from '../pages/AdminNari';



const Routing = () => {

  return (
    <Router>
     <Routes>

       <Route path="/" element={<Login />} />
       <Route path="/NariHome" element={<NariHome/>} /> 
       <Route path="/AdminNari" element={<AdminNari/>} /> 
       <Route path="/Register" element={<Register/>} />
      

      
     
     
    
     </Routes>
    </Router>
   );
};
export default Routing

 //<Route path="/Home" element={ <Protec><Home/></Protec>} />