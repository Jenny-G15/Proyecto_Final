import NavAside from '../components/NavAside'
import NavNari from '../components/NavNari'
import Productos from '../components/Productos'
import Footer from '../components/Footer'
import SobreNosotros from '../components/SobreNosotros'



export default function NariHome() {
  return (
    <div> 
          <NavNari/> 
          <NavAside/>
          <SobreNosotros/> 
          <Productos/>
          <Footer/> 
    </div>
    
  )
}
