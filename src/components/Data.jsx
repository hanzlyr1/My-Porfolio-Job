import React from 'react'
import './styles/data.css'
const Data = () => {
  return (
    <article>
        <div className='div-img-one' id="div-img-one-especifico">
            <img className='img-one' src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="" />
        </div>
        <div className='name-container'>
            <div className='div-img-two'>
                <img className='img-two' src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" alt="" />
            </div>
            <div className='container__name-description  container-config'>
                <h1 className='name'>Luis  Rojas </h1>
                <h3 className='cargo'>Desarrollador Front-End</h3>
                <div className='container-div-button'>
                    <div className='div-button'>
                        <button className='button-cv'>CV</button>
                    </div>
                    <div className='div-button'>
                        <button className='button-contac'><a href="">Concactame</a></button>
                    </div>
                </div>
                <h3 className='redes'>Redes</h3>
                <div className='div-icons'>
                    <div> <i className="fa-brands fa-linkedin icon"></i></div>
                    <div> <i className="fa-brands fa-square-github icon"></i></div>
                    <div><i className="fa-brands fa-square-twitter icon"></i></div>
                    <div><i className="fa-brands fa-square-instagram icon"></i></div>
                </div>
            </div>
        </div>
</article>
  )
}

export default Data