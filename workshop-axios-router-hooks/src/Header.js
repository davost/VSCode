import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" to="/">Welcome</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/person">Person</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/crud">CrudDemo</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/person">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Header;