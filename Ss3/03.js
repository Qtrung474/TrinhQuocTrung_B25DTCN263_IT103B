function manageExtensionRequests() {
    let successfulExtensions = 0;
    let failedExtensions = 0;
    let isRunning = true;

    while (isRunning) {
        let answer = prompt("Có yêu cầu gia hạn mới không? (có/không)").toLowerCase();

        if (answer === "không") {
            isRunning = false;
        } else if (answer === "có") {
            let readerName = prompt("Nhập tên bạn đọc:");
            let bookTitle = prompt("Nhập tên sách:");
            
            let currentDays;
            do {
                currentDays = parseInt(prompt("Số ngày đã mượn hiện tại (>= 1):"));
            } while (isNaN(currentDays) || currentDays < 1);

            let extensionDays;
            do {
                extensionDays = parseInt(prompt("Số ngày muốn gia hạn thêm (>= 1):"));
            } while (isNaN(extensionDays) || extensionDays < 1);

            let totalDays = currentDays + extensionDays;

            if (totalDays > 60) {
                console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
                failedExtensions++;
            } else if (currentDays > 45) {
                console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
                failedExtensions++;
            } else {
                console.log("Gia hạn thành công cho sách: " + bookTitle);
                successfulExtensions++;
            }
        }
    }

    console.log("--- THỐNG KÊ CA LÀM VIỆC ---");
    console.log("Số lần gia hạn thành công: " + successfulExtensions);
    console.log("Số lần gia hạn không thành công: " + failedExtensions);
}

manageExtensionRequests();