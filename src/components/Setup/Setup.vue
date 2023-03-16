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
        <h4>To setup the game add the players below</h4>
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

<style>
#setup {
    width: 500px;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h4 {
    color: dodgerblue;
}

.add-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

input {
    font-size: 1.8em;
}

form {
    border: 2px solid black;
    background-color: rgb(96, 96, 96);
    padding: 10px;
    border-radius: 5px;
}
</style>