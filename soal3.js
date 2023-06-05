let printSegita = 5;

if (typeof printSegita !== 'number') {
    console.log("Data harus number");
} else {
    for (let i = printSegita; i >= 1; i--) {
        let hasil = "";
        for (let j = 1; j <= i; j++) {
            hasil += j + " ";
        }
        console.log(hasil)
    }
}