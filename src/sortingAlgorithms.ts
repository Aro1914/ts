function generateRandomArray(lowerBound: number, upperBound: number, length: number): number[] {
    if (lowerBound >= upperBound) throw new Error("Lower bound must be less than upper bound.");
    if (length < 1) throw new Error("Array length must be at least 1.");

    const arr: number[] = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound);
    }
    return arr;
}


const mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle))

    const result: number[] = []

    let i = 0, j = 0
    while (i < left.length && j < right.length) {
        const leftVal = left[i] as number
        const rightVal = right[j] as number
        if (leftVal < rightVal) {
            result.push(leftVal)
            i++
        } else {
            result.push(rightVal)
            j++
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}

const quickSort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array
    }

    const len = array.length
    const pivot = array[Math.random() * len | 0] as number
    const left = []
    const right = []

    let i = 0
    for (i; i < len - 1; i++) {
        const current = array[i] as number
        if (current < pivot) {
            left.push(current)
        }
        else {
            right.push(current)
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const lowerBound = 0
const upperBound = 100
const length = 10
const array = generateRandomArray(lowerBound, upperBound, length)

console.log('mergeSort:', mergeSort(array))
console.log('quickSort:', quickSort(array))