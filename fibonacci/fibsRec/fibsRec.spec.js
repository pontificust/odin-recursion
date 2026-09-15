import { expect, test } from "@jest/globals";
import { fibsRec } from "./fibsRec.js";

test("if n === 1 returns [0]", () => {
  expect(fibsRec(1)).toEqual([0]);
});

test("if n === 2 returns [0, 1]", () => {
  expect(fibsRec(2)).toEqual([0, 1]);
});

test("if n === 3 returns [0, 1, 1]", () => {
  expect(fibsRec(3)).toEqual([0, 1, 1]);
});

test("if n === 8 returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("if n === 17 returns [0, 1, 1, 2, 3, 5, ..., 987]", () => {
  expect(fibsRec(17)).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
  ]);
});

test("if n === 0 throws type error", () => {
  expect(() => fibsRec(0)).toThrow(
    "please, input a positive integer that is bigger than 0",
  );
});

test("if n is not a number throws type error", () => {
  expect(() => fibsRec('44444')).toThrow(
    "please, input a positive integer that is bigger than 0",
  );
});