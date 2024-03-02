const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let i = 0; i < players.length; i++) {
        let type = i % 2 === 0 ? 'hero' : 'villain';
        detailedPlayers.push({
            name: players[i],
            strength: getRandomStrength(),
            image: `https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/super-${i + 1}.png`,
            type: type
        });
    }
    return detailedPlayers;
}

const getRandomStrength = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const buildPlayers = (players, type) => {
    let fragment = '';
    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += `<div class="player">
                            <div class="${type}">
                                <img src="${players[i].image}" alt="${players[i].name}">
                                <p>${players[i].name}</p>
                                <h2 class="power">${players[i].strength}</h2>
                            </div>
                        </div>`;
        }
    }
    return fragment;
}

const viewPlayers = (players) => {
    const heroesContainer = document.querySelector('.heroes');
    const villainsContainer = document.querySelector('.villains');
    
    heroesContainer.innerHTML = buildPlayers(players, 'hero');
    villainsContainer.innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
