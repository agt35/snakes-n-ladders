<script>
import Dice from './Dice.vue';
import Instructions from './Instructions.vue';
import SpecialModal from './SpecialModal.vue';
import { store } from '../../store.js';

export default {
    components: {
        Dice,
        Instructions,
        SpecialModal
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
                <h2 :style="{ color: this.store.currentPlayer.color }" class="notice">
                    {{ store.currentPlayer.name }} has reached the goal
                </h2>
                <button @click="store.exitGame">Exit Game</button>
            </div>
            <SpecialModal v-if="store.isSpecial" />
            <Instructions v-if="store.isInstructions" />
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
    z-index: 10;
}

.modal {
    text-align: center;
    background-color: white;
    width: 500px;
}

.notice {
    text-align: center;
}

.winner-announcement {
    text-align: center;
}
</style>
