import React from 'react';
import './DescriptionCard.css';
import separador from '../../assets/svg/1.svg'
import imagen from '../../assets/images/1.jpg'

const DescriptionCard = () => {
  return ( 
    <figure className='figure-container'>
      <img className='w-fit mb-6' src={separador} alt="description-separador"/>
      <div className='p-1 description-card-container'>
        <div className='text-container'>
          <span className='text-3xl font-medium description-span'>Reiki</span>
          <p className='description-p'>Terapia energética complementaria a la medicina tradicional, realizada a través de imposición de manos, por medio de las cuales se hace una transferencia de energía reconduciendo y re equilibrando la energía vital de nuestro organismo para facilitar el bienestar físico, emocional y espiritual.</p>
        </div>
        <div className='description-img mt-5 mb-5'>
          <img className='w-full h-full object-cover' src={imagen} alt="reiki" />
        </div>
        <div className='w-full mt-5'>
          <button className='description-button'>Agenda tu cita</button>
        </div>
      </div>
    </figure>
  )
}

export default DescriptionCard