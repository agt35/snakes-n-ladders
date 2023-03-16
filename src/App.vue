<script>
import Game from './components/Game/Game.vue';
import Setup from './components/Setup/Setup.vue';

import { store } from './store.js';

export default {
  components: {
    Game,
    Setup,
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <Game v-if="store.isStarted" />
  <Setup v-else />
</template>

<style scoped></style>
