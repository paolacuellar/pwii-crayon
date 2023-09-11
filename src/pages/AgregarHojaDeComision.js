import { useState } from 'react';

import './Registro.css'

const AgregarHojaDeComision = () => {
    const [image, setImage] = useState();
    const [DisplayImage, setDisplayImage] = useState();

    function handleChange(e) {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            setDisplayImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <div className="container editarHojaDeComisiones">
            <br />
            <br /><br /><br />
            <h1 id="letraTitulo">Agregar Hoja De Comision</h1>
            <div className="form">
                <div className="grupo">
                    <label htmlFor="">Tipo de comision</label><br />
                    <input className="form-control" name="Nombre" type="text" placeholder="Tipo de comision..." />
                </div>
                <div className="grupo">
                    <label htmlFor="">Costo:</label><br />
                    <input className="form-control" name="Costo" type="text" placeholder="Costo..." />
                </div>

                <br />
                <input className="input-file" type="file" accept="image/*" onChange={handleChange} />
                <br /><br />
                <button type="submit" className="btn btn-light btn-lg mx-3" id="registro">Agregar</button>
            </div>


        </div>
    )
}

export default AgregarHojaDeComision;