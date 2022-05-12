

export default () => {
  const obj = { a: 1, b: 2, c: 3 };
  const newObj = { ...obj, text: "展開されました。" };
  console.log(newObj);
};
