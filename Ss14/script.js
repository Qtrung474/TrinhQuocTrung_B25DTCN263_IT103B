const products = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "./img/banhchung.webp" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.jpg" },
    { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./img/lixi.webp" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.jpg" }
];

let totalPrice = 0;

// CHỨC NĂNG 1: Hiển thị sản phẩm
function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Xóa dữ liệu mẫu cũ trong HTML

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price.toLocaleString()}đ</p>
            <button class="btn-add" onclick="addToCart(${product.id})">Mua ngay</button>
        `;
        
        productList.appendChild(productCard);
    });
}

// CHỨC NĂNG 2 & 3: Thêm vào giỏ hàng và Tính tổng tiền
function addToCart(productId) {
    // 1. Tìm sản phẩm trong mảng dựa trên ID
    const product = products.find(p => p.id === productId);
    const cartList = document.getElementById("cart-list");
    const emptyMsg = document.querySelector(".empty-msg");

    // 2. Xóa dòng "Chưa có món nào..." nếu đây là sản phẩm đầu tiên
    if (emptyMsg) {
        emptyMsg.remove();
    }

    // 3. Tạo thẻ <li> mới cho giỏ hàng
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="cart-item-name">${product.name}</span>
        <div>
            <span class="cart-item-price">${product.price.toLocaleString()}đ</span>
        </div>
    `;

    // 4. Thêm vào danh sách hiển thị
    cartList.appendChild(li);

    // 5. Cập nhật tổng tiền
    totalPrice += product.price;
    document.getElementById("total-price").innerText = `${totalPrice.toLocaleString()}đ`;
}

// Chạy hàm hiển thị ngay khi trang web load
renderProducts();