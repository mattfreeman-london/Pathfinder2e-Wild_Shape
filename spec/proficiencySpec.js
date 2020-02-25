'use strict'

describe('proficiency', function() {
  var proficiency;
  beforeEach(function() {
    proficiency = new Proficiency();
  });

  it('starts at 2', function() {
    expect(proficiency.getModifier()).toEqual(2);
  });

  it('increases with rankUp', function() {
    proficiency.rankUp();
    expect(proficiency.getModifier()).toEqual(4);
  })

  it('decreases with rankDown', function() {
    proficiency.rankUp();
    proficiency.rankDown();
    expect(proficiency.getModifier()).toEqual(2);
  })

  it('has a minimum of 2', function() {
    proficiency.rankDown();
    expect(proficiency.getModifier()).toEqual(2);
  })

  it('has a maximum of 4', function() {
    for (var i = 0; i < 5; i++) {
    proficiency.rankUp();
    }
    expect(proficiency.getModifier()).toEqual(4);
  })

});
