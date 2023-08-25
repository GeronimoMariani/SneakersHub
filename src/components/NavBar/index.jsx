import "./styles.css"
import { FiChevronDown } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

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
                            <li><button className="navButton">NIKE</button></li>
                            <li><button className="navButton">ADIDAS</button></li>
                        </ul>
                    </li>
                    <li className="navItem">
                        <button className="navButton">GUÍA DE TALLES</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;