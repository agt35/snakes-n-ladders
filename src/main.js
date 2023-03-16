import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faGamepad,
  faDiceD6,
} from '@fortawesome/free-solid-svg-icons';
// Icon setup
library.add(
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faGamepad,
  faDiceD6
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
