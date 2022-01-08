import React, { FunctionComponent } from "react";
import { Pokemon } from "~/models/pokemon";

interface Props {
  pokemon: Pokemon;
  index: number;
}

export const Card: FunctionComponent<Props> = ({ pokemon, index }) => {
  const pokemonPicture = (number: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`;
  return (
    <div className="content-center" key={pokemon.name}>
      <img
        width="100"
        height="100"
        src={pokemonPicture(index + 1)}
        alt={pokemon.name}
        title={pokemon.name}
      />
      <h3 className="text-center mt-5 font-bold uppercase">{pokemon.name}</h3>
    </div>
  );
};
