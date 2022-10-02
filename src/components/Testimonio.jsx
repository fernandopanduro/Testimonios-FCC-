import React from 'react';

function Testimonio() {
    return (
        <div className='contenedor-testimonio'>
            <picture className='contenedor-testimonio'>
                <source srcSet={require('../img/Shawn.avif')} type='image/avif' />
                <source srcSet={require('../img/Shawn.webp')} type='image/webp' />
                <img src={require('../img/Shawn.png')} alt='fotografia de Shawn' className='imagen-testimonio'/>
            </picture>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>Shawn Wang</strong> in Singapore</p>
                <p className='cargo-testimonio'>Software Engineer at <strong>Amazon</strong></p>
                <blockquote className='texto-testimonio'>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</blockquote>
            </div>
        </div>
    );
};

export default Testimonio;
