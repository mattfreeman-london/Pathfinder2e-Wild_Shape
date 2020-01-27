'use strict'

class ConstitutionModifier {
  constructor() {
    this.MINIMUM_MODIFIER = -4;
    this.modifier = 0;
    this.DEFAULT_MODIFIER = 0;
  };

  getCurrentModifier() {
    return this.modifier;
  };

  constitutionUp() {
    this.modifier += 1
  };

  constitutionDown() {
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
