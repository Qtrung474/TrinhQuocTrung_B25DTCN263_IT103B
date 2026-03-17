// ========================================================
// 1. KHAI BÁO BIẾN TOÀN CỤC
// ========================================================
let products = [];      
let idCounter = 1;      
let editingId = null;   

const productForm = document.getElementById("productForm");
const tableContainer = document.getElementById("table-container");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");

// ========================================================
// 2. QUẢN LÝ DỮ LIỆU
// ========================================================

function saveToLocalStorage() {
    const data = {
        products: products,
        idCounter: idCounter
    };
    localStorage.setItem("products_data", JSON.stringify(data));
}

function loadFromLocalStorage() {
    const rawData = localStorage.getItem("products_data");
    if (rawData) {
        const parsedData = JSON.parse(rawData);
        products = parsedData.products;
        idCounter = parsedData.idCounter;
    }
}

// ========================================================
// 3. HIỂN THỊ DANH SÁCH (CHỈNH SỬA THEO HÌNH MẪU)
// ========================================================

function renderTable(dataToDisplay = products) {
    if (dataToDisplay.length === 0) {
        tableContainer.innerHTML = `
            <div class="empty-state show">
                <div class="empty-state-icon">📦</div>
                <p class="empty-state-text">Chưa có sản phẩm nào để hiển thị.</p>
            </div>`;
        updateStatistics(dataToDisplay);
        return;
    }

    // Cấu trúc bảng khớp với hình minh họa
    let html = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TÊN SẢN PHẨM</th>
                    <th>DANH MỤC</th>
                    <th>GIÁ</th>
                    <th>SỐ LƯỢNG</th>
                    <th>MÔ TẢ</th>
                    <th>THAO TÁC</th>
                </tr>
            </thead>
            <tbody>`;

    dataToDisplay.forEach(p => {
        // Định dạng giá: 30.000 ₫
        const priceFormatted = Number(p.price).toLocaleString('vi-VN') + " ₫";
        
        // Highlight đỏ khi số lượng < 10
        const lowStockClass = p.quantity < 10 ? "low-stock" : "";

        // Nếu mô tả trống thì hiện "Không có mô tả"
        const displayDesc = p.description && p.description.trim() !== "" 
                            ? p.description 
                            : "Không có mô tả";

        html += `
            <tr>
                <td>${p.id}</td>
                <td><strong>${p.name}</strong></td>
                <td>${p.category}</td>
                <td class="price">${priceFormatted}</td>
                <td class="quantity ${lowStockClass}">${p.quantity}</td>
                <td class="description">${displayDesc}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="startEdit(${p.id})">
                             ✏️ Sửa
                        </button>
                        <button class="btn-delete" onclick="deleteProduct(${p.id}, '${p.name}')">
                             🗑️ Xóa
                        </button>
                    </div>
                </td>
            </tr>`;
    });

    html += `</tbody></table>`;
    tableContainer.innerHTML = html;
    updateStatistics(dataToDisplay); 
}

// Hàm thống kê
function updateStatistics(data) {
    let totalProd = data.length;
    let totalQty = 0;
    let totalVal = 0;

    data.forEach(p => {
        totalQty += Number(p.quantity);
        totalVal += Number(p.price) * Number(p.quantity);
    });

    document.getElementById("totalProducts").innerText = totalProd;
    document.getElementById("totalQuantity").innerText = totalQty;
    document.getElementById("totalValue").innerText = totalVal.toLocaleString('vi-VN') + " ₫";
}

// ========================================================
// 4. THÊM, SỬA, XÓA (CRUD)
// ========================================================

productForm.onsubmit = function(e) {
    e.preventDefault(); 

    const name = document.getElementById("productName").value;
    const category = document.getElementById("productCategory").value;
    const price = Number(document.getElementById("productPrice").value);
    const quantity = Number(document.getElementById("productQuantity").value);
    const description = document.getElementById("productDescription").value;

    if (price < 0 || quantity < 0) {
        alert("Giá và số lượng không được âm!");
        return;
    }

    if (editingId === null) {
        // Thêm mới
        products.push({
            id: idCounter++,
            name, category, price, quantity, description
        });
    } else {
        // Cập nhật
        const index = products.findIndex(p => p.id === editingId);
        if (index !== -1) {
            products[index] = { ...products[index], name, category, price, quantity, description };
        }
        resetFormStatus();
    }

    saveToLocalStorage(); 
    renderTable();        
    productForm.reset();  
};

function startEdit(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    editingId = id;
    document.getElementById("productName").value = p.name;
    document.getElementById("productCategory").value = p.category;
    document.getElementById("productPrice").value = p.price;
    document.getElementById("productQuantity").value = p.quantity;
    document.getElementById("productDescription").value = p.description;

    formTitle.innerText = "Chỉnh Sửa Sản Phẩm";
    submitBtn.innerText = "💾 Cập Nhật";
    cancelBtn.style.display = "inline-block";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetFormStatus() {
    editingId = null;
    formTitle.innerText = "Thêm Sản Phẩm Mới";
    submitBtn.innerText = "➕ Thêm Sản Phẩm";
    cancelBtn.style.display = "none";
}

cancelBtn.onclick = function() {
    resetFormStatus();
    productForm.reset();
};

function deleteProduct(id, name) {
    if (confirm(`Bạn có chắc muốn xóa "${name}"?`)) {
        products = products.filter(p => p.id !== id);
        if (editingId === id) resetFormStatus();
        saveToLocalStorage();
        renderTable();
    }
}

document.getElementById("clearAllBtn").onclick = function() {
    if (confirm("Xóa toàn bộ danh sách?")) {
        products = [];
        idCounter = 1;
        saveToLocalStorage();
        renderTable();
    }
};

// ========================================================
// 5. TÌM KIẾM & LỌC
// ========================================================

function handleFilter() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const selectedCat = document.getElementById("filterCategory").value;

    const results = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(searchText) || 
                          p.description.toLowerCase().includes(searchText);
        const matchCat = selectedCat === "" || p.category === selectedCat;
        return matchName && matchCat;
    });

    renderTable(results);
}

document.getElementById("searchInput").oninput = handleFilter;
document.getElementById("filterCategory").onchange = handleFilter;

// KHỞI CHẠY
loadFromLocalStorage();
renderTable();