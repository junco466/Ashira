import React from 'react';
import parse from 'html-react-parser';
import './DescriptionCard.css';
import separador from '../../assets/svg/separador.svg'

const DescriptionCard = ( { service } ) => {
  return ( 
    <figure className='figure-container'>
      <img className='w-fit mb-6' src={separador} alt="description-separador"/>
      <div className='p-1 description-card-container'>
        <div className='text-container'>
          <span className='text-3xl font-medium description-span'>{parse(service.title)}</span>
          <p className='description-p'>{parse(service.description)}</p>
        </div>
        <div className='description-img mt-5 mb-5'>
          <img className='w-full h-full object-cover' src={service.image} alt={service.title} />
        </div>
        <div className='w-full mt-5'>
          <button className='description-button'>Agenda tu cita</button>
        </div>
      </div>
    </figure>
  )
}

export default DescriptionCard