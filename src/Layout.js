import { Outlet } from "react-router-dom";
import Rotas from "./Routes/index.routes";

const Layout = () => {
    return(
        <div className="container-fluid">
            <div className="row justify-content-center mt-3">
                <div className="col-md-4 text-center">
                    <p className="lead">Galeria dos Sonhos</p>
                    <Rotas />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout