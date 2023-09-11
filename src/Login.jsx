import React, {useState, userState} from "react"



export const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }

    return(
        
        <div className="auth-form-container">
            <h2>Iniciar sesión</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="tuEmail@email.com" id="email" name="email"/>
                <label htmlFor="password">Contraseña</label>
                <input value={pass} type="pass" placeholder="******" id="password" name="password"/>
                <button type="submit">Iniciar sesión</button>
            </form>
            <button className="link-btn" onClick={()=> props.onFormSwitch('register')}>¿Aún no tienes una cuenta? ¡Registrate!</button>
        </div>
    )
}