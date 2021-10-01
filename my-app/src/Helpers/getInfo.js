
export const getInfo = async( info ) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI(info) }/`;
    const resp = await fetch(url);
    const  data = await resp.json();

    return data;
}