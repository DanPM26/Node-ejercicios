const getHeroes = async() => {

    const input = document.getElementById('box').value 
   
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${input}&apikey=d023408b0642f897db18a8eeb6cf7545&ts=1651691815&hash=c00939d9f09f7f00e74ea6e9eb7c58de&limit=50`

    const getData = await fetch( url)
    const data = await getData.json()
    console.log('data', data)

    renderData(data.data.results)
}

const renderData = (results) =>{
const container = document.getElementById('contenedor')
container.innerHTML = ''
results.forEach( item => {
    container.innerHTML += `
    <div class="card">
    <img class="image" src="${item.thumbnail.path +'.'+ item.thumbnail.extension}"/>
    <p>${item.name}</p>
    <p></p>
    </div>
 `
});
}

const ValidarInput = () =>{
    getHeroes();  
}
