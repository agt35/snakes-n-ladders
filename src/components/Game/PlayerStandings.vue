<script>
import { store } from '../../store.js';

export default {
    data() {
        return {
            store,
        };
    },
    computed: {
        sortedPlayers() {
            return this.store.players.sort((a, b) => b.position - a.position);
        },
    },
};
</script>

<template>
    <div class="standings-container">
        <h2>Standings:</h2>
        <div v-for="player in sortedPlayers" class="player-display" :style="{ backgroundColor: player.color }">
            <p class="player-label">{{ player.name }}</p>
        </div>
    </div>
</template>

<style scoped>
.standings-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    background-color: #f6f2f0;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-left: 10px;
}

.player-label {
    text-align: center;
    font-size: 0.8rem;
    color: white;
}

h2 {
    margin: 10px;
}

.player-display {
    width: 50px;
    height: 50px;
    margin: 5px;
    border-radius: 50%;
    border: 8px double #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>