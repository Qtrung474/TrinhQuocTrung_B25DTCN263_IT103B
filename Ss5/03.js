let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let n = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

if (!isNaN(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
        let id = "";
        while (id.trim() === "") {
            id = prompt(`Nhập mã sách thứ ${i}:`);
        }
        
        let name = "";
        while (name.trim() === "") {
            name = prompt(`Nhập tên sách thứ ${i}:`);
        }
        
        let quantity = -1;
        while (isNaN(quantity) || quantity < 0) {
            quantity = parseInt(prompt(`Nhập số lượng tồn kho của sách ${id}:`));
        }

        booksId.push(id);
        booksName.push(name);
        inventoryQuantity.push(quantity);
    }

    console.log(`Danh sách sách cần xem xét bổ sung (${booksId.length} loại):`);
    for (let i = 0; i < booksId.length; i++) {
        console.log(`${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`);
    }

    let lowStockCount = 0;
    let outOfStockIds = "";

    for (let i = 0; i < inventoryQuantity.length; i++) {
        if (inventoryQuantity[i] <= 5) {
            lowStockCount++;
        }
        if (inventoryQuantity[i] === 0) {
            outOfStockIds += (outOfStockIds === "" ? "" : ", ") + booksId[i];
        }
    }

    console.log(`\nSố sách có tồn kho ≤ 5 bản: ${lowStockCount} loại`);
    console.log(`Các mã sách đã hết hàng (0 bản): ${outOfStockIds || "Không có"}`);
}