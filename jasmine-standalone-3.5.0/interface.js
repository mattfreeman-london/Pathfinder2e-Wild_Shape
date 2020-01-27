$(document).ready(function() {
  var characterLevel = new CharacterLevel();
  updateLevel();

  $('#level-up').on('click', function() {
    characterLevel.levelUp();
    updateLevel();
  })

  $('#level-down').on('click', function() {
    characterLevel.levelDown();
    updateLevel();
  })

  $('#level-reset').on('click', function() {
    characterLevel.reset();
    updateLevel();
  });

  function updateLevel() {
    $('#character-level').text(characterLevel.level);
  };

})
