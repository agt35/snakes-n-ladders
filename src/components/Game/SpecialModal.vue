<script>
import { store } from '../../store.js';
import Dice from './Dice.vue';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        Dice,
    },
    computed: {
        msg1() {
            switch (store.specialCase) {
                case 'snake':
                    return 'OH NO!! You landed on a snake!';
                case 'stair':
                    return 'YAYY!! You landed on a stair!';
                case 'special':
                    return 'You landed on a special tile!';
                default:
                    return 'There is a bug in the game :(';
            }
        },
        msg2() {
            switch (store.specialCase) {
                case 'snake':
                    return 'Roll the dice to see how far you will drop. The dice will be multiplied';
                case 'stair':
                    return 'Roll the dice to see how far you will climb. The dice will be multiplied';
                case 'special':
                    return 'Roll the dice to see how far everyone else will drop';
                default:
                    return 'There is a bug in the game :(';
            }
        },
    },
}
</script>

<template>
    <div class="special-modal">
        <h1>{{ msg1 }}</h1>
        <h2>{{ msg2 }}</h2>
        <Dice :isModal="true" />
        <button @click="store.rollModalDice">Roll dice</button>
        <button @click="store.closeSpecial">Close</button>
    </div>
</template>

<style>
.special-modal {
    text-align: center;
    margin: auto 15px;
}
</style>