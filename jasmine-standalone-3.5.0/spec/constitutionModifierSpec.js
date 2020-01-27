'use strict'

describe('constitutionModifier', function() {
  var constitutionModifier;
  beforeEach(function() {
    constitutionModifier = new constitutionModifier();
  });

  it('starts at 0', function() {
    expect(constitutionModifier.getCurrentModifier()).toEqual(0);
  });

  it('increases with constitutionUp', function() {
    constitutionModifier.constitutionUp();
    expect(constitutionModifier.getCurrentModifier()).toEqual(1);
  })

  it('decreases with constitutionDown', function() {
    constitutionModifier.constitutionUp();
    constitutionModifier.constitutionDown();
    expect(constitutionModifier.getCurrentModifier()).toEqual(0);
  })

  it('has a minimum level of -4', function() {
    for (var i = 0; i < 10; i++) {
    constitutionModifier.constitutionDown();
    }
    expect(constitutionModifier.getCurrentModifier()).toEqual(-4);
  })

  it('can be reset to the default value of 0', function() {
    for (var i = 0; i < 5; i++) {
    constitutionModifier.constitutionUp();
    }
    constitutionModifier.reset();
    expect(constitutionModifier.getCurrentModifier()).toEqual(0);
  })
});
