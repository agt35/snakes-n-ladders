<script>
import Square from './Square.vue';

export default {
  data() {
    return {
      positions: 100,
    };
  },
  components: {
    Square,
  },
};
</script>

<template>
  <div class="board-container">
    <div class="board">
      <Square v-for="index in positions" :key="index" :position="index" />
    </div>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding: 5px;
}

.board-container {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  background-color: lightgray;
}
</style>
