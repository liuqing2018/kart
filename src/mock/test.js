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

const result = data.some((item) => {
  return !item.name;
});

console.log(result);
