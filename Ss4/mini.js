function runLibrarySystem() {
  // 1. ĐĂNG NHẬP
  let loginAttempts = 0;
  let isAuthenticated = false;

  while (loginAttempts < 3) {
    let username = prompt("Mời bạn nhập tài khoản:");
    let password = prompt("Mời bạn nhập mật khẩu:");

    if (username === "admin" && password === "12345") {
      alert("Đăng nhập thành công!");
      isAuthenticated = true;
      break; 
    } else {
      loginAttempts = loginAttempts + 1;
      let remaining = 3 - loginAttempts;
      alert("Sai thông tin! Bạn còn " + remaining + " lần thử.");
    }
  }

  if (isAuthenticated === false) {
    alert("Tài khoản đã bị khóa!");
    return; 
  }

  // 2. MENU CHÍNH
  let choice;
  do {
    let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n" +
               "1. Phân loại mã số sách\n" +
               "2. Thiết kế sơ đồ kho\n" +
               "3. Dự toán phí bảo trì\n" +
               "4. Tìm mã số may mắn\n" +
               "5. Thoát\n" +
               "Nhập lựa chọn (1-5):";

    choice = prompt(menu); // Nhập trực tiếp chuỗi cho đơn giản

    if (choice === "1") {
      classifyBookIDs();
    } else if (choice === "2") {
      designWarehouseMap();
    } else if (choice === "3") {
      estimateMaintenanceCosts();
    } else if (choice === "4") {
      findLuckyBooks();
    } else if (choice === "5") {
      alert("Hẹn gặp lại!");
    } else {
      alert("Lựa chọn không đúng!");
    }
  } while (choice !== "5");
}

// --- CÁC HÀM CHI TIẾT ---

function classifyBookIDs() {
  let tongSo = 0;
  let soChan = 0;
  let soLe = 0;
  
  alert("Nhập mã số sách (Nhập 0 để dừng):");
  while (true) {
    let id = Number(prompt("Nhập mã số:"));
    if (id === 0) break;

    tongSo = tongSo + 1;
    if (id % 2 === 0) {
      soChan = soChan + 1;
    } else {
      soLe = soLe + 1;
    }
  }
  console.log("Tổng số sách: " + tongSo);
  console.log("Số mã chẵn: " + soChan);
  console.log("Số mã lẻ: " + soLe);
}

function designWarehouseMap() {
  let rows = Number(prompt("Nhập số hàng:"));
  let cols = Number(prompt("Nhập số cột:"));

  for (let i = 1; i <= rows; i++) {
    let rowText = "";
    for (let j = 1; j <= cols; j++) {
      let cell = "[" + i + "-" + j + "]";
      if (i === j) {
        cell = cell + "*"; // Đánh dấu kệ ưu tiên đơn giản bằng dấu *
      }
      rowText = rowText + cell + " ";
    }
    console.log(rowText);
  }
}

function estimateMaintenanceCosts() {
  let sl = Number(prompt("Nhập số lượng sách:"));
  let gia = Number(prompt("Phí bảo trì 1 cuốn:"));
  let nam = Number(prompt("Số năm dự toán:"));

  for (let i = 1; i <= nam; i++) {
    let tong = sl * gia;
    console.log("Năm " + i + ": " + tong + " VNĐ");
    gia = gia * 1.1; // Tăng 10%
  }
}

function findLuckyBooks() {
  let n = Number(prompt("Kiểm tra đến số bao nhiêu?"));
  let ketQua = "";
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      ketQua = ketQua + i + " ";
    }
  }
  console.log("Mã may mắn: " + ketQua);
}

// Chạy chương trình
runLibrarySystem();