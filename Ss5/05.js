let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = parseInt(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));

if (!isNaN(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
        let id = "";
        while (true) {
            id = prompt(`Nhập mã sách thứ ${i}:`).trim();
            if (id === "") continue;
            
            let isDuplicate = false;
            for (let j = 0; j < booksId.length; j++) {
                if (booksId[j] === id) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) break;
            alert("Mã sách đã tồn tại, vui lòng nhập mã khác!");
        }
        
        let name = "";
        while (name.trim() === "") name = prompt(`Nhập tên sách thứ ${i}:`);
        
        let categories = prompt(`Nhập các thể loại của sách thứ ${i} (cách nhau bởi dấu phẩy):`);
        
        let quantity = -1;
        while (isNaN(quantity) || quantity < 0) {
            quantity = parseInt(prompt(`Nhập số lượng tồn kho của sách thứ ${i}:`));
        }

        booksId.push(id);
        booksName.push(name);
        booksCategory.push(categories);
        inventoryQuantity.push(quantity);
    }

    let programmingCount = 0;
    for (let i = 0; i < booksCategory.length; i++) {
        if (booksCategory[i].toLowerCase().includes("lập trình")) {
            programmingCount++;
        }
    }
    console.log("Tổng số sách thuộc thể loại 'Lập trình': " + programmingCount);

    console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
    for (let i = 0; i < booksCategory.length; i++) {
        let catLower = booksCategory[i].toLowerCase();
        if (catLower.includes("javascript") && catLower.includes("web")) {
            console.log(booksId[i]);
        }
    }

    let minIndex = 0;
    for (let i = 1; i < inventoryQuantity.length; i++) {
        if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
            minIndex = i;
        }
    }
    console.log("Loại sách có số lượng tồn kho thấp nhất:");
    console.log(`Mã sách: ${booksId[minIndex]}, Tên sách: ${booksName[minIndex]}, Tồn kho: ${inventoryQuantity[minIndex]}`);
}