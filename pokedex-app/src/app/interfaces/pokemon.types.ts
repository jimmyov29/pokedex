// export interface ICardPokemon {
//   id: number;
//   name: string;
//   is_main_series: boolean;
//   generation: Generation;
//   names: Name[];
//   effect_entries: WelcomeEffectEntry[];
//   effect_changes: EffectChange[];
//   flavor_text_entries: FlavorTextEntry[];
//   pokemon: Pokemon[];
// }
export interface ICardPokemon {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}
export interface Result {
  name: string;
  url: string;
}

export interface EffectChange {
  version_group: Generation;
  effect_entries: EffectChangeEffectEntry[];
}

export interface EffectChangeEffectEntry {
  effect: string;
  language: Generation;
}

export interface Generation {
  name: string;
  url: string;
}

export interface WelcomeEffectEntry {
  effect: string;
  short_effect: string;
  language: Generation;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Generation;
  version_group: Generation;
}

export interface Name {
  name: string;
  language: Generation;
}

export interface Pokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: Generation;
}
