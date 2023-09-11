import { useState } from 'react';

import './Registro.css'

const Registro = () => {
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
                        <input className="input-file" type="file" accept="image/*" onChange={handleChange} />
                        <button type="submit" className="btn btn-light btn-lg" id="registro">Registrarme</button>
                    </div>
                </div>
                <div>
                    <div className="col bg text-center">
                        {/** --------> el Form <------------------*/}
                        <form method="POST" id="form" className="registrarse">
                            <h1 id="letraTitulo">REGISTRO</h1>
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
                                    <label htmlFor="">Correo electrónico:</label><br />
                                    <input type="email" className="form-control" name="Correo" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electronico..." />

                                </div>
                                <div className="grupo">
                                    <label htmlFor="">Contraseña: </label><br />
                                    <input type="password" className="form-control" name="Contraseña" id="exampleInputPassword1" placeholder="Contraseña..." />

                                </div>

                                <div className="grupo">
                                    <label htmlFor="">Fecha de Nacimiento:</label><br />
                                    <input type="date" className="form-control" name="FechaNac" id="fechanacimiento" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro;