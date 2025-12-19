let angka = prompt("Masukkan angka");

let panjang = angka.length;

if (panjang == 1) alert("satuan");
else if (panjang == 2) alert("puluhan");
else if (panjang == 3) alert("ratusan");
else alert("ribuan atau lebih");
