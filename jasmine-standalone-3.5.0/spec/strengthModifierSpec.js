'use strict'

describe('strengthModifier', function() {
  var strengthModifier;
  beforeEach(function() {
    strengthModifier = new StrengthModifier();
  });

  it('starts at 0', function() {
    expect(strengthModifier.getCurrentModifier()).toEqual(0);
  });

  it('increases with strengthUp', function() {
    strengthModifier.strengthUp();
    expect(strengthModifier.getCurrentModifier()).toEqual(1);
  })

  it('decreases with strengthDown', function() {
    strengthModifier.strengthUp();
    strengthModifier.strengthDown();
    expect(strengthModifier.getCurrentModifier()).toEqual(0);
  })

  it('has a minimum level of -4', function() {
    for (var i = 0; i < 10; i++) {
    strengthModifier.strengthDown();
    }
    expect(strengthModifier.getCurrentModifier()).toEqual(-4);
  })

  it('can be reset to the default value of 0', function() {
    for (var i = 0; i < 5; i++) {
    strengthModifier.strengthUp();
    }
    strengthModifier.reset();
    expect(strengthModifier.getCurrentModifier()).toEqual(0);
  })
});
