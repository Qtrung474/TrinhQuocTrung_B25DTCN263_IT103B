let bookname = prompt("Nhập tên sách :");
let booknumber = prompt("Số thứ tự ;");

let tensachchuanhoa = bookname.trim().toUpperCase();
let masach = "LTB - " + tensachchuanhoa + "-" + booknumber;

console.log("---Kết quả---");
console.log("Tên sách gốc:" + bookname);
console.log("Mã sách chuẩn hóa :" + masach);