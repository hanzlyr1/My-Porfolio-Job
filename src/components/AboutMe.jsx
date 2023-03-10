import React from 'react'
import './styles/AboutMe.css'
const AboutMe = () => {
  return (
    <>
        <article className='about-me-container ' >
                    <h2 className='about-me'>Sobre mí</h2>
                    <p className='about-me-description'>
                        Seguir creciendo a medida que desempeño mis labores en los proyectos, es algo que se me da muy bien; poseo conocimientos en varias tecnologías del Desarrollo Web, las cuales puedo aportar junto a mis habilidades blandas, para lograr el objetivo de desarrollarme profesionalmente en el ámbito de TI...</p>
                </article>
                <article className='education-container'>
                    <h2 className='education'>Educacion</h2>
                    <p className='academlo'>Academlo</p>
                    <p className='study'>NOVI_2022 - ENER-2023</p>
                    <p className='bootcamp'>Bootcamp</p>
                    <p className='bootcamp-description'>Programacion Web Full-stack y ciencias de la computacion</p>
        </article>
    </>
    
  )
}

export default AboutMe