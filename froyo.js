let flavorChoice = prompt(
  "What Flavors Would You Like?",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.log(flavorChoice);

const newArr = flavorChoice.split(",");
console.log(newArr);

newArr.forEach((flavor) => {
  console.log(flavor);
});

const frequencies = newArr.reduce(function (memo, word) {
  memo[word] = memo[word] + 1 || 1;
  return memo;
}, {});

console.log(frequencies);
