const data = [
  {
    name: true,
    value: 12,
  },
  {
    name: true,
    value: 23
  },
];

const result = data.map((item) => {
  return item.value;
});

console.log(result);
