import React, {useState, userState} from "react"

export const Register = (props) => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName]= useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <h2>Registrarse</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre Completo</label>
                <input value={name} name="name" id="name" placeholder="Nombre Completo" />
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="tuEmail@email.com" id="email" name="email"/>
                <label htmlFor="password">Contraseña</label>
                <input value={pass} type="pass" placeholder="******" id="password" name="password"/>
                <button type="submit">Iniciar sesión</button>
            </form>
            <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>¿Ya tienes una cuenta? Haz clic para iniciar sesión </button>
        </div>
    )
}