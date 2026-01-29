let bookQuantity = parseInt(prompt("Nhập số lượng sách trong thư viện:"));

if (bookQuantity < 10) {
    console.log("Thư viện có ít sách : ");
} else if (bookQuantity >= 10 && bookQuantity <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ :");
} else {
    console.log("Thư viện có nhiều sách : ");
}