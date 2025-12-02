document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".clickable");
  const modalImage = document.getElementById("modalImage");
  const modalInfo = document.getElementById("modalInfo");
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

  images.forEach(img => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalInfo.textContent = img.getAttribute("data-info");

      modalImage.classList.remove("show-zoom");
      imageModal.show();

      setTimeout(() => {
        modalImage.classList.add("show-zoom");
      }, 100);
    });
  });
});
