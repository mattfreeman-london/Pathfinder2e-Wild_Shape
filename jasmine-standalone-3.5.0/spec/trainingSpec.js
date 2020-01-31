'use strict'

describe('training', function() {
  var training;
  beforeEach(function() {
    training = new Training();
  });

  it('starts as "Trained"', function() {
    expect(training.getTraining()).toEqual("Trained");
  });

  it('has a starting modifier of 2', function() {
    expect(training.getModifier()).toEqual(2);
  });

})
