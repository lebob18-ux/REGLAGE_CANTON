// Calcul de la température et des cotes (Connexion / Bras / Pendule / IS)
function calculer() {
    let at1Val = document.getElementById("at1").value;
    let cases = document.querySelectorAll('.caseACocher');
    if (at1Val === "") {
        cases.forEach(c => { c.checked = false; c.disabled = true; });
        ["sCx", "sBras", "sPendule", "sIs", "tempVal", "tempIcon", "cAmontSmart", "cAvalSmart", "smartInfo"].forEach(id => document.getElementById(id).innerText = "");
        return;
    } else {
        cases.forEach(c => c.disabled = false);
    }
    let L = parseFloat(document.getElementById("longueur").value) || 0, at1 = parseFloat(at1Val) || 0, at2 = parseFloat(document.getElementById("at2").value) || at1, d = parseFloat(document.getElementById("distance").value) || 0, tMax = 37.5;
    let tMoyenne = 2.5 + (tMax - 2.5) / 2, temp = 2.5 + ((at1 + at2) / 2) / ((L / 2) * 0.0017);
    document.getElementById("tempIcon").innerText = (temp >= tMoyenne) ? "🔥" : "❄️";
    let estAmont = parseFloat(document.getElementById("supportList").value) < pkAxeCentral, dil = d * 0.0017 * (temp - tMoyenne), ecartC = (at2 - at1) / 2, base = 9;
    document.getElementById("tempVal").innerText = temp.toFixed(1) + "°";
    document.getElementById("smartInfo").innerText = estAmont ? "Support AMONT" : "Support AVAL";
    document.getElementById("cAmontSmart").innerHTML = estAmont ? "C: " + Math.abs(ecartC).toFixed(1) : "";
    document.getElementById("cAvalSmart").innerHTML = !estAmont ? "C: " + Math.abs(ecartC).toFixed(1) : "";
    document.getElementById("sCx").innerText = (37.5 - dil + (estAmont ? ecartC : -ecartC)).toFixed(1);
    document.getElementById("sBras").innerText = (base + dil - (estAmont ? ecartC : -ecartC)).toFixed(1);
    document.getElementById("sPendule").innerText = ((112.5 + dil - (estAmont ? ecartC : -ecartC)) / 100).toFixed(3);
    document.getElementById("sIs").innerText = (35 + dil - (estAmont ? (at1 - at2) / 2 : -(at1 - at2) / 2)).toFixed(1);
}
