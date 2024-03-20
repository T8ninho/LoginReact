import { useContext } from "react";
import { Contexto } from "../Context/UseContext";

export default function Rotas() {
	const {user} = useContext(Contexto)

	return(
		user ? <div>True</div> : <div>False</div>
	)
}