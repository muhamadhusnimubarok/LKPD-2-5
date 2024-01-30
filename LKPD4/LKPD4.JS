    //no 1 Nilai

        // let MATH = 78;
        // let PABP = 92;
        // let DPK = 82;
        // let mean = (MATH + PABP + DPK)/3;

        // if(mean >= 80 && mean <= 100) {
        //     grade= "A";
        // }
        // else if (mean >= 75 && mean <80) {
        //     grade = "B";
        // }
        // else if (mean >= 65 && mean <75) {
        //     grade = "C";
        // }
        // else if (mean >= 45 && mean <65) {
        //     grade = "D";
        // }
        // else if (mean >= 0 && mean <45) {
        //     grade = "E";
        // } else {
        //     grade = "K";
        // }

        // console.log("rata-rata iqbal adalah:"+ mean);
        // console.log("Jadi nilai iqbal adalah:"+ grade);

///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////

// function tambahSatuDetik(waktu) {
//     let [jam, menit, detik] = waktu.split(':').map(Number);

//     if (detik < 59) {
//         detik += 1;
//     } else {
//         detik = 0;
//         if (menit < 59) {
//             menit += 1;
//         } else {
//             menit = 0;
//             if (jam < 23) {
//                 jam += 1;
//             } else {
//                 jam = 0;
//             }
//         }
//     }

//     return `${jam.toString().padStart(2, '0')}:${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;
// }

// let waktu1 = '02:13:23';
// let waktu2 = '02:13:59';
// let waktu3 = '02:59:59';
// let waktu4 = '23:59:59';

// console.log(`Setelah penambahan 1 detik: ${tambahSatuDetik(waktu1)}`);
// console.log(`Setelah penambahan 1 detik: ${tambahSatuDetik(waktu2)}`);
// console.log(`Setelah penambahan 1 detik: ${tambahSatuDetik(waktu3)}`);
// console.log(`Setelah penambahan 1 detik: ${tambahSatuDetik(waktu4)}`);
//////////////////////////////////////////////////////////////////////////


function menghitung (datajam,datamenit, datadetik) {
    let totaldetik = datajam * 3600 + datamenit * 60 + datadetik;
    let hasiltotaldetik = totaldetik +1;
    let totaljam = (Math.floor(hasiltotaldetik / 3600) % 24 );
    let sisadetik = hasiltotaldetik % 3600;
    let totalmenit = Math.floor(sisadetik / 60 );
    let second = sisadetik % 60;

    console.log(`${datajam}jam ${datamenit}menit ${datadetik} detik`);
    console.log(`${totaljam} jam ${totalmenit} menit ${second} detik`);

}

menghitung (2,25,11)