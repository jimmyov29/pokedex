const urlBase = "https://pokeapi.co/api/v2";

export class PokemonApi {
  async getPokemonList() {
    try {
      const response = await fetch(`${urlBase}/pokemon?limit=180&offset=0`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPokemonData(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPokemonById(id: number) {
    try {
      const response = await fetch(`${urlBase}/pokemon/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
