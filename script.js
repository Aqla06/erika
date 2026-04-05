const giftButton = document.querySelector(".gift-button");
const giftModal = document.getElementById("gift-modal");
const closeBtn = document.querySelector(".close-btn");

// Cegah reload halaman & tampilkan modal
giftButton.addEventListener("click", (e) => {
    e.preventDefault();
    giftModal.style.display = "flex";
});

// Tutup modal
closeBtn.addEventListener("click", () => {
    giftModal.style.display = "none";
});

// Klik area luar modal → tutup
window.addEventListener("click", (e) => {
    if (e.target == giftModal) {
        giftModal.style.display = "none";
    }
});

// Tangkap pesan dari iframe
window.addEventListener("message", (event) => {
    if (event.data.action === "closeGiftModal") {
        giftModal.style.display = "none";
    }
});