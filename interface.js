$(document).ready(function() {
  let characterLevel = new CharacterLevel();
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

$(document).ready(function() {
  let strengthModifier = new StrengthModifier();
  updateModifier();

  $('#strength-up').on('click', function() {
    strengthModifier.strengthUp();
    updateModifier();
  })

  $('#strength-down').on('click', function() {
    strengthModifier.strengthDown();
    updateModifier();
  })

  $('#strength-reset').on('click', function() {
    strengthModifier.reset();
    updateModifier();
  });

  function updateModifier() {
    $('#strength-modifier').text(strengthModifier.modifier);
  };

})

$(document).ready(function() {
  let constitutionModifier = new ConstitutionModifier();
  updateModifier();

  $('#constitution-up').on('click', function() {
    constitutionModifier.constitutionUp();
    updateModifier();
  })

  $('#constitution-down').on('click', function() {
    constitutionModifier.constitutionDown();
    updateModifier();
  })

  $('#constitution-reset').on('click', function() {
    constitutionModifier.reset();
    updateModifier();
  });

  function updateModifier() {
    $('#constitution-modifier').text(constitutionModifier.modifier);
  };

})

$(document).ready(function() {
  let proficiency = new Proficiency();
  updateModifier();

  $('#rank-up').on('click', function() {
    proficiency.rankUp();
    updateModifier();
  });

  $('#rank-down').on('click', function() {
    proficiency.rankDown();
    updateModifier();
  });

  function updateModifier() {
    $('#proficiency').text(proficiency.modifier);
  };

});

$(document).ready(function() {
  let basicUnarmedAttack = new BasicUnarmedAttack();
  updateModifier();

  function updateModifier() {
    $('#basic-unarmed-attack').text(basicUnarmedAttack.score);
  };

})
