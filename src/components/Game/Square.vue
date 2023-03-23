<script>
import { store } from '../../store.js';

import {
  faStairs
} from '@fortawesome/free-solid-svg-icons';

export default {
  props: ['position'],
  data() {
    return {
      store,
    };
  },
  computed: {
    isBlack() {
      const row = Math.floor((this.position - 1) / 10) + 1
      const col = (this.position - 1) % 10 + 1
      return (row % 2 === 0 && col % 2 !== 0) || (row % 2 !== 0 && col % 2 === 0)
    },
    isStairs() {
      return store.stairs.includes(this.numericPosition)
    },
    isSnake() {
      return store.snakes.includes(this.numericPosition)
    },
    isSpecial() {
      return store.specials.includes(this.numericPosition)
    },
    numericPosition() {
      return 101 - this.position
    }
  }
};
</script>

<template>
  <div class="square" :class="{ 'black-square': isBlack, 'stairs': isStairs, 'snake': isSnake, 'special': isSpecial }">
    <p>{{ numericPosition }}</p>
    <!-- <div v-if="isStairs" class="stairs">
                                                                                              <font-awesome-icon icon="fa-solid fa-stairs" class="icon" />
                                                                                            </div> -->
    <div class="player-grid">
      <div v-for="player in store.players" :key="player.name">
        <div v-if="player.position === numericPosition" class="player-piece" :style="{ backgroundColor: player.color }">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 1;
}

.square {
  width: 65px;
  height: 65px;
  margin: 1px;
  border: 1.5px solid black;
  border-radius: 10%;
  text-align: center;
  font-size: 10px;
  background-color: #ffffff;
}

.black-square {
  background-color: #d0b8ac;
  color: white;
}

.snake {
  background-color: #fd7272;
  color: white;
}

.stairs {
  background-color: #65cbe9;
  color: white;
}

.special {
  background-color: #ffc370;
  color: white;
}

.player-grid {
  display: flex;
  justify-content: space-evenly;
  z-index: 5;
}

.player-piece {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5x;
  z-index: 10;
}
</style>
