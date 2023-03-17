<script>
import { store } from '../../store.js';

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
  }
};
</script>

<template>
  <div class="square" :class="{ 'black-square': isBlack }">
    <p>{{ position }}</p>
    <div class="player-grid">
      <div v-for="player in store.players" :key="player.name">
        <div v-if="player.position === position" class="player-piece" :style="{ backgroundColor: player.color }"></div>
      </div>
    </div>
  </div>
</template>

<style>
.square {
  width: 65px;
  height: 65px;
  margin: 1px;
  border: 1.5px solid black;
  border-radius: 10%;
  text-align: center;
  font-size: 10px;
  background-color: rgba(45, 45, 91, 0.178);
}

.player-grid {
  display: flex;
  justify-content: space-evenly;
}

.player-piece {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5x;
}

.black-square {
  background-color: rgb(59, 59, 59);
  color: white;
}
</style>
