let bookTitle = prompt("Nhập tên sách:");
let genre = prompt("Nhập thể loại sách:");
let isAvailable = prompt("Tình trạng sách (có sẵn/đã mượn):");

if (genre === "Khoa học" || genre === "Lịch sử") {
    if (isAvailable === "có sẵn") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (genre === "Văn học" || genre === "Truyện") {
    console.log("Sách này có thể đọc giải trí");
}