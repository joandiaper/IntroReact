import React, { useState } from 'react';
import Tabla from './components/Tabla';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [personas, setPersonas] = useState([]);

  const eliminarPersona = (indice) => {
    setPersonas(personas.filter((personas, i) => i !== indice));
  };

  const enviarFormulario = (persona) => {
    setPersonas([...personas, persona]);
  };

  const nombre = 'amigo';
  const encabezado = <h1 className="titulo">Hola, {nombre}!</h1>;

  return (
    <div className="App">
      <h1>2DAW: Testeando React</h1>
      <div>{encabezado}</div>
      <Tabla datosPersonas={personas} eliminarPersona={eliminarPersona} />
      <Form enviarFormulario={enviarFormulario} />
    </div>
  );
};

export default App;
