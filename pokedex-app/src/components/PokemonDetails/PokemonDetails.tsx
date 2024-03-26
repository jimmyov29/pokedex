"use client";
import { PokemonApi } from "@/api/pokemon";
import { IPokemonInfo } from "@/interfaces/pokemon.types";
import Image from "next/image";
import { useEffect, useState } from "react";
function PokemonDetails(props: { id: number }) {
  const pokemonApi = new PokemonApi();
  const [pokemonCharacteristics, setPokemonCharacteristics] =
    useState<IPokemonInfo>();

  const getPokemonCharacteristics = async () => {
    const pokemon = await pokemonApi.getPokemonCharacteristicsById(props.id);
    setPokemonCharacteristics(pokemon);
  };

  useEffect(() => {
    getPokemonCharacteristics();
  }, []);

  const tittle = (
    <h1 className="text-3xl font-semibold capitalize">
      {pokemonCharacteristics?.name}
    </h1>
  );
  return (
    <section className="bg-neutral-100 p-8 rounded-3xl grid md:grid-cols-2 gap-5 max-w-[1200px] w-full">
      <article className="block md:hidden">{tittle}</article>
      <article className="h-96 w-96 relative object-contain rounded-2xl bg-primary-900 ">
        {pokemonCharacteristics !== undefined ? (
          <Image
            src={
              pokemonCharacteristics?.sprites.other["official-artwork"]
                .front_default
            }
            alt={pokemonCharacteristics.name}
            fill
          />
        ) : null}
      </article>
      <div className=" space-y-4">
        <article className=" hidden md:block">{tittle}</article>
        {/* <summary>
        <details className=" ">
            Powers
            <p>Poder 1</p>
        </details>
        
      </summary> */}
        <fieldset>
          <article>
            {pokemonCharacteristics?.stats.map((stat, i) => (
              <figure key={i}>
                <h3>{stat.stat.name}</h3>
                <h3>{stat.base_stat}</h3>
              </figure>
            ))}
          </article>
        </fieldset>
      </div>
    </section>
  );
}

export default PokemonDetails;
