import { reactive } from 'vue';

export const store = reactive({
  players: [],
  availableColors: ["red",
    "green",
    "darkorange",
    "cyan",
    "magenta",
    "khaki",
    "black",
    "gold",
    "indigo",
    "tomato",
    "dodgerblue",],
  newPlayer: '',
  isStarted: false,
  diceOne: 0,
  diceTwo: 0,
  squares: 0,
  isNextDisabled: true,
  isRollDisabled: false,
  isDouble: false,
  currentPlayerIndex: 0,
  squares: [],
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
    this.isStarted = true;
    this.players.forEach((player) => {
      player.position = 0;
    });
  },
  exitGame() {
    this.isStarted = false;
  },
  addPlayer() {
    this.players.push({
      name: this.newPlayer,
      position: 0,
      color: this.availableColors.pop(),
    });
    this.newPlayer = '';
  },
  removePlayer(player) {
    this.players = this.players.filter((p) => p !== player);
    this.availableColors.push(player.color);
  }
});
