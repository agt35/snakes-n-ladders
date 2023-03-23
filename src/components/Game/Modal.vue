<script>
import Dice from './Dice.vue';
import { store } from '../../store.js';

export default {
    components: {
        Dice,
    },
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <div class="modal-overlay">
        <div class="modal">
            <div v-if="store.isOver" class="winner-announcement">
                <h1>Winner!</h1>
                <h2 :style="{ color: this.store.currentPlayer.color }">
                    {{ store.currentPlayer.name }} has reached the goal
                </h2>
                <button @click="store.exitGame">Exit Game</button>
            </div>
            <div>
                <h1>You landed on a snake!!</h1>
                <h2>Roll the dice to see how far you will drop</h2>
            </div>
            <div>
                <h1>You landed on stairs!!</h1>
                <h2>Roll the dice to see how far you will climb</h2>
            </div>
            <h1>This is modal</h1>
            <Dice />
        </div>
    </div>
</template>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    text-align: center;
    background-color: white;
    width: 500px;
    height: 500px;
}

.winner-announcement {
    text-align: center;
}
</style>