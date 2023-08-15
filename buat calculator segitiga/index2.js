function hitungKeliling() {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        document.getElementById("hasil").textContent = "Masukkan nilai sisi yang valid";
    } else {
        let keliling;
        let rumus = "";
        let angkaAngka = "";

        if (sisiA + sisiB > sisiC && sisiA + sisiC > sisiB && sisiB + sisiC > sisiA) {
            if (sisiA * sisiA + sisiB * sisiB === sisiC * sisiC ||
                sisiA * sisiA + sisiC * sisiC === sisiB * sisiB ||
                sisiB * sisiB + sisiC * sisiC === sisiA * sisiA) {
                // Segitiga siku-siku, gunakan hukum Pythagoras
                keliling = sisiA + sisiB + sisiC;
                rumus = "Keliling = Sisi A + Sisi B + Sisi C";
                angkaAngka = "Angka-angka: " + sisiA + " + " + sisiB + " + " + sisiC;
            } else {
                // Segitiga lainnya
                keliling = sisiA + sisiB + sisiC;
                rumus = "Keliling = Sisi A + Sisi B + Sisi C";
                angkaAngka = "Angka-angka: " + sisiA + " + " + sisiB + " + " + sisiC;
            }
            document.getElementById("hasil").textContent = "Keliling segitiga: " + keliling;
            document.getElementById("rumus").textContent = rumus;
            document.getElementById("angka-angka").textContent = angkaAngka;
        } else {
            document.getElementById("hasil").textContent = "Sisi-sisi tidak membentuk segitiga";
            document.getElementById("rumus").textContent = "";
            document.getElementById("angka-angka").textContent = "";
        }
    }
}

function resetForm() {
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("hasil").textContent = "";
    document.getElementById("rumus").textContent = "";
    document.getElementById("angka-angka").textContent = "";
}