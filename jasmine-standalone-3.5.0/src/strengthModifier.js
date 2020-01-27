'use strict'

class StrengthModifier {
  constructor() {
    this.MINIMUM_MODIFIER = -4;
    this.modifier = 0;
    this.DEFAULT_MODIFIER = 0;
  };

  getCurrentModifier() {
    return this.modifier;
  };

  strengthUp() {
    this.modifier += 1
  };

  strengthDown() {
    if (this.isMinimumModifier()) {
      return;
    }
    this.modifier -= 1
  };

  isMinimumModifier() {
    return this.modifier === this.MINIMUM_MODIFIER;
  };

  reset() {
    this.modifier = this.DEFAULT_MODIFIER;
  }
}
