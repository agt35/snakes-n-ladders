<script>
import { store } from '../../store.js';
import PlayerGrid from './PlayerGrid.vue';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        PlayerGrid,
    },
    computed: {
        isAddDisabled() {
            return store.availableColors.length === 0 || store.newPlayer === '';
        },
        isStartDisabled() {
            return store.players.length < 2;
        },
    },
}
</script>

<template>
    <div class="header">
        <font-awesome-icon icon="fa-solid fa-gamepad" class="icon" />
        <h1>Welcome to Snakes-n-Ladders</h1>
        <h3>To setup the game add the players below</h3>
    </div>
    <div id="setup">
        <div class="add-form">
            <form @submit.prevent="store.addPlayer" class="add-form">
                <input v-model="store.newPlayer" type="text" placeholder="Player name" />
                <button :disabled="isAddDisabled">Add Player</button>
            </form>
        </div>
        <div>
            <PlayerGrid />
        </div>
        <button :disabled="isStartDisabled" @click="store.setupGame">Start New Game</button>
    </div>
</template>

<style scoped>
#setup {
    width: 500px;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h3 {
    color: #5d7bd5;
}

.add-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

input {
    font-size: 1.8em;
    background-color: #f6f2f0;
    outline: none;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
}

input:focus {
    outline: none;
}

form {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: #f6f2f0;
    padding: 10px;
    border-radius: 5px;
}
</style>