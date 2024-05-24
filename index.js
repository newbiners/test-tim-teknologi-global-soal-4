// Fungsi 1:
// ○ Fungsi ini digunakan untuk membuat dan mengelompokkan bilangan genap
// ○ Parameter:
// ■ JumlahBilangan
// ■ JumlahKelompok
// ○ Contoh 1
// ■ JumlahBilangan = 10 (ada 10 bilangan genap dimulai dari angka 2)
// ■ JumlahKelompok = 2 (kelompokkan bilangan jadi 2 kelompok)
// ■ Hasil: [2,4,6,8,10] [12,14,16,18,20]
// ○ Contoh 2
// ■ JumlahBilangan = 7 (ada 7 bilangan genap dimulai dari angka 2)
// ■ JumlahKelompok = 3 (kelompokkan bilangan jadi 3 kelompok)
// ■ Hasil: [2,4] [6,8] [10,12,14]


function MengelompokanBilanganGenap(JumlahBilangan, JumlahKelompok) {


    let int = 1;
   let hasil = [];
   let kelompok = 0
   while (hasil.length !== JumlahBilangan) {
       if(int % 2 == 0){
           hasil.push(int)
       }
     int++;
   }
    kelompok = JumlahBilangan / JumlahKelompok;
   let result = [];
   for (let i = 0; i < JumlahKelompok; i++) {
     result.push(hasil.slice(i * kelompok, (i + 1) * kelompok));
   }
   return result;
 }
 
 
 const hasil1 = MengelompokanBilanganGenap(10, 2);
const hasil2 = MengelompokanBilanganGenap(7,3);
console.log(hasil1)
console.log(hasil2)


// Fungsi 2:
// ○ Fungsi ini digunakan untuk membuat bangun dari text sesuai parameter yang
// diinputkan
// ○ Parameter
// ■ JumlahBaris
// ○ Contoh 1
// ■ JumlahBaris = 3
// ■ Hasil:
// *****
// ***
// *
// ○ Contoh 2
// ■ JumlahBaris = 5
// ■ Hasil:
// *********
// *******
// *****
// ***
// *

function MembuatBangunDatar(JumlahBaris) {
  let JumlahBarisIsi = Math.floor(JumlahBaris / 2) * 2 + JumlahBaris;
  
  for (let i = 0; i < JumlahBaris; i++) {
      let star = "";
      for (let j = 0; j < JumlahBarisIsi; j++) {
          star += "*";
      }
      JumlahBarisIsi -= 2;
      console.log(star);
  }
}
MembuatBangunDatar(3);
MembuatBangunDatar(5);