let nama = "Fema Flamelina Putri"

function ubahNama(nama) {
  let kata = nama.split(" ");
  for (let i = 2; i < kata.length; i++) {
    kata[i] = kata[i][0].toUpperCase() + ".";
  }
  return kata.join(" ");
}

<<<<<<<< HEAD:Naufal/2.js
console.log(ubahNama(nama));
========
console.log(ubahNama("Fema Flamelina Putri cihuy asoy"));
>>>>>>>> ba306c879468cadc035e2db170190a63d4a6a8bf:SK1-Razzan/2.js
