import { PokemonApi } from "@/api/pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonList() {

    const pokemonApi = new PokemonApi();

    function fetchPokemonData(
        
    ){

    }
    return (
      <section className=" bg-neutral-100 p-8 rounded-3xl flex flex-wrap justify-center md:flex-nowrap md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] place-items-center">
        {
          <>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </>
        }
      </section>
    );
}

export default PokemonList;