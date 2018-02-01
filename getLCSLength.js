/*
 * Get the length of the Longest Continuous Increasing/Decreasing Subsequences
 *
 * e.g. let s = [ 1, 8, 11, 3, 7, 2, 5, 4, 6, 9 ]
 * (s, (a, b) => a < b)) => 3, with possible subsequences [1, 8, 11] or [4, 6, 9]
 * (s, (a, b) => a > b)) => 2, with possible subsequences [11, 3], [7, 2], [5, 4]
 */
module.exports = (array, comparator) => {
    let length = 0, i = 0, j = 1;
    while (j < array.length) {
        while (j != array.length - 1 && comparator(array[j - 1], array[j]))
            j++;
        length = Math.max(length, Math.abs(j - i));
        i = j++;
    }
    return length;
}
