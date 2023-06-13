import React from 'react'
import DescriptionCard from '../../Components/DescriptionCard'
import { services } from '../../db/Services';
import './Home.css';

function Home() {
  return (
    <>
      <section className=' relative hero-section w-full'>
        
        <div className='text-center items-center m-auto'>
          <img className="ashira-logo" src="src/assets/logos/1.png" alt="hero-background" />
          <img className="ashira-name" src="src/assets/logos/2.png" alt="hero-background" />
          <h3 className="ashira-slogan">Prácticas holísticas para sanar los cuerpos físico, mental y emocional.</h3>
        </div>

        <div className='relative hero-bottom-container mb-40'>
          
          <div className='absolute bottom-28 left-60 bg-white flex justify-between items-center fast-service-box w-2/3 m-auto shadow-xl drop-shadow-xl'>
          
            <div className=' flex items-center justify-center fast-service-green-box'>
              <h2 className='text-4xl w-48 text-white text-center'>Tu eres quien decide</h2>
            </div>

            <div className='w-48 flex flex-wrap items-center justify-center'>
              <span className='fast-service-span text-center'>Consultas en linea o presenciales</span>
              <img className='w-20 m-2 text-center' src="src/assets/svg/calendar.svg" alt="calendar" />
              <span className='fast-service-span-lg'>Agenda tu cita</span>
            </div>

            <div className='w-48 flex flex-wrap items-center justify-center'>
              <span className='fast-service-span'>Cursos en linea</span>
              <img className='w-20 m-4' src="src/assets/svg/laptop.svg" alt="calendar" />
              <span className='fast-service-span-lg'>Saber mas</span>
            </div>

            <div className='w-48 flex flex-wrap items-center justify-center'>
              <span className='fast-service-span'>Eventos grupales</span>
              <img className='w-20 m-4' src="src/assets/svg/community.svg" alt="calendar" />
              <span className='fast-service-span-lg'>Saber mas</span>
            </div>

          </div>

          <img className="hero-background" src="src/assets/svg/hero.svg" alt="hero-background" />
        
        </div>
      </section>

      <div className='w-3/4'>
        <section className='service-section w-full items-center'>
          {services.map((service) => <DescriptionCard service={service} key={`service-${service.id}`}/>)}
        </section>
      </div>
    </>
  )
}

export default Home;