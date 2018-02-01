/*
 * Get the depth of the Deepest Pit
 *
 * e.g. let s = [ 1, 8, 11, 3, 7, 2, 5, 4, 6, 9 ]
 * s => 4, with Pit [11, 3, 7] where we take the depth as min{11 - 3, 7 - 3}
 */
module.exports = array => {
    let length = 0, i = 0, j = 1;
    while (j < array.length) {
        while (j != array.length - 1 && array[j - 1] > array[j])
            j++;
        if (i != j - 1) {
            let d = Math.abs(array[j - 1] - array[i]);
            i = j++ - 1;
            while (j != array.length - 1 && array[j - 1] < array[j])
                j++;
            length = Math.max(length, Math.min(d, Math.abs(array[j - 1] - array[i])));
        }
        i = j++;
    }
    return length;
}
