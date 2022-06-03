// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

const listBelanjaan = function(){
  let list =[];
  for(let counter = 0; counter < dataBelanjaan.length; counter++){
    list[counter]=(" - " + dataBelanjaan[counter].nama+"  x  " + dataBelanjaan[counter].kuantitas);
  }
  return list;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = function(){
  let total = 0;
  for(let counter = 0; counter < dataBelanjaan.length; counter++){
    let kali =dataBelanjaan[counter].harga * dataBelanjaan[counter].kuantitas;
    
    total = total + kali;
  }
  console.log(total);

  return total;
}
// console.log(dataBelanjaan.length);

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");
  
  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
