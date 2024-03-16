import { PokemonApi } from "@/api/pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonList() {

    const pokemonApi = new PokemonApi();

    function fetchPokemonData(
        
    ){

    }
    return ( 
        <section className=" w-full flex flex-wrap gap-4">
            {
                <>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                </>
            }
        </section>
     );
}

export default PokemonList;