let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

/* Open Lightbox */
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

/* Close Lightbox */
document.querySelector(".close").addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* Next Button */
document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

/* Prev Button */
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

/* Filter Images */
let filterButtons = document.querySelectorAll(".filter-btn");
let galleryImages = document.querySelectorAll(".image");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let category = btn.getAttribute("data-category");

    galleryImages.forEach(imgBox => {
      if (category === "all" || imgBox.getAttribute("data-category") === category) {
        imgBox.style.display = "block";
      } else {
        imgBox.style.display = "none";
      }
    });
  });
});