'use strict'

class CharacterLevel {
  constructor() {
    this.MINIMUM_LEVEL = 1;
    this.MAXIMUM_LEVEL = 20;
    this.level = 1;
  };

  getCurrentLevel() {
    return this.level;
  };

  levelUp() {
    if (this.isMaximumLevel()) {
      return;
    }
    this.level += 1
  };

  levelDown() {
    if (this.isMinimumLevel()) {
      return;
    }
    this.level -= 1
  };

  isMinimumLevel() {
    return this.level === this.MINIMUM_LEVEL;
  };

  isMaximumLevel() {
    return this.level === this.MAXIMUM_LEVEL;
  };
}
