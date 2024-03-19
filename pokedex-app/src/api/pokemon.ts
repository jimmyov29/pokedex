
const url = "https://pokeapi.co/api/v2";

export class PokemonApi {
  async getPokemonData() {
    const response = await fetch(`${url}/pokemon`);
    const data = await response.json();
    return data;
  }
}
