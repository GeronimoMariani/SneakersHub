import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";


const InputSearch = () => {
    AiOutlineSearch
    return (
        <div className="inputDiv">
            <input className="search" type="search" name="q" id="search" placeholder="¿Qué estás buscando?" />
            <AiOutlineSearch className="AiOutlineSearch" />
        </div>
    );
}

export default InputSearch;