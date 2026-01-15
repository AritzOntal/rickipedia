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

// Función para obtener la localización extra
export const getLocation = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
