const btn = document.querySelector('#refresh');

const buscarFrase = async() => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    console.log(res)
    const frase = await res.json();
    console.log(frase.value);

    document.querySelector('#text-content').innerHTML= frase.value;
  };
  

  btn.addEventListener('click',() => {
      document.querySelector('#text-content').innerHTML = '';
      buscarFrase();
  });

  buscarFrase();