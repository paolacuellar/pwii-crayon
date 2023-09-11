import { useState } from 'react';

import './Registro.css'

const Pagos = () => {
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
            <h1 id="letraTitulo">Comprar comision</h1>
            <div className="form">
                <div className="grupo">
                    <label htmlFor="">Descripcion de la comision</label><br />
                    <input className="form-control" name="Nombre" type="text" placeholder="Descripcion de la comision..." />
                </div>
                <div className="grupo">
                    <label htmlFor="">Numero de tarjeta:</label><br />
                    <input className="form-control" name="Numero de tarjeta" type="text" placeholder="Numero de tarjeta..." />
                </div>

                <br />
                <input className="input-file" type="file" accept="image/*" onChange={handleChange} />
                <br /><br />
                <p>Costo: $0 mxn</p>
                <p>Artista: Usuario</p>
                <button type="submit" className="btn btn-light btn-lg mx-3" id="registro">Editar comision</button>
            </div>


        </div>
    )
}

export default Pagos;