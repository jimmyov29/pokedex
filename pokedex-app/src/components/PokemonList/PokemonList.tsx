"use client";
import { PokemonApi } from "@/api/pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useEffect, useState } from "react";
import { ICardPokemon } from "@/interfaces/pokemon.types";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState<ICardPokemon>();
  const pokemonApi = new PokemonApi();

  const fetchPokemonsData = async () => {
    try {
      const data = await pokemonApi.getPokemonList();
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonsData();
  }, []);

  return (
    <section className="bg-neutral-100 p-8 rounded-3xl flex flex-wrap justify-center md:flex-nowrap md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] place-items-center">
      {pokemonData !== undefined
        ? pokemonData.results.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} />
          ))
        : null}
    </section>
  );
}

export default PokemonList;
