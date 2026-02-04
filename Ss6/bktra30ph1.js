let rawString = "Nam, Lan, Hùng, Nam";

let students = rawString.split(); 
console.log(students);

students.reverse();
console.log(students);

if (students.includes("Lan")) {
    console.log("Lan tồn tại trong mảng");
} else {
    console.log("Lan không tồn tại trong mảng");
}

console.log(students.indexOf("Nam"));