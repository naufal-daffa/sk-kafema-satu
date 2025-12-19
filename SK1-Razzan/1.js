let menit = parseInt(prompt("Masukkan menit"));

if (menit < 0) {
  alert("Input tidak boleh negatif");
} else {
<<<<<<< HEAD:1.js
  let jam = Math.floor(menit/60);
  let totalMenit = menit % 60;
  alert (jam + ':' + totalMenit);
=======
  let Jam = Math.floor(menit / 60);
  let totalMenit = menit % 60;
  alert(`${Jam} : ${totalMenit}`);
>>>>>>> b36a5b1eaee6b7f3181200c869d9d54ea3b22f2f:SK1-Razzan/1.js
}
