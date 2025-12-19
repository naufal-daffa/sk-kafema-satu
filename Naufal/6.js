let angka = parseInt(prompt("Masukkan angka"));
let hasil = [];

function cekPembagi(angkaKamu){
  for (let i = 1; i <= 5; i++) {
    if (angkaKamu % i == 0) {
      hasil.push(i);
    }
  }
  
  console.log(angkaKamu + " dapat dibagi dengan " + hasil);
}

cekPembagi(angka)
