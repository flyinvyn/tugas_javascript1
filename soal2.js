const nilai = (bahasaIndonesia, bahasaInggris, mtk, ipa) => {
    if (typeof bahasaIndonesia !== 'number' || typeof bahasaInggris !== 'number' || typeof mtk !== 'number' || typeof ipa !== 'number') {
        return ("Nilai harus number");
    }
    const rataRata = (bahasaIndonesia + bahasaInggris + mtk + ipa) / 4;
    let grade = rataRata >= 90 && rataRata <= 100 ? "A" :
        rataRata >= 80 && rataRata <= 89 ? "B" :
            rataRata >= 70 && rataRata <= 79 ? "C" :
                rataRata >= 60 && rataRata <= 69 ? "D" : "E";
    const result = (`Nilai rata-rata = ${rataRata}
Grade nya = ${grade}`)
    return result
}
const hasil = nilai(87, 89, 80, 90);
console.log(hasil);