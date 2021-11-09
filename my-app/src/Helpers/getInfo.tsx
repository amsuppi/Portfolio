export const getInfo = async( info: string | number ): Promise<Object> =>{

    let infoApi;
    typeof info === 'string' ? infoApi = info.toLowerCase().replace(/ /g,"") : infoApi = info;

    const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI(infoApi) }/`;
    const resp = await fetch(url);
    let data = await resp.json();
    console.log("Data", data)

    return data;
}