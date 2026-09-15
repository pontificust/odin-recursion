export const fibsRec = (n) => {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("please, input a positive integer that is bigger than 0");
  }

  if (n === 1) return [0];

  const prevFibArr = fibsRec(n - 1);

  return [...prevFibArr, prevFibArr.at(-1) + (prevFibArr.at(-2) ?? 1)];
};

console.log(fibsRec(8));
