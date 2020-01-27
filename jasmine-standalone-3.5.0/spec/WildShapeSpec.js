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
});
