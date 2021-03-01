let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    type: ['Grass', 'Poison']
  },
  {
    name: 'Charmander',
    height: 0.6,
    type: ['Fire']
  },
  {
    name: 'Squirtle',
    height: 0.5,
    type: ['Water']
  },
  {
    name: "Dragonite",
    height: 2.2,
    type: ['Dragon', 'Flying']
  },
  {
    name: "Mewtwo",
    height: 2,
    type: ['Psychic']
  },
  {
    name: "Mew",
    height: 0.4,
    type: ['Psychic']
  },
  {
    name: "Gengar",
    height: 1.5,
    type: ["Ghost" , "Poison"]
  }
];

for (var i = 0; i < pokemonList.length; i++) {
  //prints pokemon name and height
  let name = pokemonList[i].name;
  let height = pokemonList[i].height;

  document.write(`<p id ="pokemon"> ${name} height: ${height} `);

  //comments on pokemon height
    if(height > 1.0){
      document.write(' - Yes\' I am very tall') + '</p>';
    }

}
