import { useAuth } from "../../../context/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../../context/AuthProvider/util"

export const Navbar = () => {

   const auth = useAuth();
   const user = getUserLocalStorage();

    return (

      // Define um Navbar dinâmico, que renderiza somente os elementos necessários
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
           <a className="navbar-brand" href=""> Navbar </a>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                 <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="home">Home</a>
                 </li>
                 {!user &&
                 <li className="nav-item">
                    <a className="nav-link active" href="login">Entrar</a>
                 </li>
                 }
                 {(user && user.type !== "viewer") &&
                 <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cadastrar
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                       <li><a className="dropdown-item" href="#">Cliente</a></li>
                       <li><a className="dropdown-item" href="#">Venda</a></li>
                       {user.type === "admin" &&
                       <li>
                          <hr className="dropdown-divider"/>
                       </li>
                        }
                       <div>
                        {user.type === "admin" &&
                       <li><a className="dropdown-item" href="#">Funcionário</a></li>
                        }
                        {user.type === "admin" &&
                       <li><a className="dropdown-item" href="#">Produto</a></li>
                        }
                       </div>
                    </ul>
                 </li>
                  }
                 {user &&
                 <li className="nav-item">
                    <a className="nav-link active" href="home" onClick={auth.logout}>Sair</a>
                 </li>
                 }
              </ul>
           </div>
        </div>
     </nav>
    )
}