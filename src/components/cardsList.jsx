import React from "react";
import Card from "./card";
import { selectPokomentsByTypeAndPage, selectType } from "../redux/selectors";
import { useSelector } from "react-redux";
import "../styles/card.scss";

const CardsList = (props) => {
  const pokemons = useSelector(selectPokomentsByTypeAndPage);
  const typeSelected = useSelector(selectType);
  console.log(pokemons);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.name}
          typeSelected={typeSelected}
          name={pokemon.name}
          type={pokemon.types}
          hp={pokemon?.stats[0]?.base_stat}
          attack={pokemon?.stats[1]?.base_stat}
          defense={pokemon?.stats[2]?.base_stat}
          spAttack={pokemon?.stats[3]?.base_stat}
          spDefense={pokemon?.stats[4]?.base_stat}
          speed={pokemon?.stats[5]?.base_stat}
          height={pokemon.height}
          weight={pokemon.weight}
          imageURL={pokemon.sprites.front_shiny}
        />
      ))}
      ;
    </div>
  );
};

export default CardsList;
