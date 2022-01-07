import React from "react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "remix";
import { Card } from "~/components/card";
import { api } from "~/services/pokedex";
import { Pokemon } from "~/models/pokemon";

export const loader: LoaderFunction = async () => {
  return await api.listPokemons(0, 151);
};

export default function Index() {
  const pokemons = useLoaderData();
  return (
    <div className="">
      <h1 className="font-serif text-4xl text-center mb-10">
        Gotta catchem all
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
        {pokemons.results.map((pokemon: Pokemon, i: number) => (
          <Card key={pokemon.name} pokemon={pokemon} index={i} />
        ))}
      </div>
    </div>
  );
}
