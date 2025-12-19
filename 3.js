let teks = "Dia manusia egois";
let negatif = ["malas", "egois", "pelit"];
let arr = teks.split(" ")
for(let i = 0; i < arr.length; i++){
  if(negatif.includes(arr[i])){
    arr[i] = "***"
  }
}
console.log(arr.join(" "))
