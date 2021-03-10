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

  function addListItem(pokemon) {
    let $listItem = $('<li class="list-group-item"></li>');
    let $ul = $(".pokeList");
    let $button = $(
      '<button type="button" class="button-design btn-primary group-list-item" data-toggle="modal" data-target="#modal-container">' +
        pokemon.name +
        "</button>"
    );
    $ul.append($listItem);
    $listItem.append($button);

    $button.on("click", function () {
      showDetails(pokemon);
    });
  }

  function showDetails(item) {
    $(".modal").innerHTML = "";
    $(document).on("click", ".group-list-item", function () {
      let $nameElement = $("<h5>" + item.name + "</h5>");
      let $heightElement = $("<p>" + "Height: " + item.height + "</p>");
      let $imageElement = $(
        '<img src="' + item.imageUrl + '"alt=' + item.name + ">"
      );
      let $typesElement = $("<p>" + "Types: " + item.types.join(", ") + "</p>");
      if (item.types.length === 1) {
        typesElement = $("<p>" + "Type: " + item.types + "</p>");
      }

      let $abilitiesElement = $(
        "<p>" + "Abilities: " + item.abilities.join(", ") + "</p>"
      );
      $(".modal-header").html($nameElement);
      $(".modal-body").html($imageElement);
      $(".modal-body").append($heightElement);
      $(".modal-body").append($typesElement);
      $(".modal-body").append($abilitiesElement);
      $("#modal").modal("show");
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
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
