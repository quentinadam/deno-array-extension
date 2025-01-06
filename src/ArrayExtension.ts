export default class ArrayExtension<T> {
  readonly array: T[];

  constructor(array: T[]) {
    this.array = array;
  }

  /**
   * Map and filter an array in one go.
   * Runs the provided function on each item in the array and returns a new array with the results.
   * If the function returns `undefined`, the item is not included in the result array.
   *
   * @param fn The function to run on each item in the array.
   * @returns A new array with the results of the function, excluding `undefined` values.
   */
  mapFilter<U>(fn: (item: T, index: number, array: T[]) => U | undefined): U[] {
    return mapFilter(this.array, fn);
  }
}

/**
 * Map and filter an array in one go.
 * Runs the provided function on each item in the array and returns a new array with the results.
 * If the function returns `undefined`, the item is not included in the result array.
 *
 * @param array The array to map and filter.
 * @param fn The function to run on each item in the array.
 * @returns A new array with the results of the function, excluding `undefined` values.
 */
export function mapFilter<T, U>(
  array: T[],
  fn: (item: T, index: number, array: T[]) => U | undefined,
): U[] {
  return array.map((item, index, array) => {
    return fn(item, index, array);
  }).filter((item): item is U => item !== undefined);
}
