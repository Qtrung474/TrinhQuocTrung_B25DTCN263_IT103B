let bookTitle = prompt("Nhập tên sách:");
let status = prompt("Trạng thái sách (có sẵn/đã mượn):");
let publishedYear = parseInt(prompt("Nhập năm xuất bản:"));

let currentYear = new Date().getFullYear();
let age = currentYear - publishedYear;

if (status === "có sẵn" && age <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
} else if (status === "đã mượn" && age <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (status === "đã mượn" && age > 10) {
    console.log("Sách này đã mượn và khá cũ");
} else if (status === "có sẵn" && age > 5) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
}