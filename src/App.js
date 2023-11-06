import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton.js'
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  
  const addInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos');
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClics={addInput}>1</Boton>
          <Boton manejarClics={addInput}>2</Boton>
          <Boton manejarClics={addInput}>3</Boton>
          <Boton manejarClics={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={addInput}>4</Boton>
          <Boton manejarClics={addInput}>5</Boton>
          <Boton manejarClics={addInput}>6</Boton>
          <Boton manejarClics={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={addInput}>7</Boton>
          <Boton manejarClics={addInput}>8</Boton>
          <Boton manejarClics={addInput}>9</Boton>
          <Boton manejarClics={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={addInput}>.</Boton>
          <Boton manejarClics={addInput}>0</Boton>
          <Boton manejarClics={calcularResultado}>=</Boton>
          <Boton manejarClics={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Borrar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
