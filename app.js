/* const url = "https://rickandmortyapi.com/api/character"; 
const containerCards = document.querySelector(".cards-container"); 


const fetchCharacters = async () => {
    try {
        const response = await fetch(url); 
        const data = await response.json(); 
        const characters = data.results.slice(0, 20);   

        characters.forEach(character => {
            makeCharacterCard(character); 
        });
    } catch (error) {
        console.error("Error fetching characters:", error); 
    }
};

// Función para crear card
const makeCharacterCard = (character) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgCard = document.createElement("img");
    imgCard.src = character.image; 
    imgCard.alt = character.name; 

    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    const nameCard = document.createElement("h3")
    nameCard.textContent = character.name; 

    const statusCard = document.createElement("p")
    statusCard.textContent = `Status: ${character.status}`

    const speciesCard = document.createElement("p");
    speciesCard.textContent = `Species: ${character.species}`

    cardContent.appendChild(nameCard);
    cardContent.appendChild(statusCard);
    cardContent.appendChild(speciesCard);
    card.appendChild(imgCard);
    card.appendChild(cardContent);

    containerCards.appendChild(card); 
};


fetchCharacters(); */