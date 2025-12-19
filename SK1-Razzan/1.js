let menit = parseInt(prompt("Masukkan menit"));

if (menit < 0) {
  alert("Input tidak boleh negatif");
} else {
  let Jam = Math.floor(menit / 60);
  let totalMenit = menit % 60;
  alert(`${Jam} : ${totalMenit}`);
}
