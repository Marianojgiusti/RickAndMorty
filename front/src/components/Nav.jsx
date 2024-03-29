
import SearchBar from "./SearchBar.jsx";
import style from "./styles/Nav.module.css"


export default function Nav(props) {
    return (
      <nav>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="" width="20%" />
        <SearchBar onSearch={props.onSearch} random={props.random} />
      </nav>
    );
  }
  