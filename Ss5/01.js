let bookList = [];
let quantity = parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));

if (!isNaN(quantity) && quantity > 0) {
    for (let i = 1; i <= quantity; i++) {
        let bookName = prompt(`Nhập tên cuốn sách thứ ${i}:`);
        bookList.push(bookName);
    }

    let totalBooks = 0;
    for (let i = 0; i < bookList.length; i++) {
        totalBooks++;
    }
    console.log("Tổng số sách đã được trả: " + totalBooks);

    console.log("Danh sách sách đã trả:");
    for (let i = 0; i < bookList.length; i++) {
        console.log(`${i + 1}. ${bookList[i]}`);
    }
}