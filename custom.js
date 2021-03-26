
let envi = "";
const Albumes = async () => {
    try{
        const url = "https://jsonplaceholder.typicode.com/photos";
        const fetchUrl = await fetch (url);
        const jsonUrl = await fetchUrl.json();
        for(let i = 0; i < 20; i++){
           console.log(`El titulo es ${jsonUrl[i].title}`);
        }
        envi = true;
        AsyncFunt();
    } catch (error){
        envi = false;
        AsyncFunt();
        console.log(`El error es ${error}`)
    }
}
Albumes();
const AsyncFunt = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>
            envi ? resolve ('Información Enviada'): reject ('Ups, hubo un error')
        , 3000)
    });
    promise
        .then(envi => console.log(envi))
        .catch(Error => console.error(Error));
}


