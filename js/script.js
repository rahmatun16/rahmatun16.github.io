function hitungLuasSegitiga() {
    const alas = document.getElementById("alas").value.trim();
    const tinggi = document.getElementById("tinggi").value.trim();

    
    if (!alas || !tinggi) {
        alert("Harap isi semua input!");
        return;
    }

    
    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Semua input harus berupa angka!");
        return;
    }

    const luas = (parseFloat(alas) * parseFloat(tinggi)) / 2;

    document.getElementById("hasilLuas").innerHTML = "Luas segitiga: " + luas;
}

function hitungKelilingSegitiga() {
    const sisiA = document.getElementById("sisiA").value.trim();
    const sisiB = document.getElementById("sisiB").value.trim();
    const sisiC = document.getElementById("sisiC").value.trim();

    
    if (!sisiA || !sisiB || !sisiC) {
        alert("Harap isi semua input!");
        return;
    }

    
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert("Semua input harus berupa angka!")
        return;
    }

    const keliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);

    document.getElementById("hasilKeliling").innerHTML = "Keliling segitiga: " + keliling;
}
function reset() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";

    document.getElementById("hasilLuas").innerHTML = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}