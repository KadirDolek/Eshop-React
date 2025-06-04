import './Navbar.css'
import { NavLink } from 'react-router-dom'


export default function Navbar(){



    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-transparent">
            <div className="container-fluid justify-content-center">
                <button
                    style={{backgroundColor:'white'}}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span  className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav" >
                    <li className="nav-item">
                    <NavLink to="/" id='navbartxt' className="nav-link active"
                    style={{display:'flex', justifyContent:'center'}} aria-current="page" href="#">
                        Accueil
                    </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a to="/product"  id='navbartxt' 
                        style={{display:'flex', justifyContent:'center'}}
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Produits
                    </a>
                    <ul className="dropdown-menu" style={{background:'transparent',border:'none',}}>
                        <li>
                        <a id='navbartxt' className="dropdown-item" style={{display:'flex', justifyContent:'center', background:'transparent'}} href="#ancre">
                            Les mieux notés
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </>
    )
}