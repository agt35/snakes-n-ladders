<script>
import { store } from '../../store.js';

export default {
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <div class="player-grid">
        <div v-for="player in store.players" :key="player.id" class="player-circle-container">
            <div class="player-circle" :style="{ borderColor: player.color }">{{ player.name }}</div>
            <button class="btn-small" @click="store.removePlayer(player)">X</button>
        </div>
    </div>
</template>

<style scoped>
.player-grid {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.player-circle-container {
    margin: 20px 10px;
}

.player-circle {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 10px double;
    background-color: #f6f2f0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.btn-small {
    font-size: 0.5rem;
}
</style>