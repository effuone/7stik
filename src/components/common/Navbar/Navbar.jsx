import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context";
const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    if(isAuth)
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" >
                <div className="container">
                <a href="#" className="navbar-brand">7stik</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu"
                    >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={Link} to="/universities">Universities</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={Link} to="/graphs">Graphs</Nav.Link>                    
                        </li>
                        <li className="nav-item">
                            <Nav.Link onClick={logout}>Выйти</Nav.Link>                    
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    else
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" >
            <div className="container">
            <a href="#" className="navbar-brand">7stik</a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navmenu"
                >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link as={Link} to="/graphs">Graphs</Nav.Link>                    
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        )
}
export default Navbar