//////////////////////////1-50//////////////////////////////////

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }


/////////////////////////////////GANJIL////////////////////////////////////////////////////////


// let j = 1;
// while (j <= 50) {
//   console.log(j);
//   j += 2;
// }


//////////////////////////////////GENAP/////////////////////////////////////////



// let j = 2;
// while (j <= 50) {
//   console.log(j);
//   j += 2;
// }

/////////////////////////////GANJIL GENAP/////////////////////////////////////////////////



let c = 1;
while (c <= 50) {
  if (c % 2 === 0) {
    console.log(c + " bilangan genap");
  } else {
    console.log(c + " bilangan ganjil");
  }
  c++;
}



//////////////////////////////////////////////////////////////////////////////////
// let total = 0;
// let bilanganTerbesar = Number.MIN_VALUE;
// let bilanganTerkecil = Number.MAX_VALUE;

// for (let i = 1; i <= 20; i++) {
//     let bilangan = parseFloat(prompt(`Masukkan bilangan ke-${i}:`));

//     total += bilangan;

//     if (bilangan > bilanganTerbesar) {
//         bilanganTerbesar = bilangan;
//     }

//     if (bilangan < bilanganTerkecil) {
//         bilanganTerkecil = bilangan;
//     }
// }

// let rataRata = total / 20;

// console.log(`Bilangan Terbesar: ${bilanganTerbesar}`);
// console.log(`Bilangan Terkecil: ${bilanganTerkecil}`);
// console.log(`Rata-rata: ${rataRata.toFixed(2)}`);


// ////////////////////////////////////////////////////////////////////////////////////////

// let total = 0;
// let bilanganTerbesar= Number.MIN_VALUE;
// let bilanganTerkecil = Number.MAX_VALUE;
// let jumlahBilangan = 0;

// while (jumlahBilangan < 20) {
//     let bilangan = parseFloat(prompt(`Masukkan bilangan ke-${jumlahBilangan + 1}:`));

//     total += bilangan;

//     if (bilangan > bilanganTerbesar) {
//         bilanganTerbesar = bilangan;
//     }

//     if (bilangan < bilanganTerkecil) {
//         bilanganTerkecil = bilangan;
//     }

//     jumlahBilangan++;
// }

// let rataRata = total / 20;

// console.log(`Bilangan Terbesar: ${bilanganTerbesar}`);
// console.log(`Bilangan Terkecil: ${bilanganTerkecil}`);
// console.log(`Rata-rata: ${rataRata.toFixed(2)}`);

///////////////////////////////////////////////////////////////////////////

// function cariBilangan() {
//     let bilangan;
//     let total = 0;
//     let terbesar = Number.MIN_SAFE_INTEGER;
//     let terkecil = Number.MAX_SAFE_INTEGER;

//     for (let i = 1; i <= 20; i++) {
//         bilangan = parseFloat(prompt("Masukkan bilangan ke-" + i + ":"));
//         total += bilangan;

//         if (bilangan > terbesar) {
//             terbesar = bilangan;
//         }

//         if (bilangan < terkecil) {
//             terkecil = bilangan;
//         }
//     }

//     let rataRata = total / 20;

//     console.log("Bilangan terbesar: " + terbesar);
//     console.log("Bilangan terkecil: " + terkecil);
//     console.log("Rata-rata: " + rataRata);
// }

// // Memanggil fungsi untuk mencari bilangan
// cariBilangan();
