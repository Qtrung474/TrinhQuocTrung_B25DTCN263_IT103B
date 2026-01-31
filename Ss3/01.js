function manageBookLending() {
    let totalRequests = parseInt(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));

    while (isNaN(totalRequests) || totalRequests <= 0) {
        totalRequests = parseInt(prompt("Vui lòng nhập một số nguyên dương:"));
    }

    let i = 1;
    let count = 0;

    while (i <= totalRequests) {
        let borrowerName = prompt("Nhập tên người mượn (Lượt " + i + "):");
        let bookTitle = prompt("Nhập tên sách (Lượt " + i + "):");
        let rentalDays = parseInt(prompt("Số ngày mượn (1-30):"));

        console.log("Lượt " + i + ": " + borrowerName + " - " + bookTitle);

        if (rentalDays > 14) {
            console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
        } else {
            console.log("Mượn thành công");
        }

        count++;
        i++;
    }

    console.log("Tổng số lượt mượn: " + count);
}

manageBookLending();