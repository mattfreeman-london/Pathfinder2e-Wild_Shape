'use strict'

describe('wildShape', function() {
  var wildShape;
  beforeEach(function() {
    wildShape = new WildShape();
  });

  it('starts at level 1', function() {
    expect(wildShape.getCurrentLevel()).toEqual(1);
  });
});
