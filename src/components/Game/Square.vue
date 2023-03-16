<script>
import { store } from '../../store.js';

export default {
  props: ['position'],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="square">
    <p>{{ position }}</p>
    <div class="player-grid">
      <div v-for="player in store.players" :key="player.name">
        <div
          v-if="player.position === position"
          class="player-piece"
          :style="{ backgroundColor: player.color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style>
.square {
  width: 65px;
  height: 65px;
  margin: 1px;
  border: 1px solid black;
  border-radius: 5%;
  text-align: center;
  font-size: 10px;
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
</style>
