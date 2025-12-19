let menu = ["Nasi Goreng", "Mie Goreng", "Mie Kuah", "Kwetiaw"];

let min = menu[0];
let jumlah = menu[0].split(" ").length;

for (let i = 1; i < menu.length; i++) {
  let kata = menu[i].split(" ").length;
  if (kata < jumlah) {
    jumlah = kata;
    min = menu[i];
  }
}

alert("Jumlah kata paling sedikit " + jumlah + " yaitu " + min);
