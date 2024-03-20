import { useState, useContext } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Contexto } from "./Context/UseContext";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const {setUser} = useContext(Contexto)

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setUser(auth.currentUser)
            navigate('./profile')
            
        } catch {
            setNotice("Você digitou um nome de usuário ou senha errado.");
        }
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <form className="col-md-4 mt-3 pt-3 pb-3">
                    { "" !== notice &&
                        <div className="alert alert-warning" role="alert">
                            { notice }    
                        </div>
                    }                  
                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="nome@email.com" 
                            value={ email } 
                            onChange={(e) => setEmail(e.target.value)}
                         />
                        <label htmlFor="exampleInputEmail1" className="form-label">Endereço de email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" value={ password } onChange={ (e) => setPassword(e.target.value) }></input>
                        <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary pt-3 pb-3" onClick={(e) => loginWithUsernameAndPassword(e)}>Enviar</button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Não tem uma conta? <Link to="./signup">Clique aqui.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login