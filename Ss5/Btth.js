let choice;
do{
    choice = +prompt(`
        --- THƯ VIỆN KHOA HỌC ---
        1. Xem danh sách
        2. Nhập danh sách
        3. Mượn sách(Xóa)
        4. Sửa tên sách
        5. Sắp xếp kệ
        6. Thoát
        Nhập lựa chọn của bạn`);

        switch(choice){
            case 1 :
                for( const index in book){
                    console.log(`${index + 1}. ${books[index]}`);
                }
            break;
            case 2 :
                let newBook = prompt("Nhập tên sách mới");
                book.push(newBook);
            break;
        }
}