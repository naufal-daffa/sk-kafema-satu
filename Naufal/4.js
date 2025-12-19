let angka = prompt("Masukkan angka");

if(angka > 0){
    let panjang = angka.length;
    if (panjang == 1) alert("satuan");
    else if (panjang == 2) alert("puluhan");
    else if (panjang == 3) alert("ratusan");
    else if (panjang == 4)alert("ribuan");
    else if (panjang == 5)alert("puluhan ribu");
    else if (panjang == 6)alert("ratusan ribu");
    else if (panjang == 7)alert("jutaan");
    else alert("jutaan atau lebih");
}else{
    alert("tidak boleh negatif");
}

