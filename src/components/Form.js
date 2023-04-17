import React, { useState } from 'react';

const Form = ({ enviarFormulario }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleApellidoChange = (event) => {
        setApellido(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        enviarFormulario({ nombre, apellido });
        setNombre('');
        setApellido('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="form-control"
                    value={nombre}
                    onChange={handleNombreChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    className="form-control" value={apellido}
                    onChange={handleApellidoChange} />
            </div>
            <input type="button" value="Enviar" onClick={handleSubmit} />
        </form>
    );
};

export default Form;