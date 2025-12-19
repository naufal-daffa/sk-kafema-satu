let data = [80, 90, null, 76, 85, "kosong"];
let hasil = [];

for (let i = 0; i < data.length; i++) {
<<<<<<<< HEAD:Naufal/7.js
  if (typeof data[i] == "number") {
========
  if (typeof data[i] === "number") {
>>>>>>>> ba306c879468cadc035e2db170190a63d4a6a8bf:SK1-Razzan/7.js
    hasil.push(data[i]);
  }
}

alert(hasil);
