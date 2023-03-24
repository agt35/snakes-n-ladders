<script>
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faDiceD6,
} from '@fortawesome/free-solid-svg-icons';

import { store } from '../../store.js';

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    isModal: Boolean,
  },
  computed: {
    diceOneIcon() {
      const diceOne = this.isModal ? store.diceModalOne : store.diceOne;
      switch (diceOne) {
        case 1:
          return faDiceOne;
        case 2:
          return faDiceTwo;
        case 3:
          return faDiceThree;
        case 4:
          return faDiceFour;
        case 5:
          return faDiceFive;
        case 6:
          return faDiceSix;
        default:
          return faDiceD6;
      }
    },
    diceTwoIcon() {
      const diceTwo = this.isModal ? store.diceModalTwo : store.diceTwo;
      switch (diceTwo) {
        case 1:
          return faDiceOne;
        case 2:
          return faDiceTwo;
        case 3:
          return faDiceThree;
        case 4:
          return faDiceFour;
        case 5:
          return faDiceFive;
        case 6:
          return faDiceSix;
        default:
          return faDiceD6;
      }
    },
  },
};
</script>

<template>
  <div class="dice-container">
    <font-awesome-icon :icon="diceOneIcon" class="dice" />
    <font-awesome-icon :icon="diceTwoIcon" class="dice" />
  </div>
</template>

<style scoped>
.dice {
  width: 110px;
  height: 110px;
  color: #71a5de;
}

.dice-container {
  background-color: #f6f2f0;
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  height: 150px;
  width: 100%;
}

.dice-container:hover {
  cursor: pointer;
}
</style>
