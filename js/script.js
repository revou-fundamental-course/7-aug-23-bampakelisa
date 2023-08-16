function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var luas = 0.5 * alas * tinggi;
    document.getElementById("hasil").textContent = "L = " + luas;
    document.getElementById("rumus").textContent = "L = 1/2 x " + alas + " x " + tinggi;
    document.getElementById("luasalastinggi").textContent = "L = 1/2 x a x t";
}

function resetForm() {
    document.getElementById("tinggi").value = "";
    document.getElementById("alas").value = "";
    document.getElementById("luasalastinggi").textContent = "";
    document.getElementById("hasil").textContent = "";
    document.getElementById("rumus").textContent = "";
}
if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    document.getElementById("hasil").textContent = "Masukkan nilai sisi yang valid";
}