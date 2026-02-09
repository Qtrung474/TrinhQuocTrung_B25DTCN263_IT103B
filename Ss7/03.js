let players = [];
let roles = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

function printTeamRoster() {
    console.log("Danh sách đội bóng:");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log((i + 1) + ". Mã: " + parts[0] + " | Tên: " + parts[1] + " | Vị trí: " + parts[2]);
    }
}

function pushPlayer(id, name, position) {
    let info = id + "-" + name + "-" + position;
    players.push(info);
}

let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

for (let i = 0; i < n; i++) {
    let id;
    while (true) {
        id = prompt("Nhập mã cầu thủ " + (i + 1) + ":");
        let isDuplicate = false;
        for (let j = 0; j < players.length; j++) {
            if (players[j].split("-")[0] === id) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate && id) break;
        alert("Mã đã tồn tại hoặc trống!");
    }

    let name;
    while (true) {
        name = prompt("Nhập tên cầu thủ:");
        if (name) break;
        alert("Tên không được để trống!");
    }

    let choice;
    while (true) {
        choice = +prompt("Chọn vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):");
        if (choice >= 1 && choice <= 4) break;
    }

    pushPlayer(id, name, roles[choice - 1]);
}

printTeamRoster();