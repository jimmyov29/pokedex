const urlBase = "https://pokeapi.co/api/v2";

export class PokemonApi {
  async getPokemonList() {
    const response = await fetch(`${urlBase}/pokemon?limit=150&offset=0`);
    const data = await response.json();
    return data;
  }

  async getPokemonData(url: string){
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
