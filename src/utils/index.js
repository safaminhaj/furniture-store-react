import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const centsToDollars = (cents) => {
  const dollars = (cents / 100).toFixed(2);
  return `$${dollars}`;
};
