// 1. Nhập liệu
let tenSach = prompt("Nhập tên sách:");
let tacGia = prompt("Nhập tên tác giả:");
let namXB = +prompt("Nhập năm xuất bản:");
let giaTien = +prompt("Nhập giá tiền:");
let soLuong = +prompt("Nhập số lượng:");

// 2. Chuẩn hóa và Tính toán
let tenSachChuan = tenSach.trim().toUpperCase();
let tacGiaChuan = tacGia.toUpperCase();

// Tạo mã sách: 3 ký tự đầu tác giả + Năm + Số ngẫu nhiên 1-1000
let maSoNgauNhien = Math.floor(Math.random() * 1000) + 1;
let maSach = tacGiaChuan.slice(0, 3) + namXB + "-" + maSoNgauNhien;

// Tính tuổi sách và tổng giá trị
let tuoiSach = 2026 - namXB;
let tongGiaTri = giaTien * soLuong;

// Ngăn kệ ngẫu nhiên 1-10
let keSo = Math.floor(Math.random() * 10) + 1;

// 3. In kết quả
console.log("--- PHIẾU NHẬP KHO ---");
console.log("Mã sách: " + maSach);
console.log("Tên sách: " + tenSachChuan);
console.log("Tác giả: " + tacGiaChuan);
console.log("Năm xuất bản: " + namXB);
console.log("Tuổi sách: " + tuoiSach + " năm");
console.log("Tổng giá trị: " + tongGiaTri + " VNĐ");
console.log("Ngăn kệ gợi ý: Kệ số " + keSo);