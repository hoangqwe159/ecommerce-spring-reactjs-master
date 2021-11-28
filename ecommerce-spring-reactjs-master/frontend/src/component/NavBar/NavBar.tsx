import React, {FC} from 'react';
import {Link} from "react-router-dom";
import "./NavBar.css";


const NavBar: FC = () => {

    return (
        <div>
            <div id="header" className="container-fluid header-top d-none d-md-block pb-5 pt-5">
                <img src="https://i.ibb.co/fqYvrL8/LOGO4.jpg" className="rounded mx-auto d-block"/>
            </div>
            <div className="container-fluid bg-black">
                <nav id="navbar-main" className={`container navbar navbar-expand-lg bg-black text-white `}
                     style={{fontSize: "18px"}}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item">
                                <Link to={"/"}><span className="nav-link pl-5 pr-5">HOME</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={{pathname: "/menu/perfumes", state: {id: "all"}}}>
                                    <span className="nav-link pl-5 pr-5">PERFUMES</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/menu/add"}><span className="nav-link pl-5 pr-5">EDIT</span></Link>
                            </li>
                        </ul>                
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
