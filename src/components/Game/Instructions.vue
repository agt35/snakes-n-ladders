<script>
import { store } from '../../store.js'

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="instructions">
        <h2>Game instructions</h2>
        <p>Each player will click on the Roll Dice button to roll the dice and see how many spaces they will advance. If a
            player rolls a double, then they will get another turn. Once a turn is done, the Next Player button will need to
            be clicked to go to the next player</p>
        <hr>
        <h3>Special spaces</h3>
        <ul>
            <li>
                <p>Blue spaces: Player has landed on stairs, they will roll dice to see how far they will climb</p>
            </li>
            <li>
                <p>Red spaces: Player has landed on a snake, they will roll dice to see how far they will fall</p>
            </li>
            <li>
                <p>Yellow spaces: Surprise</p>
            </li>
        </ul>
        <button @click="store.closeInstructions">Close</button>
    </div>
</template>

<style scoped>
.instructions {
    text-align: center;
    margin: auto 15px;
}

h2 {
    text-align: center;
}
</style>