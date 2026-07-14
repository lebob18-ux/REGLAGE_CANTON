// Gestion de la persistance (localStorage)
function sauvegarderSaisie() {
    let select = document.getElementById("supportList");
    let nom = select.options[select.selectedIndex].text.split(' ')[0];
    let c = document.getElementsByClassName("caseACocher");
    saisiesEnregistrees[nom] = {
        cx: c[0].checked ? document.getElementById("sCx").innerText : "",
        bras: c[1].checked ? document.getElementById("sBras").innerText : "",
        pend: c[2].checked ? document.getElementById("sPendule").innerText : "",
        is: c[3].checked ? document.getElementById("sIs").innerText : ""
    };
    localStorage.setItem("CANTON_CMM_Data", JSON.stringify(saisiesEnregistrees));
}

function chargerSaisies() {
    let donnees = localStorage.getItem("CANTON_CMM_Data");
    if (donnees) saisiesEnregistrees = JSON.parse(donnees);
}
