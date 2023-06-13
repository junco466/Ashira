import React from 'react'
import DescriptionCard from '../../Components/DescriptionCard'
import { services } from '../../db/Services';

import logo from '../../assets/logos/1.png';
import slogan from '../../assets/logos/2.png';
import calendar from '../../assets/svg/calendar.svg';
import laptop from '../../assets/svg/laptop.svg';
import community from '../../assets/svg/community.svg';
import hero from '../../assets/svg/hero.svg';
import './Home.css';

function Home() {
  return (
    <>
      <section className=' relative hero-section w-full'>
        
        <div className='text-center items-center m-auto'>
          <img className="ashira-logo" src={logo} alt="hero-background" />
          <img className="ashira-name" src={slogan} alt="hero-background" />
          <h3 className="ashira-slogan">Prácticas holísticas para sanar los cuerpos físico, mental y emocional.</h3>
        </div>

        <div className='relative hero-bottom-container mb-40'>
          
          <div className='absolute bottom-28 left-60 bg-white flex justify-between items-center fast-service-box w-2/3 m-auto shadow-xl drop-shadow-xl'>
          
            <div className=' flex items-center justify-center fast-service-green-box'>
              <h2 className='text-4xl w-48 text-white text-center'>Tu eres quien decide</h2>
            </div>

            <div className='w-48 flex flex-wrap items-center justify-center'>
              <span className='fast-service-span text-center'>Consultas en linea o presenciales</span>
              <img className='w-20 m-2 text-center' src={calendar} alt="agendar consultas" />
              <span className='fast-service-span-lg'>Agenda tu cita</span>
            </div>

            <div className='w-48 flex flex-wrap items-center justify-center'>
              <span className='fast-service-span'>Cursos en linea</span>
              <img className='w-20 m-4' src={laptop} alt="curso en line" />
              <span className='fast-service-span-lg'>Saber mas</span>
            </div>

            <div className='w-48 flex flex-wrap items-center justify-center'>
              <span className='fast-service-span'>Eventos grupales</span>
              <img className='w-20 m-4' src={community} alt="eventos grupales" />
              <span className='fast-service-span-lg'>Saber mas</span>
            </div>

          </div>

          <img className="hero-background" src={hero} alt="hero-background" />
        
        </div>
      </section>

      <div className='w-3/4' id='servicios'>
        <section className='service-section w-full items-center'>
          {services.map((service) => <DescriptionCard service={service} key={`service-${service.id}`}/>)}
        </section>
      </div>
    </>
  )
}

export default Home;