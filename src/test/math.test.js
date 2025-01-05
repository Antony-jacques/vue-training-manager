import { add } from "./math";

import { describe, it, test, expect } from "vitest";

describe("test aditions", () => {
  test("1 + 1 should be 2", () => {
    expect(add(1, 1)).toBe(2);
  });

  test("2 * 4 shoulb be equal to 8", () => {
    expect(add(2, 4)).toBe(6);
  });
});

test.each([
  [1, 2, 3],
  [2, 3, 5],
  [-3, 1, -2]
])("add(%i, %i) = %i", (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});
