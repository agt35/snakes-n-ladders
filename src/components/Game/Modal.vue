<script>
import Dice from './Dice.vue';

export default {
    components: {
        Dice,
    },
}
</script>

<template>
    <div class="modal-overlay">
        <div class="modal">
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
</style>