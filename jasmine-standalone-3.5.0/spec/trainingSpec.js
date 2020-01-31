'use strict'

describe('training', function() {
  var training;
  beforeEach(function() {
    training = new Training();
  });

  it('starts at 2', function() {
    expect(training.getModifier()).toEqual(2);
  });

  it('increases with rankUp', function() {
    training.rankUp();
    expect(training.getModifier()).toEqual(4);
  })

  it('decreases with rankDown', function() {
    training.rankUp();
    training.rankDown();
    expect(training.getModifier()).toEqual(2);
  })

  it('has a minimum of 2', function() {
    training.rankDown();
    expect(training.getModifier()).toEqual(2);
  })

  it('has a maximum of 4', function() {
    for (var i = 0; i < 5; i++) {
    training.rankUp();
    }
    expect(training.getModifier()).toEqual(4);
  })

});
