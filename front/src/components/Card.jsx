import React from 'react';
import style from "./styles/Card.module.css";


 
export default function Card(props) {
   return (
      <div className={style.card}>
         <button className={style.button} onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} className={style.img} alt="" />
      </div>
   );
}
