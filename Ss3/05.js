function manageReservations() {
    let totalRequests = 0;
    let successfulCount = 0;
    let rejectedCount = 0;
    let pendingCount = 0;
    let isWorking = true;

    while (isWorking) {
        let action = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)").toLowerCase();

        if (action === "không") {
            isWorking = false;
        } else if (action === "có") {
            let readerName = prompt("Nhập tên bạn đọc:");
            let bookId = prompt("Nhập mã sách muốn đặt trước:");
            let bookTitle = prompt("Nhập tên sách:");
            
            let waitDays;
            do {
                waitDays = parseInt(prompt("Số ngày dự kiến chờ (>= 1):"));
            } while (isNaN(waitDays) || waitDays < 1);

            let priority;
            do {
                priority = parseInt(prompt("Mức độ ưu tiên (1: Sinh viên, 2: Giảng viên, 3: Đặc cách):"));
            } while (priority !== 1 && priority !== 2 && priority !== 3);

            totalRequests++;
            console.log("Xử lý yêu cầu: " + readerName + " - Sách: " + bookTitle);

            // Quy tắc xử lý theo thứ tự ưu tiên
            if (waitDays > 45) {
                console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
                rejectedCount++;
            } else if (priority === 3) {
                console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
                successfulCount++;
            } else if (priority === 2 && waitDays <= 30) {
                console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
                successfulCount++;
            } else if (priority === 1 && waitDays <= 21) {
                console.log("Đặt trước thành công");
                successfulCount++;
            } else {
                console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
                pendingCount++;
            }
        }
    }

    // Báo cáo tổng hợp cuối ca
    console.log("--- BÁO CÁO TỔNG HỢP KẾT THÚC CA ---");
    console.log("Tổng số yêu cầu đã xử lý: " + totalRequests);
    console.log("Số yêu cầu đặt trước thành công: " + successfulCount);
    console.log("Số yêu cầu bị từ chối: " + rejectedCount);
    console.log("Số yêu cầu chờ xét duyệt: " + pendingCount);
}

manageReservations();