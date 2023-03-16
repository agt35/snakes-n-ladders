<script>
import PlayerCard from './PlayerCard.vue';
import Dice from './Dice.vue';
import Board from './Board.vue';

import { store } from '../../store.js';
export default {
  components: {
    PlayerCard,
    Dice,
    Board,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <font-awesome-icon icon="fa-solid fa-gamepad" class="icon" />
  <div id="game">
    <div class="info-container">
      <h2>Current Player:</h2>
      <PlayerCard :player="store.currentPlayer" />
      <h2>Up next:</h2>
      <PlayerCard :player="store.nextPlayer" />
      <h2 v-if="store.isDouble" class="alert">Double! Roll again!</h2>
      <h2 v-else>Roll the dice</h2>
      <Dice />
      <button @click="store.rollDice" :disabled="store.isRollDisabled">
        Roll dice
      </button>
      <button @click="store.takeTurn" :disabled="store.isNextDisabled">
        Next Player
      </button>
    </div>
    <div>
      <Board />
    </div>
  </div>
</template>

<style>
#game {
  display: flex;
  align-items: center;
}

.info-container {
  margin: 0 10px;
}

h2 {
  text-align: left;
}

.icon {
  width: 120px;
  height: 80px;
  color: midnightblue;
}

.alert {
  color: maroon;
}
</style>
