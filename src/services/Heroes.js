const URLAPI = "https://gateway.marvel.com/";
const APIKEY_private = "3ddc916dae7f0dbd5a0c404b8ddf1b8863b01de7";
const APIKEY_public = "c290edaf430e64722fd927d3eab0c9d7";
const HASh =
  "13ddc916dae7f0dbd5a0c404b8ddf1b8863b01de7c290edaf430e64722fd927d3eab0c9d7";
const hastMD5 = "0f940c764828b4aec26f26c12afe5766";

const urlPrueba =
  "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c290edaf430e64722fd927d3eab0c9d7&hash=0f940c764828b4aec26f26c12afe5766";

export function getData() {
  return fetch(
    `${URLAPI}v1/public/characters?ts=1&apikey=${APIKEY_public}&hash=${hastMD5}`,
    { method: "GET" }
  ).then((res) => res.json());
}

export function getDataSearch(name) {
  return fetch(
    `${URLAPI}v1/public/characters?nameStartsWith=${name}&ts=1&apikey=${APIKEY_public}&hash=${hastMD5}`,
    { method: "GET" }
  ).then((res) => res.json());
}
