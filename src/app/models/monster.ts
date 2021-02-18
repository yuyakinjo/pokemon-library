/* eslint-disable @typescript-eslint/naming-convention */
export interface Monster {
  id: number;
  name: Name;
  type: Type[];
  base: Base;
}

export interface Base {
  HP: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  Speed: number;
}

export interface Name {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

export type Type =
  | 'Bug'
  | 'Dark'
  | 'Dragon'
  | 'Electric'
  | 'Fairy'
  | 'Fighting'
  | 'Fire'
  | 'Flying'
  | 'Ghost'
  | 'Grass'
  | 'Ground'
  | 'Ice'
  | 'Normal'
  | 'Poison'
  | 'Psychic'
  | 'Rock'
  | 'Steel'
  | 'Water';
