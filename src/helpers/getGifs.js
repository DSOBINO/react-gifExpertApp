export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=bTeSuiePzAhNUDCdiJEZwEUo2Jckwg32`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    //data.filter(v => v.title !== null).
    const  gifs = data.filter(v => v.title !== null).filter(v => v.title.trim().length >0 ).map( img => {
            return {
                id: img.id,
                title: img.title,
                url : img.images?.downsized_medium.url
            }
    })

    /*
    console.clear();
    console.log(gifs);
    setImages(gifs);
    */
    return gifs;
}
