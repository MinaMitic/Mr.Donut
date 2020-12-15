function prijava(slika,radnoMesto) {
    localStorage.setItem("slika",slika);
    localStorage.setItem("radnoMesto",radnoMesto);
}

function validacija() {
    var a = document.forms["prijava"]["imeprezime"].value;
    if (a == "") {
        alert("Upišite Vaše ime i prezime");
        document.getElementById('imeprezime').style.borderColor = "red";
        return false;
    }

    var b = document.forms["prijava"]["rodjenje"].value;
    if (b == "") {
        alert("Upišite datum rođenja");
        document.getElementById('rodjenje').style.borderColor = "red";
        return false;
    }

    var c = document.forms["prijava"]["adresa"].value;
    if (c == "") {
        alert("Upišite Vašu adresu");
        document.getElementById('adresa').style.borderColor = "red";
        return false;
    }

    var d = document.forms["prijava"]["mail"].value;
    if (d == "") {
        alert("Upišite Vašu e-mail adresu");
        document.getElementById('mail').style.borderColor = "red";
        return false;
    }

    var e = document.forms["prijava"]["broj"].value;
    if (e == "") {
        alert("Upišite Vaš broj telefona");
        document.getElementById('broj').style.borderColor = "red";
        return false;
    }
    if (isNaN(e)) {
        alert("Upišite Vaš broj telefona ispravno");
        document.getElementById('broj').style.borderColor = "red";
        return false;

    }

    alert("Uspešno ste se prijavili za odabrano radno mesto. U najkraćem roku ćemo Vas obavestiti o terminu razgovora za posao.")
    return true;
}

$( function() {
    $("#imeprezime").tooltip
    $("#rodjenje").tooltip
    $("#adresa").tooltip
    $("#mail").tooltip
    $("#broj").tooltip
} );