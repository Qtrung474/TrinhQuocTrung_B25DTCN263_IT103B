let overdueBooks = [];
let quantity = parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));

if (!isNaN(quantity) && quantity > 0) {
    for (let i = 1; i <= quantity; i++) {
        let bookName = prompt(`Nhập tên cuốn sách bị trả muộn thứ ${i}:`);
        overdueBooks.push(bookName);
    }

    let totalBooks = 0;
    for (let i = 0; i < overdueBooks.length; i++) {
        totalBooks++;
    }
    console.log("Tổng số sách bị trả muộn: " + totalBooks);

    console.log("Danh sách sách bị trả muộn:");
    let longNameCount = 0;
    for (let i = 0; i < overdueBooks.length; i++) {
        console.log(`${i + 1}- ${overdueBooks[i]}`);
        
        if (overdueBooks[i].length > 20) {
            longNameCount++;
        }
    }

    console.log("Số lượng sách có tên dài hơn 20 ký tự: " + longNameCount);
}