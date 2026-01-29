let booktitle = ("Nhập tên sách : ");
let author = ("Nhập tên tác giả");
let publishedYear = parseInt(prompt("Nhap nam xuat ban:"));

let currentYear = new  Date().getFullYear();

if (publishedYear === currentYear) {
    console.log("-> Đây là sách mới");
} else if (currentYear - publishedYear <= 5) {
    console.log("-> Sách khá mới ");
}else{
    console.log("-> Sách cũ");
    
}
