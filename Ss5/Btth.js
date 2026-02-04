let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice;

while (choice !== 0) {
    let menu = `--- THƯ VIỆN KHOA HỌC ---
1. Xem danh sách
2. Nhập sách mới
3. Mượn sách (Xóa)
4. Sửa tên sách
5. Sắp xếp kệ
0. Thoát

Bạn chọn:`;

    choice = parseInt(prompt(menu));

    switch (choice) {
        case 1:
         
            console.log(`=> Danh sách hiện tại (${books.length} cuốn):`);
            if (books.length === 0) {
                console.log("Kho đang trống.");
            } else {
                for (let i = 0; i < books.length; i++) {
                    console.log(`${i + 1}. ${books[i]}`);
                }
            }
            break;

        case 2:
          
            let newBook = prompt("Nhập tên cuốn sách mới:");
            if (newBook) {
                books.push(newBook);
                console.log("=> Đã thêm thành công!");
            }
            break;

        case 3:
         
            let borrowBook = prompt("Nhập tên cuốn sách muốn mượn:");
            let indexToBorrow = books.indexOf(borrowBook);

            if (indexToBorrow === -1) {
                console.log(`=> Lỗi: Không tìm thấy sách ${borrowBook}!`);
            } else {
                books.splice(indexToBorrow, 1);
                console.log(`=> Đã cho mượn cuốn '${borrowBook}'.`);
            }
            break;

        case 4:
           
            let oldName = prompt("Nhập tên sách cũ cần sửa:");
            let indexToEdit = books.indexOf(oldName);

            if (indexToEdit === -1) {
                console.log(`=> Lỗi: Không tìm thấy sách ${oldName}!`);
            } else {
                let newName = prompt("Nhập tên mới:");
                books[indexToEdit] = newName;
                console.log("=> Cập nhật thành công!");
            }
            break;

        case 5:
            
            books.sort();
            console.log("=> Đã sắp xếp lại kệ sách theo thứ tự bảng chữ cái.");
           
            console.log("Danh sách mới: " + books.join(" - "));
            break;

        case 0:
            console.log("Tạm biệt thủ thư!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
}
