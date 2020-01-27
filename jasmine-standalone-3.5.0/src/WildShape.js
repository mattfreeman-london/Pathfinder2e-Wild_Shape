'use strict'

class WildShape {
  constructor() {
    this.level = 1;
  }
  getCurrentLevel() {
    return this.level;
  }
  levelUp() {
    this.level += 1
  }
}
