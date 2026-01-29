let bookTitle = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let rating = parseInt(prompt("Nhập mức độ yêu thích (từ 1 đến 5):"));

if (rating === 5 || rating === 4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (rating === 3) {
    console.log("Sách này khá ổn, có thể mượn");
} else if (rating === 2 || rating === 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
}