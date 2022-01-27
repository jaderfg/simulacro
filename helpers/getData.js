export const url = "https://deporte-api.herokuapp.com/deportes/";

export const getData = async () => {
  const resp = await fetch (url);
  const data = resp.json();
  return data;
}