import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar-fluid sticky-top navbar-expand-md">
            <div className="container-fluid ">
                <div className="row bg2">
                    <h2 className="col m-3" style={{ color: "white" }}>CRAYON</h2>
                    <form className="col  mt-3 formulario">
                        <div className="row">
                            <div className="col  mt-1 ">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Buscar"
                                    id="Buscador"
                                    placeholder="Buscar"
                                />
                            </div>
                            <div className="col mt-1">
                                <button className="btn btn-outline-info " type="submit">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="col-4 mt-3 ">
                        <Link to="/login">
                            <button className="btn btn-outline-info m-1" type="submit">
                                Iniciar Sesion
                            </button>
                        </Link>
                        <Link to="/Registro">
                            <button className="btn btn-outline-info m-1" type="submit">
                                Registrarse
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row bg8">
                    <ul className="navbar-nav mx-1">
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="/">
                                INICIO
                            </a>
                        </li>
                        {["FANARTS", "SKETCHS", "ESCENARIOS"].map((category, i) => (
                            <li className="nav-item mx-1" key={i}>
                                <a className="nav-link" href={`/${category}`}>
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
