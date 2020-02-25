'use strict'

describe('characterLevel', function() {
  var characterLevel;
  beforeEach(function() {
    characterLevel = new CharacterLevel();
  });

  it('starts at level 1', function() {
    expect(characterLevel.getCurrentLevel()).toEqual(1);
  });

  it('increases in level with levelUp', function() {
    characterLevel.levelUp();
    expect(characterLevel.getCurrentLevel()).toEqual(2);
  })

  it('decreases in level with levelDown', function() {
    characterLevel.levelUp();
    characterLevel.levelDown();
    expect(characterLevel.getCurrentLevel()).toEqual(1);
  })

  it('has a minimum level of 1', function() {
    characterLevel.levelDown();
    expect(characterLevel.getCurrentLevel()).toEqual(1);
  })

  it('has a maximum level of 20', function() {
    for (var i = 0; i < 25; i++) {
    characterLevel.levelUp();
    }
    expect(characterLevel.getCurrentLevel()).toEqual(20);
  })

  it('can be reset to the default value of 1', function() {
    for (var i = 0; i < 5; i++) {
    characterLevel.levelUp();
    }
    characterLevel.reset();
    expect(characterLevel.getCurrentLevel()).toEqual(1);
  })
});
