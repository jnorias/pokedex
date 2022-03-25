const pokeImage = document.querySelector(".image");
const pokeName = document.querySelector("#name");
const pokeSkills = document.querySelector("#abilities");

const pokemon = Math.round(Math.random() * 200);

fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(data => {
        return data.json();
    })
    .then(json => {
        const image = json.sprites.front_default;
        pokeImage.style.backgroundImage = `url(${image})`;
        pokeName.textContent = json.name;
        const list = json.abilities;
        for (let i = 0; i < list.length; i++) {
            const li = document.createElement("li");
            pokeSkills.appendChild(li);
            li.textContent = list[i].ability.name;
        }


        console.log(json);
    });