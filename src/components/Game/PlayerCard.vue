<script>
export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="player-card">
    <div class="player-chip" :style="{ borderColor: player.color }"></div>
    <div class="status">
      <h2>{{ player.name }}</h2>
      <h3>Position: {{ player.position }}</h3>
    </div>
  </div>
</template>

<style scoped>
.player-card {
  /* border: 1px solid rgba(32, 32, 32, 0.87); */
  background-color: lightgray;
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.player-chip {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 8px double;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin-left: 10px;
  background-color: gray;
}

.status {
  margin: 5px;
}
</style>
