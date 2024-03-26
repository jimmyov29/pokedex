import { PokemonApi } from "@/api/pokemon";
import PokemonDetails from "@/components/PokemonDetails/PokemonDetails";

interface Props {
  params: {
    id: number;
  };
}
function PokemonById({ params }: Props) {
  const pokemonApi = new PokemonApi();
  const pokemon = pokemonApi.getPokemonById(params.id);

  return (
    <section>
      <PokemonDetails id={params.id} />
    </section>
  );
}

export default PokemonById;
