let menu = ["Nasi Goreng", "Mie Goreng", "Mie Kuah", "Kwetiaw"];
let pilih = prompt("Pilih menu", menu);

if (menu.includes(pilih)) {
  alert("Menu yang anda pilih " + pilih);
} else {
  alert("Menu tidak tersedia");
}
