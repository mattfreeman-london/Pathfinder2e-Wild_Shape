$(document).ready(function() {
  var characterLevel = new CharacterLevel();
  $('#character-level').text(characterLevel.level);
})


$(document).ready(function() {
  var strengthModifier = new StrengthModifier();
  $('#strength-modifier').text(strengthModifier.modifier);
})


$(document).ready(function() {
  var constitutionModifier = new ConstitutionModifier();
  $('#constitution-modifier').text(constitutionModifier.modifier);
})
