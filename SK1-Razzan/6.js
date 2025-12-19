let angka = parseInt(prompt("Masukkan angka"));
let hasil = [];

for (let i = 1; i <= 5; i++) {
  if (angka % i == 0) {
    hasil.push(i);
  }
}

alert(angka + " dapat dibagi dengan " + hasil);
