interface TestType {
  count: number;
};

function square({count}: TestType) {
  return count * count;
}

console.log(square({count: 2}));
