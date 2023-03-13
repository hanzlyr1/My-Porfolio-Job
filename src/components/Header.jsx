import React from 'react'
import './styles/header.css'
const Header = () => {
  return (
    <header className='header'>
    <nav>
        <ul className='header__nav-ul'>
            <li className='ul__li' ><button> <a href="#aboutMe"><i className="fa-solid fa-user icons"></i>Sobre mí</a> </button></li>
            <li className='ul__li'><button><a href="#skills"><i className="fa-solid fa-hand icons"></i>Habilidades</a></button></li>
            <li className='ul__li'><button><a href="#proyects"><i className="fa-solid fa-briefcase icons"></i> Proyectos</a></button></li>
            <li className='ul__li'><button><a href="#contact"><i className="fa-solid fa-id-badge icons"></i>Contacto</a></button></li>

        </ul>
    </nav>
</header>
    )
}

export default Header