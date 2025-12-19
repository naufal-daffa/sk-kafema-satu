let nilai = [80, 76, 78, 82, 80, 91];

nilai.sort(function (a, b) {
  return b - a;
});

for (let i = 0; i < 3; i++) {
  console.log(nilai[i]);
}
