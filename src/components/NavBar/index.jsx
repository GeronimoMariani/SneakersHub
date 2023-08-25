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
                            <ul className="nike">
                                <li><button className="navButton">NIKE</button></li>
                                <li>Air Force 1 Low</li>
                                <li>Air Max</li>
                            </ul>
                            <ul className="adidas">
                                <li><button className="navButton">ADIDAS</button></li>
                                <li>Forum Bad Bunny</li>
                                <li>Yeezy 350</li>
                            </ul>
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