export const mergeSort = (arr) => {

    if(arr.length <= 1) {
        return arr;
    }

    const midIndex = Math.round(arr.length / 2);
    const sortedLeftHalf = mergeSort(arr.slice(0, midIndex));
    const sortedRightHalf = mergeSort(arr.slice(midIndex));
    let sortedArr = [];

    let i = 0;
    let j = 0;

    while(i < sortedLeftHalf.length && j < sortedRightHalf.length) {
        if(sortedLeftHalf[i] < sortedRightHalf[j]) {
            sortedArr.push(sortedLeftHalf[i]);
            i++;
        } else{
            sortedArr.push(sortedRightHalf[j]);
            j++;
        }
    }

    if(j < sortedRightHalf.length) {
        sortedArr = [...sortedArr, ...sortedRightHalf.slice(j)];
    } else {
        sortedArr = [...sortedArr, ...sortedLeftHalf.slice(i)];
    }

    return sortedArr;
};