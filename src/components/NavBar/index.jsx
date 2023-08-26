import "./styles.css"
import { FiChevronDown } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import InputSearch from "./InputSearch";

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="subNavBar">
                <div>
                    <a href="../../index.html"><img className="logo" src={logo} alt="logo" /></a>
                </div>
                <ul className="list">
                    <li className="navItem">
                        <button className="navButton">INICIO</button>
                    </li>
                    <li className="navItem productos">
                        <button className="navButton">PRODUCTOS <FiChevronDown /></button>
                        <ul className="subList">
                            <ul className="nike">
                                <li><button className="navButton titulo">Nike</button></li>
                                <li><button className="navButton">Air Force 1 Low</button></li>
                                <li><button className="navButton">Air Max</button></li>
                            </ul>
                            <ul className="adidas">
                                <li><button className="navButton titulo">Adidas</button></li>
                                <li><button className="navButton">Forum Bad Bunny</button></li>
                                <li><button className="navButton">Yeezy 350</button></li>
                            </ul>
                        </ul>
                    </li>
                    <li className="navItem">
                        <button className="navButton">GUÍA DE TALLES</button>
                    </li>
                </ul>
            </div>
            <InputSearch />
        </nav>
    );
}

export default NavBar;