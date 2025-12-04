document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  // Mảng ảnh – chỉ cần thêm phần tử mới là tự mở rộng
  const imagesData = [
    { src: "../assets/img/sample1.jpg", info: "Sinh vật huyền bí của Wuwa ở confestion" },
    { src: "../assets/img/sample2.jpg", info: "Các người bắt nạt ta" },
    { src: "../assets/img/sample3.jpg", info: "Nàng cáo m5" },
    { src: "../assets/img/sample4.jpg", info: "Thiếu nữ tai cáo dưới gốc anh đào Yae Miko, nhìn bóng người cô đơn thật đúng là tội.. vơ 🐧" },
    { src: "../assets/img/sample5.jpg", info: "Doro-sama" },
    { src: "../assets/img/sample6.jpg", info: "Flop ư, ghi tên chị vào" },
    { src: "../assets/img/sample7.jpg", info: "Tắm là 1 nghệ thuật" },
    { src: "../assets/img/sample8.jpg", info: "Ahoyy!" },
    { src: "../assets/img/sample9.jpg", info: "Thiếu nữ của Tử Vong" },
    // Thêm bao nhiêu ảnh cũng được, mảng sẽ tự mở rộng
  ];

  // Render ảnh ra HTML
  imagesData.forEach(img => {
    const col = document.createElement("div");
    col.className = "col-6 col-sm-6 col-md-4 col-lg-3 text-center mb-3";
    col.innerHTML = `
      <img src="${img.src}" 
           class="img-fluid img-thumbnail clickable mx-auto d-block" 
           alt="Ảnh" data-info="${img.info}">
    `;
    gallery.appendChild(col);
  });

  // Popup modal
  const modalImage = document.getElementById("modalImage");
  const modalInfo = document.getElementById("modalInfo");
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

  gallery.addEventListener("click", e => {
    if (e.target.classList.contains("clickable")) {
      modalImage.src = e.target.src;
      modalInfo.textContent = e.target.getAttribute("data-info");
      modalImage.classList.remove("show-zoom");
      imageModal.show();
      setTimeout(() => modalImage.classList.add("show-zoom"), 100);
    }
  });
});
function changeLayout(columns) {
  const gallery = document.getElementById("gallery");
  const cols = gallery.querySelectorAll("div");

  cols.forEach(col => {
    col.className = "text-center mb-3"; // reset

    if (columns == 2) {
      // 2 ảnh mỗi hàng trên mọi màn hình
      col.classList.add("col-6");
    }
    if (columns == 3) {
      // 2 ảnh trên mobile, 3 ảnh trên tablet/desktop
      col.classList.add("col-6", "col-md-4");
    }
    if (columns == 4) {
      // 2 ảnh trên mobile, 4 ảnh trên desktop
      col.classList.add("col-6", "col-md-3");
    }
  });
}

