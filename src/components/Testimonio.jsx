import React from 'react';
import '../css/Testimonio.css';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio contenedor-margen'>
            <picture className='contenedor-testimonio-imagen'>
                <source srcSet={require(`../img/${props.img}.avif`)} type='image/avif' />
                <source srcSet={require(`../img/${props.img}.webp`)} type='image/webp' />
                <img lazy='loading' src={require(`../img/${props.img}.png`)} alt='fotografia de Shawn' className='imagen-testimonio'/>
            </picture>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.name}</strong> in {props.city}</p>
                <p className='cargo-testimonio'>{props.job} at <strong>{props.work}</strong></p>
                <blockquote className='texto-testimonio'>"{props.testimony}"</blockquote>
            </div>
        </div>
    );
};

export default Testimonio;
