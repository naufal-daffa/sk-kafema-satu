let angka = prompt("Pilih hal yang akan dilakukan (1/2) : \n1. Membulatkan Angka \n2. Menghitung Umur");
try {
    if (angka > 2 || angka < 1) {
        throw "Error1";
    } else if (angka == "") {
        throw "Error2";
    } else if (!parseInt(angka)) {
        throw "Error3";
    }
} catch (err) {
    if (err == "Error1") {
        alert("Error! pilihan tidak tersedia");
    }
    if (err == "Error2") {
        alert("Error! anda tidak mengisi input pilihan");
    }
    if (err == "Error3") {
        alert("Error! nilai bukan angka");
    }
}

if (angka == 1) {
    soal1 = prompt("Masukan angka desimal dengan (.)");
    try {
        if (soal1.includes(',')) {
            throw "Error4";
        } else if (parseFloat(soal1) % 1 == 0) {
            throw "Error5";
        } else if (soal1 == "") {
            throw "Error6";
        } 
        bulat = Math.round(soal1);
        alert(`Pembulatan dari angka ${soal1} =  ${bulat}`);
    } catch (err) {
        if (err == "Error4") {
            alert("Error! gunakan titik sebagai tanda desimal");
        }
        if (err == "Error5") {
            alert("Error! angka yang dimasukkan harus desimal");
        }
        if (err == "Error6") {
            alert("Error! anda tidak mengisi input angka");
        }
    }
}else {
    soal2 = prompt("Masukan tahun lahir anda");
    let tahunSekarang = new Date().getFullYear();
    console.log(tahunSekarang);
    
    try {
        if (soal2 > tahunSekarang) {
            throw "Error7";
        } else if (soal2 == "") {
            throw "Error8";
        } else if (!parseInt(soal2)) {
            throw "Error9";
        } 
        tahunUser = tahunSekarang - soal2;
        alert(`Umur anda sekarang = ${tahunUser}`)
    } catch (err) {
        if (err == "Error7") {
            alert("Error! tahun tidak diperkenankan");
        }
        if (err == "Error8") {
            alert("Error! anda tidak mengisi input umur");
        }
        if (err == "Error9") {
            alert("Error! nilai bukan angka");
        }
    }
}

