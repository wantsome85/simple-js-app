let pokemonList = [
  { name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
  { name: 'Charmander', height: 0.6, type: ['Fire']},
  { name: 'Squirtle', height: 0.5, type: ['Water']},
  { name: "Dragonite", height: 2.2, type: ['Dragon', 'Flying']},
  { name: "Mewtwo", height: 2, type: ['Psychic']},
  { name: "Mew", height: 0.4, type: ['Psychic']},
  { name: "Gengar", height: 1.5, type: ["Ghost" , "Poison"]}
];

// IIFE pokemonRepository
let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({ name: 'Pikachu', height: 5, types:['electric', 'galvanic'] });
  console.log(pokemonRepository.getAll());

  // IIFE function with loop to pokemonList array and display it on the browser
 (function () {
     pokemonList.forEach(function(pokemon) {
         let pokemonName = pokemon.name
         let pokemonHeight = pokemon.height
         // condition to add wow that's big if height is greater than 1
         if(pokemonHeight > 1) {
             document.write(pokemonName + ' (height : ' + pokemonHeight + ')' + ' - Yes, I\'m big!');
         } else {
             document.write(pokemonName + ' (height : ' + pokemonHeight + ')');
         }
             document.write('<br>', '<br>');
         });
 })();
