let data = [80, 90, null, 76, 85, "kosong"];
let hasil = [];

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] == "number") {
    hasil.push(data[i]);
  }
}

console.log(hasil);
