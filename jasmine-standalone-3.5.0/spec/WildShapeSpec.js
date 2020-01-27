'use strict'

describe('wildShape', function() {
  var wildShape;
  beforeEach(function() {
    wildShape = new WildShape();
  });

  it('starts at level 1', function() {
    expect(wildShape.getCurrentLevel()).toEqual(1);
  });

  it('increases in level with levelUp', function() {
    wildShape.levelUp();
    expect(wildShape.getCurrentLevel()).toEqual(2);
  })

  it('decreases in level with levelDown', function() {
    wildShape.levelUp();
    wildShape.levelDown();
    expect(wildShape.getCurrentLevel()).toEqual(1);
  })

  it('has a minimum level of 1', function() {
    wildShape.levelDown();
    expect(wildShape.getCurrentLevel()).toEqual(1);
  })
});
