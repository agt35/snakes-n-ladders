import { reactive } from 'vue';

export const store = reactive({
  players: [
    { name: 'Poncho', position: 0, color: 'blue' },
    { name: 'Xime', position: 0, color: 'red' },
    { name: 'Moni', position: 0, color: 'yellow' },
  ],
  availableColors: [],
  diceOne: 0,
  diceTwo: 0,
  squares: 0,
  isNextDisabled: true,
  isRollDisabled: false,
  isDouble: false,
  currentPlayerIndex: 0,
  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  },
  get nextPlayer() {
    return this.players[(this.currentPlayerIndex + 1) % this.players.length];
  },
  takeTurn() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
    this.isNextDisabled = true;
    this.isRollDisabled = false;
    this.diceOne = 0;
    this.diceTwo = 0;
  },
  rollDice() {
    this.diceOne = Math.floor(Math.random() * 6) + 1;
    this.diceTwo = Math.floor(Math.random() * 6) + 1;
    console.log('Rolling');
    if (this.diceOne === this.diceTwo) {
      this.isDouble = true;
      this.currentPlayer.position += this.diceOne + this.diceTwo;
    } else {
      this.currentPlayer.position += this.diceOne + this.diceTwo;
      this.isDouble = false;
      this.isNextDisabled = false;
      this.isRollDisabled = true;
    }
  },
  setupGame() {
    for (let step = 100; step > 0; step--) {
      this.squares.push(step);
    }
  },
});
