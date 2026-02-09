let playerIds = [];
let playerPositions = [];
let roles = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

for (let i = 0; i < n; i++) {
    let id;
    while (true) {
        id = prompt("Mã cầu thủ thứ " + (i + 1) + ":");
        let isDuplicate = false;
        
        for (let j = 0; j < playerIds.length; j++) {
            if (playerIds[j] === id) {
                isDuplicate = true;
                break;
            }
        }
        
        if (!isDuplicate && id) {
            playerIds.push(id);
            break;
        }
    }

    let choice;
    while (true) {
        choice = +prompt("Vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):");
        if (choice >= 1 && choice <= 4) {
            playerPositions.push(roles[choice - 1]);
            break;
        }
    }
}

function printTeamRoster() {
    console.log("Đội bóng hiện tại (" + playerIds.length + " cầu thủ):");
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerPositions[i]);
    }
}

function findPlayersByPosition(position) {
    let indexes = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indexes.push(i);
        }
    }
    return indexes;
}

let searchNum = +prompt("Nhập vị trí muốn tìm (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):");
let targetPos = roles[searchNum - 1];

printTeamRoster();

let resultIndices = findPlayersByPosition(targetPos);

console.log("Số cầu thủ ở vị trí " + targetPos + ": " + resultIndices.length);
console.log("Các chỉ số cầu thủ ở vị trí " + targetPos + ": " + resultIndices.join(", "));