let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Văn D", "Hoàng Thị E"];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
    console.log("Danh sách đội bóng:");
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerNames[i] + " - Số áo: " + playerJerseyNumbers[i]);
    }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    let index = -1;
    for (let i = 0; i < playerIds.length; i++) {
        if (playerIds[i] === playerId) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        playerNames[index] = newName;
        playerJerseyNumbers[index] = newJerseyNumber;
        return true;
    }
    return false;
}

let idToUpdate = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let found = false;
for (let i = 0; i < playerIds.length; i++) {
    if (playerIds[i] === idToUpdate) {
        found = true;
        break;
    }
}

if (found) {
    let newName = prompt("Nhập tên mới cho cầu thủ:");
    let newJersey;
    
    while (true) {
        newJersey = parseInt(prompt("Nhập số áo mới (1-99):"));
        if (newJersey >= 1 && newJersey <= 99) 
        break;
        alert("Số áo phải nằm trong khoảng từ 1 đến 99!");
    }

    if (updatePlayerNameAndJersey(idToUpdate, newName, newJersey)) {
        console.log("Cập nhật thành công!");
        printTeamRoster();
    }
} else {
    console.log("Không tìm thấy cầu thủ với mã này!");
}