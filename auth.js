// Password dienkripsi sederhana (base64)
const SUPER_SECRET_PASSWORD = "V0lMS0EyMDI1IQ=="; // "WILKA2025!" dalam base64

function checkAdmin() {
  const inputPass = document.getElementById("adminPassword").value;
  const encryptedInput = btoa(inputPass); // Enkripsi input
  
  if (encryptedInput === SUPER_SECRET_PASSWORD) {
    // Simpan status login di localStorage + session
    localStorage.setItem("adminAuth", "true");
    sessionStorage.setItem("tempAuth", "true");
    
    // Redirect ke halaman admin atau tampilkan konten
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("adminContent").style.display = "block";
  } else {
    document.getElementById("errorMsg").style.display = "block";
    document.getElementById("adminPassword").value = "";
  }
}

// Cek apakah sudah login
window.onload = function() {
  if (localStorage.getItem("adminAuth") === "true" || 
      sessionStorage.getItem("tempAuth") === "true") {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("adminContent").style.display = "block";
  }
};