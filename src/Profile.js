 //importa o contexto
import React, { useContext, useState } from 'react';
import { Contexto } from './Context/UseContext';


const Profile = () => {
    const {user, Sair} = useContext(Contexto)

    // const user = auth.currentUser;


    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <p>Bem-Vindo <em className="text-decoration-underline">{user.email}</em>. Você está logado!</p>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary pt-3 pb-3" onClick={Sair}>Sair</button>
                    </div>                
                </div>
            </div>
        </div>       
    )    
}

export default Profile