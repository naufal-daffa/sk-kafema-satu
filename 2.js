function ubahNama(nama) {
  let kata = nama.split(" ");
  for (let i = 2; i < kata.length; i++) {
    kata[i] = kata[i][0].toUpperCase() + ".";
  }
  return kata.join(" ");
}

console.log(ubahNama("Fema Flamelina Putri"));
