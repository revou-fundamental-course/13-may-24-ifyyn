function hitungLuas(){
    const alas = parseFloat(document.getElementById('alas').value)
    const tinggi = parseFloat(document.getElementById('tinggi').value)

    if(isNaN(alas) || isNaN(tinggi)){
        document.getElementById('hasil').innerHTML = 'Mohon masukkan nilai yang valid';
        return;
    }
    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasil').innerHTML = `Hasil = ${luas}`
}
const hitungKeliling = () =>{
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById('hasilkeliling').innerText = 'Mohon masukkan nilai yang valid';
        return;
    }
    const keliling = a + b + c;
    document.getElementById('hasilkeliling').innerText =`Hasil = ${keliling}`
}