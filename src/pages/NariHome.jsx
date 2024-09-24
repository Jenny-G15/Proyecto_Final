
import NavNari from '../components/NavNari'
import Productos from '../components/Productos'
import Footer from '../components/Footer'
import {Row} from 'react-bootstrap'
import DestacadosSwiper from '../components/swiper/DestacadosSwiper'
import Servicios from "../components/servicios"




export default function NariHome() {
  return (
    <div id='narihome_container border-test'> 
         <div><NavNari/> </div> 
          <Row className='bg- product-slider mt-5' >
            <DestacadosSwiper/>
          </Row>
          <div><Productos/></div>
          <div><Servicios/></div>
         <div><Footer/></div>  
    </div>
    
  )
}
