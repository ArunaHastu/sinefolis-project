// Dapatkan elemen formulir menggunakan ID
const form = document.getElementById('feedbackForm');

// Tambahkan "event listener" untuk mendengarkan saat formulir di-submit
form.addEventListener('submit', function(event) {
    // 1. Mencegah pengiriman formulir default (mencegah refresh halaman)
    event.preventDefault(); 
    
    // 2. Menampilkan pesan konfirmasi kepada pengguna
    alert("Feedback Terkirim! Terima kasih atas masukan Anda.");
    
    // 3. Mengatur ulang formulir (membersihkan semua input)
    form.reset();
});