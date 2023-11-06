import React from 'react';
import '../hojas-de-estilo/Pantalla.css';
/*
function Pantalla() {
    return (
        <div className='input'>
            Pantalla
        </div>
    )
}
Se puede utilizar const con una funcion flecha en vez de la clasica.
*/
const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;