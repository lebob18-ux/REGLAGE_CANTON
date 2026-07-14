// Gestion du changement de support sélectionné
function changerDeSupport() {
    let select = document.getElementById("supportList");
    let nom = select.options[select.selectedIndex].text.split(' ')[0];
    let data = saisiesEnregistrees[nom] || {cx:"", bras:"", pend:"", is:""};
    document.getElementById("sCx").innerText = data.cx;
    document.getElementById("sBras").innerText = data.bras;
    document.getElementById("sPendule").innerText = data.pend;
    document.getElementById("sIs").innerText = data.is;
    let cases = document.querySelectorAll('.caseACocher');
    cases[0].checked = (data.cx !== "");
    cases[1].checked = (data.bras !== "");
    cases[2].checked = (data.pend !== "");
    cases[3].checked = (data.is !== "");
    let pk = parseFloat(select.value);
    document.getElementById("axeFlags").style.display = (Math.abs(pk - pkAxeCentral) < 0.050) ? "flex" : "none";
    document.getElementById("distance").value = (Math.abs(pk - pkAxeCentral) * 1000).toFixed(1);
    let at1Val = document.getElementById("at1").value;
    cases.forEach(c => c.disabled = (at1Val === ""));
    calculer();
}
