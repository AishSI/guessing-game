class GuessingGame {
   constructor() { }

   setRange(min, max) {
      this.min = min;
      this.max = max;
   }

   guess() {
      this.candidate = Math.round((this.max - this.min) / 2) + this.min;
      return this.candidate;
   }

   lower() {
      this.max = this.candidate;

   }

   greater() {
      this.min = this.candidate;
   }
}

module.exports = GuessingGame;