document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.getElementById("gallery");

  // Mảng ảnh – chỉ cần thêm phần tử mới là tự mở rộng
  const imagesData = [
    {src: "../assets/img/sample1.jpg", info: "Đây là ảnh số 1"},
    {src: "../assets/img/sample2.jpg", info: "Đây là ảnh số 2"},
    {src: "../assets/img/sample3.jpg", info: "Đây là ảnh số 3"},
    // Thêm bao nhiêu ảnh cũng được, mảng sẽ tự mở rộng
  ];
imagesData.push({src: "../assets/img/sample4.jpg", info: "Đây là ảnh số 4"});

  // Render ảnh ra HTML
  imagesData.forEach(img => {
    const col = document.createElement("div");
    col.className = "col-md-4 text-center mb-3";
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
