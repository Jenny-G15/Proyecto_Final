import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Asegúrate de importar Autoplay
import nari2 from "../../img/nari2.jpeg";
import nari1 from "../../img/nari1.jpeg";
import nari3 from "../../img/nari3.jpeg";
import "swiper/swiper-bundle.css"; // Asegúrate de importar los estilos de Swiper
import './DestacadosSwiper.css'; // Tu CSS personalizado

function Destacados() {
  return (
    
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1} // Mostrar 3 slides por vista
      spaceBetween={20} // Espacio entre los slide
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="d-block w-100" src={nari1} alt="First slide" />
        <div className="caption">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="d-block w-100" src={nari2} alt="Second slide" />
        <div className="caption">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="d-block w-100" src={nari3} alt="Third slide" />
        <div className="caption">
        </div>
      </SwiperSlide>
      {/* Puedes agregar más slides si lo deseas */}
    </Swiper>
  );
}

export default Destacados;
