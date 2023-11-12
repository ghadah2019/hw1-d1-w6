
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    const characterContainer = document.querySelector('.character-container');

    characters.forEach(character => {
      const characterCard = document.createElement('div');
      characterCard.classList.add('character-card');
      characterCard.innerHTML = `
        <h2>${character.name}</h2>
       
        <img src="${character.image}" alt="${character.name}">
      `;
      characterContainer.appendChild(characterCard);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
