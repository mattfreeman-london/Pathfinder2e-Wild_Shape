'use strict'

class Proficiency {
  constructor() {
    this.MINIMUM_MODIFIER = 2;
    this.MAXIMUM_MODIFIER = 4;
    this.modifier = 2;
  };

  getModifier() {
    return this.modifier;
  };

  rankUp() {
    if (this.isMaximumModifier()) {
      return;
    }
    this.modifier += 2
  };

  rankDown() {
    if (this.isMinimumModifier()) {
      return;
    }
    this.modifier -= 2
  };

  isMinimumModifier() {
    return this.modifier === this.MINIMUM_MODIFIER;
  };

  isMaximumModifier() {
    return this.modifier === this.MAXIMUM_MODIFIER;
  };

}
