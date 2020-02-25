'use strict'

describe('basicUnarmedAttack', function() {
  let basicUnarmedAttack;
  beforeEach(function() {
    basicUnarmedAttack = new BasicUnarmedAttack();
  });

  it('defaults to 3, based on a level 1 character, no modifiers, trained', function() {
    expect(basicUnarmedAttack.getCurrentScore()).toEqual(3);
  })

})
