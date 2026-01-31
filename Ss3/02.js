function checkReturnedBooks() {
    let totalReturns = parseInt(prompt("Hôm nay có bao nhiêu lượt trả sách?"));

    while (isNaN(totalReturns) || totalReturns <= 0) {
        totalReturns = parseInt(prompt("Vui lòng nhập một số nguyên dương:"));
    }

    let i = 1;
    let lateCount = 0;

    while (i <= totalReturns) {
        let borrowerName = prompt("Nhập tên người trả (Lượt " + i + "):");
        let bookTitle = prompt("Nhập tên sách (Lượt " + i + "):");
        let daysKept;

        do {
            daysKept = parseInt(prompt("Nhập số ngày đã mượn thực tế cho '" + bookTitle + "' (phải >= 1):"));
        } while (isNaN(daysKept) || daysKept < 1);

        console.log("Lượt " + i + ": " + borrowerName + " trả sách '" + bookTitle + "'");

        if (daysKept <= 14) {
            console.log("Tình trạng: Trả đúng hạn");
        } else if (daysKept >= 15 && daysKept <= 21) {
            console.log("Tình trạng: Trả muộn nhẹ - Phạt nhắc nhở");
            lateCount++;
        } else {
            console.log("Tình trạng: Quá hạn nghiêm trọng - Cần ghi biên bản phạt");
            lateCount++;
        }

        i++;
    }

    console.log("----------------------------");
    console.log("Tổng số lượt trả sách: " + totalReturns);
    console.log("Số lượt trả muộn (>= 15 ngày): " + lateCount);
}

checkReturnedBooks();