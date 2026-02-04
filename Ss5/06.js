let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let n = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));

if (!isNaN(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
        let id = "";
        while (true) {
            id = prompt(`Nhập mã thẻ bạn đọc thứ ${i}:`).trim();
            if (id === "") continue;
            let isDuplicate = false;
            for (let j = 0; j < readerCardIds.length; j++) {
                if (readerCardIds[j] === id) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) break;
            alert("Mã thẻ này đã tồn tại!");
        }

        let name = prompt(`Nhập tên bạn đọc thứ ${i}:`);
        let bookCodes = prompt(`Nhập danh sách mã sách của ${id}:`);
        let days = parseInt(prompt(`Nhập số ngày quá hạn của ${id}:`));

        readerCardIds.push(id);
        readerNames.push(name);
        borrowedBookCodes.push(bookCodes);
        overdueDays.push(days);
    }

    console.log(`\nDanh sách bạn đọc quá hạn (${readerCardIds.length} người):`);
    for (let i = 0; i < readerCardIds.length; i++) {
        console.log(`${i + 1}. Mã thẻ: ${readerCardIds[i]} | Tên: ${readerNames[i]} | Sách đang mượn: ${borrowedBookCodes[i]} | Quá hạn: ${overdueDays[i]} ngày`);
    }
    console.log("...");


    let longOverdueCount = 0;
    for (let i = 0; i < overdueDays.length; i++) {
        if (overdueDays[i] >= 10) longOverdueCount++;
    }
    console.log(`\nTổng số bạn đọc quá hạn ≥ 10 ngày: ${longOverdueCount} người`);

 
    let jsPytReaders = "";
    for (let i = 0; i < borrowedBookCodes.length; i++) {
        let codes = borrowedBookCodes[i].toUpperCase();
        if (codes.includes("JS") && codes.includes("PYT")) {
            jsPytReaders += (jsPytReaders === "" ? "" : ", ") + readerCardIds[i];
        }
    }
    console.log(`Các bạn đọc đang mượn cả sách JS* và PYT*: ${jsPytReaders || "Không có"}`);


    let maxIndex = 0;
    for (let i = 1; i < overdueDays.length; i++) {
        if (overdueDays[i] > overdueDays[maxIndex]) maxIndex = i;
    }
    console.log(`Bạn đọc có số ngày quá hạn cao nhất: ${readerNames[maxIndex]} (${overdueDays[maxIndex]} ngày)`);

 
    let warningCount = 0;
    for (let i = 0; i < overdueDays.length; i++) {
        if (overdueDays[i] >= 7) warningCount++;
    }

    if (warningCount === 0) {
        console.log("Tình hình trả sách hôm nay khá tốt!");
    } else if (warningCount <= 4) {
        console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
    } else {
        console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
    }
}