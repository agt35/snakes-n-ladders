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
    border: 8px double;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    box-shadow: -2px 2px 10px black;
}

.btn-small {
    font-size: 0.5rem;
}
</style>