export const fibs = (n) => {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("please, input a positive integer that is bigger than 0");
  }

  if(n === 1) return [0];

  const fibsSeq = [0, 1];

  for (let i = 2; i < n; i += 1) {
    fibsSeq.push(fibsSeq.at(-1) + fibsSeq.at(-2));
  }

  return fibsSeq;
};
