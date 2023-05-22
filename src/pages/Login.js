import styles from './Login.module.css';
import transparent from '../assets/transparent.png'
import axios from "axios"
import { Link } from "react-router-dom"

function Login () {

    function submitHandler ( e ) {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        axios.post( 'http://localhost:4000/login', data )
            .then( res => {
                console.log( res.data.response )
                localStorage.setItem( "token", res.data.response.token )
                window.location = "/"
            } )
    }

    return (
        <div className={ styles.body }>
            <div className={ styles.heading }>
                <img src={ transparent } alt="website logo" ></img>
                <h1>Login to Everypost</h1>
            </div>
            <div className={ styles.container }>
                <form className={ styles.form } onSubmit={ submitHandler }>
                    <div className={ styles.formElement }>
                        <label htmlFor='email' >Email</label>
                        <input type='text' id='email' placeholder='abc@example.com' />
                    </div>
                    <div className={ styles.formElement }>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='Enter your password' />
                    </div>
                    <button type='submit'>Log in</button>
                </form>
                <div className={ styles.links }>
                    <Link>Forgot your password ?</Link>
                    <Link to="/register">Don't have an account ?</Link>
                    <Link>Login via SSO</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;