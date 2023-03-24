import { reactive } from 'vue';

export const store = reactive({
  players: [],
  availableColors: ["#ff99c8",
    "#7fc8f8",
    "#96d289",
    "#c5a3ff",
    "#ffd670",
    "#ffa69e",],
  newPlayer: '',
  diceOne: 0,
  diceTwo: 0,
  diceModalOne: 0,
  diceModalTwo: 0,
  showModal: false,
  isStarted: false,
  isSpecial: false,
  specialCase: '',
  isOver: false,
  isInstructions: false,
  isNextDisabled: true,
  isRollDisabled: false,
  isDouble: false,
  currentPlayerIndex: 0,
  stairs: [25, 43, 56, 69, 49, 3],
  snakes: [99, 38, 57, 88, 64, 92],
  specials: [75, 31],
  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  },
  get nextPlayer() {
    return this.players[(this.currentPlayerIndex + 1) % this.players.length];
  },
  nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    this.isNextDisabled = true;
    this.isRollDisabled = false;
    this.diceOne = 0;
    this.diceTwo = 0;
  },
  showInstructions() {
    this.showModal = true;
    this.isInstructions = true;
  },
  closeInstructions() {
    this.showModal = false;
    this.isInstructions = false;
  },
  closeSpecial() {
    this.showModal = false;
    this.isSpecial = false;
    this.specialCase = '';
  },
  rollModalDice() {
    this.diceModalOne = Math.floor(Math.random() * 6) + 1;
    this.diceModalTwo = Math.floor(Math.random() * 6) + 1;
  },
  rollDice() {
    this.diceOne = Math.floor(Math.random() * 6) + 1;
    this.diceTwo = Math.floor(Math.random() * 6) + 1;
    this.players[this.currentPlayerIndex].position += this.diceOne + this.diceTwo;

    if (this.stairs.includes(this.currentPlayer.position)) {
      this.isSpecial = true;
      this.specialCase = 'stair';
      this.showModal = true;
    } else if (this.snakes.includes(this.currentPlayer.position)) {
      this.isSpecial = true;
      this.specialCase = 'snake';
      this.showModal = true;
    } else if (this.specials.includes(this.currentPlayer.position)) {
      this.isSpecial = true;
      this.specialCase = 'special';
      this.showModal = true;
    }

    if (this.currentPlayer.position >= 100) {
      this.showModal = true;
      this.isOver = true;
      this.isInstructions = false;
    }
    if (this.diceOne === this.diceTwo) {
      this.isDouble = true;

    } else {
      this.isDouble = false;
      this.isNextDisabled = false;
      this.isRollDisabled = true;
    }
  },
  logPositions() {
    this.players.forEach((player) => {
      console.log(player.name + ' is at ' + player.position);
    });
    console.log(this.currentPlayer);
  },
  setupGame() {
    this.isStarted = true;
    this.isNextDisabled = true;
    this.isRollDisabled = false;
    this.players.forEach((player) => {
      player.position = 0;
    });
    this.currentPlayerIndex = 0;
  },
  exitGame() {
    this.isStarted = false;
    this.showModal = false;
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
