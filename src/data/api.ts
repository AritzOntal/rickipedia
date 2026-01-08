import type { APIResponse, Character } from "../types/rickandmorty";

const BASE_URL = "https://rickandmortyapi.com/api";

// OBTENER LISTA DE PERSONAJES
export const getCharacters = async (page: number = 1): Promise<APIResponse> => {
  const response = await fetch(`${BASE_URL}/character/?page=${page}`);
  if (!response.ok) {
    throw new Error("Error al obtener personajes");
  }

  return response.json();
};

// OBTENER UN PERSONAJE POR ID
export const getCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener el personaje");
  }
  return response.json();
};

// OBTENER EPISODIOS
export const getEpisodes = async () => {
  const response = await fetch(`${BASE_URL}/episode`);
  if (!response.ok) {
    throw new Error("Error al obtener episodios");
  }
  return response.json();
};
