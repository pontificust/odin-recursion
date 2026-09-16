import { expect, test } from "@jest/globals";
import { mergeSort } from "./mergeSort.js";

test("a standard array with duplicates", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("a sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("a reversed sorted array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("an array of equal elements", () => {
    expect(mergeSort([6, 6, 6, 6])).toEqual([6, 6, 6, 6]);
});

test("an array of negative elements", () => {
    expect(mergeSort([-3, -1, -7, -2])).toEqual([-7, -3, -2, -1]);
});

test("an array of two elements (an even length)", () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
});

test("an array of one element", () => {
    expect(mergeSort([99])).toEqual([99]);
});

test("an empty array", () => {
    expect(mergeSort([])).toEqual([]);
});