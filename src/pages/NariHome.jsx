import NavAside from '../components/NavAside'
import NavNari from '../components/NavNari'
import Productos from '../components/Productos'
import Footer from '../components/Footer'


export default function NariHome() {
  return (
    <div> 
          <NavNari/> 
          <NavAside/>
          <Productos/>
          <Footer/>
    </div>
    
  )
}
