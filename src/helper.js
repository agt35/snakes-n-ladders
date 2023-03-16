for (let step = 100; step > 0; step--) {
  // console.log(step);
}

const players = [
  { id: 1, name: 'Alfonso', position: 0 },
  { id: 2, name: 'Nerea', position: 0 },
  { id: 3, name: 'Ander', position: 0 },
];

const movePlayer = (playerId, steps) => {
  let player = players.filter((player) => player.id === playerId);
  player = player[0];
  player.position = player.position + steps;
};

const makeNumbers = () => {
  const num1 = Math.floor(100 * Math.random());
  const num2 = Math.floor(100 * Math.random());

  return { num1, num2 };
};

const makeSnakes = () => {
  const snakes = [];
  for (let i = 0; i < 5; i++) {
    const { num1, num2 } = makeNumbers();
    if (num1 < num2) {
      snakes.push([num2, num1]);
    } else {
      snakes.push([num1, num2]);
    }
  }
  return snakes;
};

const makeStairs = () => {
  const stairs = [];
  for (let i = 0; i < 5; i++) {
    const { num1, num2 } = makeNumbers();
    if (num1 > num2) {
      stairs.push([num2, num1]);
    } else {
      stairs.push([num1, num2]);
    }
  }
  return stairs;
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function rollDice() {
  const dieOne = Math.floor(Math.random() * 6) + 1;
  const dieTwo = Math.floor(Math.random() * 6) + 1;
  return { dieOne, dieTwo };
}

console.log(rollDice());
let doubleCount = 0;
for (let i = 0; i < 100; i++) {
  const { dieOne, dieTwo } = rollDice();
  if (dieOne === dieTwo) {
    doubleCount++;
    console.log({ dieOne, dieTwo });
  }
}

console.log(makeSnakes());
