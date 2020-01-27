$(document).ready(function() {
  var characterLevel = new CharacterLevel();
  $('#character-level').text(characterLevel.level);

  $('#level-up').on('click', function() { // event listener
    characterLevel.levelUp(); // update model
    $('#character-level').text(characterLevel.level); // update view
  })

  $('#level-down').on('click', function() {
    characterLevel.levelDown();
    $('#character-level').text(characterLevel.level);
  })

})
