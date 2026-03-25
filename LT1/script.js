let songs = JSON.parse(localStorage.getItem("songs")) || [];
let editId = null;

function renderSongs(data = songs) {
    const songTable = document.getElementById("songTable");
    songTable.innerHTML = "";
    data.forEach((song) => {
        songTable.innerHTML += `
            <tr>
                <td>${song.id}</td>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>
                    <button onclick="editSong(${song.id})">Sửa</button>
                    <button onclick="deleteSong(${song.id})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

function handleSubmit() {
    const title = document.getElementById("title").value.trim();
    const artist = document.getElementById("artist").value.trim();

    if (!title || !artist) return alert("Vui lòng nhập đầy đủ thông tin!");

    if (editId === null) {
        const newSong = {
            id: songs.length > 0 ? songs[songs.length - 1].id + 1 : 1,
            title,
            artist
        };
        songs.push(newSong);
    } else {
        songs = songs.map(s => s.id === editId ? { ...s, title, artist } : s);
        editId = null;
        document.getElementById("submitBtn").innerText = "Thêm";
        document.getElementById("formTitle").innerText = "🎵 Thêm bài hát";
    }

    localStorage.setItem("songs", JSON.stringify(songs));
    resetForm();
    renderSongs();
}

function editSong(id) {
    const song = songs.find(s => s.id === id);
    document.getElementById("title").value = song.title;
    document.getElementById("artist").value = song.artist;
    document.getElementById("formTitle").innerText = "🎵 Sửa bài hát";
    document.getElementById("submitBtn").innerText = "Cập nhật";
    editId = id;
}

function deleteSong(id) {
    if (confirm("Bạn có chắc muốn xóa bài hát này?")) {
        songs = songs.filter(s => s.id !== id);
        localStorage.setItem("songs", JSON.stringify(songs));
        renderSongs();
    }
}

function searchSong() {
    const keyword = document.getElementById("search").value.toLowerCase();
    const filtered = songs.filter(s => s.title.toLowerCase().includes(keyword));
    renderSongs(filtered);
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
}

renderSongs();