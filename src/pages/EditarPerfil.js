import { useState } from 'react';

import './Registro.css'

const EditarPerfil = () => {
    const [image, setImage] = useState();
    const [DisplayImage, setDisplayImage] = useState();

    function handleChange(e) {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            setDisplayImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <div className="container FormRegistro ">
            <div className="Registro">
                <div>
                    <div className="col FotoUser">
                        <div className="align-self-center">
                            <div className="mt-auto" id="usuarioFoto">
                                {!image ?
                                    <img src={require('../imagenes/Prueba.png')} alt="" height="620" width="590" />
                                    :
                                    <img className="mt-auto" id="usuarioFoto"
                                        src={DisplayImage}
                                        alt="no se pudo cargar :("
                                        height="720" width="590" />
                                }
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="col bg text-center">
                        {/** --------> el Form <------------------*/}
                        <form method="POST" id="form" className="registrarse" style={{ backgroundColor: "#B397C8" }}>
                            <h1 id="letraTitulo">Editar Perfil</h1>
                            <div className="form">
                                <div className="grupo">
                                    <label htmlFor="">Nombre(s):</label><br />
                                    <input className="form-control" name="Nombre" type="text" placeholder="Nombre..." />
                                </div>
                                <div className="grupo">
                                    <label htmlFor="">Apellidos:</label><br />
                                    <input className="form-control" name="Apellidos" type="text" placeholder="Apellidos..." />
                                </div>

                                <div className="grupo">
                                    <label htmlFor="">Usuario:</label><br />
                                    <input className="form-control" name="Usuario" type="text" placeholder="Usuario..." />
                                </div>

                                <div className="grupo">
                                    <label htmlFor="">Fecha de Nacimiento:</label><br />
                                    <input type="date" className="form-control" name="FechaNac" id="fechanacimiento" />
                                </div>
                                <br />
                                <input className="input-file" type="file" accept="image/*" onChange={handleChange} />
                                <br /><br />
                                <button type="submit" className="btn btn-light btn-lg mx-3" id="registro">Editar Contraseña</button>
                                <button type="submit" className="btn btn-light btn-lg mx-3" id="registro">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarPerfil;