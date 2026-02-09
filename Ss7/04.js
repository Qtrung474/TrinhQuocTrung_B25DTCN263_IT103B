let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function printTeamRoster() {
    console.log("DANH SÁCH ĐỘI BÓNG:");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let id = parts[0];
        let name = parts[1];
        let position = parts[2];
        console.log(`${i + 1}. ${id} | ${name} | ${position}`);
    }
}

function countPlayerByPosition() {
    let counts = {
        "Thủ môn": 0,
        "Hậu vệ": 0,
        "Tiền vệ": 0,
        "Tiền đạo": 0
    };

    for (let i = 0; i < players.length; i++) {
        let position = players[i].split("-")[2];
        if (counts.hasOwnProperty(position)) {
            counts[position]++;
        }
    }

    console.log("\nTHỐNG KÊ VỊ TRÍ:");
    for (let pos in counts) {
        console.log(`${pos}: ${counts[pos]}`);
    }
    return counts;
}

function hasGoalkeeper() {
    for (let i = 0; i < players.length; i++) {
        let position = players[i].split("-")[2];
        if (position === "Thủ môn") {
            return true;
        }
    }
    return false;
}

printTeamRoster();

countPlayerByPosition();

console.log("\nKIỂM TRA THỦ MÔN:");
console.log("Đội có thủ môn không? " + (hasGoalkeeper() ? "Có" : "Không"));