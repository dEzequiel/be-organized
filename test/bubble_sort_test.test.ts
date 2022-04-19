import { Sorter } from "../src/bubble_sort";

const sorter = new Sorter();

describe("test bubble function", () => {
    it("should return [2, 3] for bubble_sort([3, 2])", () => {
      expect(sorter.bubble_sort([3, 2])).toStrictEqual([2, 3]);
    })

    it("should return [2, 3, 4] for bubble_sort([4, 3, 2])", () => {
      expect(sorter.bubble_sort([3, 2, 1])).toStrictEqual([1, 2, 3]);
    })
});