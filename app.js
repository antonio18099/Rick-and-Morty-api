const url = "https://rickandmortyapi.com/api/character"; 
const containerCards = document.querySelector("#cards-container"); 
const inputCharacter = document.querySelector("#input-character"); 


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


const makeCharacterCard = (character) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", character.id); 

    const imgCard = document.createElement("img");
    imgCard.src = character.image; 
    imgCard.alt = character.name; 

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const nameCard = document.createElement("h3");
    nameCard.textContent = character.name; 

    const statusCard = document.createElement("p");
    statusCard.textContent = `Status: ${character.status}`;

    const speciesCard = document.createElement("p");
    speciesCard.textContent = `Species: ${character.species}`;

    cardContent.appendChild(nameCard);
    cardContent.appendChild(statusCard);
    cardContent.appendChild(speciesCard);
    card.appendChild(imgCard);
    card.appendChild(cardContent);

    containerCards.appendChild(card); 
};


const filterCards = async (searchText) => {
    const searchUrl = `https://rickandmortyapi.com/api/character/?name=${searchText}`; 

    try {
        const response = await fetch(searchUrl); 
        const data = await response.json();
        const filteredCharacters = data.results;

        // Oculta todas las cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.display = 'none';
        });

        filteredCharacters.forEach(character => {
            const card = document.querySelector(`[data-id="${character.id}"]`);
            if (card) {
                card.style.display = 'flex';
            }
        });

        if (filteredCharacters.length === 0) {
            alert("No se encontraron resultados."); 
        }
    } catch (error) {
        console.error("Error filtering characters:", error);
    }
};


inputCharacter.addEventListener('input', () => {
    const searchText = inputCharacter.value.toLowerCase(); 
    filterCards(searchText); 
});


fetchCharacters();








/* const url = "https://rickandmortyapi.com/api/character"; 
const containerCards = document.querySelector("#cards-container"); 
const inputCharacter = document.querySelector("#input-character"); 

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

const makeCharacterCard = (character) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgCard = document.createElement("img");
    imgCard.src = character.image; 
    imgCard.alt = character.name; 

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const nameCard = document.createElement("h3");
    nameCard.textContent = character.name; 

    const statusCard = document.createElement("p");
    statusCard.textContent = `Status: ${character.status}`;

    const speciesCard = document.createElement("p");
    speciesCard.textContent = `Species: ${character.species}`;

    cardContent.appendChild(nameCard);
    cardContent.appendChild(statusCard);
    cardContent.appendChild(speciesCard);
    card.appendChild(imgCard);
    card.appendChild(cardContent);

    containerCards.appendChild(card); 
};

const filterCards = (searchText) => {
    const cards = document.querySelectorAll('.card'); 
    const filteredCards = Array.from(cards).filter(card => {
        const characterName = card.querySelector('h3').textContent.toLowerCase(); 
        return characterName.includes(searchText);
    });

    cards.forEach(card => {
        if (filteredCards.includes(card)) {
            card.style.display = 'flex'; 
        } else {
            card.style.display = 'none'; 
        }
    });

    if (filteredCards.length === 0 && searchText) {
        alert("No se encontraron resultados."); 
    }
};

inputCharacter.addEventListener('input', () => {
    const searchText = inputCharacter.value.toLowerCase(); 
    filterCards(searchText); 
});

fetchCharacters(); */