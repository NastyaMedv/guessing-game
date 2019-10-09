class GuessingGame {
    constructor() {
    var start = 0, end = 0;
    }

    count() {
      return Math.ceil(this.start+((this.end-this.start)/2));
    }

    setRange(min, max) {
      this.start = min; this.end = max;
    }

    guess() {
      return this.count();
    }

    lower() {
      this.end = this.count();
    }

    greater() {
      this.start = this.count();
    }
}

module.exports = GuessingGame;
