import { Sorter } from "../src/bubble_sort";

const sorter = new Sorter([3, 2]);

describe("test bubble function", () => {
    it("should return [2, 3] for bubble_sort([3, 2])", () => {
      expect(sorter.bubble_sort()).toStrictEqual([2, 3]);
    })
});