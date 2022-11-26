import axios from "axios";

export const servicePokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "content-type": "application/json",
  },
});

export const serviceHookbin = axios.create({
  baseURL: "https://6382434d281f14ffefa4451a.mockapi.io",
  headers: {
    "content-type": "application/json",
  },
});
