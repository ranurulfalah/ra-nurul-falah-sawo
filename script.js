// Pesan sukses saat form dikirim
document.getElementById("form-daftar").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("success-message").textContent = 
    "Terima kasih! Data pendaftaran Anda telah terkirim.";
  this.reset();
});