let booksId = [];
let booksName = [];
let bookStatus = [];

let n = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));

const statusMap = {
    "1": "Hỏng nhẹ",
    "2": "Hỏng nặng",
    "3": "Cần sửa gấp",
    "4": "Đã sửa xong",
    "5": "Loại bỏ"
};

if (!isNaN(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
        let id = "";
        while (id.trim() === "") id = prompt(`Nhập mã sách thứ ${i}:`);
        
        let name = "";
        while (name.trim() === "") name = prompt(`Nhập tên sách thứ ${i}:`);
        
        let statusChoice = "";
        while (!["1", "2", "3"].includes(statusChoice)) {
            statusChoice = prompt(`Tình trạng sách ${id}:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp`);
        }

        booksId.push(id);
        booksName.push(name);
        bookStatus.push(statusMap[statusChoice]);
    }

    let choice = -1;
    while (choice !== 0) {
        console.log(`\nDanh sách hiện tại (${booksId.length} cuốn):`);
        for (let i = 0; i < booksId.length; i++) {
            console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
        }

        choice = parseInt(prompt("Bạn muốn làm gì?\n1: Sửa tình trạng\n2: Loại bỏ (xóa)\n0: Kết thúc và in báo cáo"));

        if (choice === 1) {
            let searchId = prompt("Nhập mã sách cần sửa:");
            let foundIndex = -1;
            for (let i = 0; i < booksId.length; i++) {
                if (booksId[i] === searchId) {
                    foundIndex = i;
                    break;
                }
            }

            if (foundIndex !== -1) {
                let newStatus = prompt("Chọn tình trạng mới:\n1: Hỏng nhẹ\n2: Hỏng nặng\n3: Cần sửa gấp\n4: Đã sửa xong\n5: Loại bỏ");
                if (statusMap[newStatus]) {
                    bookStatus[foundIndex] = statusMap[newStatus];
                }
            } else {
                alert("Không tìm thấy mã sách!");
            }
        } else if (choice === 2) {
            let deleteId = prompt("Nhập mã sách cần xóa:");
            let deleteIndex = -1;
            for (let i = 0; i < booksId.length; i++) {
                if (booksId[i] === deleteId) {
                    deleteIndex = i;
                    break;
                }
            }

            if (deleteIndex !== -1) {
                booksId.splice(deleteIndex, 1);
                booksName.splice(deleteIndex, 1);
                bookStatus.splice(deleteIndex, 1);
                alert("Đã xóa sách khỏi danh sách.");
            } else {
                alert("Không tìm thấy mã sách!");
            }
        }
    }

    let repairedCount = 0;
    let discardedCount = 0;
    for (let i = 0; i < bookStatus.length; i++) {
        if (bookStatus[i] === "Đã sửa xong") repairedCount++;
        if (bookStatus[i] === "Loại bỏ") discardedCount++;
    }

    console.log("\n--- BÁO CÁO CUỐI NGÀY ---");
    console.log("Tổng số sách còn lại: " + booksId.length);
    console.log("Số sách Đã sửa xong: " + repairedCount);
    console.log("Số sách Loại bỏ: " + discardedCount);
}