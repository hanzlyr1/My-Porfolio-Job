import React from 'react'
import './styles/header.css'
const Header = () => {
  return (
    <header className='header'>
    <nav>
        <ul className='header__nav-ul'>
            <li className='ul__li' ><button> <i className="fa-solid fa-user icons"></i>Sobre mí </button></li>
            <li className='ul__li'><button><i className="fa-solid fa-hand icons"></i>Informacion</button></li>
            <li className='ul__li'><button><i className="fa-solid fa-briefcase icons"></i> Proyectos</button></li>
            <li className='ul__li'><button> <i className="fa-solid fa-id-badge icons"></i>Contacto</button></li>

        </ul>
    </nav>
</header>
    )
}

export default Header