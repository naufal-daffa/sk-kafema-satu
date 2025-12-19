let menit = parseInt(prompt("Masukkan menit"));

if (menit < 0) {
  alert("Input tidak boleh negatif");
} else {
  alert(menit / 60 + " jam");
}
