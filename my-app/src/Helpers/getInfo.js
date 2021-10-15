
export const getInfo = async( info ) =>{
    const infoApi = info.toLowerCase().replace(/ /g, "");

    const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI(infoApi) }/`;
    const resp = await fetch(url);
    const  data = await resp.json();

    return data;
}