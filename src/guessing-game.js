class GuessingGame {
    constructor() {
    var start = 0, end = 0, current = 0;
    }

    setRange(min, max) {
      this.start = min; this.end = max;
    }

    guess() {
      return Math.ceil(this.start+((this.end-this.start)/2));
    }

    lower() {
      this.end = Math.ceil(this.start+((this.end-this.start)/2));
    }

    greater() {
      this.start = Math.ceil(this.start+((this.end-this.start)/2));
    }
}

module.exports = GuessingGame;
