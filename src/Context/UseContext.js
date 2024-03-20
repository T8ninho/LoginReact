import React, { createContext, useEffect, useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../firebaseAPI/firebase';
import { useNavigate } from "react-router-dom";

// Criar o contexto
const Contexto = createContext();

// Provedor do Contexto
const ContextoProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const UsuarioSalvo = localStorage.getItem('UsuarioLogado');
		return UsuarioSalvo ? JSON.parse(UsuarioSalvo) : null;
	});
	
	const [Logado, setLogado] = useState(user)

	useEffect(() => {
		const updateUser = (UsuarioLogado) => {
		  setUser(UsuarioLogado);
		  localStorage.setItem('UsuarioLogado', JSON.stringify(UsuarioLogado));
		};
	
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
		  if (authUser) {
			updateUser(authUser);
		  } else {
			updateUser(null);
		  }
		});
	
		return () => unsubscribe();
	  }, []);
	
	const navigate = useNavigate();
	
	console.log(Logado)

	function Sair(){
		signOut(auth);
        navigate("/");
	}

	return(
		<Contexto.Provider value={{user, setUser, Sair, Logado}}>
			{children}
		</Contexto.Provider>
	);
};

export {Contexto, ContextoProvider};

