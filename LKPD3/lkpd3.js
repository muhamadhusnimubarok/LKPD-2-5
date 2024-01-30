// let berat = parseFloat(prompt("Masukkan berat jeruk (gram):"));


// let harga = 500;
// let hargaSebelum= (berat/ 1000) * harga;


// let diskon = 0.05 * hargaSebelum;


// let HargaSetelah = hargaSebelum - diskon;


// console.log(`Total Harga Sebelum Diskon: ${hargaSebelum} rupiah`);
// console.log(`Diskon: ${diskon} rupiah`);
// console.log(`Total Harga Setelah Diskon: ${HargaSetelah} rupiah`);


////////////////////////////////////////////////////////////////////


// function tampilkanAngkaSatuanPuluhanRatusan() {
//     let bilangan = parseInt(prompt("Masukkan sebuah bilangan bulat:"));

//     if (isNaN(bilangan)) {
//         console.log("Input yang dimasukkan bukanlah bilangan bulat.");
//         return;
//     }

//     let satuan = bilangan % 10;
//     let puluhan = Math.floor((bilangan % 100) / 10);
//     let ratusan = Math.floor(bilangan / 100);

//     console.log("Angka satuan: " + satuan);
//     console.log("Angka puluhan: " + puluhan);
//     console.log("Angka ratusan: " + ratusan);
// }

// tampilkanAngkaSatuanPuluhanRatusan();



/////////////////////////////////////////////////////////////////////////////////////
  
let suhuFahrenheit = parseFloat(prompt("Masukkan suhu dalam derajat Fahrenheit:"));



    let suhuCelsius = (suhuFahrenheit - 32) * 5/9;

    if (suhuCelsius > 300) {
        console.log("Cuaca saat ini: Panas");
    } else if (suhuCelsius < 250) {
        console.log("Cuaca saat ini: Dingin");
    } else {
        console.log("Cuaca saat ini: Normal");
    }
