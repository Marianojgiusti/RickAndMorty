import Card from './Card';
import styles from "./styles/Cards.module.css"



export default function Cards(props) {
   const { characters } = props;
   let i = 0;
   return (
     <Cards>
       {characters.map((e) => (
         <Card
           name={e.name}
           species={e.species}
           gender={e.gender}
           image={e.image}
           onClose={() => props.onClose(e.id)}
           key={i++}
         />
       ))}
     </Cards>
   );
 }
 