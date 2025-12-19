let angka = prompt("Masukkan angka");

let panjang = angka.length;

if (angka > 0) {
  if (panjang == 1) alert("satuan");
  else if (panjang == 2) alert("puluhan");
  else if (panjang == 3) alert("ratusan");
  else if (panjang == 4) alert("ribuan");
  else if (panjang == 5) alert("puluhan ribuan");
  else if (panjang == 6) alert("ratusan ribuan");
  else if (panjang == 7) alert("jutaan");
  else alert("puluhan jutaan atau lebih");
}
