
import NavNari from '../components/NavNari'
import Productos from '../components/Productos'
import Footer from '../components/Footer'
import Promociones from "../components/Promociones"



export default function NariHome() {
  return (
    <div> 
          <NavNari/> 
          <Promociones/>
          <Productos/>
          <Footer/> 
         
    </div>
    
  )
}
