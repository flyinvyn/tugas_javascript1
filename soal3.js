const printSegita = (num) => {
    if (typeof num !== 'number') {
        return ("Data harus number");
    }
    let result = "";
    for (let i = num; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            result += j + " ";
        }
        result += "\n";
    }
    return result;
}
const hasil = printSegita(5);
console.log(hasil)