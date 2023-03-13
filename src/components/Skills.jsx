import React from 'react'
import './styles/skills.css'
const Skills = () => {
  return (
    <article className='hability-container' id="skills">
    <h2 className='hability'>Habilidades</h2>
    <div className='hability-div'>
        <div className='hability-icon'>
            <p>JavaScript</p>
            <i className="fa-brands fa-js"></i>
        </div>
        <div className='hability-icon'>
            <p>Html5</p>
            <i className="fa-brands fa-html5"></i>
        </div>
        <div className='hability-icon'>
            <p>Css</p>
            <i className="fa-brands fa-css3-alt"></i>
        </div>
        <div className='hability-icon'>
            <p>React</p>
            <i className="fa-brands fa-react"></i>
        </div>
        <div className='hability-icon'>
            <p>GitHub</p>
            <i className="fa-brands fa-github"></i>
        </div>
        <div className='hability-icon'>
            <p>Boosttrap</p>
            <i className="fa-brands fa-bootstrap"></i>
        </div>
    </div>
</article>
  )
}

export default Skills