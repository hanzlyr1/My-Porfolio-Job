import React from 'react'
import './styles/contact.css'

const Contact = () => {
  return (
    <article className='contact-container'>
        <h2 className='contact'>Contacto</h2>
        <form>
            <div>
                <input className='input' placeholder='Ingresa tu nombre' type="text" />
            </div>
            <div>
                <input className='input' placeholder='Ingresa tu Email' type="text" name="" id="" />
            </div>
            <textarea className='textarea' cols="30" rows="10"></textarea>
            <div className='div-button div-button-enviar'>
                <button className='button-cv button-enviar'>Enviar</button>
            </div>
        </form>
    </article>
  )
}

export default Contact