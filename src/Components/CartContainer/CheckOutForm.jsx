import React, { useState } from 'react'
import InputForm from './InputForm'

function CheckOutForm({ onCheckOut }) {
    const [datosComprador, setDatosComprador] = useState({
        name: "",
        email: "",
        telefono: "",
    })


function handleInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    const newDatosComprador = { ...datosComprador };
    newDatosComprador[nameInput] = value;
    setDatosComprador = (newDatosComprador)
}

function onSubmit(evt) {
    evt.preventDefault();
    setDatosComprador({
        name: "",
        email: "",
        telefono: "",
    });
    onCheckOut(datosComprador)
}

return (
    <div>
        <h1>Genera tu orden de compra</h1>
        <form>
            <InputForm name="name" title="Nombre" onChange={handleInputChange} value={datosComprador.name} />
            <InputForm name="email" title="Email" onChange={handleInputChange} value={datosComprador.email} />
            <InputForm name="telefono" title="Telefono" onChange={handleInputChange} value={datosComprador.telefono} />
            <button onClick={onSubmit}>Crear orden</button>
        </form>
    </div>
);
}

export default CheckOutForm