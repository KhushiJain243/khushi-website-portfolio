function getUniqueElements(arr1, arr2) {

    let combined = arr1.concat(arr2);
    let unique = [];

    for (let i = 0; i < combined.length; i++) {

        if (!unique.includes(combined[i])) {
            unique.push(combined[i]);
        }

    }

    return unique;
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let result = getUniqueElements(array1, array2);

console.log("Unique elements:", result);
