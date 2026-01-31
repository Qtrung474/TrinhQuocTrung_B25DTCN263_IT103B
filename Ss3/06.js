function manageFeedback() {
    let totalFeedback = 0;
    let seriousComplaints = 0;
    let mediumComplaints = 0;
    let lightComplaints = 0;
    let suggestions = 0;
    let positiveFeedback = 0;
    let isWorking = true;

    while (isWorking) {
        let action = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)").toLowerCase();

        if (action === "không") {
            isWorking = false;
        } else if (action === "có") {
            let readerName;
            do {
                readerName = prompt("Nhập tên bạn đọc (không được để trống):");
            } while (!readerName || readerName.trim() === "");

            let cardId = prompt("Nhập mã thẻ bạn đọc (nếu có, có thể để trống):");

            let feedbackType;
            do {
                feedbackType = parseInt(prompt("Loại phản hồi (1: Khiếu nại, 2: Đề xuất, 3: Tích cực):"));
            } while (feedbackType !== 1 && feedbackType !== 2 && feedbackType !== 3);

            let severity = 0;
            if (feedbackType === 1) {
                do {
                    severity = parseInt(prompt("Mức độ nghiêm trọng (1: Nhẹ, 2: Trung bình, 3: Nghiêm trọng):"));
                } while (severity !== 1 && severity !== 2 && severity !== 3);
            }

            let content = prompt("Nhập nội dung ngắn gọn:");

            totalFeedback++;
            console.log("Bạn đọc: " + readerName + (cardId ? " (Mã thẻ: " + cardId + ")" : ""));

            // Quy tắc phân loại và xử lý
            if (feedbackType === 1 && severity === 3) {
                console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
                seriousComplaints++;
            } else if (feedbackType === 1 && severity === 2) {
                console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
                mediumComplaints++;
            } else if (feedbackType === 1 && severity === 1) {
                console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
                lightComplaints++;
            } else if (feedbackType === 2) {
                console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
                suggestions++;
            } else if (feedbackType === 3) {
                console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
                positiveFeedback++;
            }
        }
    }

    // Báo cáo tổng hợp cuối ca
    console.log("--- BÁO CÁO TỔNG HỢP KẾT THÚC CA ---");
    console.log("Tổng số phản hồi/khiếu nại đã xử lý: " + totalFeedback);
    console.log("Số khiếu nại nghiêm trọng (mức 3): " + seriousComplaints);
    console.log("Số khiếu nại trung bình (mức 2): " + mediumComplaints);
    console.log("Số khiếu nại nhẹ (mức 1): " + lightComplaints);
    console.log("Số đề xuất cải thiện: " + suggestions);
    console.log("Số phản hồi tích cực: " + positiveFeedback);
}

manageFeedback();