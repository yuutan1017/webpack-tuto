const num = [100, 200, 300];
const table = new Array(1, 2, 3, 4, 5, ...num);

export default () => {
  console.table(table);
};
