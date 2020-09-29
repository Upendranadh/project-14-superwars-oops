const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// Player Class
class Player {
  constructor(id, name, type) {
    // Create member variables and assign values
    // Type your code
    this.id = id + 1;
    this.name = name;
    this.type = type;
    this.strength = this.getRandomStrength();
    this.image = `images/super-${this.id}.png`;
  }

  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here

    const div = document.createElement("div");
    div.className = "player";
    div.setAttribute("data-id", this.id + 1);
    div.innerHTML = `<img src="${this.image}" alt=""><div class="name">${this.name}</div><div class="strength">${this.strength}</div>`;

    return div;

    /*
    const player = `<div class="player"><img src="${this.image}" alt=""><div class="name">${this.name}</div><div class="strength">${this.strength}</div></div>`;
    */
  };
}

// Superwar Class</div>
class Superwar {
  constructor(players) {
    // Create a field players
    // Use Map method to loop through players argument and create new players
    this.players = players.map((player, id) => {
      let playerobj;
      (id + 1) % 2 === 0
        ? (playerobj = new Player(id, player, "hero"))
        : (playerobj = new Player(id, player, "villain"));
      return playerobj;
    });
    // Type your code here
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById("heroes");
    team.innerHTML = "";
    let fragment = this.buildPlayers("hero");
    console.log(fragment);
    team.append(fragment);

    team = document.getElementById("villains");
    team.innerHTML = "";
    fragment = this.buildPlayers("villain");
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type === type)
      .forEach((player) => fragment.appendChild(player.view()));
    return fragment;
  };
}

window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
