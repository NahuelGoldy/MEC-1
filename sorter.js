exports.mergeSort = (array) => {
    if(array.length == 1 ) return array;

    const mid = array.length / 2;
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    left = this.mergeSort(left);
    right = this.mergeSort(right);

    return merge(left, right);
};

const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] > right[rightIndex]) {
            result.push(right[rightIndex]);
            rightIndex++;
        } else {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }

    while(leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
};