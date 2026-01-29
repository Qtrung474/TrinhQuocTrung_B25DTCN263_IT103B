// 1. Input - Nhập dữ liệu
let userName = prompt("Nhập tên người dùng:");
let role = prompt("Nhập vai trò (admin, student, guest):").toLowerCase();
let balance = Number(prompt("Nhập số dư tài khoản:"));
let cardStatus = prompt("Nhập 'true' nếu thẻ hoạt động:");
let overdueDays = Number(prompt("Số ngày quá hạn:"));

// 2. Check Access Right - Sử dụng switch case
let accessMessage = "";
switch (role) {
    case "admin":
        accessMessage = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        accessMessage = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        accessMessage = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        accessMessage = "Lỗi: Vai trò không hợp lệ!";
}

// 3. Check Borrow Condition
let borrowResult = "";
if (userName !== "" && (role === "student" || role === "admin") && balance > 0 && cardStatus === "true") {
    borrowResult = "ĐƯỢC PHÉP MƯỢN SÁCH";
} else {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
}

// 4. Calculate Fine
let fineAmount = 0;
let returnStatus = "";

if (overdueDays <= 0) {
    returnStatus = "Đúng hạn";
    console.log("Cảm ơn bạn đã trả đúng hạn");
} else {
    returnStatus = "Quá hạn " + overdueDays + " ngày";
    
    if (overdueDays <= 5) {
        fineAmount = overdueDays * 5000;
    } else if (overdueDays <= 10) {
        fineAmount = overdueDays * 10000;
    } else {
        fineAmount = 200000;
        returnStatus = returnStatus + " - TÀI KHOẢN BỊ KHÓA";
    }
}

// 5. Final Report
console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---
Người dùng: ${userName.toUpperCase()}
Quyền hạn: ${accessMessage}
Kết quả mượn: ${borrowResult}
Tình trạng trả sách: ${returnStatus}
Tiền phạt: ${fineAmount} VNĐ
`);
