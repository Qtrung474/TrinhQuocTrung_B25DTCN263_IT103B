let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function getAllPositions() {
    let uniquePositions = [];
    for (let i = 0; i < players.length; i++) {
        let position = players[i].split("-")[2];
        if (!uniquePositions.includes(position)) {
            uniquePositions.push(position);
        }
    }
    return uniquePositions;
}

function findPlayersWithLongestName() {
    let longestName = "";
    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1];
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    return longestName;
}

function countPlayersStartingWithLetter(letter) {
    let count = 0;
    let search = letter.toLowerCase();
    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1];
        if (name[0].toLowerCase() === search) {
            count++;
        }
    }
    return count;
}

console.log("Danh sách vị trí:", getAllPositions());
console.log("Tên dài nhất:", findPlayersWithLongestName());
console.log("Số người bắt đầu bằng chữ N:", countPlayersStartingWithLetter("N"));