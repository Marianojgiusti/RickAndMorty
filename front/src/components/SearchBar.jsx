import { useState } from "react";
import style from "./styles/Search.module.css";

export default function SearchBar(props) {
const [character, setCharacter] = useState(0);

const handleSearch = (event) => {
   let {value} = event.target;
   setCharacter(value);
};

return(
   <div>
      <input className={style.search} type="search"  onChange={handleSearch}/>
      <button className={style.btn} onClick={() => props.onSearch(character)}>
         Agregar
      </button>
   </div>
);
}

