let bookTitle = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let status = prompt("Tình trạng sách (có sẵn/đã mượn/không có sẵn):");
let borrowingDays = parseInt(prompt("Nhập số ngày mượn:"));
let hasLibraryCard = prompt("Bạn có thẻ thư viện không? (có/không):");

if (status === "có sẵn" && hasLibraryCard === "có") {
    console.log("Chúc mừng, bạn có thể mượn sách này");
} else if (status === "đã mượn" && borrowingDays < 30) {
    if (hasLibraryCard === "có") {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
} else if (status === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} else if (status !== "có sẵn" && status !== "đã mượn" && status !== "không có sẵn") {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}