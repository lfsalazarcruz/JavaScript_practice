// return n number of possibilities for given number

function rps(rounds) {
  const result = [];
  const options = ["r", "p", "s"];

  let play = function(combination, rounds) {
    //base case
    if (rounds === 0) {
      result.push(combination);
      return;
    }
    for (let i = 0; i < 3; i++) {
      play(options[i] + combination, rounds - 1);
    }
  };
  play("", rounds);
  return result;
}

console.log(rps(4));
