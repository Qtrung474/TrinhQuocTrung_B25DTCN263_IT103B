let count = 0;

while (count < 3) {
    let passwork = prompt("Nhập mật khẩu");
    if (passwork === "admin123") {
        console.log("Đăng nhập thành công");
        break;
    }else {
        console.log(`Nhập mật khẩu sai lần thứ ${count}`);
        count++;
    }
}
    if (count === 3) {
        console.log("Hệ thống bị khóa");
    } else {
        do{
             let choice =  +prompt(`
            Chọn chức năng
            1.Nhập lo sách mới
            2.Vẽ sơ đồ kệ sách
            3.thoát
            `);
            switch (choice) {
                case 1 :
                    break;
                case 2 :
                    
                    break;
                case 3 :
                    console.log("Thoát chương trình");                  
                    break;         
                default:
                    console.log("Lựa chọn không hợp lệ");                  
                    break;
            }
        }while(choice != 3)
        
       

        
    }
     

        





