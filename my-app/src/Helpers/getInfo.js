
export const getInfo = async( info ) =>{

    let infoApi;

    typeof info === 'string' ? infoApi = info.toLowerCase().replace(/ /g,"") : infoApi = info;

    const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI(infoApi) }/`;
    const resp = await fetch(url);
    let data;

    try {
        data = await resp.json();
        console.log(data)
    } catch (error) {
        console.log("erroororro")
    }
    


    return data;
}