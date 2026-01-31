function inventoryManagement() {
    let totalChecked = 0;
    let missingBooks = 0;
    let outOfStockBooks = 0;
    let highStockBooks = 0;
    let normalStockBooks = 0;
    let isRunning = true;

    while (isRunning) {
        let action = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)").toLowerCase();

        if (action === "không") {
            isRunning = false;
        } else if (action === "có") {
            let bookId;
            do {
                bookId = prompt("Nhập mã sách (không được để trống):");
            } while (!bookId || bookId.trim() === "");

            let bookTitle = prompt("Nhập tên sách:");
            
            let actualQuantity;
            do {
                actualQuantity = parseInt(prompt("Số lượng thực tế đang có trong kho (>= 0):"));
            } while (isNaN(actualQuantity) || actualQuantity < 0);

            let status;
            do {
                status = parseInt(prompt("Tình trạng sách (1 - Bình thường, 2 - Mất):"));
            } while (status !== 1 && status !== 2);

            totalChecked++;

            if (status === 2) {
                console.log("Kết quả: Sách mất");
                missingBooks++;
            } else if (status === 1 && actualQuantity === 0) {
                console.log("Kết quả: Sách hết (vẫn còn trong hệ thống)");
                outOfStockBooks++;
            } else if (status === 1 && actualQuantity >= 10) {
                console.log("Kết quả: Sách tồn kho nhiều");
                highStockBooks++;
            } else if (status === 1 && actualQuantity >= 1 && actualQuantity <= 9) {
                console.log("Kết quả: Sách tồn kho bình thường");
                normalStockBooks++;
            }
        }
    }

    console.log("--- BÁO CÁO KIỂM KÊ ---");
    console.log("Tổng số sách đã kiểm kê: " + totalChecked + " cuốn");
    console.log("Số sách mất: " + missingBooks + " cuốn");
    console.log("Số sách hết hàng: " + outOfStockBooks + " cuốn");
    console.log("Số sách tồn kho nhiều: " + highStockBooks + " cuốn");
    console.log("Số sách tồn kho bình thường: " + normalStockBooks + " cuốn");
}

inventoryManagement();