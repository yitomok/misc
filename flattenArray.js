module.exports = (array) => {
    if (!array || !Array.isArray(array)) {
        // return it when root is not an array
        return array;
    }

    const stack = [{
        subArray: array,
    }];
    const result = [];

    while (stack.length) {
        let { subArray, currentIndex = 0 } = stack.pop();

        while (currentIndex < subArray.length) {
            if (Array.isArray(subArray[currentIndex])) {
                stack.push({
                    subArray,
                    currentIndex: currentIndex + 1,
                }, {
                    subArray: subArray[currentIndex],
                });

                // break to go into sub-array
                break;
            } else {
                result.push(subArray[currentIndex++]);
            }
        }
    }

    return result;
}
