const bahasaIndonesia = 78;
const bahasaInggris = 89;
const mtk = 80;
const ipa = 90;

if(!bahasaIndonesia || !bahasaInggris || !mtk || !ipa) {
    console.log("Semua nilai harus diisi");
}

const rataRata = (bahasaIndonesia + bahasaInggris + mtk + ipa) / 4;
let grade = "";
if(rataRata >= 90 && rataRata <= 100){
    grade = "A";
} else if (rataRata >= 80 && rataRata <= 89) {
    grade = "B";
} else if (rataRata >= 70 && rataRata <= 79) {
    grade = "C";
} else if (rataRata >= 60 && rataRata <= 69) {
    grade = "D";
}else{
    grade = "E";
}

console.log(`Nilai rata-rata = ${rataRata}`)
console.log(`Grade nya = ${grade}`)