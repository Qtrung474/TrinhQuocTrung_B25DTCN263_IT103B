const products = [
  { id: 1, name: "Tai nghe Bluetooth TWS", price: 320000, image: "https://picsum.photos/seed/mp19-tws/1200/800", description: "Chống ồn nhẹ, pin 20h, kết nối ổn định." },
  { id: 2, name: "Bàn phím cơ 87 phím", price: 790000, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60", description: "Switch blue, led trắng, gõ sướng tay." },
  { id: 3, name: "Chuột không dây công thái học", price: 450000, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60", description: "Thiết kế ergonomic, sạc USB-C." },
  { id: 4, name: "USB 64GB", price: 120000, image: "https://picsum.photos/seed/mp19-usb/1200/800", description: "Nhỏ gọn, tốc độ đọc/ghi ổn định." },
  { id: 5, name: "Đế tản nhiệt laptop", price: 210000, image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60", description: "2 quạt gió, đỡ mỏi cổ tay." },
  { id: 6, name: "Cáp sạc Type-C 1m", price: 80000, image: "https://picsum.photos/seed/mp19-cable/1200/800", description: "Bọc dù, hỗ trợ sạc nhanh." },
];

let cart = JSON.parse(localStorage.getItem("mp19_cart_v1")) || {};

const $ = (id) => document.getElementById(id);

function renderProducts() {
  $("product-count-badge").textContent = `${products.length} sản phẩm`;
  $("products-grid").innerHTML = products.map(p => `
    <article class="card">
      <div class="card-img"><img src="${p.image}" alt="${p.name}"></div>
      <div class="card-body">
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-footer">
          <div class="price">${p.price.toLocaleString()} VNĐ</div>
          <button class="btn btn-primary" onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const items = Object.values(cart);
  $("cart-empty").classList.toggle("hidden", items.length > 0);
  
  $("cart-tbody").innerHTML = items.map(item => {
    const p = products.find(x => x.id === item.productId);
    if (!p) return "";
    return `
      <tr>
        <td>${p.name}</td>
        <td class="right">${p.price.toLocaleString()} VNĐ</td>
        <td class="center">
          <div class="qty-controls">
            <button class="btn btn-icon btn-ghost" onclick="changeQty(${p.id}, -1)">-</button>
            <span class="qty">${item.quantity}</span>
            <button class="btn btn-icon btn-ghost" onclick="changeQty(${p.id}, 1)">+</button>
          </div>
        </td>
        <td class="right">${(p.price * item.quantity).toLocaleString()} VNĐ</td>
        <td class="center">
          <button class="btn btn-ghost" onclick="removeItem(${p.id})">Xóa</button>
        </td>
      </tr>
    `;
  }).join("");

  updateStats(items);
}

function updateStats(items) {
  const qty = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + (i.quantity * (products.find(x => x.id === i.productId)?.price || 0)), 0);

  $("stat-lines").textContent = items.length;
  $("stat-qty").textContent = qty;
  $("stat-total").textContent = total.toLocaleString() + " VNĐ";
  $("cart-lines-badge").textContent = `${items.length} dòng`;
  $("cart-qty-badge").textContent = `${qty} món`;
  localStorage.setItem("mp19_cart_v1", JSON.stringify(cart));
}

window.addToCart = (id) => {
  cart[id] ? cart[id].quantity++ : cart[id] = { productId: id, quantity: 1 };
  renderCart();
};

window.changeQty = (id, delta) => {
  if (!cart[id]) return;
  cart[id].quantity += delta;
  if (cart[id].quantity <= 0) delete cart[id];
  renderCart();
};

window.removeItem = (id) => {
  if (confirm("Xóa sản phẩm này?")) {
    delete cart[id];
    renderCart();
  }
};

$("clear-cart-btn").onclick = () => {
  if (Object.keys(cart).length && confirm("Xóa toàn bộ giỏ hàng?")) {
    cart = {};
    renderCart();
  }
};

renderProducts();
renderCart();