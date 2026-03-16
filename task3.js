let students = [
    { name: "Alice", age: 22, scores: [78, 85, 92] },
    { name: "Bob", age: 20, scores: [88, 90, 76] },
    { name: "Charlie", age: 21, scores: [95, 80, 85] }
];

let highestAverage = 0;
let topStudent = "";

for (let i = 0; i < students.length; i++) {

    let scores = students[i].scores;
    let total = 0;

    for (let j = 0; j < scores.length; j++) {
        total += scores[j];
    }

    let average = total / scores.length;

    console.log(students[i].name + " average score:", average);

    if (average > highestAverage) {
        highestAverage = average;
        topStudent = students[i].name;
    }

}

console.log("Top Student:", topStudent, "with average score of", highestAverage);
